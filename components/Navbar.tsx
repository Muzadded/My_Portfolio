'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track page scroll to apply blur effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Projects', href: '/projects' },
    { label: 'Papers', href: '/papers' },
  ]

  // Determine active state for links
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  // Active styles based on design files
  const getLinkClass = (href: string) => {
    const active = isActive(href)
    const baseClass = 'font-label-caps text-label-caps transition-all duration-300 uppercase tracking-wider'
    
    if (active) {
      if (href === '/projects') {
        return `${baseClass} text-primary bg-primary-container/20 rounded-xl px-3 py-1`
      }
      if (href === '/work' || href === '/papers') {
        return `${baseClass} text-primary border-b border-primary pb-0.5`
      }
      return `${baseClass} text-primary`
    }
    
    return `${baseClass} text-on-surface-variant hover:text-primary`
  }

  return (
    <>
      {/* Top Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto rounded-b-xl transition-all duration-300 ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer active:scale-95 group">
          <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-45 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>
            memory
          </span>
          <span className="font-display-xl text-[22px] font-bold text-primary tracking-tighter">
            Muzadded.AI
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 uppercase tracking-wider"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-4">
          {pathname === '/' ? (
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-primary text-on-primary font-label-caps text-label-caps rounded-xl hover:opacity-90 transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
            >
              Say Hello
            </Link>
          ) : (
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded-lg hover:bg-surface-variant transition-all font-label-caps text-label-caps text-on-surface active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">download</span> DOWNLOAD CV
            </a>
          )}
        </div>

        {/* Hamburger (Mobile Toggle) */}
        <div 
          className="md:hidden text-primary cursor-pointer active:scale-95 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-display-xl ${
                isActive(link.href) ? 'text-primary font-bold' : 'text-on-surface-variant'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-2xl font-display-xl ${
              pathname.includes('#contact') ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
          >
            Contact
          </Link>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-label-caps text-label-caps uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-sm">download</span> DOWNLOAD CV
            </a>
          </div>
        </div>
      )}

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/90 backdrop-blur-md border-t border-white/10 shadow-2xl rounded-t-xl">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 active:scale-90 ${
            pathname === '/' && !pathname.includes('#contact')
              ? 'text-primary bg-primary-container/10 rounded-xl'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === '/' && !pathname.includes('#contact') ? "'FILL' 1" : "'FILL' 0" }}>home</span>
          <span className="font-label-caps text-[10px] mt-1">Home</span>
        </Link>
        <Link
          href="/work"
          className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 active:scale-90 ${
            pathname.startsWith('/work')
              ? 'text-primary bg-primary-container/10 rounded-xl'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname.startsWith('/work') ? "'FILL' 1" : "'FILL' 0" }}>terminal</span>
          <span className="font-label-caps text-[10px] mt-1">Work</span>
        </Link>
        <Link
          href="/projects"
          className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 active:scale-90 ${
            pathname.startsWith('/projects')
              ? 'text-primary bg-primary-container/10 rounded-xl'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname.startsWith('/projects') ? "'FILL' 1" : "'FILL' 0" }}>layers</span>
          <span className="font-label-caps text-[10px] mt-1">Projects</span>
        </Link>
        <Link
          href="/papers"
          className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 active:scale-90 ${
            pathname.startsWith('/papers')
              ? 'text-primary bg-primary-container/10 rounded-xl'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname.startsWith('/papers') ? "'FILL' 1" : "'FILL' 0" }}>menu_book</span>
          <span className="font-label-caps text-[10px] mt-1">Papers</span>
        </Link>
        <Link
          href="/#contact"
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-200 active:scale-90 px-3 py-1"
        >
          <span className="material-symbols-outlined">mail</span>
          <span className="font-label-caps text-[10px] mt-1">Contact</span>
        </Link>
      </nav>
    </>
  )
}
