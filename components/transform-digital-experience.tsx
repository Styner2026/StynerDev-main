import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function TransformDigitalExperience() {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#ff6347]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Ready to Transform Your <span className="text-[#ff6347]">Digital Experience</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Let's collaborate on your next project and create something extraordinary together.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Custom Development */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/modern-software-development.png"
                alt="Custom Development"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#ff6347]/10 flex items-center justify-center mr-3">
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
                    className="text-[#ff6347]"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </span>
                Custom Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Tailored solutions built with cutting-edge technologies to meet your specific needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Web & Mobile Applications</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">API Development & Integration</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Custom Software Solutions</span>
                </li>
              </ul>
              <Link
                href="/services/custom-development"
                className="text-[#ff6347] font-medium flex items-center text-sm hover:underline"
              >
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* AI Solutions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/futuristic-ai-visualization.png"
                alt="AI Solutions"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#ff6347]/10 flex items-center justify-center mr-3">
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
                    className="text-[#ff6347]"
                  >
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.2 7 12 8 12s8-6.8 8-12a8 8 0 0 0-8-8Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                AI Solutions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Harness the power of artificial intelligence to automate processes and gain insights.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Intelligent Chatbots</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Predictive Analytics</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Workflow Automation</span>
                </li>
              </ul>
              <Link
                href="/services/custom-ai"
                className="text-[#ff6347] font-medium flex items-center text-sm hover:underline"
              >
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Technical Consultation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/business-tech-strategy.png"
                alt="Technical Consultation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#ff6347]/10 flex items-center justify-center mr-3">
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
                    className="text-[#ff6347]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </span>
                Technical Consultation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Expert advice to guide your technical decisions and optimize your digital strategy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Technology Assessment</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Architecture Planning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347] mr-2 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Digital Transformation</span>
                </li>
              </ul>
              <Link
                href="/services/consulting"
                className="text-[#ff6347] font-medium flex items-center text-sm hover:underline"
              >
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-8 py-6 text-lg shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200 rounded-full">
              Get in Touch
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
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
