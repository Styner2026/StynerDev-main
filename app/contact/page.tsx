"use client"

import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import AnimatedSection from "../../components/animated-section"
import { useState } from "react"
import { useToast } from "../../hooks/use-toast"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully! ✉️",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        toast({
          title: "Error sending message",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Network Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with Headshot */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mb-16 py-12 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection animation="animate-slideInLeft" delay={200}>
                <div className="text-sm mb-2 dark:text-gray-300">(GET IN TOUCH)</div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 dark:text-white">
                  LET'S <span className="font-['Serif_Italic'] italic font-normal">discuss</span> YOUR
                  <br className="hidden sm:block" /> NEXT PROJECT
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                  Ready to transform your ideas into reality? I'm here to help you build innovative solutions that drive
                  growth and efficiency.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="animate-fadeIn" delay={400}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
                    <p className="text-gray-700 dark:text-gray-300">Quick Response Time</p>
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
                    <p className="text-gray-700 dark:text-gray-300">Free Initial Consultation</p>
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
                    <p className="text-gray-700 dark:text-gray-300">Flexible Meeting Options</p>
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
                    <p className="text-gray-700 dark:text-gray-300">Tailored Solutions</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="md:w-1/2 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#ff6347]/20 shadow-xl transform hover:scale-105 transition-transform duration-300 mb-8">
                <Image src="/styner-headshot.png" alt="Professional headshot" fill className="object-cover" priority />
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-2 text-black dark:text-black">Connect on Social Media</h3>
                  <div className="w-40 h-1 bg-[#ff6347] rounded-full mb-4"></div>
                </div>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://x.com/StynerDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center text-[#ff6347] hover:bg-[#ff6347] hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/styner-stiner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center text-[#ff6347] hover:bg-[#ff6347] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Styner2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center text-[#ff6347] hover:bg-[#ff6347] hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
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
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center text-[#ff6347] hover:bg-[#ff6347] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content: Two Columns - Contact Form and Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left Column - Contact Form */}
        <AnimatedSection animation="animate-fadeInUp" delay={200}>
          <div id="contact-form">
            <div className="text-sm mb-2">(CONTACT FORM)</div>
            <h2 className="text-3xl font-bold mb-4">
              SEND ME A <span className="font-['Serif_Italic'] italic font-normal">message</span>
            </h2>
            <p className="text-gray-700 mb-8">
              Fill out the form below and I'll get back to you as soon as possible. I'm looking forward to discussing
              your project!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#ff6347] focus:border-[#ff6347]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#ff6347] focus:border-[#ff6347]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#ff6347] focus:border-[#ff6347]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#ff6347] focus:border-[#ff6347] min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-3 shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[0_4px_0_0_#d43c20]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </AnimatedSection>

        {/* Right Column - Contact Info and Social */}
        <div>
          <div className="text-sm mb-2">(CONTACT INFORMATION)</div>
          <h2 className="text-3xl font-bold mb-4">
            LET'S <span className="font-['Serif_Italic'] italic font-normal">connect</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Have questions or want to discuss a project? Reach out through any of these channels or schedule a meeting.
          </p>

          <div className="space-y-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-[#ff6347]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black">Email</h3>
                  <a href="mailto:contact@styner.dev" className="text-[#ff6347] hover:underline">
                    contact@styner.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-[#ff6347]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black">Phone</h3>
                  <span className="text-[#ff6347]">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-[#ff6347]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black">Location</h3>
                  <p className="text-gray-700">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-[#ff6347]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black">Office Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9AM - 5PM PST</p>
                  <p className="text-gray-700">Weekend: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12 px-6 bg-gradient-to-r from-[#ff6347]/10 to-[#ff6347]/5 rounded-xl border border-[#ff6347]/20">
        <h2 className="text-3xl font-bold mb-4">
          READY TO <span className="font-['Serif_Italic'] italic font-normal">collaborate</span>?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Let's work together to bring your ideas to life. Whether you have a specific project in mind or just want to
          explore possibilities, I'm here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact-form">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-8 py-4 shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200">
              Send a Message
            </Button>
          </a>
          <a href="https://calendly.com/stynerdev/30min" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-8 py-4 shadow-[0_4px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] hover:translate-y-[2px] transition-all duration-200"
            >
              Schedule a Call
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
