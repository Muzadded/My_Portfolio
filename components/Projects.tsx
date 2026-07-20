'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Languages, Database, BarChart3, CheckCircle2 } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  'building-2': Building2,
  languages:    Languages,
  database:     Database,
  'chart-bar':  BarChart3,
}

const headingContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.22 } },
}

const tagAnim = {
  hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  show:   { opacity: 1, clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
}

const titleAnim = {
  hidden: { opacity: 0, y: 28, filter: 'blur(5px)', scale: 0.94 },
  show:   { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const gridContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.17, delayChildren: 0.15 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 36, rotateX: 7, scale: 0.94, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt]       = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 50, y: 28 })

  const Icon = iconMap[project.icon] ?? Database

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    setTilt({ x: (relY - rect.height / 2) / 14, y: (rect.width / 2 - relX) / 14 })
    setGlowPos({ x: (relX / rect.width) * 100, y: (relY / rect.height) * 100 })
  }

  const onMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div variants={cardAnim} className="perspective-card">
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="bg-[#f5efe8] border border-[#e8ddd4] rounded-2xl p-6 relative overflow-hidden group h-full hover:border-brand-red/40 hover:shadow-lg hover:shadow-brand-red/10 transition-all duration-300"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red-l" />

        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(180px circle at ${glowPos.x}% ${glowPos.y}%, rgba(224,92,75,0.05), transparent)`,
          }}
        />

        <div className="flex items-start gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-brand-red/8 flex items-center justify-center flex-shrink-0">
            <Icon size={20} className="text-brand-red" />
          </div>
          <span
            className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-center ${
              project.type === 'Group Project'
                ? 'bg-sky-50 text-sky-500 border border-sky-100'
                : 'bg-brand-red/8 text-brand-red border border-brand-red/15'
            }`}
          >
            {project.type}
          </span>
        </div>

        <h3 className="font-syne font-bold text-lg text-gray-900 mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="bg-white/70 text-gray-700 border border-[#e0d5cb] text-xs font-medium px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 size={12} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center mb-16"
        >
          <motion.span variants={tagAnim} className="section-tag">What I&apos;ve Built</motion.span>
          <motion.h2 variants={titleAnim} className="font-syne font-bold text-4xl md:text-5xl mt-2 text-gray-900">
            Featured <span className="text-brand-red">Projects</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
