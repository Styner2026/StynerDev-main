import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "autonomous-agent-solutions",
      title: "Autonomous Agent Solutions",
      description:
        "Develop advanced AI agents to automate workflows, convert SQL smartly, and build adaptive data pipelines tailored to your business needs.",
      image: "/images/autonomous-agent.jpg",
    },
    {
      id: "workflow-automation",
      title: "Seamless Workflow Automation",
      description:
        "Enable frictionless operations with API integrations, system synchronization, and smooth API migrations for maximum efficiency.",
      image: "/images/workflow-automation.jpg",
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Innovation",
      description:
        "Create intelligent, context-aware, and multi-channel chatbots to enhance customer support and user engagement.",
      image: "/images/ai-chatbot.jpg",
    },
    {
      id: "custom-ai",
      title: "Custom AI Solutions",
      description:
        "Design bespoke AI tools and systems customized to your unique business challenges and goals—innovation without limits.",
      image: "/images/custom-ai-solutions.jpg",
    },
    {
      id: "software-development",
      title: "Software Development (Front/Back-End)",
      description:
        "Build scalable, responsive front-end UIs and powerful back-end systems for tailored digital experiences that grow with your business.",
      image: "/images/software-development.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Services</h1>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-700">
        Smart Technology. Superior Outcomes. Empowering businesses through innovative AI for automation, analytics, and
        growth.
      </p>

      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
              >
                Learn more
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
              </Link>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
