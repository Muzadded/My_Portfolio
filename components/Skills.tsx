'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const programmingSkills = ['Python', 'SQL', 'JavaScript', 'C++', 'PHP']
  const aiSkills = [
    'LLM fine-tuning',
    'RAG Systems',
    'LangChain/LlamaIndex',
    'Computer Vision',
    'n8n Automation',
    'Docker & GCP',
  ]

  return (
    <section className="py-section-gap relative bg-background" id="skills">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <span className="font-label-caps text-label-sm text-primary uppercase tracking-[0.2em] mb-4 block">
          WHAT I KNOW
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Technical <span className="text-primary">Skills</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Programming Bento Card */}
        <div className="glass-card p-10 rounded-3xl relative overflow-hidden group border border-white/5">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-primary">code</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-8 text-on-surface">
            Core Programming
          </h3>
          <div className="flex flex-wrap gap-3">
            {programmingSkills.map((skill) => (
              <span
                key={skill}
                className={`bg-surface-variant/50 border border-outline-variant px-4 py-2 rounded-lg font-label-code text-label-code ${
                  skill === 'Python' ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI & ML Bento Card */}
        <div className="glass-card p-10 rounded-3xl md:col-span-2 relative overflow-hidden group border border-white/5">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl text-primary">psychology</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-8 text-on-surface">
            Artificial Intelligence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {aiSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-body-md text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
