import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function AIChatbotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">AI Chatbot Innovation</h1>
          <p className="text-xl text-gray-700 mb-8">
            Create intelligent, context-aware, and multi-channel chatbots to enhance customer support and user
            engagement across all your digital touchpoints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-6 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="px-6 py-6 text-lg">
              View Demo
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=800&query=futuristic AI chatbot interface with colorful conversation bubbles and digital assistant"
              alt="AI Chatbot Innovation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Next-Generation Conversational AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Context-Aware Conversations",
              description:
                "Our chatbots maintain context throughout conversations, remembering previous interactions and user preferences for more natural and helpful exchanges.",
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              ),
            },
            {
              title: "Multi-Channel Deployment",
              description:
                "Deploy your chatbot across websites, mobile apps, messaging platforms, and social media to provide consistent support wherever your customers are.",
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
              title: "Continuous Learning",
              description:
                "Our AI chatbots learn from every interaction, continuously improving their responses and adapting to new questions and scenarios over time.",
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
                  <path d="M2 12h6"></path>
                  <path d="M22 12h-6"></path>
                  <path d="M12 2v6"></path>
                  <path d="M12 22v-6"></path>
                  <path d="M17 12a5 5 0 0 0-5-5"></path>
                  <path d="M12 17a5 5 0 0 0 5-5"></path>
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">How We Build Your AI Chatbot</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Discovery",
              description:
                "We analyze your customer interactions, common questions, and support processes to identify the best opportunities for chatbot implementation.",
            },
            {
              step: "2",
              title: "Design & Training",
              description:
                "We design your chatbot's personality and train it on your specific knowledge base, products, and services.",
            },
            {
              step: "3",
              title: "Implementation",
              description:
                "We deploy your chatbot across your chosen channels, integrating it with your existing systems and workflows.",
            },
            {
              step: "4",
              title: "Optimization",
              description:
                "We continuously monitor performance, analyze conversations, and refine your chatbot to improve accuracy and effectiveness.",
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Chatbot Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Customer Support",
              description:
                "Handle common customer inquiries, troubleshoot issues, and escalate complex problems to human agents when necessary.",
              image:
                "/placeholder.svg?height=400&width=600&query=customer support chatbot interface with conversation and help options",
            },
            {
              title: "Lead Generation",
              description:
                "Engage website visitors, qualify leads, and schedule appointments or demos with your sales team.",
              image:
                "/placeholder.svg?height=400&width=600&query=lead generation chatbot with appointment calendar and form fields",
            },
            {
              title: "E-commerce Assistant",
              description:
                "Guide customers through product selection, provide recommendations, and assist with the checkout process.",
              image:
                "/placeholder.svg?height=400&width=600&query=e-commerce chatbot helping with product selection and shopping cart",
            },
            {
              title: "Internal Knowledge Base",
              description:
                "Help employees quickly find information, policies, and procedures within your organization's knowledge base.",
              image:
                "/placeholder.svg?height=400&width=600&query=internal knowledge base chatbot for employees with search function",
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Benefits of AI Chatbots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            {
              title: "24/7 Availability",
              description:
                "Provide instant support to customers around the clock, regardless of time zones or business hours.",
            },
            {
              title: "Reduced Support Costs",
              description:
                "Handle a high volume of routine inquiries automatically, reducing the need for large support teams.",
            },
            {
              title: "Consistent Experience",
              description: "Deliver the same high-quality responses and information to every customer, every time.",
            },
            {
              title: "Scalable Support",
              description: "Handle fluctuating support volumes without adding staff or compromising on response times.",
            },
            {
              title: "Valuable Insights",
              description:
                "Gain insights into customer questions, pain points, and behavior patterns through chatbot analytics.",
            },
            {
              title: "Human Agent Productivity",
              description:
                "Free up your human agents to focus on complex issues that require empathy and critical thinking.",
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
              name: "Natural Language Processing",
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <path d="M13 8H7"></path>
                  <path d="M17 12H7"></path>
                </svg>
              ),
            },
            {
              name: "Machine Learning",
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
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M2 18h2"></path>
                  <path d="M20 18h2"></path>
                  <path d="m19.07 10.93-1.41 1.41"></path>
                  <path d="M22 22H2"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <path d="M16 18a4 4 0 0 0-8 0"></path>
                </svg>
              ),
            },
            {
              name: "Sentiment Analysis",
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
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              ),
            },
            {
              name: "Intent Recognition",
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
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ),
            },
            {
              name: "Knowledge Graphs",
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
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              ),
            },
            {
              name: "Conversational UI",
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
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" y1="15" x2="14" y2="15"></line>
                </svg>
              ),
            },
            {
              name: "API Integration",
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
              name: "Analytics Dashboard",
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
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
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
                "Our AI chatbot now handles 70% of customer inquiries without human intervention, and our customers love the instant responses at any time of day.",
              author: "Jennifer Lee",
              position: "Customer Experience Director, RetailPlus",
              image: "/placeholder.svg?height=100&width=100&query=asian woman executive professional headshot smiling",
            },
            {
              quote:
                "The chatbot's ability to learn and improve over time has been impressive. It's now answering questions it wasn't explicitly programmed for.",
              author: "Marcus Johnson",
              position: "Head of Digital, TechSolutions Inc.",
              image: "/placeholder.svg?height=100&width=100&query=black business man professional headshot smiling",
            },
            {
              quote:
                "Implementing this AI chatbot has reduced our support ticket volume by 45% and improved our customer satisfaction scores significantly.",
              author: "Sophia Rodriguez",
              position: "Support Operations Manager, CloudServices",
              image: "/placeholder.svg?height=100&width=100&query=latina woman professional headshot smiling",
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
              question: "How long does it take to deploy an AI chatbot?",
              answer:
                "Basic chatbots can be deployed in 2-3 weeks, while more complex, context-aware chatbots typically take 4-8 weeks depending on the scope and integrations required.",
            },
            {
              question: "Can the chatbot integrate with our existing systems?",
              answer:
                "Yes, our chatbots can integrate with your CRM, help desk, e-commerce platform, and other business systems to access customer data and provide personalized assistance.",
            },
            {
              question: "How do you handle sensitive customer information?",
              answer:
                "We implement strict security protocols including encryption, secure authentication, and compliance with regulations like GDPR and CCPA to protect all customer data.",
            },
            {
              question: "What languages can the chatbot support?",
              answer:
                "Our chatbots can be trained to support multiple languages. We currently offer support for over 20 languages, with more being added regularly.",
            },
            {
              question: "How do you measure chatbot performance?",
              answer:
                "We track key metrics including resolution rate, customer satisfaction, conversation length, and escalation rate. You'll have access to a comprehensive analytics dashboard to monitor performance.",
            },
            {
              question: "What happens when the chatbot can't answer a question?",
              answer:
                "We implement seamless handoff protocols to transfer complex inquiries to human agents, ensuring customers always receive the help they need.",
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
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how an AI chatbot can enhance your customer support, increase engagement, and drive business
          growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-[#ff6347] hover:bg-gray-100 px-8 py-6 text-lg">Schedule a Demo</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            View Chatbot Showcase
          </Button>
        </div>
      </div>
    </div>
  )
}
