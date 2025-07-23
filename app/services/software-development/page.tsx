import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function SoftwareDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Software Development (Front/Back-End)</h1>
          <p className="text-xl text-gray-700 mb-8">
            Build scalable, responsive front-end UIs and powerful back-end systems for tailored digital experiences that
            grow with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-6 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="px-6 py-6 text-lg">
              View Our Portfolio
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=800&query=modern software development with code and UI design screens"
              alt="Software Development"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Comprehensive Software Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Front-End Development",
              description:
                "Create intuitive, responsive, and visually stunning user interfaces that provide exceptional user experiences across all devices.",
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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              ),
            },
            {
              title: "Back-End Development",
              description:
                "Build robust, scalable server-side applications and APIs that power your digital products with reliability and performance.",
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
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              ),
            },
            {
              title: "Full-Stack Integration",
              description:
                "Seamlessly connect front-end and back-end systems for cohesive, end-to-end solutions that deliver exceptional performance and user experience.",
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
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                  <path d="M10 16H5a2 2 0 0 1-2-2V9"></path>
                  <path d="M22 12v3a2 2 0 0 1-2 2h-1"></path>
                  <path d="M18 16h-5a2 2 0 0 1-2-2V9"></path>
                  <path d="M10 7V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2"></path>
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Our Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Discovery & Planning",
              description:
                "We work with you to understand your business goals, user needs, and technical requirements to create a comprehensive development plan.",
            },
            {
              step: "2",
              title: "Design & Architecture",
              description:
                "Our team designs intuitive user interfaces and robust system architectures that align with your business objectives and user expectations.",
            },
            {
              step: "3",
              title: "Development & Testing",
              description:
                "We build your solution using modern technologies and best practices, with rigorous testing throughout the development process.",
            },
            {
              step: "4",
              title: "Deployment & Support",
              description:
                "We deploy your solution and provide ongoing support and maintenance to ensure optimal performance and user satisfaction.",
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Solutions We Deliver</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Web Applications",
              description:
                "Custom web applications that solve specific business problems, streamline operations, and enhance user engagement.",
              image: "/placeholder.svg?height=400&width=600&query=modern web application dashboard with analytics",
            },
            {
              title: "E-commerce Platforms",
              description:
                "Scalable, secure e-commerce solutions that provide seamless shopping experiences and robust back-end management.",
              image:
                "/placeholder.svg?height=400&width=600&query=e-commerce platform with product catalog and shopping cart",
            },
            {
              title: "Enterprise Systems",
              description:
                "Comprehensive enterprise solutions that integrate with existing systems and provide powerful tools for business management.",
              image:
                "/placeholder.svg?height=400&width=600&query=enterprise software system with multiple modules and dashboards",
            },
            {
              title: "Mobile Applications",
              description:
                "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android devices.",
              image:
                "/placeholder.svg?height=400&width=600&query=mobile app development with smartphone and tablet mockups",
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Benefits of Our Development Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            {
              title: "Scalable Architecture",
              description:
                "Solutions built to grow with your business, handling increasing users, data, and functionality without performance degradation.",
            },
            {
              title: "User-Centered Design",
              description:
                "Intuitive interfaces designed with your users in mind, ensuring high adoption rates and positive user experiences.",
            },
            {
              title: "Modern Technology Stack",
              description:
                "Development using the latest technologies and frameworks, ensuring your solution remains current and maintainable.",
            },
            {
              title: "Security by Design",
              description:
                "Security built into every layer of your application, protecting your data and users from potential threats.",
            },
            {
              title: "Performance Optimization",
              description:
                "Applications optimized for speed and efficiency, providing responsive experiences even under heavy load.",
            },
            {
              title: "Continuous Improvement",
              description:
                "Ongoing updates and enhancements based on user feedback and evolving business needs to keep your solution competitive.",
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "React & Next.js",
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                  <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                </svg>
              ),
            },
            {
              name: "Node.js & Express",
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
                  <path d="M16 12.9A7.14 7.14 0 0 0 16 9"></path>
                  <path d="M12 20v-8"></path>
                  <path d="M12 8V4"></path>
                  <path d="M8 12.9a7.14 7.14 0 0 1 0-3.8"></path>
                  <path d="M16 8h-4V4"></path>
                  <path d="M8 16h4v4"></path>
                  <path d="M16 16h-4v4"></path>
                  <path d="M8 8h4v4"></path>
                </svg>
              ),
            },
            {
              name: "TypeScript",
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
                  <path d="M16.5 9.4 7.5 4.21"></path>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                </svg>
              ),
            },
            {
              name: "PostgreSQL & MongoDB",
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
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              ),
            },
            {
              name: "Docker & Kubernetes",
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
                  <path d="M21 18H6a2 2 0 0 1-2-2V4"></path>
                  <path d="M6 8h12"></path>
                  <path d="M8 4v4"></path>
                  <path d="M18 20a2 2 0 0 0 0-4h-2a2 2 0 0 0 0 4h2Z"></path>
                </svg>
              ),
            },
            {
              name: "AWS & Azure",
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
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              ),
            },
            {
              name: "GraphQL & REST",
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
              name: "CI/CD Pipelines",
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
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
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
                "StynerDev delivered a web application that exceeded our expectations. Their attention to detail and focus on user experience has resulted in a product our customers love.",
              author: "Thomas Wright",
              position: "Product Director, TechInnovate",
              image: "/placeholder.svg?height=100&width=100&query=professional man with beard headshot smiling",
            },
            {
              quote:
                "The team's technical expertise is impressive. They built a robust back-end system that has scaled seamlessly as our user base has grown from thousands to millions.",
              author: "Sarah Chen",
              position: "CTO, GrowthPlatform",
              image: "/placeholder.svg?height=100&width=100&query=asian woman tech executive professional headshot",
            },
            {
              quote:
                "Working with StynerDev has been a game-changer for our business. Their development approach is thorough, and they consistently deliver high-quality code on time and within budget.",
              author: "Michael Johnson",
              position: "CEO, DigitalSolutions Inc.",
              image: "/placeholder.svg?height=100&width=100&query=black business man executive professional headshot",
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
              question: "How long does a typical software development project take?",
              answer:
                "Project timelines vary based on complexity and scope. Simple applications can be delivered in 2-3 months, while more complex enterprise systems may take 6-12 months. We provide detailed timelines during the planning phase.",
            },
            {
              question: "Do you provide ongoing maintenance and support?",
              answer:
                "Yes, we offer comprehensive maintenance and support packages to ensure your software continues to perform optimally. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
            },
            {
              question: "How do you ensure the quality of your code?",
              answer:
                "We implement rigorous quality assurance processes including automated testing, code reviews, and continuous integration. Our development follows industry best practices and coding standards.",
            },
            {
              question: "Can you work with our existing systems and technologies?",
              answer:
                "Absolutely. We have experience integrating with a wide range of existing systems and technologies. We'll assess your current infrastructure and develop solutions that seamlessly integrate with your ecosystem.",
            },
            {
              question: "How do you handle project management and communication?",
              answer:
                "We use agile methodologies with regular sprint reviews and demos. You'll have access to project management tools to track progress, and we schedule regular meetings to ensure clear communication throughout the project.",
            },
            {
              question: "What happens if requirements change during development?",
              answer:
                "Our agile approach allows for flexibility. We work with you to prioritize changes, assess their impact on timeline and budget, and incorporate them into the development process in a structured way.",
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
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Build Your Next Digital Solution?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our software development expertise can help you create scalable, user-friendly applications
          that drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-[#ff6347] hover:bg-gray-100 px-8 py-6 text-lg">
            Schedule a Free Consultation
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            View Our Portfolio
          </Button>
        </div>
      </div>
    </div>
  )
}
