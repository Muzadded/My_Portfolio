'use client'

import React, { useEffect } from 'react'

export default function Experience() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal-card-work').forEach((card) => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700')
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const experienceItems = [
    {
      period: 'SEPT 2023 — PRESENT',
      role: 'AI & Automation Engineer',
      company: 'Care Guide',
      tech: ['Python', 'FastAPI', 'LangChain', 'RAG'],
      bullets: [
        <span>Designed and deployed <span className="text-on-surface font-medium">HIPAA-compliant</span> Healthcare AI systems processing sensitive patient data with zero leakage.</span>,
        <span>Developed RAG-based conversational AI chatbots, improving enterprise query resolution accuracy by <span className="text-secondary font-medium">60%</span>.</span>,
        <span>Built autonomous AI agentic workflows for clinical documentation automation, reducing repetitive overhead by 50%.</span>,
      ],
      dotColorClass: 'after:bg-primary',
      icon: 'check_circle',
      iconColorClass: 'text-primary',
      alignLeft: true,
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
      dotColorClass: 'after:bg-secondary',
      icon: 'bolt',
      iconColorClass: 'text-secondary',
      alignLeft: false,
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
      dotColorClass: 'after:bg-tertiary',
      icon: 'school',
      iconColorClass: 'text-tertiary',
      alignLeft: true,
    },
  ]

  return (
    <section className="py-section-gap bg-surface-dim relative border-t border-white/5 overflow-hidden" id="work">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left max-w-4xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-4 block font-bold">
            MY JOURNEY
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">
            Work <span className="text-primary-container">Experience</span>
          </h2>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant opacity-80 leading-relaxed">
            Architecting intelligent systems through rigorous engineering. A specialized focus on Large Language Models (LLMs), RAG architectures, and autonomous agentic workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-20 ml-4 md:ml-0">
          {/* Vertical Center Line */}
          <div className="timeline-line md:left-1/2 md:-translate-x-1/2"></div>

          {experienceItems.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 md:flex md:justify-between md:items-start group ${
                !item.alignLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Info Column */}
              <div className={`md:w-[45%] mb-8 md:mb-0 ${item.alignLeft ? 'md:text-right' : 'md:text-left'}`}>
                <div className="inline-block px-4 py-1 rounded-full bg-primary-container/10 border border-primary/20 mb-4">
                  <span className="font-label-code text-label-code text-primary uppercase tracking-wide">
                    {item.period}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
                  {item.role}
                </h3>
                <p className="font-body-lg text-secondary mb-4 font-semibold">{item.company}</p>
                <div className={`flex flex-wrap gap-2 ${item.alignLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                  {item.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="font-label-code text-label-code px-3 py-1 bg-surface-container-high border border-outline-variant rounded-lg text-on-surface-variant"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Central Timeline Dot */}
              <div className="absolute left-[-13px] md:left-1/2 md:-translate-x-1/2 timeline-dot" />

              {/* Bullet Details Column (rendered inside glass-card) */}
              <div className="md:w-[45%] glass-card p-6 rounded-xl border border-white/5 reveal-card-work">
                <ul className="space-y-4">
                  {item.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-3">
                      <span className={`material-symbols-outlined ${item.iconColorClass} shrink-0`} style={{ fontSize: '18px' }}>
                        {item.icon}
                      </span>
                      <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Project Snapshot Bento */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-card p-10 rounded-xl flex flex-col justify-between min-h-[320px] border border-white/5 reveal-card-work">
              <div>
                <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest font-bold">
                  LATEST MILESTONE
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
                  RAG Optimization
                </h3>
                <p className="font-body-lg text-on-surface-variant max-w-lg opacity-85 leading-relaxed">
                  Achieved a 98% accuracy rate in information retrieval for medical datasets using custom-tuned embedding models and hybrid semantic search.
                </p>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="font-display-xl text-headline-lg text-secondary metric-glow">98%</div>
                  <div className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase font-bold">
                    ACCURACY
                  </div>
                </div>
                <div>
                  <div className="font-display-xl text-headline-lg text-tertiary">0.4s</div>
                  <div className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase font-bold">
                    LATENCY
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card overflow-hidden rounded-xl h-[320px] relative group border border-white/5 reveal-card-work">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACo6yNVhJYRJLXxgfFZ7nga_lFnvwe8v8EcvNhfGg2u6a0IG6AGNk7cpG1fjrCrCi78HbCi7Y3bir-c4WSxB8FomB370cYRWzAJ5dt2jC_5Qf9GLtllDJkhyKG3zLheMhMA774N0rBU-O0dwBPzN8sdhtexu-nRMh2ABVsQq0VXMdZT_gMl8vk99N0OOy2ST9v_JAV5quRlPGgoTNoxg3U72qccZlH59KLF5UtNXvb4RnRy9GFFhUvFlpolF_LCvKFl8nNJ6hR2Pf4"
                alt="System Architecture diagram representation"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-85"></div>
              <div className="absolute bottom-6 left-6 z-10">
                <h4 className="font-headline-md text-headline-md text-white font-bold">
                  System Architecture
                </h4>
                <p className="font-label-caps text-label-caps text-primary mt-1 tracking-widest uppercase">
                  CORE EXPERTISE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
