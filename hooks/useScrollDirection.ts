'use client'
import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [isAtTop, setIsAtTop] = useState(true)
  const prevY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setIsAtTop(y < 10)
      if (y > prevY.current && y > 80) {
        setDirection('down')
      } else {
        setDirection('up')
      }
      prevY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { direction, isAtTop }
}
