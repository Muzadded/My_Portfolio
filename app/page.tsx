'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Papers from '@/components/Papers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-background pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />


      <Projects />
      <Papers />
      <Contact />
      <Footer />
    </div>
  )
}
