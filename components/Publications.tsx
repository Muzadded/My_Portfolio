'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { PUBLICATIONS } from '@/lib/constants'

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

const listContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
}

const rowAnim = {
  hidden: { opacity: 0, x: -36, rotateY: 5, scale: 0.96, filter: 'blur(4px)' },
  show:   { opacity: 1, x: 0, rotateY: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center mb-14"
        >
          <motion.span variants={tagAnim} className="section-tag">Research Contributions</motion.span>
          <motion.h2 variants={titleAnim} className="font-syne font-bold text-4xl md:text-5xl mt-2 text-gray-900">
            Research <span className="text-brand-red">Publications</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-40px' }}
          className="flex flex-col gap-4"
        >
          {PUBLICATIONS.map((p) => (
            <motion.div
              key={p.number}
              variants={rowAnim}
              style={{ transformPerspective: 1200 }}
              className="shimmer-hover bg-[#f5efe8] border border-[#e8ddd4] rounded-2xl p-6 flex gap-5 items-start group hover:border-brand-red/40 hover:shadow-md hover:shadow-brand-red/10 transition-all duration-300"
            >
              <span className="font-syne font-black text-5xl text-brand-red/25 leading-none select-none flex-shrink-0 w-12">
                {p.number}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      p.type === 'journal'
                        ? 'bg-brand-red/6 text-brand-red border-brand-red/15'
                        : 'bg-red-50 text-red-500 border-red-100'
                    }`}
                  >
                    {p.venue}
                  </span>
                  {p.metric && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
                      <Award size={10} />
                      {p.metric}
                    </span>
                  )}
                </div>

                <h3 className="font-syne font-bold text-lg text-gray-900 leading-snug mb-2 group-hover:text-brand-red transition-colors duration-200">
                  {p.title}
                </h3>

                <p className="text-gray-700 text-base leading-relaxed mb-3">{p.summary}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-red hover:text-brand-red-d text-sm font-semibold transition-all duration-200 hover:gap-2.5"
                >
                  <ExternalLink size={12} /> Read Paper
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
