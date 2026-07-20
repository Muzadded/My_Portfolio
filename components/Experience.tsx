'use client'

import React from 'react'

export default function Experience() {
  const experiences = [
    {
      period: 'SEP 2023 - PRESENT',
      role: 'AI & Automation Engineer',
      company: 'Care Guide',
      tags: ['Remote', 'Full-Time'],
      bullets: [
        'Designed HIPAA-compliant Healthcare AI systems for sensitive patient and medical datasets.',
        'Developed RAG-based conversational AI systems & enterprise chatbots improving info access by 60%+',
      ],
      icon: 'work',
      colorClass: 'text-primary',
      bgClass: 'bg-primary-container/20',
      lineColor: 'from-primary/30',
    },
    {
      period: 'JAN 2023 - SEP 2023',
      role: 'AI & Automation Engineer',
      company: 'Code24 PTY LTD',
      tags: ['Contract'],
      bullets: [
        'Developed AI automation systems for NDIS platforms to streamline HR onboarding.',
        'Built multi-channel chatbots integrated with Facebook, WhatsApp, and Telegram.',
      ],
      icon: 'smart_toy',
      colorClass: 'text-secondary',
      bgClass: 'bg-secondary-container/20',
      lineColor: 'from-secondary/30',
    },
  ]

  return (
    <section className="py-section-gap bg-surface-container-lowest relative border-t border-white/5" id="experience">
      <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <span className="font-label-caps text-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">
          MY JOURNEY
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Work <span className="text-secondary">Experience</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 relative group">
            {/* Left side static marker icons (Desktop only) */}
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${exp.bgClass} flex items-center justify-center ${exp.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined">{exp.icon}</span>
              </div>
              {index < experiences.length - 1 && (
                <div className={`w-[2px] flex-grow bg-gradient-to-b ${exp.lineColor} to-transparent`}></div>
              )}
            </div>

            {/* Timeline Card */}
            <div className="flex-grow glass-card p-10 rounded-3xl border border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <span className={`font-label-caps text-[11px] ${exp.colorClass} mb-2 block uppercase tracking-widest`}>
                    {exp.period}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-secondary font-medium">{exp.company}</p>
                </div>
                <div className="flex gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface-variant text-[10px] font-label-caps text-on-surface-variant uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-4 text-on-surface-variant opacity-80 list-none">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3">
                    <span className={`material-symbols-outlined ${exp.colorClass} mt-1`} style={{ fontSize: '16px' }}>
                      arrow_forward
                    </span>
                    <span className="font-body-md text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
