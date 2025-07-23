import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function CustomAISolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Custom AI Solutions</h1>
          <p className="text-xl text-gray-700 mb-8">
            Design bespoke AI tools and systems customized to your unique business challenges and goals—innovation
            without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-6 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="px-6 py-6 text-lg">
              Explore Our Portfolio
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=800&query=futuristic custom AI solution with digital brain and business analytics"
              alt="Custom AI Solutions"
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
          Tailored AI Solutions for Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Bespoke AI Development",
              description:
                "Custom-built AI solutions designed specifically for your unique business challenges, processes, and goals.",
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
              title: "Predictive Analytics",
              description:
                "Harness the power of your data with custom predictive models that forecast trends, identify opportunities, and mitigate risks.",
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
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              ),
            },
            {
              title: "Computer Vision Solutions",
              description:
                "Custom image and video analysis tools that can identify objects, detect patterns, and extract valuable insights from visual data.",
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
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Our Custom AI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Discovery",
              description:
                "We work closely with you to understand your business challenges, goals, and the specific problems you're trying to solve.",
            },
            {
              step: "2",
              title: "Solution Design",
              description:
                "Our AI experts design a custom solution tailored to your needs, selecting the right technologies and approaches.",
            },
            {
              step: "3",
              title: "Development & Training",
              description:
                "We develop and train your custom AI solution using your data, fine-tuning it for optimal performance.",
            },
            {
              step: "4",
              title: "Deployment & Optimization",
              description:
                "We deploy your solution and continuously monitor and optimize it to ensure it delivers maximum value.",
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
              title: "Fraud Detection",
              description:
                "Custom AI systems that identify suspicious patterns and anomalies in financial transactions, preventing fraud before it occurs.",
              image:
                "/placeholder.svg?height=400&width=600&query=fraud detection dashboard with AI analytics and security",
            },
            {
              title: "Demand Forecasting",
              description:
                "Predictive models that analyze historical data, market trends, and external factors to forecast product demand with high accuracy.",
              image:
                "/placeholder.svg?height=400&width=600&query=demand forecasting AI dashboard with prediction charts",
            },
            {
              title: "Quality Control",
              description:
                "Computer vision systems that automatically inspect products on manufacturing lines, identifying defects with greater accuracy than human inspectors.",
              image:
                "/placeholder.svg?height=400&width=600&query=manufacturing quality control with AI vision system and conveyor belt",
            },
            {
              title: "Customer Segmentation",
              description:
                "Advanced clustering algorithms that group customers based on behavior, preferences, and value, enabling highly targeted marketing campaigns.",
              image:
                "/placeholder.svg?height=400&width=600&query=customer segmentation AI dashboard with user profiles and clusters",
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Benefits of Custom AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            {
              title: "Tailored to Your Needs",
              description:
                "Solutions designed specifically for your business challenges, rather than generic off-the-shelf products.",
            },
            {
              title: "Competitive Advantage",
              description:
                "Gain a significant edge over competitors with AI capabilities uniquely suited to your business model and market.",
            },
            {
              title: "Improved Decision Making",
              description:
                "Access deeper insights and more accurate predictions to make better strategic and operational decisions.",
            },
            {
              title: "Increased Efficiency",
              description:
                "Automate complex processes and tasks, reducing costs and freeing up human resources for higher-value activities.",
            },
            {
              title: "Scalable Solutions",
              description:
                "Custom AI systems that grow with your business, adapting to changing needs and increasing data volumes.",
            },
            {
              title: "Intellectual Property",
              description:
                "Own the intellectual property of your custom AI solution, creating a valuable asset for your business.",
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
              name: "Time Series Analysis",
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
              name: "Anomaly Detection",
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
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              ),
            },
            {
              name: "Recommendation Systems",
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
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                  <path d="M8.5 8.5v.01"></path>
                  <path d="M16 15.5v.01"></path>
                  <path d="M12 12v.01"></path>
                  <path d="M11 17v.01"></path>
                  <path d="M7 14v.01"></path>
                </svg>
              ),
            },
            {
              name: "Cloud AI Infrastructure",
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
                "The custom AI solution developed by StynerDev has transformed our business. We're now able to predict customer behavior with 85% accuracy, allowing us to optimize our marketing efforts.",
              author: "Alex Morgan",
              position: "CMO, RetailTech Innovations",
              image: "/placeholder.svg?height=100&width=100&query=professional woman executive with short hair smiling",
            },
            {
              quote:
                "We tried off-the-shelf AI solutions, but they couldn't handle our unique requirements. StynerDev built us a custom system that perfectly addresses our specific challenges.",
              author: "James Wilson",
              position: "CTO, FinancePro Solutions",
              image:
                "/placeholder.svg?height=100&width=100&query=middle aged business man with glasses professional headshot",
            },
            {
              quote:
                "The ROI on our custom AI solution has been incredible. Within six months, we've seen a 40% reduction in operational costs and a 25% increase in customer satisfaction.",
              author: "Leila Patel",
              position: "Operations Director, HealthTech Innovations",
              image: "/placeholder.svg?height=100&width=100&query=indian woman executive professional headshot smiling",
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
              question: "How long does it take to develop a custom AI solution?",
              answer:
                "Development timelines vary based on complexity, but most projects take 3-6 months from initial discovery to deployment. We can often deliver initial prototypes within 4-6 weeks.",
            },
            {
              question: "How much data do we need to build an effective AI solution?",
              answer:
                "The amount of data required depends on the complexity of the problem. Some solutions can work with relatively small datasets, while others require larger volumes. We'll assess your data during the discovery phase and advise accordingly.",
            },
            {
              question: "Do we need specialized hardware or infrastructure?",
              answer:
                "Most of our solutions can be deployed in the cloud, eliminating the need for specialized on-premises hardware. For solutions with specific performance requirements, we can recommend appropriate infrastructure.",
            },
            {
              question: "How do you ensure the security of our data?",
              answer:
                "We implement robust security measures throughout the development process, including data encryption, secure access controls, and compliance with relevant regulations like GDPR, HIPAA, and SOC 2.",
            },
            {
              question: "What kind of ROI can we expect from a custom AI solution?",
              answer:
                "ROI varies by project, but our clients typically see returns within 6-12 months. We work with you to define clear success metrics and track performance against these goals.",
            },
            {
              question: "Do you provide ongoing support and maintenance?",
              answer:
                "Yes, we offer comprehensive support packages including monitoring, performance optimization, retraining models with new data, and adapting solutions as your business needs evolve.",
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
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business with Custom AI?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how a tailored AI solution can address your specific challenges and drive measurable results for
          your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-[#ff6347] hover:bg-gray-100 px-8 py-6 text-lg">
            Schedule a Free Consultation
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Download Case Studies
          </Button>
        </div>
      </div>
    </div>
  )
}
