'use client'

import React, { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.interactive-card-element')
      cards.forEach((card) => {
        const htmlCard = card as HTMLElement
        const rect = htmlCard.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        htmlCard.style.setProperty('--mouse-x', `${x}px`)
        htmlCard.style.setProperty('--mouse-y', `${y}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="py-section-gap relative bg-background border-t border-white/5" id="projects">
      {/* Atmospheric Background Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center md:text-left">
          <p className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase font-bold">
            Showcase
          </p>
          <h2 className="font-headline-xl text-headline-xl md:text-[64px] text-on-surface">
            Selected <span className="text-primary italic">Projects</span>
          </h2>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant opacity-85 leading-relaxed">
            Engineering intelligent systems that bridge the gap between raw data and actionable insight through LLMs, RAG, and Agentic workflows.
          </p>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
          {/* Card 1: SQL Assistant (Large) */}
          <div className="md:col-span-7 glass-card rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative interactive-card-element border border-white/5 min-h-[380px]">
            <div className="card-highlight"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-2">
                  <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-sm font-label-code text-label-code">
                    LLM AGENT
                  </span>
                  <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-sm font-label-code text-label-code">
                    v2.4
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary metric-glow text-2xl">
                  database
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3 font-semibold">
                AI-Powered SQL Assistant
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-85 leading-relaxed">
                A natural language to SQL assistant using MCP architecture for querying relational databases with Llama-3.1-8b, featuring syntax-highlighted output and real-time execution.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Python', 'Streamlit', 'LangChain', 'Groq API', 'PostgreSQL'].map((t) => (
                  <span
                    key={t}
                    className="font-label-code text-label-code border border-outline-variant/30 px-3 py-1 rounded-sm bg-surface-container-lowest text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 relative z-10">
              <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-3 rounded-lg font-label-caps text-label-caps flex items-center gap-2 transition-all active:scale-95 uppercase font-bold tracking-wider">
                VIEW PROJECT{' '}
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
              <button className="border border-outline-variant hover:bg-white/5 text-on-surface px-6 py-3 rounded-lg font-label-caps text-label-caps transition-all uppercase font-bold tracking-wider">
                DOCUMENTATION
              </button>
            </div>
            {/* Background design element */}
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity">
              <span
                className="material-symbols-outlined text-[180px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                terminal
              </span>
            </div>
          </div>

          {/* Card 2: CSV Data Analyzer (Vertical) */}
          <div className="md:col-span-5 glass-card rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative interactive-card-element border border-white/5 min-h-[380px]">
            <div className="card-highlight"></div>
            <div className="relative z-10">
              <div className="mb-8 flex justify-between items-start">
                <span className="bg-secondary-container/20 border border-secondary-container/40 text-secondary px-3 py-1 rounded-sm font-label-code text-label-code">
                  DATA ANALYTICS
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3 font-semibold">
                CSV Data Analyzer
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-85 leading-relaxed">
                AI-driven tool converting natural language instructions into CSV data workflows with automated analysis, visualization generation, and chat-based analytics.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-secondary">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-label-caps font-label-caps text-xs">
                    98.2% Accuracy Rate
                  </span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant opacity-80">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                  <span className="text-label-caps font-label-caps text-xs">
                    Real-time Visualization
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Gemini 1.5 Pro', 'Pandas', 'Plotly'].map((t) => (
                  <span
                    key={t}
                    className="font-label-code text-label-code border border-outline-variant/30 px-3 py-1 rounded-sm bg-surface-container-lowest text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <button className="w-full bg-surface-bright hover:bg-surface-variant border border-outline-variant/30 text-on-surface px-6 py-4 rounded-lg font-label-caps text-label-caps flex justify-center items-center gap-2 transition-all active:scale-95 uppercase font-bold tracking-wider">
                LAUNCH ANALYZER{' '}
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
              </button>
            </div>
          </div>

          {/* Additional Mini Cards */}
          {/* Card 3: Med-RAG Engine */}
          <div className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between min-h-[250px] border border-white/5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">health_metrics</span>
              </div>
              <h4 className="font-title-md text-on-surface font-semibold text-lg">
                Med-RAG Engine
              </h4>
              <p className="text-on-surface-variant text-body-md text-sm opacity-80">
                HIPAA-compliant RAG system for medical document processing.
              </p>
              <div className="flex gap-2">
                <span className="text-label-code font-label-code text-primary/80 bg-surface-container-low px-2.5 py-1 rounded">
                  PyTorch
                </span>
                <span className="text-label-code font-label-code text-primary/80 bg-surface-container-low px-2.5 py-1 rounded">
                  FAISS
                </span>
              </div>
            </div>
            <a
              className="mt-6 text-primary font-label-caps text-label-caps flex items-center gap-1 hover:gap-3 transition-all font-bold uppercase text-xs"
              href="#"
            >
              VIEW DETAILS{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Card 4: Multi-Agent Chatbot */}
          <div className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between min-h-[250px] border border-white/5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <h4 className="font-title-md text-on-surface font-semibold text-lg">
                Multi-Agent Chatbot
              </h4>
              <p className="text-on-surface-variant text-body-md text-sm opacity-80">
                Collaborative AI agents for complex task automation and research.
              </p>
              <div className="flex gap-2">
                <span className="text-label-code font-label-code text-primary/80 bg-surface-container-low px-2.5 py-1 rounded">
                  CrewAI
                </span>
                <span className="text-label-code font-label-code text-primary/80 bg-surface-container-low px-2.5 py-1 rounded">
                  FastAPI
                </span>
              </div>
            </div>
            <a
              className="mt-6 text-primary font-label-caps text-label-caps flex items-center gap-1 hover:gap-3 transition-all font-bold uppercase text-xs"
              href="#"
            >
              VIEW DETAILS{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          {/* Card 5: FVCM-Net Cancer Detection */}
          <div className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between min-h-[250px] border border-white/5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h4 className="font-title-md text-on-surface font-semibold text-lg">
                FVCM-Net Cancer Detection
              </h4>
              <p className="text-on-surface-variant text-body-md text-sm opacity-80">
                Privacy-preserved lung cancer detection using CT images.
              </p>
              <div className="flex gap-2">
                <span className="text-label-code font-label-code text-primary/80 bg-surface-container-low px-2.5 py-1 rounded">
                  TensorFlow
                </span>
                <span className="text-label-code font-label-code text-primary/80 bg-surface-container-low px-2.5 py-1 rounded">
                  OpenCV
                </span>
              </div>
            </div>
            <a
              className="mt-6 text-primary font-label-caps text-label-caps flex items-center gap-1 hover:gap-3 transition-all font-bold uppercase text-xs"
              href="#"
            >
              VIEW DETAILS{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Stats Ticker */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-outline-variant/10 bg-surface-container/30 backdrop-blur-sm rounded-xl">
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-secondary metric-glow">12+</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Projects Delivered
            </p>
          </div>
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-primary">05</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Research Papers
            </p>
          </div>
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-secondary-container">98%</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Model Accuracy
            </p>
          </div>
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-on-surface">1+</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Year Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
