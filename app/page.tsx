'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />

      {/* Metrics Showcase */}
      <section className="py-section-gap relative bg-surface overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 glass-card p-12 rounded-3xl border-l-4 border-l-primary border border-white/5 relative overflow-hidden">
              <span
                className="material-symbols-outlined text-6xl text-primary mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <h4 className="font-display-xl text-headline-lg text-on-surface mb-4">98.2%</h4>
              <p className="font-label-caps text-label-sm text-on-surface-variant uppercase tracking-widest">
                Lung Cancer Detection Accuracy
              </p>
            </div>
            <div className="md:col-span-8 glass-card p-12 rounded-3xl flex flex-col justify-center bg-gradient-to-br from-surface-variant/40 to-transparent border border-white/5">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">Pioneering Efficiency</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80 max-w-2xl leading-relaxed">
                By integrating custom LLM architectures with automated data pipelines, I&apos;ve consistently achieved record-breaking performance metrics for clinical and industrial clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
