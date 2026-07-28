'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ExperienceItem {
  period: string
  role: string
  company: string
  tech: string[]
  bullets: React.ReactNode[]
  color: string
  glow: string
  borderDefault: string
  borderHover: string
  dotGlow: string
  icon: string
}

export default function Experience() {
  const experienceItems: ExperienceItem[] = [
    {
      period: 'SEPT 2023 — PRESENT',
      role: 'AI & Automation Engineer',
      company: 'Care Guide',
      tech: ['Python', 'FastAPI', 'LangChain', 'RAG'],
      bullets: [
        <span>Designed and deployed <span className="text-on-surface font-medium">HIPAA-compliant</span> Healthcare AI systems processing sensitive patient data with zero leakage.</span>,
        <span>Developed RAG-based conversational AI chatbots, improving enterprise query resolution accuracy by <span className="text-[#f472b6] font-medium">60%</span>.</span>,
        <span>Built autonomous AI agentic workflows for clinical documentation automation, reducing repetitive overhead by 50%.</span>,
      ],
      color: 'text-[#f472b6]', // Pink Theme
      glow: 'from-[#f472b6]/5 to-transparent',
      borderDefault: 'border-[#f472b6]/15',
      borderHover: 'hover:border-[#f472b6]/40',
      dotGlow: 'bg-[#f472b6] shadow-[0_0_12px_4px_rgba(244,114,182,0.4)]',
      icon: 'check_circle',
    },
    {
      period: 'JAN 2023 — SEPT 2023',
      role: 'AI & Automation Engineer',
      company: 'Code24 PTY LTD',
      tech: ['IBM Watson', 'NDIS', 'GCP', 'GoHighLevel'],
      bullets: [
        <span>Engineered automated NDIS platforms to streamline participant onboarding and workforce rostering via custom API integrations.</span>,
        <span>Built multilingual conversational AI chatbots using <span className="text-on-surface font-medium">IBM Watsonx Assistant</span> for global client outreach.</span>,
        <span>Designed voice-first AI assistants integrating n8n, Retail AI, and CRM systems for real-time lead qualification.</span>,
      ],
      color: 'text-[#60a5fa]', // Blue Theme
      glow: 'from-[#60a5fa]/5 to-transparent',
      borderDefault: 'border-[#60a5fa]/15',
      borderHover: 'hover:border-[#60a5fa]/40',
      dotGlow: 'bg-[#60a5fa] shadow-[0_0_12px_4px_rgba(96,165,250,0.4)]',
      icon: 'bolt',
    },
    {
      period: 'OCT 2022 — OCT 2023',
      role: 'Undergraduate Teaching Assistant',
      company: 'United International University',
      tech: ['Python', 'C/C++', 'Data Structures'],
      bullets: [
        <span>Led laboratory sessions for <span className="text-on-surface font-medium">Data Structures &amp; Algorithms</span> and AI-focused coding intensives.</span>,
        <span>Mentored 150+ students in Python-based machine learning fundamentals and complex problem-solving strategies.</span>,
        <span>Guided undergraduate research teams in debugging large-scale neural network architectures and dataset curation.</span>,
      ],
      color: 'text-[#a78bfa]', // Violet Theme
      glow: 'from-[#a78bfa]/5 to-transparent',
      borderDefault: 'border-[#a78bfa]/15',
      borderHover: 'hover:border-[#a78bfa]/40',
      dotGlow: 'bg-[#a78bfa] shadow-[0_0_12px_4px_rgba(167,139,250,0.4)]',
      icon: 'school',
    },
  ]

  return (
    <section className="py-section-gap bg-surface-dim relative border-t border-white/5 overflow-hidden" id="work">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-secondary/3 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left max-w-4xl">
          <span className="font-label-caps text-label-sm text-primary uppercase tracking-[0.25em] mb-4 block">
            MY JOURNEY
          </span>
          <h2 className="font-display-xl text-[36px] md:text-[50px] leading-[1.1] text-on-surface uppercase tracking-tight">
            Work <span className="text-primary font-bold">Experience</span>
          </h2>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant opacity-80 leading-relaxed mt-4">
            Architecting intelligent systems through rigorous engineering. A specialized focus on Large Language Models (LLMs), RAG architectures, and autonomous agentic workflows.
          </p>
        </div>

        {/* Timeline Container - Left-Aligned layout for clean readability */}
        <div className="relative mt-20 pl-8 md:pl-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[6px] md:left-[8px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-secondary/15 to-transparent" />

          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-16 pl-6 md:pl-8 group"
            >
              {/* Glowing Timeline Node Dot (hover transitions glow and scale) */}
              <div className={`absolute left-[-26.5px] md:left-[-35.5px] top-[34px] w-4 h-4 rounded-full border-2 border-[#0b1326] transition-all duration-500 group-hover:scale-125 z-10 ${item.dotGlow}`} />

              {/* Split-Column Experience Card (highly polished visual card style) */}
              <div className={`glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group border ${item.borderDefault} ${item.borderHover} bg-gradient-to-br ${item.glow} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}>
                
                {/* Subtle backing background glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${item.glow} opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`} />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch h-full">
                  
                  {/* Left Column: Role Sidebar */}
                  <div className="w-full md:w-[35%] flex flex-col justify-between shrink-0 md:border-r border-white/5 md:pr-8 text-left">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        {/* Brand Initial Badge */}
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-base select-none bg-[#171f33]/60 border ${item.borderDefault} ${item.color}`}>
                          {item.company.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-headline-lg text-[18px] md:text-[21px] text-on-surface font-extrabold leading-snug">
                            {item.role}
                          </h3>
                          <p className={`font-body-md text-sm ${item.color} font-bold mt-0.5`}>
                            {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Date Range tag */}
                      <div className={`inline-flex px-3.5 py-1.5 rounded-full bg-[#171f33]/40 border ${item.borderDefault} text-on-surface-variant font-label-code text-[10.5px] uppercase tracking-wider mt-2`}>
                        {item.period}
                      </div>
                    </div>

                    {/* Tech Stack tags */}
                    <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-white/5">
                      {item.tech.map((t) => (
                        <span 
                          key={t}
                          className={`font-label-code text-[10px] px-2.5 py-1 bg-[#171f33]/40 border ${item.borderDefault} rounded-lg ${item.color} font-bold`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Achievements Feed */}
                  <div className="w-full md:w-[65%] flex flex-col justify-center text-left">
                    <ul className="space-y-4">
                      {item.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex gap-3.5 group/bullet">
                          <span className={`material-symbols-outlined ${item.color} shrink-0 mt-0.5 group-hover/bullet:scale-115 transition-transform`} style={{ fontSize: '18px' }}>
                            {item.icon}
                          </span>
                          <p className="font-body-md text-sm text-on-surface-variant/90 leading-relaxed group-hover/bullet:text-on-surface transition-colors">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
