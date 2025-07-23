"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, ArrowRight, FileText, Hash } from "lucide-react"
import Link from "next/link"

type ContentSection = {
  title: string
  content: string
  anchor?: string
}

type PageData = {
  title: string
  url: string
  description: string
  sections: ContentSection[]
  keywords: string[]
}

// Expanded site data with content sections
const siteContent: PageData[] = [
  {
    title: "Home",
    url: "/",
    description: "Main landing page",
    keywords: ["developer", "portfolio", "AI", "software", "services"],
    sections: [
      { title: "Hero", content: "AI and software development services" },
      { title: "Services", content: "AI chatbots, custom AI solutions, software development, workflow automation" },
      { title: "Projects", content: "Featured projects and case studies" },
    ],
  },
  {
    title: "About",
    url: "/about",
    description: "Learn about my background and experience",
    keywords: ["about", "experience", "skills", "education", "resume", "CV", "background"],
    sections: [
      { title: "Bio", content: "Professional background and experience in software development and AI" },
      { title: "Skills", content: "Programming languages, frameworks, AI technologies, machine learning" },
      { title: "Education", content: "Academic background, certifications, and continuous learning" },
      { title: "Resume", content: "Professional experience and qualifications", anchor: "#resume" },
      { title: "Community Involvement", content: "Volunteering and community service activities" },
    ],
  },
  {
    title: "Projects",
    url: "/projects",
    description: "Browse my portfolio of work",
    keywords: ["projects", "portfolio", "case studies", "work", "clients"],
    sections: [
      { title: "AI Projects", content: "AI-powered applications and solutions", anchor: "#ai-projects" },
      { title: "Web Development", content: "Websites and web applications", anchor: "#web-dev" },
      { title: "Mobile Apps", content: "iOS and Android applications", anchor: "#mobile" },
      { title: "Enterprise Solutions", content: "Large-scale business applications", anchor: "#enterprise" },
    ],
  },
  {
    title: "AI Chatbot Service",
    url: "/services/ai-chatbot",
    description: "Custom AI chatbot development services",
    keywords: ["AI", "chatbot", "conversational AI", "NLP", "customer service"],
    sections: [
      { title: "Chatbot Features", content: "Natural language processing, personalization, multi-platform support" },
      { title: "Use Cases", content: "Customer support, lead generation, internal knowledge base" },
      { title: "Technology", content: "GPT-4, custom models, integration capabilities" },
    ],
  },
  {
    title: "Custom AI Solutions",
    url: "/services/custom-ai",
    description: "Tailored AI solutions for your business",
    keywords: ["AI", "machine learning", "custom solutions", "business intelligence"],
    sections: [
      { title: "AI Consulting", content: "Strategic AI implementation and roadmapping" },
      { title: "Custom Models", content: "Tailored AI models for specific business needs" },
      { title: "Data Analysis", content: "AI-powered data analysis and insights" },
    ],
  },
  {
    title: "Software Development",
    url: "/services/software-development",
    description: "Professional software development services",
    keywords: ["software", "development", "programming", "applications", "web", "mobile"],
    sections: [
      { title: "Web Applications", content: "Modern, responsive web applications" },
      { title: "Mobile Development", content: "iOS and Android app development" },
      { title: "Backend Systems", content: "Scalable server architecture and APIs" },
    ],
  },
  {
    title: "Workflow Automation",
    url: "/services/workflow-automation",
    description: "Automate your business processes",
    keywords: ["automation", "workflow", "business process", "efficiency"],
    sections: [
      { title: "Process Analysis", content: "Identifying automation opportunities" },
      { title: "Custom Automation", content: "Tailored workflow automation solutions" },
      { title: "Integration", content: "Connecting existing systems and tools" },
    ],
  },
  {
    title: "Autonomous Agent Solutions",
    url: "/services/autonomous-agent-solutions",
    description: "AI agents that work for you",
    keywords: ["AI", "agents", "autonomous", "automation", "intelligent agents"],
    sections: [
      { title: "Agent Types", content: "Research agents, customer service agents, data processing agents" },
      { title: "Agent Capabilities", content: "Decision making, learning, task execution" },
      { title: "Implementation", content: "Integration with existing systems and workflows" },
    ],
  },
  {
    title: "Superintelligence Blog",
    url: "/blog/superintelligence-theoretical-physics",
    description: "Exploring superintelligence and theoretical physics",
    keywords: ["AI", "superintelligence", "theoretical physics", "research", "future"],
    sections: [
      { title: "Superintelligence", content: "Concepts and implications of superintelligent AI" },
      { title: "Theoretical Physics", content: "Connections between AI and physics theories" },
      { title: "Future Implications", content: "How these fields might shape our future" },
    ],
  },
  {
    title: "Solitude in Coding",
    url: "/blog/solitude-in-coding",
    description: "Reflections on the solitary nature of coding",
    keywords: ["coding", "programming", "solitude", "remote work", "developer life"],
    sections: [
      { title: "The Coding Journey", content: "Personal experiences with programming" },
      { title: "Finding Balance", content: "Balancing solitary work with collaboration" },
      { title: "Remote Work", content: "Thriving in remote development environments" },
    ],
  },
  {
    title: "Unveiling the Invisible",
    url: "/blog/unveiling-the-invisible",
    description: "Exploring hidden patterns in technology",
    keywords: ["patterns", "technology", "hidden systems", "analysis"],
    sections: [
      { title: "Pattern Recognition", content: "Identifying patterns in complex systems" },
      { title: "Technology Insights", content: "Revealing the invisible structures in technology" },
      { title: "Future Directions", content: "Where these patterns might lead us" },
    ],
  },
]

type SearchResult = {
  pageTitle: string
  pageUrl: string
  matchType: "title" | "description" | "section" | "keyword"
  matchText: string
  sectionTitle?: string
  sectionAnchor?: string
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

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

  // Enhanced search through content and sections
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const searchResults: SearchResult[] = []

    siteContent.forEach((page) => {
      // Check page title
      if (page.title.toLowerCase().includes(query)) {
        searchResults.push({
          pageTitle: page.title,
          pageUrl: page.url,
          matchType: "title",
          matchText: page.title,
        })
      }

      // Check page description
      else if (page.description.toLowerCase().includes(query)) {
        searchResults.push({
          pageTitle: page.title,
          pageUrl: page.url,
          matchType: "description",
          matchText: page.description,
        })
      }

      // Check keywords
      else if (page.keywords.some((keyword) => keyword.toLowerCase().includes(query))) {
        const matchingKeyword = page.keywords.find((keyword) => keyword.toLowerCase().includes(query))
        if (matchingKeyword) {
          searchResults.push({
            pageTitle: page.title,
            pageUrl: page.url,
            matchType: "keyword",
            matchText: matchingKeyword,
          })
        }
      }

      // Check sections
      page.sections.forEach((section) => {
        if (section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query)) {
          searchResults.push({
            pageTitle: page.title,
            pageUrl: section.anchor ? `${page.url}${section.anchor}` : page.url,
            matchType: "section",
            matchText: section.content,
            sectionTitle: section.title,
            sectionAnchor: section.anchor,
          })
        }
      })
    })

    // Remove duplicates (prefer section matches over page matches)
    const uniqueResults = searchResults.filter((result, index, self) => {
      const firstIndex = self.findIndex(
        (r) => r.pageUrl === result.pageUrl && (!r.sectionAnchor || r.sectionAnchor === result.sectionAnchor),
      )
      return index === firstIndex
    })

    setResults(uniqueResults)
  }, [searchQuery])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        <div className="p-4 border-b flex items-center">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search content across the site..."
            className="flex-1 outline-none text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {searchQuery.trim() === "" ? (
            <div className="p-8 text-center text-gray-500">
              <p>Try searching for "AI", "resume", "projects", etc.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No results found for "{searchQuery}"</p>
            </div>
          ) : (
            <ul className="divide-y">
              {results.map((result, index) => (
                <li key={index}>
                  <Link
                    href={result.pageUrl}
                    onClick={onClose}
                    className="flex items-start p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 mt-1">
                      {result.matchType === "section" ? (
                        <Hash className="h-5 w-5 text-[#ff6347]" />
                      ) : (
                        <FileText className="h-5 w-5 text-[#ff6347]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{result.pageTitle}</h3>
                      {result.matchType === "section" && result.sectionTitle && (
                        <p className="text-sm font-medium text-[#ff6347]">Section: {result.sectionTitle}</p>
                      )}
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{result.matchText}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 ml-2 mt-1 flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
