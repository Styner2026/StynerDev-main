"use client"

import { useState, useEffect, useRef } from "react"

interface UseCountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
}

export function useCountUp({ end, start = 0, duration = 2000, delay = 0, prefix = "", suffix = "" }: UseCountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const [isInView, setIsInView] = useState(false)
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number
    const totalFrames = Math.round(duration / 16)
    const incrementPerFrame = (end - start) / totalFrames

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (elapsed < delay) {
        animationFrame = requestAnimationFrame(step)
        return
      }

      const progress = Math.min((elapsed - delay) / duration, 1)
      const easedProgress = easeOutQuad(progress)
      const nextCount = start + easedProgress * (end - start)

      countRef.current = nextCount
      setCount(Math.floor(nextCount))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [start, end, duration, delay, isInView])

  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t)

  return {
    value: count,
    observerRef,
    formattedValue: `${prefix}${count}${suffix}`,
  }
}
