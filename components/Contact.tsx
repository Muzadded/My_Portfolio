'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { PERSONAL } from '@/lib/constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="py-section-gap bg-surface-container-lowest relative border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/3 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-sm text-primary uppercase tracking-[0.25em] mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="font-display-xl text-[36px] md:text-[50px] leading-[1.1] text-on-surface uppercase tracking-tight">
            Contact <span className="text-primary font-bold">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Visual Contact Card (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-b from-[#171f33]/40 to-[#0b1326]/60 flex flex-col justify-between group shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 min-h-[480px]"
          >
            {/* Header Image Cover */}
            <div className="relative aspect-[16/10] overflow-hidden w-full border-b border-white/5">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace and setup"
                className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/90 to-transparent" />
              
              {/* Floating Status Tag */}
              <span className="absolute top-4 left-4 bg-primary/10 border border-primary/20 text-[#b4c5ff] px-4 py-1.5 rounded-full font-label-code text-[10px] font-bold uppercase tracking-wider">
                Available for Roles
              </span>
            </div>

            {/* Info Cards Area */}
            <div className="p-8 space-y-6 flex-grow flex flex-col justify-center text-left">
              
              {/* Location Card */}
              <div className="flex items-center gap-4 group/item">
                <div className="w-11 h-11 rounded-xl bg-[#60a5fa]/10 border border-[#60a5fa]/20 flex items-center justify-center text-[#60a5fa] group-hover/item:scale-105 transition-transform shrink-0">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div>
                  <span className="font-label-caps text-[9px] text-on-surface-variant opacity-60 uppercase tracking-widest block font-bold">
                    LOCATION
                  </span>
                  <span className="text-on-surface text-sm font-semibold mt-0.5 block">{PERSONAL.location}</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-4 group/item">
                <div className="w-11 h-11 rounded-xl bg-[#f472b6]/10 border border-[#f472b6]/20 flex items-center justify-center text-[#f472b6] group-hover/item:scale-105 transition-transform shrink-0">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div>
                  <span className="font-label-caps text-[9px] text-on-surface-variant opacity-60 uppercase tracking-widest block font-bold">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="text-primary hover:underline text-sm font-bold mt-0.5 block break-all"
                  >
                    {PERSONAL.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 group/item">
                <div className="w-11 h-11 rounded-xl bg-[#34d399]/10 border border-[#34d399]/20 flex items-center justify-center text-[#34d399] group-hover/item:scale-105 transition-transform shrink-0">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <div>
                  <span className="font-label-caps text-[9px] text-on-surface-variant opacity-60 uppercase tracking-widest block font-bold">
                    PHONE
                  </span>
                  <a href={`tel:${PERSONAL.phone}`} className="text-on-surface text-sm font-semibold hover:text-primary transition-colors mt-0.5 block">
                    {PERSONAL.phone}
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form (Right Column) */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col gap-6 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block font-bold">
                  Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#171f33]/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/35 focus:outline-none rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline-variant/40 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block font-bold">
                  Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#171f33]/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/35 focus:outline-none rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline-variant/40 outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block font-bold">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder="Let's collaborate!"
                className="w-full bg-[#171f33]/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/35 focus:outline-none rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline-variant/40 outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block font-bold">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-[#171f33]/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/35 focus:outline-none rounded-xl px-4 py-3 text-sm text-on-surface placeholder-outline-variant/40 outline-none transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-primary hover:opacity-95 disabled:opacity-60 text-on-primary font-label-caps text-label-caps py-4 rounded-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest font-bold"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">send</span>
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 bg-tertiary-container/10 border border-tertiary/20 text-tertiary rounded-xl px-4 py-3 text-sm font-semibold">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 bg-error-container/10 border border-error/20 text-error rounded-xl px-4 py-3 text-sm font-semibold">
                <span className="material-symbols-outlined text-base">error</span>
                Error sending message. Please try again.
              </div>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  )
}
