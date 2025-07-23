"use client"

import { useEffect, useRef, useState } from "react"

type AnimationOptions = {
  threshold?: number
  rootMargin?: string
  animation?: string
}

export function useScrollAnimation<T extends HTMLElement>(options: AnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", animation = "animate-fadeIn" } = options

  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once the element is visible, we can stop observing it
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isVisible, animationClass: isVisible ? animation : "" }
}
