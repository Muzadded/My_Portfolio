'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PaperItem {
  title: string
  publisher: string
  categoryTags: string[]
  description: string
  metricVal: string
  metricLabel: string
  metricPct: number
  color: string
  glow: string
  borderDefault: string
  borderHover: string
  dotGlow: string
  link: string
  image: string
}

export default function Papers() {
  const papersData: PaperItem[] = [
    {
      title: 'Decentralized Medical Image Sharing using Blockchain',
      publisher: 'IET Blockchain',
      categoryTags: ['Blockchain', 'IPFS Storage', 'Medical Security'],
      description: 'Proposed a privacy-preserving blockchain-based medical image sharing framework integrating subject sensitive hashing (SSH) and IPFS storage, achieving 98% data integrity accuracy across multiple healthcare imaging datasets.',
      metricVal: '98%',
      metricLabel: 'Integrity Acc.',
      metricPct: 98,
      color: 'text-[#f472b6]', // Pink theme
      glow: 'from-[#f472b6]/5 to-transparent',
      borderDefault: 'border-[#f472b6]/15',
      borderHover: 'hover:border-[#f472b6]/45',
      dotGlow: 'bg-[#f472b6]',
      link: '#',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'FVCM-Net: Privacy-Preserved Lung Cancer Detection from CT Images',
      publisher: 'BSPC Journal (Elsevier)',
      categoryTags: ['Federated Learning', 'Deep Learning', 'Explainable AI'],
      description: 'Developed a federated learning-based ensemble deep learning model with explainable HiRes-CAM and SHAP attribution for decentralized lung cancer detection, achieving 98.26% accuracy.',
      metricVal: '98.26%',
      metricLabel: 'Model Acc.',
      metricPct: 98.26,
      color: 'text-[#60a5fa]', // Blue theme
      glow: 'from-[#60a5fa]/5 to-transparent',
      borderDefault: 'border-[#60a5fa]/15',
      borderHover: 'hover:border-[#60a5fa]/45',
      dotGlow: 'bg-[#60a5fa]',
      link: '#',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Deep Learning for Identification of Arsenic-Induced Skin Diseases',
      publisher: 'IEEE',
      categoryTags: ['Attention CNN', 'ARS-CNNSA', 'VGG16 / InceptionV3'],
      description: 'Designed an attention-based CNN architecture (ARS-CNNSA) for classification of arsenic-induced skin conditions, outperforming standard models with 91% accuracy and 90% F1-score.',
      metricVal: '91%',
      metricLabel: 'F1-Score',
      metricPct: 91,
      color: 'text-[#34d399]', // Emerald theme
      glow: 'from-[#34d399]/5 to-transparent',
      borderDefault: 'border-[#34d399]/15',
      borderHover: 'hover:border-[#34d399]/45',
      dotGlow: 'bg-[#34d399]',
      link: '#',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Clustering as a Catalyst for Big Data Classification (CC-BC)',
      publisher: 'IEEE',
      categoryTags: ['Big Data', 'Unsupervised Learning', 'Decision Trees'],
      description: 'Introduced a clustering-driven classification framework leveraging unsupervised instance similarity to reduce labeling dependency and enhance performance of decision tree and ensemble-based classifiers.',
      metricVal: 'CC-BC',
      metricLabel: 'Framework',
      metricPct: 0,
      color: 'text-[#a78bfa]', // Violet theme
      glow: 'from-[#a78bfa]/5 to-transparent',
      borderDefault: 'border-[#a78bfa]/15',
      borderHover: 'hover:border-[#a78bfa]/45',
      dotGlow: 'bg-[#a78bfa]',
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Phishing Link Detection using Ensemble Learning',
      publisher: 'IEEE',
      categoryTags: ['Ensemble Learning', 'Random Forest', 'Cybersecurity'],
      description: 'Developed an ensemble-based phishing detection system combining Random Forest, Logistic Regression, and Gradient Boosting to improve generalization and detection accuracy in cybersecurity applications.',
      metricVal: 'Ensemble',
      metricLabel: 'Classifiers',
      metricPct: 0,
      color: 'text-[#fbbf24]', // Amber theme
      glow: 'from-[#fbbf24]/5 to-transparent',
      borderDefault: 'border-[#fbbf24]/15',
      borderHover: 'hover:border-[#fbbf24]/45',
      dotGlow: 'bg-[#fbbf24]',
      link: '#',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const focusAreas = [
    'Artificial Intelligence',
    'Deep Learning',
    'Blockchain',
    'Data Structures',
    'Federated Learning',
    'Algorithm Design',
  ]

  const credentials = [
    {
      icon: 'emoji_events',
      title: 'Academic Excellence Scholarship',
      org: 'United International University',
      borderColor: 'border-l-[#f472b6] border-[#f472b6]/10',
      iconColor: 'text-[#f472b6]',
      glow: 'from-[#f472b6]/5 to-transparent'
    },
    {
      icon: 'terminal',
      title: 'AI & Automation Unpacked Hackathon',
      org: 'IBM TechZone',
      borderColor: 'border-l-[#60a5fa] border-[#60a5fa]/10',
      iconColor: 'text-[#60a5fa]',
      glow: 'from-[#60a5fa]/5 to-transparent'
    },
    {
      icon: 'workspace_premium',
      title: 'Problem Solving Intermediate',
      org: 'HackerRank Certified',
      borderColor: 'border-l-[#a78bfa] border-[#a78bfa]/10',
      iconColor: 'text-[#a78bfa]',
      glow: 'from-[#a78bfa]/5 to-transparent'
    },
  ]

  return (
    <section className="py-section-gap bg-surface relative border-t border-white/5 overflow-hidden" id="papers">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full pointer-events-none" />

      {/* Research Papers */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-bold">
            Academic Contributions
          </span>
          <h2 className="font-display-xl text-[36px] md:text-[50px] leading-[1.1] text-on-surface uppercase tracking-tight mt-4">
            Research &amp; Publications
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl opacity-80 leading-relaxed mx-auto md:mx-0">
            Engineered solutions at the intersection of Federated Learning, Privacy-Preserving AI, and Medical Diagnosis. Focusing on efficiency metrics and scalable architectures.
          </p>
        </div>

        {/* Balanced Vertical Grid (centering second row overflow items) */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {papersData.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-card rounded-3xl overflow-hidden border ${paper.borderDefault} ${paper.borderHover} bg-gradient-to-b from-[#171f33]/40 to-[#0b1326]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between group w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] min-h-[460px]`}
            >
              {/* Header Image Cover */}
              <div className="relative aspect-[16/10] overflow-hidden w-full border-b border-white/5">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                {/* Visual shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/90 to-transparent" />
                
                {/* Floating Publisher Tag */}
                <span className="absolute top-4 left-4 bg-[#0b1326]/85 backdrop-blur-md border border-white/10 text-white/90 px-3.5 py-1 rounded-full font-label-code text-[10px] font-bold uppercase tracking-wider">
                  {paper.publisher}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left">
                <div>
                  {/* Category sub-hashtags */}
                  <div className="flex flex-wrap gap-2 mb-3.5">
                    {paper.categoryTags.map((tag) => (
                      <span key={tag} className={`text-[9.5px] ${paper.color} font-label-code uppercase tracking-wider font-extrabold`}>
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>

                  {/* Headline Title */}
                  <h3 className="font-headline-lg text-[16px] md:text-[17px] text-on-surface font-extrabold leading-snug tracking-wide uppercase group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {paper.title}
                  </h3>

                  {/* Description text */}
                  <p className="font-body-md text-xs md:text-sm text-on-surface-variant/90 leading-relaxed mt-3 line-clamp-3">
                    {paper.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={paper.link}
                    className={`inline-flex items-center gap-1.5 text-[11px] font-label-caps font-extrabold uppercase tracking-wider ${paper.color} hover:underline`}
                  >
                    Read Paper <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
                  </a>
                  
                  <span className="font-label-code text-[10px] text-on-surface-variant font-bold uppercase tracking-wide">
                    {paper.metricPct > 0 ? `${paper.metricLabel.split(' ')[0]}: ${paper.metricVal}` : paper.metricVal}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-bold">
              Foundation
            </span>
            <h3 className="font-display-xl text-[28px] md:text-[40px] uppercase tracking-tight mt-4 text-on-surface">
              My Education
            </h3>
          </div>
          <div className="hidden md:block h-[1px] flex-1 mx-12 bg-white/10 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Campus Image */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
                <img
                  alt="University Campus representation"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="/2-1-1024x486.jpg"
                />
              </div>
            </motion.div>
          </div>

          {/* School Details */}
          <div className="lg:col-span-7">
            <div className="space-y-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">school</span>
                  </div>
                  <div>
                    <h4 className="font-headline-lg text-[20px] md:text-[24px] text-on-surface font-extrabold uppercase tracking-wide">
                      United International University
                    </h4>
                    <p className="font-label-md text-label-md text-secondary font-bold mt-1 uppercase text-xs">
                      Bsc in Computer Science &amp; Engineering
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="p-6 rounded-2xl bg-[#171f33]/40 border border-white/5 hover:border-primary/20 transition-all">
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase text-xs font-bold tracking-wider">
                      GPA
                    </p>
                    <p className="font-headline-xl text-primary text-[32px] font-extrabold">
                      3.67{' '}
                      <span className="text-body-md font-normal text-on-surface-variant text-sm">
                        / 4.00
                      </span>
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#171f33]/40 border border-white/5 hover:border-primary/20 transition-all">
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase text-xs font-bold tracking-wider">
                      Graduated
                    </p>
                    <p className="font-headline-xl text-primary text-[30px] md:text-[32px] font-extrabold">
                      OCT 2024
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="font-label-md text-label-md text-on-surface mb-4 uppercase text-xs font-extrabold tracking-wider">
                    Core Focus Areas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <span
                        key={area}
                        className="font-label-code text-label-code bg-[#171f33]/40 px-3 py-1.5 rounded-xl border border-white/5 text-on-surface-variant text-[11.5px] hover:text-on-surface hover:border-white/20 transition-all cursor-default select-none"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl flex flex-col justify-between min-h-[220px] border-l-4 ${cred.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden group`}
            >
              <div className={`absolute -inset-4 bg-gradient-to-br ${cred.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`} />
              
              <div className="relative z-10 text-left">
                <span className={`material-symbols-outlined ${cred.iconColor} text-4xl mb-4 block`}>
                  {cred.icon}
                </span>
                <h3 className="font-headline-lg text-[17px] md:text-[18px] leading-snug text-on-surface font-extrabold uppercase tracking-wide">
                  {cred.title}
                </h3>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase text-xs font-bold tracking-wider mt-4 relative z-10 text-left">
                {cred.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
