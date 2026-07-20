'use client'

import { motion } from 'framer-motion'
import { PERSONAL } from '@/lib/constants'

export default function About() {
  return (
    <section className="py-section-gap bg-surface-dim relative border-t border-white/5" id="about">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Portrait with Bento-ish accents */}
          <div className="w-full lg:w-1/2 relative group flex justify-center">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="relative glass-card rounded-full overflow-hidden aspect-square border-2 border-primary/20 max-w-sm sm:max-w-md w-full">
              <img
                className="w-full h-full object-cover"
                alt="A professional studio portrait of Md Muzadded Chowdhury"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdNkV7AFtf1AejT7LCEZvDuLZZ4zmLtqDUjYOxDOMWZNzDGx7rQwKr49nQbkLOyhNv9nNb24vqWClMfNe3xtx1Y0lwvvAXAHWwc29Xfu3UOBpi6qOLxR5qmw5-Dcjq3ysaBhctMFWgAjgznt-4qgrt1kRrx19IiYW8qJQqBs_3eVm11qweG-dg84H9IJk7KRPvR4t6aJategEoUpKIP6kJa16p0i6BvsXce2iL_GbxpOYu4taVB1SWfxxYTq9qeB31qzX5L0RpunoB"
              />
            </div>
            <div className="absolute bottom-10 right-6 sm:right-12 glass-card p-6 rounded-2xl flex flex-col items-center animate-float">
              <span className="font-display-xl text-headline-lg text-primary">1+</span>
              <span className="font-label-caps text-label-sm text-on-surface-variant uppercase">
                Years Experience
              </span>
            </div>
          </div>

          {/* Bio and Metrics */}
          <div className="w-full lg:w-1/2">
            <span className="font-label-caps text-label-sm text-secondary uppercase mb-4 block tracking-widest">
              GET TO KNOW
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
              AI &amp; Automation Engineer
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 opacity-90 leading-relaxed">
              I am a dedicated AI professional with a focus on scalable automation and generative intelligence. My expertise lies in designing agentic workflows that transform complex data into actionable insights. Having authored multiple research papers in blockchain and federated learning, I bring a rigorous analytical approach to every deployment.
            </p>

            {/* Technical Stats Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <div className="flex flex-col">
                <span className="font-display-xl text-headline-lg text-primary">1+</span>
                <span className="font-label-caps text-label-sm text-on-surface-variant uppercase">
                  Years
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-xl text-headline-lg text-secondary">5+</span>
                <span className="font-label-caps text-label-sm text-on-surface-variant uppercase">
                  Research
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-xl text-headline-lg text-tertiary">10+</span>
                <span className="font-label-caps text-label-sm text-on-surface-variant uppercase">
                  Projects
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-xl text-headline-lg text-primary">70%</span>
                <span className="font-label-caps text-label-sm text-on-surface-variant uppercase">
                  Efficiency
                </span>
              </div>
            </div>

            {/* Basic Info Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12 border-t border-white/10 pt-10">
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant opacity-60 uppercase">
                  NAME
                </span>
                <span className="text-on-surface font-medium">{PERSONAL.name}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant opacity-60 uppercase">
                  EMAIL
                </span>
                <a href={`mailto:${PERSONAL.email}`} className="text-on-surface hover:text-primary transition-colors font-medium">
                  {PERSONAL.email}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant opacity-60 uppercase">
                  LOCATION
                </span>
                <span className="text-on-surface font-medium">{PERSONAL.location}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-on-surface-variant opacity-60 uppercase">
                  FREELANCE
                </span>
                <span className="text-secondary font-medium">Available</span>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto inline-flex bg-secondary-container text-on-secondary-container px-10 py-5 font-label-caps text-label-sm rounded-xl shadow-xl hover:brightness-110 active:scale-95 transition-all items-center justify-center gap-3 uppercase font-bold tracking-wider"
            >
              Download Resume <span className="material-symbols-outlined">download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
