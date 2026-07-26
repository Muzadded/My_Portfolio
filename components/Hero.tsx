'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PERSONAL } from '@/lib/constants'

export default function Hero() {
  return (
    <main id="home" className="relative pt-32 pb-24 overflow-hidden tech-grid min-h-screen flex items-center bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-label-caps text-label-sm text-secondary-fixed-dim mb-4 block tracking-[0.3em] uppercase"
          >
            HELLO, I&apos;M
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display-xl text-[54px] sm:text-[72px] md:text-[100px] leading-[0.9] text-on-surface mb-6 uppercase tracking-tighter"
          >
            MD <br />
            <span className="text-primary">MUZADDED</span> <br />
            CHOWDHURY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8 origin-left"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <p className="font-headline-md text-headline-md text-on-surface-variant">
              {PERSONAL.title}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 opacity-80 leading-relaxed"
          >
            {PERSONAL.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6"
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
