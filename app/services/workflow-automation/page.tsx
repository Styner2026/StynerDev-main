import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function WorkflowAutomationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Seamless Workflow Automation</h1>
          <p className="text-xl text-gray-700 mb-8">
            Enable frictionless operations with API integrations, system synchronization, and smooth API migrations for
            maximum efficiency and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-6 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="px-6 py-6 text-lg">
              View Case Studies
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=800&query=digital workflow automation diagram with connected systems and glowing lines"
              alt="Workflow Automation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Streamline Your Business Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "API Integration",
              description:
                "Connect disparate systems and applications seamlessly, enabling smooth data flow and unified operations across your organization.",
              icon: (
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
                  className="text-[#ff6347]"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              ),
            },
            {
              title: "System Synchronization",
              description:
                "Ensure real-time data consistency across multiple platforms, eliminating silos and providing a single source of truth for your business.",
              icon: (
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
                  className="text-[#ff6347]"
                >
                  <path d="M21 12a9 9 0 0 1-9 9"></path>
                  <path d="M3 12a9 9 0 0 1 9-9"></path>
                  <path d="m3 9 3 3-3 3"></path>
                  <path d="m21 15-3-3 3-3"></path>
                </svg>
              ),
            },
            {
              title: "API Migration",
              description:
                "Smoothly transition between different API versions or providers without disrupting your business operations, ensuring continuity and enhanced functionality.",
              icon: (
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
                  className="text-[#ff6347]"
                >
                  <path d="M16 3h5v5"></path>
                  <path d="M8 3H3v5"></path>
                  <path d="M3 16v5h5"></path>
                  <path d="M16 21h5v-5"></path>
                  <path d="m21 3-7 7"></path>
                  <path d="m3 21 7-7"></path>
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-20 bg-gray-50 py-16 px-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Our Workflow Automation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Discovery",
              description:
                "We analyze your current workflows, identify bottlenecks, and determine opportunities for automation.",
            },
            {
              step: "2",
              title: "Solution Design",
              description:
                "Our experts design custom automation solutions that integrate with your existing systems and processes.",
            },
            {
              step: "3",
              title: "Implementation",
              description:
                "We deploy the automation solutions, ensuring seamless integration and minimal disruption to your operations.",
            },
            {
              step: "4",
              title: "Optimization",
              description:
                "Continuous monitoring and refinement ensure your automated workflows evolve with your business needs.",
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ff6347] text-white flex items-center justify-center text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-700 text-center">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gray-300">
                  <ArrowRight className="absolute right-0 top-[-8px] text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Real-World Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Customer Onboarding",
              description:
                "Automate the customer onboarding process, reducing time-to-value and improving the customer experience from day one.",
              image:
                "/placeholder.svg?height=400&width=600&query=digital customer onboarding process with progress steps and automation",
            },
            {
              title: "Order Processing",
              description:
                "Streamline order processing from receipt to fulfillment, eliminating manual steps and reducing errors.",
              image:
                "/placeholder.svg?height=400&width=600&query=automated order processing system with digital interface and packages",
            },
            {
              title: "HR Processes",
              description:
                "Automate employee onboarding, time tracking, and benefits administration to free up HR resources for strategic initiatives.",
              image:
                "/placeholder.svg?height=400&width=600&query=HR automation dashboard with employee profiles and digital workflow",
            },
            {
              title: "Financial Operations",
              description:
                "Streamline invoicing, payment processing, and financial reporting for greater accuracy and efficiency.",
              image:
                "/placeholder.svg?height=400&width=600&query=financial automation dashboard with invoices and payment processing",
            },
          ].map((useCase, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 h-[250px] relative rounded-lg overflow-hidden">
                <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-700 mb-4">{useCase.description}</p>
                <Link
                  href={`/case-studies/${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#ff6347] hover:text-[#e5573e] font-medium flex items-center"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Benefits of Workflow Automation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            {
              title: "Increased Productivity",
              description:
                "Eliminate manual tasks and streamline processes, allowing your team to focus on high-value activities.",
            },
            {
              title: "Reduced Errors",
              description:
                "Minimize human error through consistent, automated processes that follow predefined rules and validations.",
            },
            {
              title: "Cost Savings",
              description:
                "Lower operational costs by reducing manual labor, paperwork, and the time spent on repetitive tasks.",
            },
            {
              title: "Improved Compliance",
              description:
                "Ensure consistent adherence to regulatory requirements with automated workflows that enforce compliance.",
            },
            {
              title: "Enhanced Visibility",
              description:
                "Gain real-time insights into your operations with comprehensive dashboards and reporting capabilities.",
            },
            {
              title: "Scalable Operations",
              description:
                "Easily scale your business operations without proportional increases in administrative overhead.",
            },
          ].map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-5 w-5 text-[#ff6347]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Technologies We Leverage</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "RESTful APIs",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              ),
            },
            {
              name: "GraphQL",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M12 2 2 7l10 5 10-5-10-5Z"></path>
                  <path d="m2 17 10 5 10-5"></path>
                  <path d="M2 12h20"></path>
                  <path d="M12 2v20"></path>
                </svg>
              ),
            },
            {
              name: "Webhooks",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                  <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.24-3.07A4 4 0 0 1 17 6.07"></path>
                  <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                </svg>
              ),
            },
            {
              name: "Microservices",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <rect x="2" y="2" width="8" height="8" rx="2"></rect>
                  <rect x="14" y="2" width="8" height="8" rx="2"></rect>
                  <rect x="2" y="14" width="8" height="8" rx="2"></rect>
                  <rect x="14" y="14" width="8" height="8" rx="2"></rect>
                </svg>
              ),
            },
            {
              name: "Serverless Functions",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                </svg>
              ),
            },
            {
              name: "Workflow Engines",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              ),
            },
            {
              name: "RPA Tools",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="16" x2="8" y2="16"></line>
                  <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
              ),
            },
            {
              name: "Integration Platforms",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                </svg>
              ),
            },
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4">{tech.icon}</div>
              <h3 className="font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-20 bg-gray-50 py-16 px-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "The workflow automation solutions implemented by StynerDev have reduced our processing time by 70% and virtually eliminated manual errors in our operations.",
              author: "David Rodriguez",
              position: "Operations Director, Logistics International",
              image: "/placeholder.svg?height=100&width=100&query=hispanic business man professional headshot smiling",
            },
            {
              quote:
                "Integrating our CRM with our marketing platforms used to be a nightmare. Now everything flows seamlessly, and we have real-time visibility across all customer touchpoints.",
              author: "Emma Thompson",
              position: "Marketing VP, TechGrowth Solutions",
              image: "/placeholder.svg?height=100&width=100&query=blonde woman executive professional headshot smiling",
            },
            {
              quote:
                "The API migration was flawless - no downtime, no data loss, and immediate improvements in performance. Our team couldn't be happier with the results.",
              author: "Raj Patel",
              position: "CTO, FinanceStream",
              image:
                "/placeholder.svg?height=100&width=100&query=indian man with glasses professional headshot smiling",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
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
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "How long does it take to implement workflow automation?",
              answer:
                "Implementation timelines vary based on complexity, but most clients see initial results within 2-4 weeks, with full implementation completed within 1-2 months.",
            },
            {
              question: "Will automation integrate with our existing systems?",
              answer:
                "Yes, our solutions are designed to integrate with your existing systems and software. We have experience with a wide range of platforms and can develop custom connectors if needed.",
            },
            {
              question: "How secure are the automated workflows?",
              answer:
                "Security is paramount in our implementations. We follow industry best practices for data encryption, access control, and compliance with regulations like GDPR, HIPAA, and SOC 2.",
            },
            {
              question: "Can we modify the automated workflows as our needs change?",
              answer:
                "Absolutely. Our solutions are built to be flexible and adaptable. We provide tools and training so your team can make adjustments, or we can handle ongoing maintenance and updates for you.",
            },
            {
              question: "What kind of ROI can we expect?",
              answer:
                "Most clients see ROI within 3-6 months. Typical results include 50-80% reduction in manual processing time, 25-40% decrease in operational costs, and significant improvements in accuracy and customer satisfaction.",
            },
            {
              question: "Do you offer training for our team?",
              answer:
                "Yes, comprehensive training is included in our implementation process. We ensure your team is comfortable with the new workflows and can effectively use any dashboards or management tools.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#ff6347] to-[#ff8c7a] text-white rounded-xl p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Streamline Your Business Operations?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our workflow automation solutions can eliminate bottlenecks, reduce costs, and drive
          efficiency in your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-[#ff6347] hover:bg-gray-100 px-8 py-6 text-lg">
            Schedule a Free Consultation
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Download Capabilities Brochure
          </Button>
        </div>
      </div>
    </div>
  )
}
