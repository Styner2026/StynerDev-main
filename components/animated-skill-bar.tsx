"use client"

import { useState, useEffect, useRef } from "react"
import styles from "./animated-skill-bar.module.css"

interface AnimatedSkillBarProps {
  skill: string
  percentage: number
  delay?: number
  className?: string
}

export function AnimatedSkillBar({ skill, percentage, delay = 0, className = "" }: AnimatedSkillBarProps) {
  const [width, setWidth] = useState(0)
  const [value, setValue] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animation after the specified delay
          setTimeout(() => {
            // Animate the width
            setWidth(percentage)
            setIsAnimated(true)

            // Animate the percentage number
            const duration = 1500
            const startTime = Date.now()

            const animateValue = () => {
              const now = Date.now()
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)

              // Easing function for smoother animation
              const easedProgress = easeOutQuad(progress)
              const nextValue = Math.floor(easedProgress * percentage)

              setValue(nextValue)

              if (progress < 1) {
                requestAnimationFrame(animateValue)
              } else {
                setValue(percentage)
              }
            }

            requestAnimationFrame(animateValue)
          }, delay)

          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [percentage, delay])

  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t)

  // Set CSS variable in style tag
  useEffect(() => {
    document.documentElement.style.setProperty('--skill-percentage', `${percentage}%`);
  }, [percentage]);

  return (
    <div ref={barRef} className={`skill-bar ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill}</span>
        <span
          className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300"
          suppressHydrationWarning
        >
          {value}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            backgroundColor: '#ff6347'
          }}
        />
      </div>
    </div>
  )
}
