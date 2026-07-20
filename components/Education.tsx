'use client'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Star, CheckCircle2 } from 'lucide-react'
import { EDUCATION } from '@/lib/constants'

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

const cardAnim = {
  hidden: { opacity: 0, y: 36, rotateX: 7, scale: 0.94, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-60px' }}
          className="text-center mb-14"
        >
          <motion.span variants={tagAnim} className="section-tag">Academic Background</motion.span>
          <motion.h2 variants={titleAnim} className="font-syne font-bold text-4xl md:text-5xl mt-2 text-gray-900">
            My <span className="text-brand-red">Education</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={cardAnim}
          style={{ transformPerspective: 1200 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: '-60px' }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#f5efe8] border border-[#e8ddd4] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red-l" />

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-brand-red/8 flex items-center justify-center">
                  <GraduationCap size={32} className="text-brand-red" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-syne font-bold text-2xl text-gray-900 leading-tight">
                      {EDUCATION.degree}
                    </h3>
                    <p className="text-brand-red font-semibold mt-1">{EDUCATION.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm text-gray-700 bg-white/70 border border-[#e0d5cb] px-3 py-1.5 rounded-lg block">
                      {EDUCATION.period}
                    </span>
                    <div className="flex items-center justify-end gap-1.5 mt-2">
                      <Star size={13} className="text-amber-500 fill-amber-500" />
                      <span className="font-syne font-bold text-gray-900 text-sm">
                        GPA: {EDUCATION.gpa}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-5">
                  <MapPin size={12} className="text-brand-red" />
                  <span>{EDUCATION.location}</span>
                </div>

                <ul className="space-y-2">
                  {EDUCATION.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-base text-gray-700">
                      <CheckCircle2 size={14} className="text-brand-red flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
