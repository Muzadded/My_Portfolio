'use client'

import { motion } from 'framer-motion'

interface SkillCategory {
  title: string
  icon: string
  skills: string[]
  colorClass: string 
  glowClass: string  
  borderDefault: string
  borderHover: string 
  bgGradient: string
  tagBorder: string
  tagHoverText: string
  span: string 
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Generative AI & LLMs',
    icon: 'psychology',
    colorClass: 'text-[#f472b6]', // Pink accent
    glowClass: 'from-[#f472b6]/15 to-transparent',
    borderDefault: 'border-[#f472b6]/20',
    borderHover: 'hover:border-[#f472b6]/45',
    bgGradient: 'from-[#f472b6]/5 to-[#171f33]/30',
    tagBorder: 'border-[#f472b6]/15 hover:border-[#f472b6]/40',
    tagHoverText: 'hover:text-[#f472b6] hover:bg-[#f472b6]/5',
    span: 'md:col-span-2',
    skills: [
      'Prompt Engineering', 'RAG Systems', 'LLM Fine-Tuning', 'LangChain', 
      'Hugging Face', 'Semantic Search', 'Embedding Models', 'Agentic Workflows', 
      'Function Calling', 'Context Management', 'API Integration'
    ]
  },
  {
    title: 'AI System Design',
    icon: 'schema',
    colorClass: 'text-[#60a5fa]', // Blue accent
    glowClass: 'from-[#60a5fa]/15 to-transparent',
    borderDefault: 'border-[#60a5fa]/20',
    borderHover: 'hover:border-[#60a5fa]/45',
    bgGradient: 'from-[#60a5fa]/5 to-[#171f33]/30',
    tagBorder: 'border-[#60a5fa]/15 hover:border-[#60a5fa]/40',
    tagHoverText: 'hover:text-[#60a5fa] hover:bg-[#60a5fa]/5',
    span: 'md:col-span-1',
    skills: [
      'Multi-Agent Systems', 'AI Automation Pipelines', 'Workflow Orchestration', 
      'Conversational AI Systems', 'Document Intelligence Pipelines', 'LLM Application Development'
    ]
  },
  {
    title: 'AI Application & Fullstack',
    icon: 'code',
    colorClass: 'text-[#34d399]', // Emerald accent
    glowClass: 'from-[#34d399]/15 to-transparent',
    borderDefault: 'border-[#34d399]/20',
    borderHover: 'hover:border-[#34d399]/45',
    bgGradient: 'from-[#34d399]/5 to-[#171f33]/30',
    tagBorder: 'border-[#34d399]/15 hover:border-[#34d399]/40',
    tagHoverText: 'hover:text-[#34d399] hover:bg-[#34d399]/5',
    span: 'md:col-span-1',
    skills: [
      'FastAPI', 'React.js', 'Node.js', 'Express.js', 'Flask', 'REST API Development', 'Async Processing', 'Microservices Architecture'
    ]
  },
  {
    title: 'MLOps & Cloud Deployment',
    icon: 'cloud_done',
    colorClass: 'text-[#a78bfa]', // Violet accent
    glowClass: 'from-[#a78bfa]/15 to-transparent',
    borderDefault: 'border-[#a78bfa]/20',
    borderHover: 'hover:border-[#a78bfa]/45',
    bgGradient: 'from-[#a78bfa]/5 to-[#171f33]/30',
    tagBorder: 'border-[#a78bfa]/15 hover:border-[#a78bfa]/40',
    tagHoverText: 'hover:text-[#a78bfa] hover:bg-[#a78bfa]/5',
    span: 'md:col-span-2',
    skills: [
      'MLflow', 'Docker', 'Google Cloud Platform (GCP)', 'Git', 'CI/CD Pipelines', 'Model Versioning', 'Inference Optimization'
    ]
  },
  {
    title: 'Vector & Core Databases',
    icon: 'database',
    colorClass: 'text-[#fbbf24]', // Amber accent
    glowClass: 'from-[#fbbf24]/15 to-transparent',
    borderDefault: 'border-[#fbbf24]/20',
    borderHover: 'hover:border-[#fbbf24]/45',
    bgGradient: 'from-[#fbbf24]/5 to-[#171f33]/30',
    tagBorder: 'border-[#fbbf24]/15 hover:border-[#fbbf24]/40',
    tagHoverText: 'hover:text-[#fbbf24] hover:bg-[#fbbf24]/5',
    span: 'md:col-span-1',
    skills: [
      'PostgreSQL', 'ChromaDB', 'Pinecone', 'FAISS', 'Firestore', 'MySQL', 'NoSQL Databases', 'Index Optimization', 'Similarity Search'
    ]
  },
  {
    title: 'Core AI/ML & Data Eng.',
    icon: 'analytics',
    colorClass: 'text-[#f87171]', // Red accent
    glowClass: 'from-[#f87171]/15 to-transparent',
    borderDefault: 'border-[#f87171]/20',
    borderHover: 'hover:border-[#f87171]/45',
    bgGradient: 'from-[#f87171]/5 to-[#171f33]/30',
    tagBorder: 'border-[#f87171]/15 hover:border-[#f87171]/40',
    tagHoverText: 'hover:text-[#f87171] hover:bg-[#f87171]/5',
    span: 'md:col-span-1',
    skills: [
      'PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Model Training', 'Feature Engineering', 'Data Preprocessing', 'Matplotlib', 'Seaborn'
    ]
  },
  {
    title: 'Core Programming',
    icon: 'terminal',
    colorClass: 'text-[#b4c5ff]', // Primary light purple accent
    glowClass: 'from-[#b4c5ff]/15 to-transparent',
    borderDefault: 'border-[#b4c5ff]/20',
    borderHover: 'hover:border-[#b4c5ff]/45',
    bgGradient: 'from-[#b4c5ff]/5 to-[#171f33]/30',
    tagBorder: 'border-[#b4c5ff]/15 hover:border-[#b4c5ff]/40',
    tagHoverText: 'hover:text-[#b4c5ff] hover:bg-[#b4c5ff]/5',
    span: 'md:col-span-1',
    skills: [
      'Python', 'SQL', 'C/C++', 'JavaScript', 'PHP'
    ]
  }
]

export default function Skills() {
  return (
    <section className="py-section-gap relative bg-background border-t border-white/5 overflow-hidden" id="skills">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <span className="font-label-caps text-label-sm text-primary uppercase tracking-[0.25em] mb-4 block">
          WHAT I BRING TO THE TABLE
        </span>
        <h2 className="font-display-xl text-[36px] md:text-[50px] leading-[1.1] text-on-surface uppercase tracking-tight">
          Technical <span className="text-primary font-bold">Skills</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {SKILLS_DATA.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`glass-card p-8 rounded-3xl relative overflow-hidden group border ${cat.borderDefault} ${cat.borderHover} bg-gradient-to-br ${cat.bgGradient} transition-all duration-300 ${cat.span} hover:-translate-y-1 hover:shadow-xl`}
          >
            {/* Hover color glow in card background - now partly visible by default */}
            <div className={`absolute -inset-4 bg-gradient-to-br ${cat.glowClass} opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`} />

            {/* Subtle icon backing accent */}
            <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <span className={`material-symbols-outlined text-9xl ${cat.colorClass}`}>
                {cat.icon}
              </span>
            </div>

            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6 relative z-10">
              <span className={`material-symbols-outlined text-3xl ${cat.colorClass}`}>
                {cat.icon}
              </span>
              <h3 className="font-headline-md text-[18px] md:text-[20px] text-on-surface font-bold uppercase tracking-wide">
                {cat.title}
              </h3>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`bg-[#171f33]/40 border ${cat.tagBorder} px-3 py-1.5 rounded-xl font-label-code text-[11px] md:text-[11.5px] text-on-surface-variant/90 ${cat.tagHoverText} hover:scale-105 hover:bg-surface-container-highest/60 transition-all duration-200 cursor-default select-none`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
