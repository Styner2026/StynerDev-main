"use client"

import { useCountUp } from "@/hooks/use-count-up"

interface AnimatedCounterProps {
  end: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
  delay?: number
}

export function AnimatedCounter({
  end,
  label,
  prefix = "",
  suffix = "",
  duration = 2000,
  delay = 0,
}: AnimatedCounterProps) {
  const { formattedValue, observerRef } = useCountUp({
    end,
    prefix,
    suffix,
    duration,
    delay,
  })

  return (
    <div className="text-center" ref={observerRef}>
      <div className="text-4xl md:text-5xl font-bold text-[#ff6347] mb-2 relative">
        <span className="inline-block transform transition-all duration-700 animate-fadeIn">{formattedValue}</span>
      </div>
      <p className="text-black dark:text-black">{label}</p>
    </div>
  )
}
