"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Download, Share2, Copy, Linkedin, Twitter, Facebook, Mail, Github } from "lucide-react"

type ShareOption = {
  id: string
  label: string
  icon: React.ReactNode
  action: () => void
}

export default function ShareModal({
  isOpen,
  onClose,
  currentPath,
}: {
  isOpen: boolean
  onClose: () => void
  currentPath: string
}) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<"share" | "download">("share")
  const [fullUrl, setFullUrl] = useState("")

  // Set full URL after hydration
  useEffect(() => {
    setFullUrl(`${window.location.origin}${currentPath}`)
  }, [currentPath])

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Close on escape key
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl)
    alert("Link copied to clipboard!")
  }

  const shareOptions: ShareOption[] = [
    {
      id: "copy",
      label: "Copy Link",
      icon: <Copy className="h-5 w-5" />,
      action: copyToClipboard,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      action: () =>
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`, "_blank"),
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}`, "_blank"),
    },
    {
      id: "facebook",
      label: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      action: () =>
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`, "_blank"),
    },
    {
      id: "email",
      label: "Email",
      icon: <Mail className="h-5 w-5" />,
      action: () => window.open(`mailto:?subject=Check out this page&body=${encodeURIComponent(fullUrl)}`, "_blank"),
    },
    {
      id: "github",
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
      action: () => window.open("https://github.com/yourusername", "_blank"),
    },
  ]

  const downloadOptions = [
    {
      id: "resume",
      label: "Resume (PDF)",
      description: "Download my professional resume",
      url: "/downloads/resume.pdf",
    },
    {
      id: "portfolio",
      label: "Portfolio Highlights",
      description: "A curated collection of my best work",
      url: "/downloads/portfolio-highlights.pdf",
    },
    {
      id: "case-study",
      label: "AI Project Case Study",
      description: "Detailed analysis of my AI implementation",
      url: "/downloads/ai-case-study.pdf",
    },
    {
      id: "code-samples",
      label: "Code Samples",
      description: "Examples of my coding style and practices",
      url: "/downloads/code-samples.zip",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-xl overflow-hidden">
        <div className="p-4 border-b bg-gradient-to-r from-white to-gray-50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-gray-800">Share & Download</h3>
            <div className="text-xs text-gray-600 mt-2 md:mt-0 max-w-sm font-medium leading-relaxed">
              <span className="text-[#ff6347]">Full-Stack Developer & CTO</span> | AI Systems + Blockchain (ICP/DFINITY, Motoko) | Web & Mobile (React/Next.js, Expo Go) | MT5 Bot Builder | OSINT + Cyber Intelligence
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("share")}
              className={`px-3 py-1 rounded-md ${activeTab === "share" ? "bg-[#ff6347] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <div className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </div>
            </button>
            <button
              onClick={() => setActiveTab("download")}
              className={`px-3 py-1 rounded-md ${activeTab === "download" ? "bg-[#ff6347] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <div className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download
              </div>
            </button>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
            title="Close"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="p-4">
          {activeTab === "share" ? (
            <div>
              <p className="text-sm text-gray-600 mb-4">Share this page with your network</p>
              <div className="grid grid-cols-2 gap-3">
                {shareOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={option.action}
                    className="flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 text-[#ff6347]">{option.icon}</div>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-600 mb-4">Download resources and materials</p>
              <div className="space-y-3">
                {downloadOptions.map((option) => (
                  <a
                    key={option.id}
                    href={option.url}
                    download
                    className="flex items-start p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <Download className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
