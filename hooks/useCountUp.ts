'use client'
import { useEffect, useState } from 'react'

export function useCountUp(end: number, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [trigger, end, duration])

  return count
}
