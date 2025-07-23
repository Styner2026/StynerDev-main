"use client"

import { useEffect, useRef } from "react"

interface AnimatedSkillBarsProps {
  skills: {
    name: string
    level: number
  }[]
}

export default function AnimatedSkillBars({ skills }: AnimatedSkillBarsProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const skillBarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateSkillBars = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the skill bars section is visible, animate each bar
          const skillBars = document.querySelectorAll('[id^="skill-bar-"]')
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              if (bar instanceof HTMLElement) {
                const skill = skills[index]
                if (skill) {
                  bar.style.width = `${skill.level}%`
                }
              }
            }, index * 100) // Stagger the animations
          })

          // Disconnect the observer after animation is triggered
          if (observerRef.current) {
            observerRef.current.disconnect()
          }
        }
      })
    }

    // Create the intersection observer
    observerRef.current = new IntersectionObserver(animateSkillBars, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    })

    // Start observing the skill bars container
    if (skillBarsRef.current) {
      observerRef.current.observe(skillBarsRef.current)
    }

    return () => {
      // Clean up the observer when component unmounts
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [skills])

  return <div ref={skillBarsRef} className="w-full"></div>
}
