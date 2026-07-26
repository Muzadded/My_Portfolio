'use client'

import React, { useEffect } from 'react'

export default function Papers() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-reveal-papers').forEach((el) => observer.observe(el))

    // Hover effect for metrics
    const metrics = document.querySelectorAll('.performance-metric-card-element')
    metrics.forEach((metric) => {
      const htmlMetric = metric as HTMLElement
      const handleMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = htmlMetric.getBoundingClientRect()
        const x = ((e.clientX - left) / width) * 100
        const y = ((e.clientY - top) / height) * 100
        htmlMetric.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(180, 197, 255, 0.15) 0%, rgba(23, 31, 51, 0.4) 70%)`
      }
      const handleMouseLeave = () => {
        htmlMetric.style.background = 'linear-gradient(135deg, rgba(180, 197, 255, 0.1) 0%, rgba(76, 215, 246, 0.05) 100%)'
      }

      htmlMetric.addEventListener('mousemove', handleMouseMove)
      htmlMetric.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => observer.disconnect()
  }, [])

  const papersData = [
    {
      title: 'FVCM-Net: Privacy-Preserving Lung Cancer Detection from CT Images',
      categoryTags: ['BIOMEDICAL SIGNAL PROCESSING', 'FEDERATED LEARNING'],
      description:
        'Federated learning-based ensemble deep learning model with explainable HiRes-CAM and SHAP attribution for decentralized lung cancer detection. Ensures data privacy while maintaining high-fidelity diagnostic performance across multiple medical institutions.',
      publishedDate: 'PUBLISHED 2024',
      metricVal: '98.2',
      metricLabel: '% Accuracy',
      progressBarWidth: '98.2%',
      hasChartIcon: false,
    },
    {
      title: 'Deep Learning for Identification of Arsenic-Induced Skin Diseases',
      categoryTags: ['IEEE', 'SKIN DISEASES'],
      description:
        'Attention-based CNN (ARS-CNNSA) for arsenic-induced skin condition classification, outperforming VGG16 and InceptionV3 in real-world clinical datasets.',
      publishedDate: '',
      metricVal: '91.0',
      metricLabel: '% F1-Score',
      progressBarWidth: '91%',
      hasChartIcon: false,
    },
    {
      title: 'Clustering as a Catalyst for Big Data Classification (CC-BC)',
      categoryTags: ['IEEE', 'BIG DATA'],
      description:
        'Clustering-driven classification framework leveraging unsupervised instance similarity to reduce labeling dependency and enhance ensemble classifiers in high-volume environments.',
      publishedDate: '',
      metricVal: '',
      metricLabel: '',
      progressBarWidth: '',
      hasChartIcon: true,
    },
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
      borderColor: 'border-l-secondary',
      iconColor: 'text-secondary',
    },
    {
      icon: 'terminal',
      title: 'AI & Automation Unpacked Hackathon',
      org: 'IBM TechZone',
      borderColor: 'border-l-primary',
      iconColor: 'text-primary',
    },
    {
      icon: 'workspace_premium',
      title: 'Problem Solving Intermediate',
      org: 'HackerRank Certified',
      borderColor: 'border-l-surface-tint',
      iconColor: 'text-surface-tint',
    },
  ]

  return (
    <section className="py-section-gap bg-surface relative border-t border-white/5" id="papers">
      {/* Research Papers */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="mb-16">
          <span className="font-label-sm text-label-sm text-secondary-container tracking-widest uppercase font-bold">
            Academic Contributions
          </span>
          <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mt-4 max-w-3xl text-on-surface">
            Research &amp; Publications
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl opacity-80 leading-relaxed">
            Engineered solutions at the intersection of Federated Learning, Privacy-Preserving AI, and Medical Diagnosis. Focusing on efficiency metrics and scalable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {papersData.map((paper, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start scroll-reveal-papers border border-white/5"
            >
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-6">
                  {paper.categoryTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container text-primary font-label-code text-label-code px-3 py-1 rounded-sm border border-outline-variant uppercase text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline-lg text-title-md text-on-surface mb-4 font-semibold">
                  {paper.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-85 leading-relaxed">
                  {paper.description}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    className="font-label-md text-label-md text-primary flex items-center gap-2 hover:underline uppercase text-xs font-bold"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">description</span> READ
                    PAPER
                  </a>
                  {paper.publishedDate && (
                    <>
                      <span className="text-white/10">|</span>
                      <span className="font-label-md text-label-md text-on-surface-variant text-xs uppercase">
                        {paper.publishedDate}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Right Metric Card */}
              {paper.hasChartIcon ? (
                <div className="md:w-64 w-full h-[140px] flex items-center justify-center performance-metric performance-metric-card-element p-6 rounded-lg border border-primary/10 opacity-60">
                  <span className="material-symbols-outlined text-headline-xl text-secondary text-5xl">
                    analytics
                  </span>
                </div>
              ) : (
                <div className="md:w-64 w-full h-[140px] flex flex-col justify-between performance-metric performance-metric-card-element p-6 rounded-lg border border-primary/10">
                  <div>
                    <div className="font-headline-xl text-secondary text-4xl font-bold leading-none">
                      {paper.metricVal}
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase text-xs mt-1">
                      {paper.metricLabel}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-secondary h-full"
                        style={{ width: paper.progressBarWidth }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 scroll-reveal-papers mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm text-secondary-container tracking-widest uppercase font-bold">
              Foundation
            </span>
            <h3 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mt-4 text-on-surface">
              My Education
            </h3>
          </div>
          <div className="hidden md:block h-px flex-1 mx-12 bg-white/10 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Campus Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden glass-card border border-white/10">
                <img
                  alt="University Campus representation"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDcsLIulxJ7C_nyrEdyQ_wy06Pe8F_AOAm_vcMoqKp8ywGtTO-LHGfGMvmm08YbuGFvo594Pt892qDJuQoJnCRV9WDToYFNjXSaCc9DuiDsi6N7odEUg_4NwPytJ3y4EnNubF-CDfG6KMDbT-T_0AVyun3AyXNElcrAa1x9Aiv3ECa2NUpJ-wBzbkXJjAYkkC7dlDpLI6xEVp2tckfstr4xv0UZe7_BhbFjyrVVamXLc8BbAk1t4YfaS_eKFLzeU-_K6gIfA9Xh6hx"
                />
              </div>
            </div>
          </div>

          {/* School Details */}
          <div className="lg:col-span-7">
            <div className="space-y-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">school</span>
                  <div>
                    <h4 className="font-headline-lg text-title-md text-on-surface font-semibold">
                      United International University
                    </h4>
                    <p className="font-label-md text-label-md text-secondary-container uppercase text-xs">
                      Bsc in Computer Science &amp; Engineering
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="p-6 rounded-lg bg-surface-container/50 border border-white/5">
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase text-xs">
                      GPA
                    </p>
                    <p className="font-headline-xl text-primary text-[32px] font-bold">
                      3.67{' '}
                      <span className="text-body-md font-normal text-on-surface-variant text-sm">
                        / 4.00
                      </span>
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-surface-container/50 border border-white/5">
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase text-xs">
                      Graduated
                    </p>
                    <p className="font-headline-xl text-primary text-[32px] font-bold">
                      OCT 2024
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="font-label-md text-label-md text-on-surface mb-4 uppercase text-xs font-bold">
                    Core Focus Areas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <span
                        key={area}
                        className="font-label-code text-label-code bg-surface-container px-3 py-1.5 rounded border border-white/5 text-on-surface-variant text-xs"
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-xl flex flex-col justify-between min-h-[200px] border-l-4 ${cred.borderColor} border border-white/5 scroll-reveal-papers`}
            >
              <div>
                <span className={`material-symbols-outlined ${cred.iconColor} text-3xl mb-4`}>
                  {cred.icon}
                </span>
                <h3 className="font-headline-lg text-title-md leading-tight text-on-surface font-semibold text-lg">
                  {cred.title}
                </h3>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase text-xs mt-4">
                {cred.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
