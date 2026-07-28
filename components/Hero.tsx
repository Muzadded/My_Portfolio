'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { PERSONAL } from '@/lib/constants'
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaBrain, 
  FaRobot 
} from 'react-icons/fa'
import { 
  SiFastapi, 
  SiGooglecloud, 
  SiPostgresql, 
  SiPytorch, 
  SiNextdotjs, 
  SiTypescript 
} from 'react-icons/si'

// 12 Technical skills for the orbit representing AI Automation & Fullstack Roles
const SKILL_ITEMS = [
  { name: 'Python', icon: FaPython, color: 'text-blue-400', glow: 'bg-blue-400/20' },
  { name: 'React.js', icon: FaReact, color: 'text-sky-400', glow: 'bg-sky-400/20' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', glow: 'bg-green-500/20' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-emerald-400', glow: 'bg-emerald-400/20' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-100', glow: 'bg-slate-100/20' },
  { name: 'Docker', icon: FaDocker, color: 'text-sky-500', glow: 'bg-sky-500/20' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-400', glow: 'bg-indigo-400/20' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-amber-500', glow: 'bg-amber-500/20' },
  { name: 'RAG Systems', icon: FaBrain, color: 'text-pink-400', glow: 'bg-pink-400/20' },
  { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500', glow: 'bg-red-500/20' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', glow: 'bg-blue-500/20' },
  { name: 'Automation', icon: FaRobot, color: 'text-yellow-400', glow: 'bg-yellow-400/20' },
]

export default function Hero() {
  const [radiusX, setRadiusX] = useState(380)
  const [radiusY, setRadiusY] = useState(270)
  const [angleOffset, setAngleOffset] = useState(0)
  const [showTitle, setShowTitle] = useState(false)
  const { scrollY } = useScroll()

  // Track viewport height/width to calculate responsive orbit ellipse dimensions (stretches wide to prevent text overlaps)
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 640) {
        setRadiusX(w * 0.40) // Mobile: ellipse width fits screen bounds
        setRadiusY(w * 0.32) // Mobile: ellipse height is slightly squashed
      } else if (w < 768) {
        setRadiusX(185 * 1.25) // Small tablet
        setRadiusY(185 * 0.95)
      } else if (w < 1024) {
        setRadiusX(235 * 1.3) // Medium tablet
        setRadiusY(235 * 0.95)
      } else {
        setRadiusX(290 * 1.35) // Desktop: large ellipse
        setRadiusY(290 * 0.95)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation frame tick for continuous rotation along the elliptical path (stable ellipse, rotating items)
  useEffect(() => {
    let animId: number
    const tick = () => {
      setAngleOffset((prev) => (prev + 0.0018) % (2 * Math.PI)) // smooth rotation speed
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  // Capture wheel and touch gestures at the top of the page to swap text before page scroll
  useEffect(() => {
    let touchStartY = 0

    const handleWheel = (e: WheelEvent) => {
      const scrollYPos = window.scrollY
      if (scrollYPos === 0 && e.deltaY > 0 && !showTitle) {
        e.preventDefault()
        setShowTitle(true)
      } else if (scrollYPos === 0 && e.deltaY < 0 && showTitle) {
        e.preventDefault()
        setShowTitle(false)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY
      const deltaY = touchStartY - touchEndY
      const scrollYPos = window.scrollY

      if (scrollYPos === 0 && deltaY > 0 && !showTitle) {
        if (e.cancelable) e.preventDefault()
        setShowTitle(true)
      } else if (scrollYPos === 0 && deltaY < 0 && showTitle) {
        if (e.cancelable) e.preventDefault()
        setShowTitle(false)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [showTitle])

  // Sync scroll positioning to update state when navigating via anchor links
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest === 0) {
      setShowTitle(false)
    } else if (latest > 40) {
      setShowTitle(true)
    }
  })

  return (
    <main id="home" className="relative pt-36 pb-24 overflow-hidden tech-grid min-h-screen flex items-center bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* Orbital Skills Circle Area - Increased Height */}
        <div className="relative flex items-center justify-center w-full min-h-[380px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[680px]">
          
          <div className="relative flex items-center justify-center">
            
            {/* Pulsing Backing Accents */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl pointer-events-none w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
            
            {/* Stable Ellipse Orbit Container */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: radiusX * 2,
                height: radiusY * 2,
              }}
            >
              {/* Stationary Gradient Dashed Ellipse */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                  <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                    <stop offset="20%" stopColor="#f472b6" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="#34d399" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.4" />
                    <stop offset="80%" stopColor="#fbbf24" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#facc15" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <ellipse 
                  cx="50%" 
                  cy="50%" 
                  rx={radiusX} 
                  ry={radiusY} 
                  fill="none" 
                  stroke="url(#orbit-grad)" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6"
                />
              </svg>

              {SKILL_ITEMS.map((item, i) => {
                // Calculate position dynamically along the elliptical path
                const baseAngle = (i * 2 * Math.PI) / SKILL_ITEMS.length
                const currentAngle = baseAngle + angleOffset
                const x = radiusX * Math.cos(currentAngle)
                const y = radiusY * Math.sin(currentAngle)

                return (
                  <div
                    key={item.name}
                    className="absolute left-1/2 top-1/2 flex flex-col items-center gap-1.5 group/item cursor-pointer"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {/* Badge container with glassmorphism and active color tints (enlarged for better visibility) */}
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center relative glass-card group-hover/item:border-primary/40 group-hover/item:scale-110 transition-all duration-300">
                      {/* Active colored glow in the background */}
                      <div className={`absolute -inset-2 rounded-full blur-md opacity-25 group-hover/item:opacity-50 transition-all duration-300 ${item.glow}`} />
                      <item.icon className={`w-6 h-6 md:w-9 md:h-9 ${item.color} group-hover/item:scale-105 transition-transform`} />
                    </div>
                    
                    {/* Label below the badge */}
                    <span className="font-label-caps text-[8.5px] md:text-[10px] text-on-surface-variant opacity-80 group-hover/item:opacity-100 transition-opacity font-bold uppercase tracking-wider whitespace-nowrap bg-background/85 px-2 py-0.5 rounded border border-white/5 shadow-md">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Central Static Text Panel - Increased Font Sizing */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 w-full max-w-[240px] sm:max-w-[340px] md:max-w-[460px] lg:max-w-[560px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                {!showTitle ? (
                  <motion.div
                    key="name-layout"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <span className="font-label-caps text-[9px] sm:text-label-sm text-secondary-fixed-dim mb-1 tracking-[0.2em] uppercase font-bold">
                      HELLO, I&apos;M
                    </span>
                    <h1 className="font-display-xl text-[24px] sm:text-[36px] md:text-[52px] lg:text-[62px] xl:text-[68px] leading-[0.9] text-on-surface uppercase tracking-tighter text-center font-bold">
                      MD <br />
                      <span className="text-primary">MUZADDED</span> <br />
                      CHOWDHURY
                    </h1>
                  </motion.div>
                ) : (
                  <motion.div
                    key="title-layout"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <span className="font-label-caps text-[9px] sm:text-label-sm text-secondary mb-1 tracking-[0.2em] uppercase font-bold">
                      AI &amp; FULLSTACK
                    </span>
                    <h2 className="font-headline-lg text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[1] text-secondary text-center uppercase tracking-wide font-extrabold max-w-[280px] sm:max-w-[360px] md:max-w-[460px]">
                      {PERSONAL.title}
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

        {/* Action Buttons - Positioned directly below with padding */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <Link
            href="#contact"
            className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-sm rounded-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 uppercase font-bold tracking-wider"
          >
            Say Hello <span className="material-symbols-outlined text-base">send</span>
          </Link>
          <Link
            href="/work"
            className="border border-outline-variant text-on-surface px-8 py-4 font-label-caps text-label-sm rounded-xl hover:bg-white/5 active:scale-95 transition-all uppercase font-bold tracking-wider"
          >
            View Work
          </Link>
        </motion.div>

      </div>

      {/* Social Anchors (Desktop) */}
      <div className="hidden lg:flex flex-col fixed right-10 top-1/2 -translate-y-1/2 gap-8 z-50">
        <a
          href={`mailto:${PERSONAL.email}`}
          className="text-on-surface-variant hover:text-primary transition-all active:scale-90"
        >
          <span className="material-symbols-outlined text-2xl">mail</span>
        </a>
        <a
          href={PERSONAL.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-primary transition-all active:scale-90"
        >
          <span className="material-symbols-outlined text-2xl">terminal</span>
        </a>
        <a
          href={PERSONAL.linkedin || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-primary transition-all active:scale-90"
        >
          <span className="material-symbols-outlined text-2xl">layers</span>
        </a>
      </div>
    </main>
  )
}
