"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function LogoDownload() {
  const svgRef = useRef<SVGSVGElement>(null)

  const downloadSVG = () => {
    if (!svgRef.current) return

    const svgData = new XMLSerializer().serializeToString(svgRef.current)
    const blob = new Blob([svgData], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "styner-logo.svg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const downloadPNG = () => {
    if (!svgRef.current) return

    const canvas = document.createElement("canvas")
    canvas.width = 200
    canvas.height = 200
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const svgData = new XMLSerializer().serializeToString(svgRef.current)
    const img = new Image()
    const blob = new Blob([svgData], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      const pngUrl = canvas.toDataURL("image/png")

      const link = document.createElement("a")
      link.href = pngUrl
      link.download = "styner-logo.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }

    img.src = url
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Download Logo</h2>

      <div className="mb-4 flex justify-center">
        <svg ref={svgRef} width="200" height="200" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z"
            fill="white"
            stroke="#ff6347"
            strokeWidth="2"
          />
          <path
            d="M21 10C21 10 17 10 14 10C11 10 10 12 10 14C10 16 11 18 14 18C17 18 19 18 19 18C21 18 22 19 22 21C22 23 21 24 19 24C17 24 11 24 11 24"
            stroke="#ff6347"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M8 12L5 16L8 20" stroke="#ff6347" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 12L27 16L24 20" stroke="#ff6347" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex justify-center space-x-4">
        <Button onClick={downloadSVG} variant="outline">
          Download SVG
        </Button>
        <Button onClick={downloadPNG}>Download PNG</Button>
      </div>
    </div>
  )
}
