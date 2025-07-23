"use client"

import { useEffect, useRef } from "react"

export default function LogoPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw circle
    ctx.beginPath()
    ctx.arc(100, 100, 80, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
    ctx.lineWidth = 6
    ctx.strokeStyle = "#ff6347"
    ctx.stroke()

    // Draw stylized S
    ctx.beginPath()
    ctx.moveTo(130, 50)
    ctx.bezierCurveTo(130, 50, 90, 50, 70, 50)
    ctx.bezierCurveTo(50, 50, 40, 70, 40, 90)
    ctx.bezierCurveTo(40, 110, 50, 130, 70, 130)
    ctx.bezierCurveTo(90, 130, 110, 130, 110, 130)
    ctx.bezierCurveTo(130, 130, 140, 140, 140, 160)
    ctx.bezierCurveTo(140, 180, 130, 190, 110, 190)
    ctx.bezierCurveTo(90, 190, 50, 190, 50, 190)
    ctx.lineWidth = 10
    ctx.strokeStyle = "#ff6347"
    ctx.lineCap = "round"
    ctx.stroke()

    // Draw code brackets
    ctx.beginPath()
    ctx.moveTo(30, 60)
    ctx.lineTo(10, 100)
    ctx.lineTo(30, 140)
    ctx.lineWidth = 6
    ctx.strokeStyle = "#ff6347"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(170, 60)
    ctx.lineTo(190, 100)
    ctx.lineTo(170, 140)
    ctx.lineWidth = 6
    ctx.strokeStyle = "#ff6347"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.stroke()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} width={200} height={200} className="border border-gray-200 rounded-md mb-4" />
      <p className="text-center text-sm text-gray-600">Preview of your logo icon</p>
    </div>
  )
}
