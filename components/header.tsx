"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Search, Upload, Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import SearchModal from "./search-modal"
import ShareModal from "./share-modal"
import { useIsMobile } from "../hooks/use-mobile"

export default function Header() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [searchOpen, setSearchOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when pathname changes (navigating to a new page)
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    console.log('Dark mode toggled to:', !darkMode)
    // In a real implementation, this would toggle a class on the document
    // or use a theme context to switch between light and dark mode
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo size={42} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link
              href="/"
              className={`pb-1 border-b-2 font-['Great Vibes'] italic font-medium ${pathname === "/"
                ? "border-[#ff6347] text-black dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-[#ff6347]"
                } transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`pb-1 border-b-2 font-['Great Vibes'] italic font-medium ${pathname?.startsWith("/about")
                ? "border-[#ff6347] text-black dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-[#ff6347]"
                } transition-colors`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`pb-1 border-b-2 font-['Great Vibes'] italic font-medium ${pathname?.startsWith("/projects")
                ? "border-[#ff6347] text-black dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-[#ff6347]"
                } transition-colors`}
            >
              Projects
            </Link>
            <Link
              href="/learning"
              className={`pb-1 border-b-2 font-['Great Vibes'] italic font-medium ${pathname?.startsWith("/learning")
                ? "border-[#ff6347] text-black dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-[#ff6347]"
                } transition-colors`}
            >
              Learning
            </Link>
            <Link
              href="/contact"
              className={`pb-1 border-b-2 font-['Serif_Italic'] italic font-medium ${pathname?.startsWith("/contact")
                ? "border-[#ff6347] text-black dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-[#ff6347]"
                } transition-colors`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover:text-[#ff6347] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:!text-[#ff6347] hover:text-[#ff6347]" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-[#ff6347] hover:text-[#ff6347]" />
            )}
          </button>

          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="hidden md:block hover:text-[#ff6347] transition-colors"
          >
            <Search className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-[#ff6347]" />
          </button>
          <button
            aria-label="Share and Download"
            onClick={() => setShareOpen(true)}
            className="hidden md:block hover:text-[#ff6347] transition-colors"
          >
            <Upload className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-[#ff6347]" />
          </button>
          <Link href="/contact" className="hidden sm:inline-block">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white">Let's Connect</Button>
          </Link>
          <button
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onClick={toggleDarkMode}
            className="hover:text-[#ff6347] transition-colors"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-gray-300 hover:text-[#ff6347]" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 hover:text-[#ff6347]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-48 md:hidden border-t rounded-b-lg z-50 bg-white dark:!bg-[#101827] border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col px-4 py-3">
            <Link
              href="/"
              className={`py-3 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} font-medium ${pathname === "/"
                ? "text-[#ff6347]"
                : darkMode ? "text-[#ff6347]" : "text-gray-800"
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-3 border-b border-gray-200 dark:border-gray-700 font-medium ${pathname?.startsWith("/about")
                ? "text-[#ff6347]"
                : "text-gray-800 dark:text-[#ff6347]"
                }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`py-3 border-b border-gray-200 dark:border-gray-700 font-medium ${pathname?.startsWith("/projects")
                ? "text-[#ff6347]"
                : "text-gray-800 dark:text-[#ff6347]"
                }`}
            >
              Projects
            </Link>
            <Link
              href="/learning"
              className={`py-3 border-b border-gray-200 dark:border-gray-700 font-medium ${pathname?.startsWith("/learning")
                ? "text-[#ff6347]"
                : "text-gray-800 dark:text-[#ff6347]"
                }`}
            >
              Learning
            </Link>
            <Link
              href="/contact"
              className={`py-3 font-medium ${pathname?.startsWith("/contact")
                ? "text-[#ff6347]"
                : "text-gray-800 dark:text-[#ff6347]"
                }`}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-4">
              <div className="flex justify-center space-x-6">
                <button
                  aria-label="Search"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="hover:text-[#ff6347] transition-colors"
                >
                  <Search className="h-5 w-5 text-gray-600 dark:text-white hover:text-[#ff6347]" />
                  <span className="text-sm block mt-1" style={{
                    color: darkMode ? '#ffffff' : '#6b7280',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>Search</span>
                </button>
                <button
                  aria-label="Share and Download"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShareOpen(true);
                  }}
                  className="hover:text-[#ff6347] transition-colors"
                >
                  <Upload className="h-5 w-5 text-gray-600 dark:text-[#ff6347] hover:text-[#ff6347]" />
                  <span className="text-sm block mt-1" style={{
                    color: darkMode ? '#ffffff' : '#6b7280',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>Share</span>
                </button>
              </div>
              <Link href="/contact" className="w-full block">
                <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white w-full">Let's Connect</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} currentPath={pathname || ""} />
    </header>
  )
}
