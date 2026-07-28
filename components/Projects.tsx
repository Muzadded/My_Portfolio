'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section className="py-section-gap relative bg-background border-t border-white/5 overflow-hidden" id="projects">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-primary/3 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-secondary/3 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left max-w-4xl">
          <span className="font-label-caps text-label-sm text-primary uppercase tracking-[0.25em] mb-4 block">
            SHOWCASE
          </span>
          <h2 className="font-display-xl text-[36px] md:text-[50px] leading-[1.1] text-on-surface uppercase tracking-tight">
            Selected <span className="text-primary font-bold">Projects</span>
          </h2>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant opacity-85 leading-relaxed mt-4">
            Engineering intelligent systems that bridge the gap between raw data and actionable insights through LLMs, custom RAG frameworks, and Agentic workflows.
          </p>
        </div>

        {/* 2x2 Grid (Equal Sized Cards on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
          
          {/* Card 1: SME Business Guardian */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 glass-card p-8 rounded-3xl border border-[#f472b6]/25 hover:border-[#f472b6]/50 bg-gradient-to-br from-[#f472b6]/5 to-[#171f33]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#f472b6]/5 relative overflow-hidden group flex flex-col justify-between min-h-[480px]"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#f472b6]/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-stretch h-full">
              {/* Text content block */}
              <div className="w-full md:w-[58%] flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#f472b6]/10 border border-[#f472b6]/20 text-[#f472b6] px-3.5 py-1 rounded-full font-label-code text-[10.5px] font-bold tracking-wider">
                      GROUP PROJECT
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-[22px] md:text-[25px] text-on-surface font-extrabold tracking-wide uppercase">
                    SME Business Guardian
                  </h3>
                  
                  <p className="font-body-md text-sm text-on-surface-variant/90 mb-6 leading-relaxed mt-2">
                    AI-powered business consultation platform designed for contract analysis, legal document reviews, and strategy support.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#f472b6] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        FastAPI backend and React frontend integrated with LangGraph.
                      </p>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#f472b6] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        LLM conversational interface with JWT and 4k context window.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                    {['FastAPI', 'ReactJS', 'PostgreSQL', 'LangGraph'].map((t) => (
                      <span key={t} className="font-label-code text-[10px] border border-[#f472b6]/20 px-2.5 py-0.5 rounded-lg bg-[#171f33]/40 text-[#f472b6] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-label-caps text-label-sm font-bold uppercase tracking-wider transition-all bg-[#f472b6]/10 hover:bg-[#f472b6]/25 border border-[#f472b6]/30 text-[#f472b6] active:scale-95">
                    View Code <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Visual LangGraph Mockup block */}
              <div className="w-full md:w-[42%] bg-black/45 border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center relative overflow-hidden min-h-[200px] md:min-h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f472b6]/5 to-transparent blur-md pointer-events-none" />
                
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <path d="M 70,60 L 70,120 M 70,120 L 70,180" stroke="rgba(244,114,182,0.25)" strokeDasharray="3 3" strokeWidth="2" fill="none" className="group-hover:stroke-[#f472b6]/40 transition-colors" />
                  <circle cx="70" cy="90" r="4" className="fill-[#f472b6] animate-pulse" />
                  <circle cx="70" cy="150" r="4" className="fill-[#34d399] animate-pulse" />
                </svg>

                {/* Nodes */}
                <div className="relative z-10 space-y-7 w-full flex flex-col items-center">
                  <div className="bg-[#171f33]/90 border border-[#f472b6]/30 px-3 py-1.5 rounded-xl text-center shadow-lg w-[90%] scale-95 group-hover:scale-100 transition-transform duration-300">
                    <div className="text-[9px] text-[#f472b6] font-extrabold uppercase tracking-widest font-label-caps">INPUT AGENT</div>
                    <div className="text-[10.5px] text-white font-label-code mt-0.5">Contract Document</div>
                  </div>
                  
                  <div className="bg-[#171f33]/90 border border-[#34d399]/30 px-3 py-1.5 rounded-xl text-center shadow-lg w-[90%] scale-95 group-hover:scale-100 transition-transform duration-300">
                    <div className="text-[9px] text-[#34d399] font-extrabold uppercase tracking-widest font-label-caps">LANGRAPH ROUTER</div>
                    <div className="text-[10.5px] text-white font-label-code mt-0.5">IBM Granite 3.3</div>
                  </div>
                  
                  <div className="bg-[#171f33]/90 border border-[#60a5fa]/30 px-3 py-1.5 rounded-xl text-center shadow-lg w-[90%] scale-95 group-hover:scale-100 transition-transform duration-300">
                    <div className="text-[9px] text-[#60a5fa] font-extrabold uppercase tracking-widest font-label-caps">OUTPUT STORE</div>
                    <div className="text-[10.5px] text-white font-label-code mt-0.5">Analysis Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Bangla RAG System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 glass-card p-8 rounded-3xl border border-[#60a5fa]/25 hover:border-[#60a5fa]/50 bg-gradient-to-br from-[#60a5fa]/5 to-[#171f33]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#60a5fa]/5 relative overflow-hidden group flex flex-col justify-between min-h-[480px]"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#60a5fa]/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-stretch h-full">
              {/* Text content block */}
              <div className="w-full md:w-[58%] flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#60a5fa]/10 border border-[#60a5fa]/20 text-[#60a5fa] px-3.5 py-1 rounded-full font-label-code text-[10.5px] font-bold tracking-wider">
                      SELF PROJECT
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-[22px] md:text-[25px] text-on-surface font-extrabold tracking-wide uppercase">
                    Bangla RAG System
                  </h3>
                  
                  <p className="font-body-md text-sm text-on-surface-variant/90 mb-6 leading-relaxed mt-2">
                    Multilingual RAG pipeline supporting Bengali and English search queries, optimized for e-commerce search.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#60a5fa] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Hybrid semantic retrieval using intent classification.
                      </p>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#60a5fa] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Persistent vector storage across 12+ categories.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                    {['Python', 'ChromaDB', 'Sentence Trans.', 'LangChain'].map((t) => (
                      <span key={t} className="font-label-code text-[10px] border border-[#60a5fa]/20 px-2.5 py-0.5 rounded-lg bg-[#171f33]/40 text-[#60a5fa] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-label-caps text-label-sm font-bold uppercase tracking-wider transition-all bg-[#60a5fa]/10 hover:bg-[#60a5fa]/25 border border-[#60a5fa]/30 text-[#60a5fa] active:scale-95">
                    View Code <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Visual Chat Mockup block */}
              <div className="w-full md:w-[42%] bg-black/45 border border-white/5 rounded-2xl p-4 flex flex-col justify-center space-y-3 relative overflow-hidden min-h-[200px] md:min-h-auto text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa]/5 to-transparent blur-md pointer-events-none" />
                
                <div className="bg-[#60a5fa]/10 border border-[#60a5fa]/20 p-2 rounded-xl text-[10px] text-on-surface max-w-[90%] self-start font-label-code leading-normal">
                  <span className="text-[#60a5fa] font-bold">Query:</span> দাম কত?
                </div>
                
                <div className="w-8 h-8 rounded-full border border-[#34d399]/20 bg-[#34d399]/5 flex items-center justify-center self-center scale-95 group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[13px] text-[#34d399] animate-pulse">database</span>
                </div>

                <div className="bg-[#171f33]/90 border border-white/5 p-2 rounded-xl text-[10px] text-on-surface max-w-[90%] self-end font-label-code leading-normal">
                  <span className="text-[#34d399] font-bold">Res:</span> Price is ৳85k.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: AI-Powered SQL Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 glass-card p-8 rounded-3xl border border-[#34d399]/25 hover:border-[#34d399]/50 bg-gradient-to-br from-[#34d399]/5 to-[#171f33]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#34d399]/5 relative overflow-hidden group flex flex-col justify-between min-h-[480px]"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#34d399]/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-stretch h-full">
              {/* Text content block */}
              <div className="w-full md:w-[58%] flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#34d399]/10 border border-[#34d399]/20 text-[#34d399] px-3.5 py-1 rounded-full font-label-code text-[10.5px] font-bold tracking-wider">
                      SELF PROJECT
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-[22px] md:text-[25px] text-on-surface font-extrabold tracking-wide uppercase">
                    AI SQL Assistant
                  </h3>
                  
                  <p className="font-body-md text-sm text-on-surface-variant/90 mb-6 leading-relaxed mt-2">
                    Natural language to SQL assistant querying relational databases using Model Context Protocol (MCP).
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#34d399] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Integrated LLaMA-3.1-8b with Streamlit UI query executor.
                      </p>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#34d399] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Interactive syntax-highlighted real-time execution.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                    {['Python', 'Streamlit', 'MySQL', 'LLaMA-3.1'].map((t) => (
                      <span key={t} className="font-label-code text-[10px] border border-[#34d399]/20 px-2.5 py-0.5 rounded-lg bg-[#171f33]/40 text-[#34d399] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-label-caps text-label-sm font-bold uppercase tracking-wider transition-all bg-[#34d399]/10 hover:bg-[#34d399]/25 border border-[#34d399]/30 text-[#34d399] active:scale-95">
                    View Code <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Visual VSCode Editor Mockup */}
              <div className="w-full md:w-[42%] bg-black/55 border border-white/5 rounded-2xl flex flex-col overflow-hidden min-h-[190px] text-left font-label-code text-[10px]">
                {/* Titlebar */}
                <div className="bg-[#171f33]/80 px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  <span className="text-on-surface-variant text-[8.5px] ml-2 tracking-wider">mcp_query.py</span>
                </div>

                {/* Editor Content */}
                <div className="p-3 space-y-1.5 select-none leading-normal">
                  <div>
                    <span className="text-[#a78bfa]">def</span> <span className="text-[#60a5fa]">generate_sql</span>(query):
                  </div>
                  <div className="pl-3 opacity-90">
                    prompt = <span className="text-[#34d399]">&quot;SELECT * FROM...&quot;</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-[#f472b6]">return</span> run_mcp(prompt)
                  </div>
                  
                  <div className="pt-3 border-t border-white/5 text-[9px] text-[#34d399] opacity-90">
                    {`> Output Generated:`}
                  </div>
                  <div className="bg-[#171f33] p-1.5 rounded text-[8px] text-white/90 font-mono">
                    <span className="text-[#f472b6] font-bold">SELECT</span> * <span className="text-[#60a5fa] font-bold">FROM</span> users <span className="text-[#34d399] font-bold">LIMIT</span> 5;
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: CSV Data Analyzer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 glass-card p-8 rounded-3xl border border-[#a78bfa]/25 hover:border-[#a78bfa]/50 bg-gradient-to-br from-[#a78bfa]/5 to-[#171f33]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#a78bfa]/5 relative overflow-hidden group flex flex-col justify-between min-h-[480px]"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#a78bfa]/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-stretch h-full">
              {/* Text content block */}
              <div className="w-full md:w-[58%] flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#a78bfa]/10 border border-[#a78bfa]/20 text-[#a78bfa] px-3.5 py-1 rounded-full font-label-code text-[10.5px] font-bold tracking-wider">
                      SELF PROJECT
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-[22px] md:text-[25px] text-on-surface font-extrabold tracking-wide uppercase">
                    CSV Data Analyzer
                  </h3>
                  
                  <p className="font-body-md text-sm text-on-surface-variant/90 mb-6 leading-relaxed mt-2">
                    AI-driven workflow tool converting natural language instructions into CSV analytics operations.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#a78bfa] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Integrated Gemini 1.5 Flash for automated visualization.
                      </p>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="material-symbols-outlined text-[#a78bfa] shrink-0 mt-0.5" style={{ fontSize: '16px' }}>check_circle</span>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Chat-based analytics for real-time reports and charts.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                    {['Python', 'Gemini 1.5', 'LangChain', 'Pandas'].map((t) => (
                      <span key={t} className="font-label-code text-[10px] border border-[#a78bfa]/20 px-2.5 py-0.5 rounded-lg bg-[#171f33]/40 text-[#a78bfa] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-label-caps text-label-sm font-bold uppercase tracking-wider transition-all bg-[#a78bfa]/10 hover:bg-[#a78bfa]/25 border border-[#a78bfa]/30 text-[#a78bfa] active:scale-95">
                    View Code <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* Visual Chart / Dashboard Mockup */}
              <div className="w-full md:w-[42%] bg-black/45 border border-white/5 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden min-h-[190px] md:min-h-auto text-left font-label-code select-none">
                <div className="text-[10px] text-[#a78bfa] font-extrabold tracking-wider uppercase font-label-caps">DATA ANALYSIS</div>
                
                {/* SVG Graph Graphic */}
                <div className="w-full h-[80px] relative my-3">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Fill */}
                    <path d="M 0,50 L 0,40 Q 25,10 50,25 T 100,5 L 100,50 Z" fill="url(#chart-grad)" />
                    {/* Stroke */}
                    <path d="M 0,40 Q 25,10 50,25 T 100,5" stroke="#a78bfa" strokeWidth="2.5" fill="none" className="group-hover:stroke-[#f472b6] transition-colors duration-500" />
                    
                    {/* Interactive nodes */}
                    <circle cx="50" cy="25" r="3.5" className="fill-[#60a5fa] animate-pulse" />
                    <circle cx="100" cy="5" r="3.5" className="fill-[#34d399] animate-pulse" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-white/90">
                  <div className="bg-[#171f33]/90 p-2.5 rounded-xl border border-white/5 scale-95 group-hover:scale-100 transition-transform duration-300">
                    <div className="text-[8px] text-on-surface-variant font-bold">Accuracy</div>
                    <div className="text-[10px] font-bold text-[#34d399] mt-0.5">99.1%</div>
                  </div>
                  
                  <div className="bg-[#171f33]/90 p-2.5 rounded-xl border border-white/5 scale-95 group-hover:scale-100 transition-transform duration-300">
                    <div className="text-[8px] text-on-surface-variant font-bold">Latency</div>
                    <div className="text-[10px] font-bold text-[#60a5fa] mt-0.5">0.12s</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Ticker */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-outline-variant/10 bg-surface-container/30 backdrop-blur-sm rounded-3xl">
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-[#f472b6] font-bold metric-glow">10+</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Projects Completed
            </p>
          </div>
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-[#60a5fa] font-bold">04</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Core Stacks
            </p>
          </div>
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-[#34d399] font-bold">98%</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Model Accuracy
            </p>
          </div>
          <div className="text-center px-4">
            <p className="font-display-xl text-headline-xl text-[#a78bfa] font-bold">1+</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-wider">
              Year Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
