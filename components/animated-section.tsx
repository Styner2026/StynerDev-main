"use client"

import React, { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import styles from "./animated-section.module.css"

interface AnimatedSectionProps {
  children: React.ReactNode | ((props: { isVisible: boolean }) => React.ReactNode)
  animation?: string
  delay?: number
  className?: string
  threshold?: number
}

export default function AnimatedSection({
  children,
  animation = "animate-fadeIn",
  delay = 0,
  className,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(section)

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [delay])

  let content;
  if (typeof children === 'function') {
    content = children({ isVisible });
  } else {
    content = children;
  }

  return (
    <div
      ref={sectionRef}
      className={`${styles.animatedSection} ${isVisible ? styles.visible : styles.hidden} ${animation || ""} ${className || ""}`}
    >
      {content}
    </div>
  )
}
