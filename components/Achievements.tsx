'use client'
import { motion } from 'framer-motion'
import { Trophy, Zap, Code2 } from 'lucide-react'
import { ACHIEVEMENTS } from '@/lib/constants'

const icons: Record<string, React.ElementType> = {
  trophy:   Trophy,
  zap:      Zap,
  'code-2': Code2,
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
  show:   { transition: { staggerChildren: 0.22, delayChildren: 0.15 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 36, rotateX: 7, scale: 0.94, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center mb-14"
        >
          <motion.span variants={tagAnim} className="section-tag">Recognition</motion.span>
          <motion.h2 variants={titleAnim} className="font-syne font-bold text-4xl md:text-5xl mt-2 text-gray-900">
            Achievements &amp; <span className="text-brand-red">Certifications</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {ACHIEVEMENTS.map((a) => {
            const Icon = icons[a.icon] ?? Trophy
            return (
              <motion.div
                key={a.title}
                variants={cardAnim}
                style={{ transformPerspective: 1200 }}
                className="bg-[#f5efe8] border border-[#e8ddd4] rounded-2xl p-6 text-center relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-red/15 hover:border-brand-red/30 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${a.color}`} />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="font-syne font-bold text-base text-gray-900 mb-1 leading-snug">
                  {a.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium">{a.org}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
