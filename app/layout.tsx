import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// Comment out or remove this import if you haven't installed @vercel/analytics
// import { Analytics } from "@vercel/analytics/react"
import Header from "../components/header"
import Footer from "../components/footer"
import ScrollToTop from "../components/scroll-to-top"
import { ThemeProvider } from "../components/theme-provider"
import { Toaster } from "../components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Styner Dev - Full-Stack Developer & AI Specialist",
  description:
    "Professional portfolio of a full-stack developer specializing in React, Next.js, and AI integration.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToTop />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        {/* Comment out Analytics component if you haven't installed @vercel/analytics */}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
