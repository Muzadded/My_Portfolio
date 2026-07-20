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
    <section id="contact" className="py-section-gap bg-surface-container-lowest relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Contact <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Contact Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-xl border border-white/5">
              <span className="font-label-caps text-[10px] text-on-surface-variant opacity-60 uppercase tracking-widest block mb-1">
                LOCATION
              </span>
              <span className="text-on-surface font-medium">{PERSONAL.location}</span>
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/5">
              <span className="font-label-caps text-[10px] text-on-surface-variant opacity-60 uppercase tracking-widest block mb-1">
                EMAIL
              </span>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="text-primary hover:underline font-medium break-all"
              >
                {PERSONAL.email}
              </a>
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/5">
              <span className="font-label-caps text-[10px] text-on-surface-variant opacity-60 uppercase tracking-widest block mb-1">
                PHONE
              </span>
              <a href={`tel:${PERSONAL.phone}`} className="text-on-surface font-medium hover:text-primary transition-colors">
                {PERSONAL.phone}
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:col-span-7 glass-card p-8 rounded-2xl border border-white/5 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block">
                  Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-surface-container-low border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/35 focus:outline-none rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline-variant/60 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block">
                  Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/35 focus:outline-none rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline-variant/60 outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder="Let's collaborate!"
                className="w-full bg-surface-container-low border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/35 focus:outline-none rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline-variant/60 outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-surface-container-low border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/35 focus:outline-none rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline-variant/60 outline-none transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-primary hover:opacity-90 disabled:opacity-60 text-on-primary font-label-caps text-label-caps py-4 rounded-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
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
              <div className="flex items-center gap-2 bg-tertiary-container/10 border border-tertiary/20 text-tertiary rounded-lg px-4 py-3 text-sm">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 bg-error-container/10 border border-error/20 text-error rounded-lg px-4 py-3 text-sm">
                <span className="material-symbols-outlined text-base">error</span>
                Error sending message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
