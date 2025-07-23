import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function AutonomousAgentSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Autonomous Agent Solutions</h1>
          <p className="text-xl text-gray-700 mb-8">
            Harness the power of intelligent AI agents to transform your business operations, automate complex
            workflows, and unlock new levels of efficiency and insight.
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
              src="https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop"
              alt="Autonomous Agent Solutions"
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
          Intelligent Automation for Modern Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Workflow Automation",
              description:
                "Create intelligent agents that handle complex business processes with minimal human intervention, freeing your team to focus on strategic initiatives.",
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
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              ),
            },
            {
              title: "Smart SQL Conversion",
              description:
                "Transform natural language queries into optimized SQL, enabling non-technical team members to extract valuable insights from your databases without coding knowledge.",
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
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              ),
            },
            {
              title: "Adaptive Data Pipelines",
              description:
                "Build intelligent data pipelines that adapt to changing data patterns, ensuring consistent data quality and reliable analytics even as your business evolves.",
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
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                  <path d="M2 20h20"></path>
                  <path d="M14 12v.01"></path>
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">How Our Autonomous Agents Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Assessment",
              description:
                "We analyze your current workflows, data infrastructure, and business objectives to identify opportunities for automation.",
            },
            {
              step: "2",
              title: "Design",
              description:
                "Our experts design custom AI agents tailored to your specific needs, integrating with your existing systems.",
            },
            {
              step: "3",
              title: "Implementation",
              description:
                "We deploy the agents in your environment, training them on your data and fine-tuning their performance.",
            },
            {
              step: "4",
              title: "Optimization",
              description:
                "Continuous monitoring and improvement ensure your agents evolve with your business and maintain peak performance.",
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
              title: "Financial Services",
              description:
                "Autonomous agents that process loan applications, detect fraud patterns, and generate personalized financial insights for customers.",
              image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Healthcare",
              description:
                "Smart agents that streamline patient intake, optimize appointment scheduling, and assist with medical record analysis.",
              image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "E-commerce",
              description:
                "Intelligent systems that manage inventory, personalize customer experiences, and optimize supply chain operations.",
              image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Manufacturing",
              description:
                "Autonomous agents that monitor production lines, predict maintenance needs, and optimize resource allocation.",
              image: "https://images.unsplash.com/photo-1581092921461-eab10380711b?q=80&w=2070&auto=format&fit=crop",
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Benefits of Autonomous Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            {
              title: "Increased Operational Efficiency",
              description:
                "Reduce manual tasks by up to 70%, allowing your team to focus on strategic initiatives rather than repetitive processes.",
            },
            {
              title: "Enhanced Decision Making",
              description:
                "Gain deeper insights from your data with AI-powered analysis that identifies patterns humans might miss.",
            },
            {
              title: "Reduced Operational Costs",
              description:
                "Lower overhead expenses by automating routine tasks and optimizing resource allocation across your organization.",
            },
            {
              title: "Improved Customer Experience",
              description:
                "Deliver faster, more personalized service with intelligent agents that understand and anticipate customer needs.",
            },
            {
              title: "Scalable Operations",
              description:
                "Easily scale your business operations without proportional increases in staffing or infrastructure costs.",
            },
            {
              title: "Competitive Advantage",
              description:
                "Stay ahead of the competition with cutting-edge AI technology that continuously improves your business processes.",
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
              name: "Computer Vision",
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
              name: "Reinforcement Learning",
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
            {
              name: "Deep Learning",
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
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                  <path d="M11 18H8a2 2 0 0 1-2-2V9"></path>
                </svg>
              ),
            },
            {
              name: "Predictive Analytics",
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
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              ),
            },
            {
              name: "Cloud Computing",
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
                "The autonomous agents developed by StynerDev have transformed our data processing workflow, reducing manual effort by 85% and improving accuracy significantly.",
              author: "Sarah Johnson",
              position: "CTO, FinTech Innovations",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
            },
            {
              quote:
                "Implementing these AI agents for our customer service operations has been game-changing. Response times are down 60% and customer satisfaction is at an all-time high.",
              author: "Michael Chen",
              position: "Director of Operations, Global Retail",
              image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=2070&auto=format&fit=crop",
            },
            {
              quote:
                "The SQL conversion capabilities alone have democratized data access across our organization. Now everyone can get the insights they need without waiting for the data team.",
              author: "Priya Patel",
              position: "Data Analytics Lead, Healthcare Solutions",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop",
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
              question: "How long does it take to implement autonomous agents?",
              answer:
                "Implementation timelines vary based on complexity, but most clients see initial results within 4-6 weeks, with full implementation completed within 2-3 months.",
            },
            {
              question: "Do I need specialized hardware or infrastructure?",
              answer:
                "No, our solutions are cloud-based and can integrate with your existing systems. We'll work with your current infrastructure and recommend optimizations if needed.",
            },
            {
              question: "How secure are these autonomous agents?",
              answer:
                "Security is our top priority. All agents operate within your security parameters, with end-to-end encryption and compliance with industry standards like GDPR, HIPAA, and SOC 2.",
            },
            {
              question: "Can the agents adapt to changes in our business processes?",
              answer:
                "Absolutely. Our agents use machine learning to continuously adapt to changing patterns and requirements. They improve over time and can be quickly reconfigured as your needs evolve.",
            },
            {
              question: "What kind of ROI can I expect?",
              answer:
                "Most clients see ROI within 6-9 months. Typical results include 40-70% reduction in manual processing time, 30% decrease in operational costs, and 25% improvement in accuracy.",
            },
            {
              question: "Do you offer ongoing support and maintenance?",
              answer:
                "Yes, we provide comprehensive support packages including monitoring, optimization, and regular updates to ensure your agents continue to perform at their best.",
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
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Transform Your Business with Autonomous Agents?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our custom AI solutions can address your specific challenges and drive measurable results
          for your organization.
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
