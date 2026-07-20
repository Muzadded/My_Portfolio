'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'

export default function CustomCursor() {
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const dotX = useSpring(rawX, { stiffness: 1000, damping: 50 })
  const dotY = useSpring(rawY, { stiffness: 1000, damping: 50 })

  const ringX = useSpring(rawX, { stiffness: 140, damping: 18 })
  const ringY = useSpring(rawY, { stiffness: 140, damping: 18 })

  const [hovering, setHovering] = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(
        !!el.closest('a, button, input, textarea, select, [role="button"], [data-cursor]')
      )
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [rawX, rawY, visible])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-brand-red"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width:  hovering ? 6 : 8,
          height: hovering ? 6 : 8,
        }}
        transition={{ duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-brand-red"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:           hovering ? 44 : 28,
          height:          hovering ? 44 : 28,
          backgroundColor: hovering ? 'rgba(224,92,75,0.12)' : 'transparent',
          borderColor:     hovering ? '#f07a6b' : '#e05c4b',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
