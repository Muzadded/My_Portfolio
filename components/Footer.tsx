'use client'

import React from 'react'
import { PERSONAL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-dim border-t border-white/5 mb-16 md:mb-0">
      <div className="flex flex-col gap-1 text-center md:text-left">
        <div className="font-label-caps text-label-sm text-primary uppercase font-bold">
          Muzadded.AI
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
          © {new Date().getFullYear()} {PERSONAL.name}. Engineered for Excellence.
        </p>
      </div>
      <div className="flex gap-8">
        <a
          href={PERSONAL.linkedin || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors uppercase font-bold tracking-widest"
        >
          LinkedIn
        </a>
        <a
          href={PERSONAL.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors uppercase font-bold tracking-widest"
        >
          GitHub
        </a>
        <a
          href="#"
          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors uppercase font-bold tracking-widest"
        >
          ResearchGate
        </a>
      </div>
    </footer>
  )
}
