import Image from "next/image"
import Link from "next/link"
import { Search, Quote } from "lucide-react"
import { Button } from "../components/ui/button"
import AnimatedSection from "../components/animated-section"
import animatedStyles from "../components/animated-section.module.css"
import styles from "./page.module.css"
import React from "react"
import { SkillBar } from "../components/skill-bar"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Developer Introduction Section */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mb-16 py-12 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection className="md:w-1/3" animation="animate-slideInLeft" delay={200}>
              <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="rounded-[24px] overflow-hidden shadow-md max-w-[400px] mx-auto">
                  <video
                    src="https://pub-9b3f815f1cd04880b28e11883a622c70.r2.dev/about-developer%20.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:w-2/3" animation="animate-slideInRight" delay={300}>
              <div className="text-sm mb-2">(ABOUT ME)</div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                FULL-STACK <span className="font-['Serif_Italic'] italic font-normal">Developer</span> & CTO
                <br className="hidden sm:block" /> AI SPECIALIST
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                I'm a passionate developer specializing in building modern web applications, AI solutions, and workflow
                automation systems that solve real business problems.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Blockchain (ICP/DFINITY)</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">AI Systems</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">React & Next.js</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">MT5 Bot Builder</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">OSINT + Cyber Intelligence</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Python</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">C++</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">COBOL</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Rust</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Serverless Architecture</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">AI & Machine Learning</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">API Development</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Workflow Automation</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Mobile Development (Expo)</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Motoko (DFINITY)</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-2 shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200">
                    View My Projects
                  </Button>
                </Link>
                <a href="https://juancarlos-resume.s3.us-east-1.amazonaws.com/CV+Juan+Carlos+Jiron+Juarez.pdf" download>
                  <Button
                    variant="outline"
                    className="px-6 py-2 flex items-center shadow-[0_4px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] hover:translate-y-[2px] transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Resume
                  </Button>
                </a>
                <Link href="/contact">
                  <Button className="px-6 py-2 bg-black text-white hover:bg-gray-800 shadow-[0_4px_0_0_#333333] hover:shadow-[0_2px_0_0_#333333] hover:translate-y-[2px] transition-all duration-200">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/styner-stiner/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border border-[#0A66C2] text-[#0A66C2] bg-white px-6 py-2 shadow-[0_4px_0_0_#0A66C2] hover:shadow-[0_2px_0_0_#0A66C2] hover:translate-y-[2px] hover:bg-[#0A66C2]/10 transition-all duration-200">
                    Connect on LinkedIn
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Inspirational Quote Section */}
      <AnimatedSection animation="animate-fadeInUp" delay={100}>
        <div className="mb-16 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative px-8 py-8">
              <Quote className="absolute top-0 left-0 text-[#ff6347] opacity-30 w-20 h-20 -translate-x-2 -translate-y-2" />
              <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight relative z-10">
                "Code like you're painting the future.{" "}
                <span className="font-['Serif_Italic'] italic font-normal text-[#ff6347]">
                  Debug like you're rewriting fate.
                </span>"
              </blockquote>
              <Quote className="absolute bottom-0 right-0 text-[#ff6347] opacity-30 w-20 h-20 translate-x-2 translate-y-2 rotate-180" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Articles Section */}
      <AnimatedSection animation="animate-fadeInUp" delay={100}>
        <div className="mb-16">
          <div className="text-sm mb-4">(DEAR READER)</div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            EXPLORE MY <span className="font-['Serif_Italic'] italic font-normal">latest</span>
            <br className="hidden sm:block" /> THOUGHTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column - Articles Stacked */}
            <AnimatedSection className="md:col-span-4" animation="animate-slideInLeft" delay={200}>
              {/* First Article */}
              <Link href="/blog/solitude-in-coding">
                <div className="group mb-12">
                  <div className="mb-4 overflow-hidden rounded-md bg-[#9FFCDF]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-UniverseWithin-8MPDrYLep2J1eIJrHDHJAqheR3V5W8.webp"
                      alt="Stressed programmer surrounded by code bugs"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      priority
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-1">
                    Decoding the Universe Within: The Neuroscience and Philosophy of Solitude in Coding
                  </h2>
                  <p className="text-gray-700 text-sm mb-1">Exploring the mental landscape of focused development...</p>
                  <div className="text-xs text-gray-500">Sep 14, 2024 • StynerDev</div>
                </div>
              </Link>

              {/* Second Article */}
              <Link href="/blog/unveiling-the-invisible">
                <div className="group mb-12">
                  <div className="mb-4 overflow-hidden rounded-md bg-[#1EAED3]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DepthsofCoding-oDGo25brfTl5x0E4EvZTWYiMWMwPJG.webp"
                      alt="Cartoon fruits coding with 'CODE!' exclamation"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-1">
                    Unveiling the Invisible: The Profound Depths of Coding Beyond the AI Horizon
                  </h2>
                  <p className="text-gray-700 text-sm mb-1">
                    Exploring the hidden dimensions of programming in the age of artificial intelligence...
                  </p>
                  <div className="text-xs text-gray-500">Sep 14, 2024 • StynerDev</div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Center Column - Featured */}
            <AnimatedSection className="md:col-span-4" animation="animate-zoomIn" delay={400}>
              <Link href="/blog/superintelligence-theoretical-physics">
                <div className="group">
                  <div className="mb-4 overflow-hidden rounded-md">
                    <Image
                      src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/medium-Superintelligence.webp"
                      alt="Custom AI Solutions"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </Link>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold mb-1">
                  The Intersection of Superintelligence and Theoretical Physics
                </h2>
                <p className="text-gray-700">Exploring Two Frontiers of Knowledge</p>
                <div className="text-xs text-gray-500 mt-2">4 min read · Sep 17, 2024 --StynerDev</div>
              </div>
              <Link href="/blog/beyond-artificial-intelligence" className="block mt-8">
                <div className="group">
                  <div className="mb-4 overflow-hidden rounded-md bg-[#FFE5D9]">
                    <Image
                      src="/beyond-artificial-intelligence.webp"
                      alt="Cartoon strawberry character stressed while coding"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-1">
                      Beyond Artificial Intelligence: Unleashing the Infinite Potential of Human Creativity in
                      Coding✨📚🍓
                    </h2>
                    <p className="text-gray-700 text-sm mb-1">
                      Exploring how human creativity transcends AI limitations in software development
                    </p>
                    <div className="text-xs text-gray-500">4 min read · Sep 14, 2024 • StynerDev</div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Right Column - Popular */}
            <AnimatedSection className="md:col-span-4" animation="animate-slideInRight" delay={600}>
              <div className="mb-6 border-l-2 border-[#ff6347] pl-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Most Popular</h3>
                  <Link href="/popular" className="text-xs text-gray-600 uppercase">
                    VIEW ALL
                  </Link>
                </div>

                {[
                  {
                    title: "AI Chatbot Innovation",
                    date: "OCT 15, 2023",
                    author: "STYNER.DEV",
                    image:
                      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Full-Stack Development",
                    date: "JUN 8, 2023",
                    author: "STYNER.DEV",
                    image:
                      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Serverless Architecture",
                    date: "MAY 23, 2023",
                    author: "STYNER.DEV",
                    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    title: "Data Pipeline Solutions",
                    date: "MAR 2, 2023",
                    author: "STYNER.DEV",
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
                  },
                  {
                    title: "Modern Web Applications",
                    date: "DEC 15, 2022",
                    author: "STYNER.DEV",
                    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
                  },
                  {
                    title: "API Integration Strategies",
                    date: "JUL 11, 2024",
                    author: "STYNER.DEV",
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
                  },
                ].map((post, index) => (
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                    <div className="flex items-center space-x-4 mb-6 group">
                      <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 group-hover:text-[#ff6347] transition-colors">{post.title}</h4>
                        <div className="text-xs text-gray-500">
                          {post.date} • {post.author}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Bottom Section - Services */}
      <AnimatedSection animation="animate-fadeInUp">
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-sm mb-2">(DISCOVER MORE)</div>
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                  READ <span className="font-['Serif_Italic'] italic font-normal">more</span> ON MEDIUM
                </h2>
              </div>
              <button aria-label="Search" className="self-start">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Medium Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  title: "Decoding the Universe Within: The Neuroscience and Philosophy of Solitude in Coding",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-UniverseWithin-8MPDrYLep2J1eIJrHDHJAqheR3V5W8.webp",
                  bgColor: "bg-[#9FFCDF]",
                  url: "https://stynerdev.medium.com/decoding-the-universe-within-the-neuroscience-and-philosophy-of-solitude-in-coding-1268b2249621",
                },
                {
                  title: "Unveiling the Invisible: The Profound Depths of Coding Beyond the AI Horizon",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DepthsofCoding-oDGo25brfTl5x0E4EvZTWYiMWMwPJG.webp",
                  bgColor: "bg-[#1EAED3]",
                  url: "https://stynerdev.medium.com/unveiling-the-invisible-the-profound-depths-of-coding-beyond-the-ai-horizon-f1554fea48fc",
                },
                {
                  title: "The Intersection of Superintelligence and Theoretical Physics",
                  image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/medium-Superintelligence.webp",
                  bgColor: "",
                  url: "https://stynerdev.medium.com/the-intersection-of-superintelligence-and-theoretical-physics-exploring-two-frontiers-of-knowledge-e25331a5dfbe",
                },
                {
                  title:
                    "Beyond Artificial Intelligence: Unleashing the Infinite Potential of Human Creativity in Coding",
                  image: "/beyond-artificial-intelligence.webp",
                  bgColor: "bg-[#FFE5D9]",
                  url: "https://stynerdev.medium.com/beyond-artificial-intelligence-unleashing-the-infinite-potential-of-human-creativity-in-c78d5a4a0a35",
                },
              ].map((article, index) => (
                <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 100}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className={`relative h-40 overflow-hidden ${article.bgColor}`}>
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3 bg-white dark:bg-gray-800">
                        <h3 className="text-sm font-medium group-hover:text-[#ff6347] dark:text-[#ff6347] transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-[#ff6347]">
                          <svg viewBox="0 0 1043.63 592.71" className="h-4 w-4 mr-1">
                            <g data-name="Layer 2">
                              <g data-name="Layer 1">
                                <path
                                  d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
                                  fill="#000"
                                />
                              </g>
                            </g>
                          </svg>
                          <span>Read on Medium</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mb-8">
              <a
                href="https://medium.com/@stynerdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
              >
                <span>View all articles on Medium</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-sm mb-2">(SERVICES)</div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">
              MY <span className="font-['Serif_Italic'] italic font-normal">professional</span> SERVICES
            </h2>
          </div>

          {[
            {
              title: "MT5 & Coinbase Trading Bots",
              subtitle: "Automated trading bots built for MetaTrader 5 and Coinbase that execute algorithmic strategies with real-time market data integration and customizable parameters.",
              date: "OCT 15, 2023",
              author: "STYNER.DEV",
              image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/homepage-robot.png",
              url: "https://trading-bots-main.vercel.app/",
            },
            {
              title: "ICP/DFINITY Blockchain",
              subtitle: "Develop decentralized applications and smart contracts on the Internet Computer Protocol (ICP) network, leveraging Motoko and decentralized data storage.",
              date: "JUN 8, 2023",
              author: "STYNER.DEV",
              image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop",
              url: "https://digitalfootprinthub.vercel.app/",
            },
            {
              title: "GhostLens AI",
              subtitle: "A people-verification and OSINT platform that allows users to scan digital footprints, social media, phone numbers, emails, and images for safety and compatibility checks.",
              date: "MAY 23, 2023",
              author: "STYNER.DEV",
              image: "https://pub-64e1445557b64b13a8090df4a17e263e.r2.dev/digitalfootprinthub-Thumbnail.png",
              url: "https://digitalfootprinthub.vercel.app/",
            },
            {
              title: "Serverless Architecture",
              subtitle: "Building scalable cloud-native applications",
              date: "MAR 2, 2023",
              author: "STYNER.DEV",
              image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Full-Stack Development",
              subtitle: "Building modern web applications",
              date: "JAN 5, 2023",
              author: "STYNER.DEV",
              image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Data Pipeline Solutions",
              subtitle: "Building adaptive data pipelines",
              date: "DEC 15, 2022",
              author: "STYNER.DEV",
              image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
            },
          ].map((service, index) => (
            <AnimatedSection key={index} animation="animate-fadeInUp" delay={index * 100}>
              <div className="border-b border-gray-200 pb-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">
                      {service.url ? (
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#ff6347] transition-colors"
                        >
                          {service.title}
                        </a>
                      ) : (
                        <Link
                          href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="hover:text-[#ff6347] transition-colors"
                        >
                          {service.title}
                        </Link>
                      )}
                    </h3>
                    <p className="text-gray-700 mb-2">{service.subtitle}</p>
                    <div className="text-xs text-gray-500">
                      {service.date} • {service.author}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    {service.url ? (
                      <a href={service.url} target="_blank" rel="noopener noreferrer" title={`Visit ${service.title}`}>
                        <div className="overflow-hidden rounded-md w-full md:w-40 h-40 bg-gray-100">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            width={160}
                            height={160}
                            className="w-full h-full object-contain transition-transform hover:scale-105 p-2"
                          />
                        </div>
                      </a>
                    ) : (
                      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <div className="overflow-hidden rounded-md w-full md:w-40 h-40 bg-gray-100">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            width={160}
                            height={160}
                            className="w-full h-full object-contain transition-transform hover:scale-105 p-2"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Certifications/Badges Section */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mt-16 border-t border-gray-200 pt-8 mb-16">
          <div className="mb-8">
            <div className="text-sm mb-2">(ACHIEVEMENTS)</div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">
              MY <span className="font-['Serif_Italic'] italic font-normal">codility</span> BADGES
            </h2>
            <p className="text-gray-700 mb-8">
              These badges represent verified skills and achievements from various platforms, demonstrating my
              problem-solving abilities and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              {
                name: "Professional Scrum Master™ I (PSM I)",
                issuer: "Scrum.org",
                date: "Issued 4/9/23",
                image: "/psmi.png",
              },
              {
                name: "Professional Scrum Master™ II (PSM II)",
                issuer: "Scrum.org",
                date: "Issued 4/17/23",
                image: "/psmii.png",
              },
              {
                name: "Cloud Computing Core",
                issuer: "edX",
                date: "Issued 10/15/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/CloudComputingCore.png",
              },
              {
                name: "Web Development with HTML5, CSS3, and JavaScript",
                issuer: "edX",
                date: "Issued 10/15/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/WebDevelopmentwithHTML5-CSS3-and-JavaScript.png",
              },
              {
                name: "Front-end Development with React",
                issuer: "edX",
                date: "Issued 11/1/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Front-end-Development-with-React.png",
              },
              {
                name: "Front-end Development with React",
                issuer: "Coursera",
                date: "Issued 11/2/23",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Front-end%20Development-j04KqFvyovAhxk39GkcYT5BqaVOv8R.png",
              },
              {
                name: "ISC2 Candidate",
                issuer: "ISC2",
                date: "Issued 7/26/23",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-815mewscqy1FWkzKScCzHLT9GgGXjh.png",
              },
              {
                name: "Google Project Management Certificate (v1)",
                issuer: "Coursera",
                date: "Issued 9/10/23",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GCC_badge_PGM_1000x1000-eUFtShrVwhoiI6HfAp8p0ul402Isut.png",
              },
              {
                name: "Introduction to Containers, Kubernetes, and Container Platforms",
                issuer: "edX",
                date: "Issued 11/7/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Introduction-to-Containers-Kubernetes-and-Container-Platforms.png",
              },
              {
                name: "Node and Express Essentials",
                issuer: "edX",
                date: "Issued 11/8/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Node-and-Express-Essentials.png",
              },
              {
                name: "Python Essentials",
                issuer: "edX",
                date: "Issued 11/9/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Python-Essentials.png",
              },
              {
                name: "Django Application Development with SQL and Databases",
                issuer: "edX",
                date: "Issued 11/11/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Django-Application-Development-with-SQL-and-Databases.png",
              },
              {
                name: "Microservices and Serverless",
                issuer: "edX",
                date: "Issued 11/15/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Microservices-and-Serverless.png",
              },
              {
                name: "Python for AI & Development Project",
                issuer: "edX",
                date: "Issued 11/21/23",
                image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Python-for-AI-%26-Development-Project.png",
              },
            ].map((badge, index) => (
              <AnimatedSection key={index} animation="animate-zoomIn" delay={index * 50} threshold={0.1}>
                <div className="group">
                  <div className={`bg-gray-50 ${badge.image?.includes('CloudComputingCore') || badge.image?.includes('WebDevelopmentwithHTML5') || badge.image?.includes('Front-end-Development-with-React') || badge.image?.includes('image-815mewscqy1FWkzKScCzHLT9GgGXjh') || badge.image?.includes('Introduction-to-Containers-Kubernetes-and-Container-Platforms') || badge.image?.includes('Node-and-Express-Essentials') || badge.image?.includes('Python-Essentials') || badge.image?.includes('Django-Application-Development-with-SQL-and-Databases') || badge.image?.includes('Microservices-and-Serverless') || badge.image?.includes('Python-for-AI-%26-Development-Project') ? 'rounded-lg' : 'rounded-full'} overflow-hidden aspect-square flex items-center justify-center border border-gray-200 hover:border-[#ff6347] transition-colors p-2`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          badge.image ||
                          `/abstract-geometric-shapes.png?key=rhrz5&height=200&width=200&query=${badge.name || "/placeholder.svg"} certification badge`
                        }
                        alt={`${badge.name} certification badge`}
                        fill
                        className="object-contain p-2 transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2 font-medium">{badge.name}</p>
                  <p className="text-center text-xs text-gray-500">{badge.issuer}</p>
                  <p className="text-center text-xs text-gray-500">{badge.date}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.credly.com/users/kishana.stiner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
            >
              <span>View my full certification profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection animation="animate-fadeInUp">
        <div className="mt-16 border-t border-gray-200 pt-8 mb-16">
          <div className="mb-8">
            <div className="text-sm mb-2">(TESTIMONIALS)</div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">
              WHAT <span className="font-['Serif_Italic'] italic font-normal">clients</span> SAY
            </h2>
            <p className="text-gray-700 mb-8">
              Feedback from clients and collaborators who have experienced working with me on various projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working with Juan Carlos was a game-changer for our AI implementation. His technical expertise combined with business acumen delivered results that exceeded our expectations.",
                author: "Sarah Johnson",
                position: "CTO, TechInnovate Solutions",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                quote:
                  "The custom chatbot solution transformed our customer service operations. Response times decreased by 60% and our team can now focus on complex issues while the AI handles routine inquiries.",
                author: "Michael Chen",
                position: "Operations Director, Global Retail",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                quote:
                  "Juan Carlos has a rare ability to translate complex technical concepts into business value. His workflow automation solution saved us countless hours and significantly reduced errors.",
                author: "Priya Patel",
                position: "Product Manager, FinTech Innovations",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 200}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Breakdown Section */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mt-16 border-t border-gray-200 pt-8 mb-16">
          <div className="mb-8">
            <div className="text-sm mb-2">(EXPERTISE)</div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">
              MY <span className="font-['Serif_Italic'] italic font-normal">technical</span> SKILLS
            </h2>
            <p className="text-gray-700 mb-8">
              A detailed breakdown of my technical proficiencies and expertise levels across various technologies and
              domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { name: "AI & Machine Learning", level: 90 },
              { name: "React & Next.js", level: 95 },
              { name: "Node.js & Express", level: 85 },
              { name: "TypeScript/JavaScript", level: 95 },
              { name: "Python", level: 80 },
              { name: "SQL & NoSQL Databases", level: 85 },
              { name: "RESTful API Development", level: 90 },
              { name: "GraphQL", level: 75 },
              { name: "Serverless Architecture", level: 85 },
              { name: "Docker & Kubernetes", level: 70 },
              { name: "AWS Cloud Services", level: 80 },
              { name: "CI/CD & DevOps", level: 75 },
            ].map((skill, index) => (
              <AnimatedSection
                key={index}
                animation="animate-slideInLeft"
                delay={index * 100}
                className="skill-section"
              >
                <SkillBar name={skill.name} level={skill.level} isVisible={true} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Professional Experience Timeline */}
      <AnimatedSection animation="animate-fadeInUp">
        <div className="mt-16 border-t border-gray-200 pt-8 mb-16">
          <div className="mb-8">
            <div className="text-sm mb-2 text-center">(EXPERIENCE)</div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center">
              MY <span className="font-['Serif_Italic'] italic font-normal">professional</span> JOURNEY
            </h2>
            <p className="text-gray-700 mb-8 text-center mx-auto">
              A timeline of my career highlights and professional experiences that have shaped my expertise.
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Timeline vertical line - positioned for both mobile and desktop */}
            <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-gray-200"></div>

            {/* Headline skills entry */}
            <AnimatedSection animation="animate-slideInUp" delay={0}>
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Left side content for desktop / top content for mobile */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-8 order-1">
                    <h3 className="text-xl font-semibold">OSINT + Cyber Intelligence</h3>
                    <div className="text-[#ff6347] font-medium">Security Research</div>
                    <div className="text-sm text-gray-600 mb-4">Specialized Expertise</div>
                    <div className="text-gray-700 space-y-2">
                      <p>Threat Intelligence Analysis</p>
                      <p>Digital Forensics</p>
                      <p>Open Source Intelligence</p>
                      <p>Security Automation</p>
                    </div>
                  </div>

                  {/* Timeline marker */}
                  <div className="absolute left-4 top-0 md:left-1/2 md:top-1/2 transform md:translate-x-[-50%] md:translate-y-[-50%] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#ff6347] shadow flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Right side content for desktop / second content for mobile */}
                  <div className="w-full pl-12 md:w-5/12 md:pl-8 order-2 mt-8 md:mt-0">
                    <h3 className="text-xl font-semibold">Python, C++, COBOL, Rust</h3>
                    <div className="text-[#ff6347] font-medium">Programming Languages</div>
                    <div className="text-sm text-gray-600 mb-4">Core Expertise</div>
                    <div className="text-gray-700 space-y-2">
                      <p>Systems programming and legacy integration</p>
                      <p>High-performance computing applications</p>
                      <p>Memory-safe development practices</p>
                      <p>Cross-platform compatibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Senior Full-Stack Developer & AI Specialist */}
            <AnimatedSection animation="animate-slideInUp" delay={300}>
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Left side content for desktop / top content for mobile */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-8 order-1">
                    <h3 className="text-xl font-semibold">Advanced Tech Stack</h3>
                    <div className="text-[#ff6347] font-medium">Software Engineering</div>
                    <div className="text-sm text-gray-600 mb-4">Systems Design</div>
                    <div className="text-gray-700 space-y-2">
                      <p>Architecture optimization</p>
                      <p>AI integration strategies</p>
                      <p>Autonomous agent development</p>
                      <p>Enterprise-scale solutions</p>
                    </div>
                  </div>

                  {/* Timeline marker */}
                  <div className="absolute left-4 top-0 md:left-1/2 md:top-1/2 transform md:translate-x-[-50%] md:translate-y-[-50%] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#ff6347] shadow flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Right side content for desktop / second content for mobile */}
                  <div className="w-full pl-12 md:w-5/12 md:pl-8 order-2 mt-8 md:mt-0">
                    <h3 className="text-xl font-semibold">AI Systems + Blockchain</h3>
                    <div className="text-[#ff6347] font-medium">ICP/DFINITY, Motoko</div>
                    <div className="text-sm text-gray-600 mb-4">Advanced Technologies</div>
                    <div className="text-gray-700 space-y-2">
                      <p>Decentralized application development</p>
                      <p>Smart contract implementation</p>
                      <p>Internet Computer Protocol integration</p>
                      <p>Distributed systems architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Full-Stack Developer */}
            <AnimatedSection animation="animate-slideInUp" delay={600}>
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Left side content for desktop / top content for mobile */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-8 order-1">
                    <h3 className="text-xl font-semibold">Server & Database Engineering</h3>
                    <div className="text-[#ff6347] font-medium">Backend Architecture</div>
                    <div className="text-sm text-gray-600 mb-4">Infrastructure Expertise</div>
                    <div className="text-gray-700 space-y-2">
                      <p>API design and implementation</p>
                      <p>Database optimization and scaling</p>
                      <p>Cloud infrastructure management</p>
                      <p>Microservices architecture</p>
                    </div>
                  </div>

                  {/* Timeline marker */}
                  <div className="absolute left-4 top-0 md:left-1/2 md:top-1/2 transform md:translate-x-[-50%] md:translate-y-[-50%] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#ff6347] shadow flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Right side content for desktop / second content for mobile */}
                  <div className="w-full pl-12 md:w-5/12 md:pl-8 order-2 mt-8 md:mt-0">
                    <h3 className="text-xl font-semibold">Web & Mobile Development</h3>
                    <div className="text-[#ff6347] font-medium">React/Next.js, Expo Go</div>
                    <div className="text-sm text-gray-600 mb-4">Frontend Expertise</div>
                    <div className="text-gray-700 space-y-2">
                      <p>Responsive cross-platform interfaces</p>
                      <p>Server-side rendering optimization</p>
                      <p>Native mobile integration</p>
                      <p>Progressive web applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Front-End Developer */}
            <AnimatedSection animation="animate-slideInUp" delay={900}>
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Left side content for desktop / top content for mobile */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-8 order-1">
                    <h3 className="text-xl font-semibold">UI/UX Design Systems</h3>
                    <div className="text-[#ff6347] font-medium">Design Implementation</div>
                    <div className="text-sm text-gray-600 mb-4">Creative Solutions</div>
                    <div className="text-gray-700 space-y-2">
                      <p>Responsive interface architecture</p>
                      <p>Design system implementation</p>
                      <p>Interactive prototyping</p>
                      <p>Accessibility optimization</p>
                    </div>
                  </div>

                  {/* Timeline marker */}
                  <div className="absolute left-4 top-0 md:left-1/2 md:top-1/2 transform md:translate-x-[-50%] md:translate-y-[-50%] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#ff6347] shadow flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Right side content for desktop / second content for mobile */}
                  <div className="w-full pl-12 md:w-5/12 md:pl-8 order-2 mt-8 md:mt-0">
                    <h3 className="text-xl font-semibold">MT5 Bot Builder</h3>
                    <div className="text-[#ff6347] font-medium">MetaTrader 5 & Algorithmic Trading</div>
                    <div className="text-sm text-gray-600 mb-4">Financial Technology</div>
                    <div className="text-gray-700 space-y-2">
                      <p>Automated trading system development</p>
                      <p>MQL5 programming expertise</p>
                      <p>Risk management algorithms</p>
                      <p>Market analysis and backtesting</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Recent Projects Showcase */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mt-16 border-t border-gray-200 pt-8 mb-16">
          <div className="mb-8">
            <div className="text-sm mb-2">(PORTFOLIO)</div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">
              RECENT <span className="font-['Serif_Italic'] italic font-normal">project</span> HIGHLIGHTS
            </h2>
            <p className="text-gray-700 mb-8">
              A selection of my most recent and impactful projects showcasing my technical capabilities and
              problem-solving approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Content Management",
                description:
                  "A content management system enhanced with AI capabilities for automated content organization, tagging, and recommendations.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
                tags: ["Next.js", "AI", "Prisma", "PostgreSQL"],
                url: "https://your-project-url.com/ai-cms", // Replace with your actual project URL
              },
              {
                title: "Workflow Automation Platform",
                description:
                  "Enterprise-grade platform that automates complex business workflows across multiple systems and departments.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                tags: ["React", "Node.js", "Temporal", "AWS"],
                url: "https://your-project-url.com/workflow-platform", // Replace with your actual project URL
              },
              {
                title: "Healthcare Assistant Chatbot",
                description:
                  "An intelligent chatbot system for healthcare providers that assists patients with scheduling, information, and basic triage.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
                tags: ["AI", "OpenAI", "React", "Python"],
                url: "https://your-project-url.com/healthcare-chatbot", // Replace with your actual project URL
              },
              {
                title: "Real-time Analytics Dashboard",
                description:
                  "Interactive dashboard providing real-time insights into business metrics with customizable views and alerts.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                tags: ["D3.js", "Next.js", "Firebase", "WebSockets"],
                url: "https://your-project-url.com/analytics-dashboard", // Replace with your actual project URL
              },
              {
                title: "Serverless E-commerce Platform",
                description:
                  "Modern e-commerce solution built on a completely serverless architecture for maximum scalability and minimal maintenance.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
                tags: ["AWS Lambda", "Next.js", "DynamoDB", "Stripe"],
                url: "https://your-project-url.com/serverless-ecommerce", // Replace with your actual project URL
              },
              {
                title: "Autonomous Data Pipeline",
                description:
                  "Intelligent data pipeline that adapts to changing data patterns, ensuring consistent data quality and reliable analytics.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
                tags: ["Python", "Apache Airflow", "ML", "AWS"],
                url: "https://your-project-url.com/data-pipeline", // Replace with your actual project URL
              },
            ].map((project, index) => (
              <AnimatedSection key={index} animation="animate-zoomIn" delay={index * 100}>
                <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block flex-grow">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff6347] dark:text-[#ff6347] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium">
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://your-projects-page.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-2 shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200">
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Closing Section */}
      <AnimatedSection animation="animate-fadeInUp">
        <div className="mt-16 border-t border-gray-200 pt-12 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-sm mb-2">(LET'S CONNECT)</div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">
              READY TO <span className="font-['Serif_Italic'] italic font-normal">transform</span> YOUR IDEAS INTO
              REALITY?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              I'm currently available for freelance work and exciting collaborations. Whether you need a custom AI
              solution, a modern web application, or workflow automation - let's discuss how we can work together to
              achieve your goals.
            </p>

            <AnimatedSection animation="animate-zoomIn" delay={200}>
              <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-md max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-3 flex items-center dark:!text-black">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Open to Work
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-medium text-[#ff6347] mb-2 dark:!text-black">Full-Time Employment</h4>
                    <p className="text-gray-700 mb-3 text-sm dark:!text-black">Seeking opportunities with innovative companies in:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm dark:!text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 text-[#ff6347]"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Full-Stack Development</span>
                      </li>
                      <li className="flex items-center text-sm dark:!text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 text-[#ff6347]"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>AI Solutions</span>
                      </li>
                      <li className="flex items-center text-sm dark:!text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 text-[#ff6347]"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Workflow Automation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#ff6347] mb-2 dark:!text-black">Freelance & Contract</h4>
                    <p className="text-gray-700 mb-3 text-sm dark:!text-black">Available for project-based work in:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm dark:!text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 text-[#ff6347]"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Serverless Architecture</span>
                      </li>
                      <li className="flex items-center text-sm dark:!text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 text-[#ff6347]"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Technical Consulting</span>
                      </li>
                      <li className="flex items-center text-sm dark:!text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 text-[#ff6347]"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Custom AI Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center pt-2 border-t border-gray-200">
                  <p className="text-gray-700 font-medium">
                    Open to both permanent positions and freelance opportunities. Let's connect!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Quote Banner */}
            <div className="mb-8 p-8 bg-gradient-to-r from-[#ff6347]/10 to-[#ff6347]/5 rounded-lg border border-[#ff6347]/20 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[#ff6347]/20">
                <Quote size={60} />
              </div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-['Serif_Italic'] italic text-gray-800 mb-6">
                  "The best way to predict the future is to create it. I believe in building technology that empowers
                  people and solves real problems."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#ff6347]">
                    <Image
                      src="/styner-headshot.png"
                      alt="Juan Carlos"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Styner.dev</p>
                    <p className="text-sm text-gray-600">Full-Stack Developer & AI Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact">
                <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-8 py-6 text-lg shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200">
                  Get in Touch
                </Button>
              </Link>
              <a href="mailto:contact@styner.dev">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg shadow-[0_4px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] hover:translate-y-[2px] transition-all duration-200"
                >
                  contact@styner.dev
                </Button>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center hover:bg-[#ff6347]/20 transition-colors"
                aria-label="Visit my GitHub profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0  0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center hover:bg-[#ff6347]/20 transition-colors"
                aria-label="Visit my LinkedIn profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center hover:bg-[#ff6347]/20 transition-colors"
                aria-label="Visit my Twitter profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center hover:bg-[#ff6347]/20 transition-colors"
                aria-label="Visit my Medium blog"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
                  <path d="M8 7h8"></path>
                  <path d="M8 11h8"></path>
                  <path d="M8 15h5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
