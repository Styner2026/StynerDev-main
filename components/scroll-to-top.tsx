"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling for a better user experience
    })
  }, [pathname])

  return null // This component doesn't render anything
}
