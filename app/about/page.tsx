import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Award,
  Code,
  Cpu,
  Database,
  Server,
  Star,
  BookOpenCheck,
  Lightbulb,
  Brain,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Calendar,
  CheckSquare,
  Clock,
  MapPin,
  Download,
  Globe,
} from "lucide-react"
import { AnimatedCounter } from "../../components/animated-counter"
import { AnimatedSkillBar } from "../../components/animated-skill-bar"
import AnimatedSection from "../../components/animated-section"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* ========= 1. HERO SECTION ========= */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mb-16 py-12 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection animation="animate-slideInLeft" delay={200}>
                <div className="text-sm mb-2">(ABOUT ME)</div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  FULL-STACK <span className="font-['Serif_Italic'] italic font-normal">Developer</span>
                  <br className="hidden sm:block" /> & AI SPECIALIST
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
                  I'm a passionate developer specializing in building modern web applications, AI solutions, and workflow
                  automation systems that solve real business problems.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="animate-fadeIn" delay={300}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">Serverless Architecture</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">AI & Machine Learning</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">React & Next.js</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">API Development</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">Workflow Automation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">Database Design</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">Web Applications</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">Autonomous AI Agents</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">Mobile Apps (Expo Router)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">Advanced LLM Integration</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="md:w-1/2">
              <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="rounded-[24px] overflow-hidden shadow-lg max-w-[500px] mx-auto">
                  <Image
                    src="/styner-about.png"
                    alt="Developer workspace"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= 2. MY PHILOSOPHY SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={100}>
          <div className="mb-16">
            <div className="text-sm mb-2">(MY PHILOSOPHY)</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              SMART TECHNOLOGY. SUPERIOR <span className="font-['Serif_Italic'] italic font-normal">Outcomes</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection animation="animate-slideInLeft" delay={200}>
                <div>
                  <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
                    I believe in empowering businesses through innovative AI for automation, analytics, and growth. Every
                    solution I build is designed with scalability, efficiency, and user experience in mind.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                    My approach combines technical expertise with business acumen to deliver solutions that not only work
                    flawlessly but also drive meaningful results for your organization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/projects">
                      <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-2 shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200 flex items-center gap-2">
                        View My Projects <ArrowRight size={16} />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="px-6 py-2 shadow-[0_4px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] hover:translate-y-[2px] transition-all duration-200"
                      >
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="animate-slideInRight" delay={300}>
                <div className="bg-gray-50 dark:bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center dark:!text-black">
                    <Award className="mr-2 text-[#ff6347]" size={24} />
                    Core Values
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 text-[#ff6347]">01</div>
                      <div>
                        <h4 className="font-semibold dark:!text-black">Technical Excellence</h4>
                        <p className="text-gray-700 dark:text-black">Commitment to clean code, best practices, and continuous learning</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-[#ff6347]">02</div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-black">User-Centered Design</h4>
                        <p className="text-gray-700 dark:text-black">Creating intuitive, accessible, and delightful user experiences</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-[#ff6347]">03</div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-black">Business Impact</h4>
                        <p className="text-gray-700 dark:text-black">Focusing on solutions that drive measurable results</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-[#ff6347]">04</div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-black">Ethical AI</h4>
                        <p className="text-gray-700 dark:text-black">Developing responsible AI solutions with transparency and fairness</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= INSPIRATIONAL QUOTE SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={150}>
          <div className="mb-16 py-12 bg-gradient-to-r from-[#ff6347]/5 to-[#ff6347]/10 rounded-2xl border border-[#ff6347]/20 relative overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
            {/* 3D Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/70 to-gray-50/80 rounded-2xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6347]/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#ff6347]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ff6347]/5 to-transparent rounded-full blur-3xl opacity-30"></div>

            {/* 3D Geometric Elements */}
            <div className="absolute top-8 right-10 w-12 h-12 bg-gradient-to-br from-[#ff6347]/8 to-[#ff6347]/3 rounded-lg transform rotate-12 shadow-lg"></div>
            <div className="absolute bottom-10 left-12 w-10 h-10 bg-gradient-to-br from-[#ff6347]/10 to-[#ff6347]/3 rounded-full shadow-md transform rotate-45"></div>

            {/* Quote Content - Elevated with Z-index */}
            <div className="absolute top-4 left-6 text-[#ff6347]/20 relative z-20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-md">
                <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
              </svg>
            </div>
            <div className="text-center max-w-3xl mx-auto px-8 relative z-20">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight drop-shadow-sm">
                "Code like a chef.{" "}
                <span className="font-['Serif_Italic'] italic font-normal text-[#ff6347] relative">
                  Debug like a crime scene investigator.
                  <div className="absolute -inset-1 bg-[#ff6347]/5 blur-sm -z-10 rounded-lg"></div>
                </span>"
              </blockquote>
            </div>
            <div className="absolute bottom-4 right-6 text-[#ff6347]/20 rotate-180 relative z-20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-md">
                <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
              </svg>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= 3. SKILLS SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={200}>
          <div className="mb-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-sm mb-2">(MY SKILLS)</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                TECHNICAL <span className="font-['Serif_Italic'] italic font-normal">Expertise</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <AnimatedSkillBar skill="React & Next.js" percentage={95} delay={0} />
                <AnimatedSkillBar skill="TypeScript" percentage={90} delay={200} />
                <AnimatedSkillBar skill="Node.js" percentage={85} delay={400} />
                <AnimatedSkillBar skill="AI & Machine Learning" percentage={92} delay={600} />
                <AnimatedSkillBar skill="Python" percentage={80} delay={800} />
                <AnimatedSkillBar skill="Rust" percentage={75} delay={900} />
                <AnimatedSkillBar skill="Database Design" percentage={88} delay={1000} />
                <AnimatedSkillBar skill="Serverless Architecture" percentage={83} delay={1100} />
                <AnimatedSkillBar skill="API Development" percentage={89} delay={1200} />
                <AnimatedSkillBar skill="Workflow Automation" percentage={86} delay={1300} />
                <AnimatedSkillBar skill="Mobile Development (Expo)" percentage={82} delay={1400} />
                <AnimatedSkillBar skill="Motoko (DFINITY)" percentage={78} delay={1500} />
                <AnimatedSkillBar skill="UI/UX Design" percentage={75} delay={1600} />
                <AnimatedSkillBar skill="DevOps" percentage={70} delay={1700} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= 4. AREAS OF EXPERTISE ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={300}>
          <div className="mb-16">
            <div className="text-sm mb-2">(EXPERTISE)</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              AREAS OF <span className="font-['Serif_Italic'] italic font-normal">Expertise</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="text-[#ff6347]" size={24} />,
                  title: "Autonomous Agent Solutions",
                  description: "I develop advanced AI agents to automate workflows, convert SQL smartly, and build adaptive data pipelines tailored to your business needs.",
                  link: "/services/autonomous-agent-solutions"
                },
                {
                  icon: <Code className="text-[#ff6347]" size={24} />,
                  title: "Software Development",
                  description: "I build scalable, responsive front-end UIs and powerful back-end systems for tailored digital experiences that grow with your business.",
                  link: "/services/software-development"
                },
                {
                  icon: <Brain className="text-[#ff6347]" size={24} />,
                  title: "AI Chatbot Innovation",
                  description: "I create intelligent, context-aware, and multi-channel chatbots to enhance customer support and user engagement.",
                  link: "/services/ai-chatbot-innovation"
                },
                {
                  icon: <Server className="text-[#ff6347]" size={24} />,
                  title: "Workflow Automation",
                  description: "Enable frictionless operations with API integrations, system synchronization, and smooth API migrations for maximum efficiency.",
                  link: "/services/workflow-automation"
                },
                {
                  icon: <Clock className="text-[#ff6347]" size={24} />,
                  title: "Custom AI Solutions",
                  description: "I design bespoke AI tools and systems customized to your unique business challenges and goals—innovation without limits.",
                  link: "/services/custom-ai-solutions"
                },
                {
                  icon: <CheckSquare className="text-[#ff6347]" size={24} />,
                  title: "Mobile Development",
                  description: "I create cross-platform mobile applications with modern frameworks like React Native and Expo Router for iOS and Android.",
                  link: "/services/mobile-development"
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 200}>
                  <div className="bg-white dark:bg-gray-100 p-8 rounded-lg border border-gray-200 dark:border-gray-300 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-[#ff6347]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff6347]/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 dark:text-black">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-900 mb-4">{item.description}</p>
                    <Link
                      href={item.link}
                      className="text-[#ff6347] font-medium flex items-center group-hover:underline"
                    >
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========= 7. WHAT I'M LEARNING NOW SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={400}>
          <div className="mb-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-sm mb-2">(CONTINUOUS LEARNING)</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
                WHAT I'M <span className="font-['Serif_Italic'] italic font-normal">Learning</span> NOW
              </h2>

              <div className="space-y-16">
                {/* MT5 Trading Bots - Content Left, Image Right */}
                <AnimatedSection animation="animate-slideInLeft" delay={200}>
                  <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
                    <div className="lg:w-2/5 flex-shrink-0">
                      <div className="relative flex flex-col items-center">
                        <Image
                          src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/CafeAlgo-BaristaFusion-Prime-(v4.21).webp"
                          alt="CafeAlgo BaristaFusion Prime (v4.21) - MT5 Trading Bot"
                          width={420}
                          height={560}
                          className="rounded-lg shadow-lg border-2 border-[#ff6347]/20 mx-auto"
                        />
                        <div className="mt-2 text-center text-sm text-gray-600 italic mx-auto w-full">
                          CafeAlgo BaristaFusion Prime (v4.21)
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-3/5">
                      <div className="max-w-xl">
                        <div className="text-sm text-[#ff6347] font-medium mb-2">FINANCIAL TECHNOLOGY</div>
                        <h3 className="text-2xl font-bold mb-4">
                          CafeAlgo <span className="font-['Serif_Italic'] italic font-normal">BaristaFusion Prime</span>
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          I'm developing sophisticated algorithmic trading systems like CafeAlgo BaristaFusion Prime (v4.21) for MetaTrader 5, combining advanced algorithmic strategies with real-time market analysis. Building these MT5 bots enables me to:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Apply machine learning models to predict market movements and optimize trading strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Create complex risk management systems that adapt to changing market conditions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Bridge traditional financial systems with modern algorithms and data analysis</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Algorithmic Trading
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Financial Analysis
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Risk Management
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            MQL5
                          </span>
                        </div>

                        <div className="mt-8">
                          <a
                            href="/downloads/CafeAlgo-BaristaFusion-Prime-v4.21.ex5"
                            download
                            className="inline-flex items-center px-4 py-2 bg-[#ff6347] hover:bg-[#e5573e] text-white rounded-md shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200"
                          >
                            <Download className="mr-2 h-5 w-5" />
                            Download Trading Bot (.ex5)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* ICP/DFINITY - Content Left, Image Right */}
                <AnimatedSection animation="animate-slideInRight" delay={300}>
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/3 flex-shrink-0 overflow-visible">
                      <div className="relative h-full flex items-center justify-end">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                          <div className="relative h-[600px] w-[400px]">
                            <Image
                              src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/ICP-Dominic-Williams.jpeg"
                              alt="ICP DFINITY Development with Dominic Williams - Club Event"
                              fill
                              className="rounded-lg shadow-2xl border-2 border-[#ff6347]/20 object-cover object-center"
                              priority
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                          </div>
                          <div className="mt-2 text-center text-sm text-gray-600 italic">
                            With Dominic Williams, Founder & Chief Scientist of DFINITY
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="max-w-2xl">
                        <div className="text-sm text-[#ff6347] font-medium mb-2">BLOCKCHAIN TECHNOLOGY</div>
                        <h3 className="text-2xl font-bold mb-4">
                          ICP/<span className="font-['Serif_Italic'] italic font-normal">DFINITY</span> Development
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          I'm building decentralized applications using Internet Computer Protocol (ICP) and the DFINITY ecosystem, leveraging Motoko for smart contract development. This exploration allows me to:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Create scalable decentralized applications with enhanced security and performance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Develop autonomous smart contracts that can evolve and adapt without centralized control</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Integrate web3 functionality into traditional applications for enhanced transparency</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 max-w-md">
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Motoko
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Smart Contracts
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Decentralized Web
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Web3
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* COBOL Course - Book Left, Content Right */}
                <AnimatedSection animation="animate-slideInLeft" delay={400}>
                  <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
                    <div className="lg:w-1/3 flex-shrink-0">
                      <div className="relative">
                        <Image
                          src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Mastering-COBOL.png"
                          alt="COBOL Programming Course"
                          width={360}
                          height={480}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="max-w-2xl">
                        <div className="text-sm text-[#ff6347] font-medium mb-2">LEGACY SYSTEMS</div>
                        <h3 className="text-2xl font-bold mb-4">
                          Mastering <span className="font-['Serif_Italic'] italic font-normal">COBOL</span>
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          I'm diving into COBOL to bridge the gap between legacy systems and modern applications. With many
                          financial and government institutions still relying on COBOL for their core operations, this knowledge
                          allows me to:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Modernize legacy systems while preserving critical business logic</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Create middleware solutions that connect COBOL systems to modern web applications</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Understand the architectural decisions behind enterprise systems</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Mainframe Computing
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Financial Systems
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Legacy Integration
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Enterprise Systems
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* C++ Book - Content Left, Book Right */}
                <AnimatedSection animation="animate-slideInRight" delay={500}>
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/3 flex-shrink-0">
                      <div className="relative">
                        <Image
                          src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Systems-Level-C%2B%2B.png"
                          alt="Programming: Principles and Practice Using C++"
                          width={360}
                          height={480}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="max-w-2xl">
                        <div className="text-sm text-[#ff6347] font-medium mb-2">COMPUTER SCIENCE FUNDAMENTALS</div>
                        <h3 className="text-2xl font-bold mb-4">
                          Systems-Level <span className="font-['Serif_Italic'] italic font-normal">C++</span>
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          I'm studying "Programming: Principles and Practice Using C++" by Bjarne Stroustrup to deepen my
                          understanding of programming fundamentals and systems-level development. This knowledge enhances
                          my ability to:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Build high-performance components for computationally intensive applications</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Develop a deeper understanding of memory management and system architecture</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-[#ff6347] mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 leading-relaxed">Create more efficient algorithms and data structures in any language</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 max-w-md">
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Systems Programming
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Performance Optimization
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Computer Science Theory
                          </span>
                          <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                            Low-Level Development
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= MY LEARNING PHILOSOPHY SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={600}>
          <div className="mb-16 py-12 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 relative overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
            {/* 3D Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-white/80 to-gray-50/50 rounded-2xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6347]/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#ff6347]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ff6347]/3 to-transparent rounded-full blur-3xl opacity-30"></div>

            {/* 3D Geometric Shapes */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-[#ff6347]/10 to-[#ff6347]/5 rounded-lg transform rotate-12 shadow-lg"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-[#ff6347]/15 to-[#ff6347]/5 rounded-full shadow-md transform rotate-45"></div>
            <div className="absolute top-1/3 left-16 w-8 h-8 bg-gradient-to-br from-[#ff6347]/8 to-transparent rounded-sm transform -rotate-12 shadow-sm"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#ff6347]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#ff6347]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:!text-black">My Learning Philosophy</h3>
              </div>

              <p className="text-lg text-gray-700 dark:!text-black mb-8 leading-relaxed">
                I believe in continuous learning that spans both cutting-edge technologies and foundational systems. By understanding both the latest innovations and the historical context of computing, I can build more robust, future-proof solutions that respect the past while embracing the future.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-100 rounded-lg border border-gray-100 dark:border-gray-300 shadow-sm">
                  <div className="w-10 h-10 bg-[#ff6347]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ff6347]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-900">20 hours of focused learning weekly</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-100 rounded-lg border border-gray-100 dark:border-gray-300 shadow-sm">
                  <div className="w-10 h-10 bg-[#ff6347]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ff6347]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-900">Project-based approach</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-100 rounded-lg border border-gray-100 dark:border-gray-300 shadow-sm">
                  <div className="w-10 h-10 bg-[#ff6347]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ff6347]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-900">Cross-disciplinary connections</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= 8. CERTIFICATIONS SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={500}>
          <div className="mb-16">
            <div className="text-sm mb-2">(CERTIFICATIONS)</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              PROFESSIONAL <span className="font-['Serif_Italic'] italic font-normal">Certifications</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AWS Certified Solutions Architect",
                  organization: "Amazon Web Services",
                  date: "2023",
                  description: "Expert-level certification in designing distributed systems on AWS.",
                  icon: <Server className="text-[#ff6347]" size={24} />,
                },
                {
                  title: "TensorFlow Developer Certificate",
                  organization: "Google",
                  date: "2023",
                  description: "Professional certification in building ML models with TensorFlow.",
                  icon: <Brain className="text-[#ff6347]" size={24} />,
                },
                {
                  title: "Meta Frontend Developer",
                  organization: "Meta",
                  date: "2023",
                  description: "Advanced certification in modern frontend development practices.",
                  icon: <Code className="text-[#ff6347]" size={24} />,
                },
                {
                  title: "Google Cloud Professional",
                  organization: "Google Cloud",
                  date: "2023",
                  description: "Expert-level certification in cloud architecture and solutions.",
                  icon: <Database className="text-[#ff6347]" size={24} />,
                },
              ].map((cert, index) => (
                <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 200}>
                  <div className="bg-white dark:bg-gray-100 p-6 rounded-lg border border-gray-200 dark:border-gray-300 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#ff6347]/10 rounded-lg flex items-center justify-center mr-4">
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold dark:text-black">{cert.title}</h3>
                        <div className="text-[#ff6347] text-sm mb-2">{cert.organization}</div>
                        <p className="text-gray-700 dark:text-gray-900 mb-2">{cert.description}</p>
                        <div className="text-sm text-gray-500 dark:text-gray-700 flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========= 9. ACHIEVEMENTS SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={600}>
          <div className="mb-16">
            <div className="text-sm mb-2">(ACHIEVEMENTS)</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              KEY <span className="font-['Serif_Italic'] italic font-normal">Milestones</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <CheckSquare className="text-[#ff6347]" size={24} />,
                  number: "100+",
                  label: "Projects Completed",
                },
                {
                  icon: <Clock className="text-[#ff6347]" size={24} />,
                  number: "5+",
                  label: "Years Experience",
                },
                {
                  icon: <Star className="text-[#ff6347]" size={24} />,
                  number: "50+",
                  label: "Happy Clients",
                },
                {
                  icon: <MapPin className="text-[#ff6347]" size={24} />,
                  number: "10+",
                  label: "Countries Served",
                },
              ].map((achievement, index) => (
                <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 200}>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
                    <div className="w-12 h-12 bg-[#ff6347]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold mb-2 dark:!text-black">{achievement.number}</div>
                    <div className="text-gray-700">{achievement.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ========= PROFESSIONAL JOURNEY SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={650}>
          <div className="mb-16 py-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-sm mb-2 text-center">(EXPERIENCE)</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
                MY professional <span className="font-['Serif_Italic'] italic font-normal">JOURNEY</span>
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
                A timeline of my career highlights and professional experiences that have shaped my expertise.
              </p>

              {/* Timeline */}
              <div className="relative overflow-hidden">
                {/* Vertical line - with explicit height */}
                <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] h-[calc(100%-20px)] w-1 bg-gray-200"></div>

                {/* First Entry */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-5/12 md:text-right pl-16 md:pl-0 order-2 md:order-1">
                      <h3 className="text-xl font-semibold">OSINT + Cyber Intelligence</h3>
                      <div className="text-[#ff6347] font-medium">Security Research</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Specialized Expertise</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>Threat Intelligence Analysis</p>
                        <p>Digital Forensics</p>
                        <p>Open Source Intelligence</p>
                        <p>Security Automation</p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center">
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

                    <div className="w-full md:w-5/12 pl-16 md:pl-0 order-1 md:order-2 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold">Python, C++, COBOL, Rust</h3>
                      <div className="text-[#ff6347] font-medium">Programming Languages</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Core Expertise</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>Systems programming and legacy integration</p>
                        <p>High-performance computing applications</p>
                        <p>Memory-safe development practices</p>
                        <p>Cross-platform compatibility</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Entry */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-5/12 md:text-right pl-16 md:pl-0 order-2 md:order-1">
                      <h3 className="text-xl font-semibold">Advanced Tech Stack</h3>
                      <div className="text-[#ff6347] font-medium">Software Engineering</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Systems Design</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>Architecture optimization</p>
                        <p>AI integration strategies</p>
                        <p>Autonomous agent development</p>
                        <p>Enterprise-scale solutions</p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center">
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

                    <div className="w-full md:w-5/12 pl-16 md:pl-0 order-1 md:order-2 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold">AI Systems + Blockchain</h3>
                      <div className="text-[#ff6347] font-medium">ICP/DFINITY, Motoko</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Advanced Technologies</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>Decentralized application development</p>
                        <p>Smart contract implementation</p>
                        <p>Internet Computer Protocol integration</p>
                        <p>Distributed systems architecture</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Entry */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-5/12 md:text-right pl-16 md:pl-0 order-2 md:order-1">
                      <h3 className="text-xl font-semibold">Server & Database Engineering</h3>
                      <div className="text-[#ff6347] font-medium">Backend Architecture</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Infrastructure Expertise</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>API design and implementation</p>
                        <p>Database optimization and scaling</p>
                        <p>Cloud infrastructure management</p>
                        <p>Microservices architecture</p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center">
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

                    <div className="w-full md:w-5/12 pl-16 md:pl-0 order-1 md:order-2 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold">Web & Mobile Development</h3>
                      <div className="text-[#ff6347] font-medium">React/Next.js, Expo Go</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Frontend Expertise</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>Responsive cross-platform interfaces</p>
                        <p>Server-side rendering optimization</p>
                        <p>Native mobile integration</p>
                        <p>Progressive web applications</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fourth Entry */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-5/12 md:text-right pl-16 md:pl-0 order-2 md:order-1">
                      <h3 className="text-xl font-semibold">UI/UX Design Systems</h3>
                      <div className="text-[#ff6347] font-medium">Design Implementation</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Creative Solutions</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>Responsive interface architecture</p>
                        <p>Design system implementation</p>
                        <p>Interactive prototyping</p>
                        <p>Accessibility optimization</p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center">
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

                    <div className="w-full md:w-5/12 pl-16 md:pl-0 order-1 md:order-2 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold">MT5 Bot Builder</h3>
                      <div className="text-[#ff6347] font-medium">MetaTrader 5 & Algorithmic Trading</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Financial Technology</div>
                      <div className="text-gray-700 dark:text-gray-200 space-y-2">
                        <p>Automated trading system development</p>
                        <p>MQL5 programming expertise</p>
                        <p>Risk management algorithms</p>
                        <p>Market analysis and backtesting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= COMMUNITY IMPACT SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={700}>
          <div className="mb-16 py-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-sm mb-2 text-center">(GIVING BACK)</div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 text-center leading-tight">
                MAKING A GLOBAL <span className="font-['Serif_Italic'] italic font-normal">Impact</span>
                <br />
                THROUGH COMMUNITY
              </h2>

              {/* Weekly Community Service Feature */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <AnimatedSection animation="animate-slideInLeft" delay={200}>
                  <div className="relative">
                    <Image
                      src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/WEEKLY-COMMUNITY-SERVICE.png"
                      alt="Weekly Community Service - Feeding the Unhoused"
                      width={600}
                      height={800}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="animate-slideInRight" delay={400}>
                  <div>
                    <div className="text-sm text-[#ff6347] font-medium mb-3">WEEKLY COMMUNITY SERVICE</div>
                    <h3 className="text-3xl font-bold mb-6">
                      Feeding the <span className="font-['Serif_Italic'] italic font-normal text-[#ff6347]">Unhoused</span>
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      This weekly initiative became one of my most meaningful community contributions. Every Saturday morning, I would wake up at 5 AM to begin preparing large batches of my grandmother's famous pink-tinted chicken recipe, along with fresh sides and desserts.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      In Dallas, Texas, I hand-prepared and served 65-100 meals every Saturday to those experiencing homelessness. Known affectionately as "the pink chicken lady," I cooked my late grandmother's special recipe that always brought smiles to everyone's faces.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Local volunteers from community colleges and churches joined me regularly, creating a beautiful network of support for our less fortunate neighbors.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Other Community Involvement */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Open Source Contributions",
                    description: "Active contributor to various open-source projects, focusing on AI and developer tools.",
                    icon: <Code className="text-[#ff6347]" size={24} />,
                  },
                  {
                    title: "Tech Mentorship",
                    description: "Mentoring aspiring developers and helping them navigate their tech careers.",
                    icon: <BookOpenCheck className="text-[#ff6347]" size={24} />,
                  },
                  {
                    title: "Community Events",
                    description: "Regular speaker at tech meetups and conferences, sharing knowledge and experiences.",
                    icon: <Star className="text-[#ff6347]" size={24} />,
                  },
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 200}>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <div className="w-12 h-12 bg-[#ff6347]/10 rounded-lg flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 dark:text-black">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= CULINARY PASSION SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={750}>
          <div className="mb-16 py-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              {/* Culinary Passion Feature */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="animate-slideInLeft" delay={200}>
                  <div>
                    <div className="text-sm text-[#ff6347] font-medium mb-3">CULINARY PASSION</div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                      Food & <span className="font-['Serif_Italic'] italic font-normal text-[#ff6347]">Barbecue</span>
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      My passion for cooking extends beyond community service. I'm an avid barbecue enthusiast who believes that slow-cooked food brings people together like nothing else. Weekends often find me tending to my smoker, perfecting recipes that have been passed down through generations.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      From Texas-style brisket to Carolina pulled pork, I've mastered regional barbecue techniques and love sharing these culinary traditions with friends, family, and colleagues. My annual summer cookouts have become legendary gatherings where technology conversations blend with appreciation for perfectly smoked meats.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Texas BBQ
                      </span>
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Smoking Techniques
                      </span>
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Family Recipes
                      </span>
                    </div>
                    <blockquote className="border-l-4 border-[#ff6347] pl-6 italic text-lg text-gray-600">
                      "Go confidently in the direction of your dreams! Live the life you've imagined."
                      <footer className="text-sm text-gray-500 mt-2">- Thoreau</footer>
                    </blockquote>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="animate-slideInRight" delay={400}>
                  <div className="relative">
                    <Image
                      src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/CULINARY-PASSION.png"
                      alt="Food & Barbecue - The Art of Slow Cooking"
                      width={600}
                      height={800}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= INTERNATIONAL SUPPORT SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={775}>
          <div className="mb-16 py-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              {/* International Support Feature */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="animate-slideInRight" delay={400}>
                  <div className="relative">
                    <Image
                      src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/INTERNATIONAL-SUPPORT.png"
                      alt="International Support - Global Impact Initiatives"
                      width={600}
                      height={800}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="animate-slideInLeft" delay={200}>
                  <div>
                    <div className="text-sm text-[#ff6347] font-medium mb-3">INTERNATIONAL SUPPORT</div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                      Charity <span className="font-['Serif_Italic'] italic font-normal text-[#ff6347]">Fundraising</span>
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      I'm proud to support organizations like Water for the World and the World Food Bank through fundraising events and technology initiatives. These efforts help provide clean water and sustainable food sources to communities in need around the globe.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      I've also supported Frank Kanobana's community initiatives by volunteering and contributing to fundraising efforts, providing technical support for events that foster trade and cultural exchange between East Africa and the U.S.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Clean Water
                      </span>
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Cultural Exchange
                      </span>
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Global Development
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= RED CROSS VOLUNTEER SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={785}>
          <div className="mb-16 py-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              {/* Red Cross Volunteer Feature */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="animate-slideInLeft" delay={200}>
                  <div>
                    <div className="text-sm text-[#ff6347] font-medium mb-3">DISASTER RECOVERY</div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                      Red Cross <span className="font-['Serif_Italic'] italic font-normal text-[#ff6347]">Volunteer</span>
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      As a Red Cross Disaster Recovery Team Member since November 10, 2023, I've aided households hit by disasters, coordinating support and facilitating referrals to community resources.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      I've also contributed by developing efficient databases for recovery planning, helping the team respond more effectively to community needs during challenging times.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Disaster Response
                      </span>
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Community Support
                      </span>
                      <span className="px-4 py-2 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                        Crisis Management
                      </span>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="animate-slideInRight" delay={400}>
                  <div className="relative">
                    <Image
                      src="https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/DISASTER-RECOVERY.png"
                      alt="Red Cross Volunteer - Disaster Recovery Team"
                      width={600}
                      height={800}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= CONTACT CTA SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={800}>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              LET'S <span className="font-['Serif_Italic'] italic font-normal">Connect</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about technology, I'm always open to new
              connections and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-2 shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200 flex items-center gap-2">
                  Get in Touch <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="px-6 py-2 shadow-[0_4px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] hover:translate-y-[2px] transition-all duration-200"
                >
                  View My Projects
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* ========= 5. STATS SECTION ========= */}
        <AnimatedSection animation="animate-fadeInUp" delay={900}>
          <div className="mb-16 py-8 px-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Projects Completed", end: 100, suffix: "+" },
                { label: "Client Satisfaction", end: 100, suffix: "%" },
                { label: "Years Experience", end: 5, suffix: "+" },
                { label: "Technologies Used", end: 20, suffix: "+" },
              ].map((stat, index) => (
                <AnimatedSection key={index} animation="animate-fadeIn" delay={index * 200}>
                  <div className="text-center">
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
        {/* ========= 6. TESTIMONIALS SECTION ========= */}
        <div className="mb-16 py-12 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl border border-gray-200">
          <div className="text-sm mb-2 dark:text-black">(CLIENT FEEDBACK)</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 dark:text-black">
            WHAT CLIENTS <span className="font-['Serif_Italic'] italic font-normal">Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 text-[#ff6347] text-5xl opacity-20">"</div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-900 mb-6">
                "Working with this developer was a game-changer for our business. The AI solution they built automated our
                customer support process and reduced response times by 70%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <Image
                    src="/professional-business-woman-headshot.png"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-700">CTO, TechSolutions Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 text-[#ff6347] text-5xl opacity-20">"</div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The custom workflow automation system developed for our team has transformed how we operate. Processes
                that took days now happen in minutes. Exceptional work!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <Image
                    src="/professional-businessman-suit.png"
                    alt="Michael Chen"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Operations Director, GlobalTech</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 text-[#ff6347] text-5xl opacity-20">"</div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The mobile app developed for our startup exceeded our expectations. The attention to detail, performance
                optimization, and user experience design were all top-notch."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <Image
                    src="/young-entrepreneur-woman.png"
                    alt="Emma Rodriguez"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">Founder, InnovateMobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= SPEAKING ENGAGEMENTS SECTION ========= */}
        <div className="mb-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>

          <div className="text-sm mb-2">(INDUSTRY PRESENCE)</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            SPEAKING <span className="font-['Serif_Italic'] italic font-normal">Engagements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="/bishop-odowd-highschool.png"
                  alt="Speaking at Bishop O'Dowd High School"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                    Environmental Justice
                  </span>
                  <span className="text-sm text-gray-500">February 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Bishop O'Dowd High School & Canticle Farm Partnership</h3>
                <p className="text-gray-700">
                  Led an interactive workshop on environmental justice and sustainable technology solutions, empowering
                  students to address climate challenges through innovative tech approaches in partnership with Canticle
                  Farm's community garden initiative in Oakland.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-100">
                    Climate Tech
                  </span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-100">
                    Environmental Justice
                  </span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-100">
                    Community Engagement
                  </span>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>Oakland, CA</span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="/uc-santa-cruz-speaker.jpeg"
                  alt="Guest Speaker at UC Santa Cruz"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                    Social Justice & Tech
                  </span>
                  <span className="text-sm text-gray-500">April 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Guest Speaker at UC Santa Cruz</h3>
                <p className="text-gray-700">
                  Delivered a compelling lecture on technology's role in advancing social justice, examining how AI and
                  software can either perpetuate or help dismantle systemic inequalities, with case studies on ethical
                  tech development for marginalized communities.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium border border-purple-100">
                    Digital Equity
                  </span>
                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium border border-purple-100">
                    Ethical AI
                  </span>
                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium border border-purple-100">
                    Tech Accessibility
                  </span>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>Santa Cruz, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= TECHNICAL COMMUNITY LEADERSHIP SECTION ========= */}
        <div className="mb-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff6347]/5 rounded-full blur-3xl"></div>

          <div className="text-sm mb-2">(KNOWLEDGE SHARING)</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            TECHNICAL <span className="font-['Serif_Italic'] italic font-normal">Meetups</span> & WORKSHOPS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_ComputerVision%20.png-5vOw8ASIKZdmmj5oka5GaxdIizaGGE.jpeg"
                  alt="Advanced Computer Vision Data Curation and Model Evaluation"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                    Computer Vision
                  </span>
                  <span className="text-sm text-gray-500">Weekly Meetup</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <a
                    href="https://www.meetup.com/san-francisco-augmented-reality-and-computer-vision-meetup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff6347] transition-colors flex items-center"
                  >
                    Advanced Computer Vision Data Curation
                    <ExternalLink size={16} className="ml-2 opacity-70" />
                  </a>
                </h3>
                <p className="text-gray-700">
                  Leading a weekly group focused on improving computer vision workflows through better data curation and
                  model evaluation techniques. We explore customizing the FiftyOne App, integrating with new models, and
                  automating common tasks to streamline workflows.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-100">
                    Computer Vision
                  </span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-100">
                    MLOps
                  </span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-100">
                    Data Curation
                  </span>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.meetup.com/san-francisco-augmented-reality-and-computer-vision-meetup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#f64060] hover:bg-[#e13557] text-white rounded-md transition-colors text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 90 90"
                      fill="currentColor"
                    >
                      <path d="M73.61,15.34A36.78,36.78,0,0,0,0,45a36.51,36.51,0,0,0,3.55,15.58,1.78,1.78,0,0,0,1.58.95,1.67,1.67,0,0,0,.79-.19,1.74,1.74,0,0,0,.76-2.36A33.18,33.18,0,0,1,3.62,45a33.26,33.26,0,1,1,66.51,0,33.18,33.18,0,0,1-3,13.87,1.74,1.74,0,0,0,.76,2.36,1.67,1.67,0,0,0,.79.19,1.78,1.78,0,0,0,1.58-.95A36.51,36.51,0,0,0,73.61,15.34Z" />
                      <circle cx="45" cy="45.44" r="8.31" />
                    </svg>
                    Join Meetup Group
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meetup-AW8A898hDCcRBLpylC1blqX6xJ8Amq.png"
                  alt="Deep Learning Study Group"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-sm font-medium">
                    Deep Learning Research
                  </span>
                  <span className="text-sm text-gray-500">Weekly Study Group</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <a
                    href="https://www.meetup.com/handsonprogrammingevents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff6347] transition-colors flex items-center"
                  >
                    Deep Learning Study Group
                    <ExternalLink size={16} className="ml-2 opacity-70" />
                  </a>
                </h3>
                <p className="text-gray-700">
                  Facilitating a weekly study group dedicated to reading and discussing current deep learning literature.
                  Our collaborative approach helps participants accelerate their understanding of cutting-edge research
                  through structured discussions and peer learning.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs font-medium border border-amber-100">
                    Deep Learning
                  </span>
                  <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs font-medium border border-amber-100">
                    Research Papers
                  </span>
                  <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs font-medium border border-amber-100">
                    Collaborative Learning
                  </span>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.meetup.com/handsonprogrammingevents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#f64060] hover:bg-[#e13557] text-white rounded-md transition-colors text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 90 90"
                      fill="currentColor"
                    >
                      <path d="M73.61,15.34A36.78,36.78,0,0,0,0,45a36.51,36.51,0,0,0,3.55,15.58,1.78,1.78,0,0,0,1.58.95,1.67,1.67,0,0,0,.79-.19,1.74,1.74,0,0,0,.76-2.36A33.18,33.18,0,0,1,3.62,45a33.26,33.26,0,1,1,66.51,0,33.18,33.18,0,0,1-3,13.87,1.74,1.74,0,0,0,.76,2.36,1.67,1.67,0,0,0,.79.19,1.78,1.78,0,0,0,1.58-.95A36.51,36.51,0,0,0,73.61,15.34Z" />
                      <circle cx="45" cy="45.44" r="8.31" />
                    </svg>
                    Join Meetup Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= EDUCATION & CERTIFICATIONS SECTION ========= */}
        <div className="mb-16 py-12 border-t border-gray-200">
          <div className="text-sm mb-2">(BACKGROUND)</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            EDUCATION & <span className="font-['Serif_Italic'] italic font-normal">Certifications</span>
          </h2>

          <div className="space-y-12">
            {/* Education Timeline */}
            <div className="relative border-l-2 border-[#ff6347] pl-8 ml-4">
              {/* Updated Education Timeline Items */}
              {/* Dominican University of California */}
              <div className="mb-12 relative">
                <div className="absolute -left-[43px] top-0 w-8 h-8 bg-white rounded-full border-2 border-[#ff6347] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#ff6347] rounded-full"></div>
                </div>
                <div className="text-sm text-[#ff6347] font-medium mb-2">2024 - Present</div>
                <h3 className="text-xl font-bold mb-1">B.S. Applied Computer Science (in progress)</h3>
                <p className="text-lg font-medium mb-2">Dominican University of California</p>
                <p className="text-gray-700 mb-4">
                  Currently pursuing a B.S. in Applied Computer Science through Dominican University’s live-online program. The curriculum combines front- and back-end web development, software engineering, agile product development, and data analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    Trustee Scholarship: $21,000/yr for up to six semesters
                  </span>
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    Weekly pair-programming & virtual hackathons
                  </span>
                </div>
              </div>

              {/* edX MicroBachelors Program */}
              <div className="mb-12 relative">
                <div className="absolute -left-[43px] top-0 w-8 h-8 bg-white rounded-full border-2 border-[#ff6347] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#ff6347] rounded-full"></div>
                </div>
                <div className="text-sm text-[#ff6347] font-medium mb-2">2023 - Present</div>
                <h3 className="text-xl font-bold mb-1">MicroBachelors Program: Full Stack Application Development</h3>
                <p className="text-lg font-medium mb-2">edX (Charles Koch Foundation funded)</p>
                <p className="text-gray-700 mb-4">
                  Intensive sequence covering HTML5, CSS3, JavaScript, React, Node.js, Express, Python, Django, Docker, Kubernetes, and OpenShift. Built and deployed cloud-native microservices using DevOps and CI/CD best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    Completed capstone “Program Record” with distinction
                  </span>
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    Peer code-reviews in IBM Cloud Labs
                  </span>
                </div>
              </div>

              {/* Harvard University CS50x */}
              <div className="mb-12 relative">
                <div className="absolute -left-[43px] top-0 w-8 h-8 bg-white rounded-full border-2 border-[#ff6347] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#ff6347] rounded-full"></div>
                </div>
                <div className="text-sm text-[#ff6347] font-medium mb-2">2023 - Present</div>
                <h3 className="text-xl font-bold mb-1">Computer Science 50 (CS50x)</h3>
                <p className="text-lg font-medium mb-2">Harvard University</p>
                <p className="text-gray-700 mb-4">
                  Self-paced deep dive into algorithms, data structures, memory management, and web programming (C, Python, JavaScript). Focused on analytical thinking and real-world problem-solving.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    Active in CS50x discussion boards
                  </span>
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    Weekly problem-set study group
                  </span>
                </div>
              </div>

              {/* West Los Angeles College */}
              <div className="mb-12 relative">
                <div className="absolute -left-[43px] top-0 w-8 h-8 bg-white rounded-full border-2 border-[#ff6347] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#ff6347] rounded-full"></div>
                </div>
                <div className="text-sm text-[#ff6347] font-medium mb-2">Graduated 2015</div>
                <h3 className="text-xl font-bold mb-1">Associate of Arts (Pre-Engineering)</h3>
                <p className="text-lg font-medium mb-2">West Los Angeles College</p>
                <p className="text-gray-700 mb-4">
                  Completed associate degree with honors on the Mechanical Engineering track. Led peer tutoring, fundraisers, and represented in the 2013 International Scholar Laureate Engineering delegation to China.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    STEM Club officer & honor societies
                  </span>
                  <span className="px-3 py-1 bg-[#ff6347]/10 text-[#ff6347] rounded-full text-xs font-medium">
                    International Scholar Laureate Program in China
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Certification 1 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center">
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">2023</div>
                </div>
                <h3 className="text-lg font-bold mb-1 dark:text-black">AWS Solutions Architect Professional</h3>
                <p className="text-sm text-gray-700 mb-2">Amazon Web Services</p>
                <p className="text-gray-600 text-sm">
                  Advanced certification demonstrating expertise in designing distributed systems on AWS.
                </p>
              </div>

              {/* Certification 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center">
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
                  </div>
                  <div className="text-sm text-gray-500">2022</div>
                </div>
                <h3 className="text-lg font-bold mb-1 dark:text-black">TensorFlow Developer Certification</h3>
                <p className="text-sm text-gray-700 mb-2">Google</p>
                <p className="text-gray-600 text-sm">
                  Specialized in building and deploying machine learning models using TensorFlow.
                </p>
              </div>

              {/* Certification 3 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center">
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
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">2021</div>
                </div>
                <h3 className="text-lg font-bold mb-1 dark:text-black">Certified Kubernetes Administrator</h3>
                <p className="text-sm text-gray-700 mb-2">Cloud Native Computing Foundation</p>
                <p className="text-gray-600 text-sm">
                  Expert-level understanding of Kubernetes architecture and operations.
                </p>
              </div>

              {/* Certification 4 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">2022</div>
                </div>
                <h3 className="text-lg font-bold mb-1 dark:text-black">Certified Information Systems Security Professional (CISSP)</h3>
                <p className="text-sm text-gray-700 mb-2">(ISC)²</p>
                <p className="text-gray-600 text-sm">
                  Advanced security certification covering cryptography, security architecture, and risk management.
                </p>
              </div>

              {/* Certification 5 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center">
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
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">2023</div>
                </div>
                <h3 className="text-lg font-bold mb-1 dark:text-black">Azure AI Engineer Associate</h3>
                <p className="text-sm text-gray-700 mb-2">Microsoft</p>
                <p className="text-gray-600 text-sm">
                  Specialized in implementing and managing AI solutions using Microsoft Azure cognitive services.
                </p>
              </div>

              {/* Certification 6 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center">
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
                  </div>
                  <div className="text-sm text-gray-500">2021</div>
                </div>
                <h3 className="text-lg font-bold mb-1 dark:text-black">Certified Scrum Master (CSM)</h3>
                <p className="text-sm text-gray-700 mb-2">Scrum Alliance</p>
                <p className="text-gray-600 text-sm">
                  Expert in facilitating Scrum processes and guiding teams to deliver high-value products.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ========= PUBLICATIONS & MEDIA SECTION ========= */}
        <div className="mb-16 py-12 border-t border-gray-200">
          <div className="text-sm mb-2">(THOUGHT LEADERSHIP)</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            INSIGHTS & <span className="font-['Serif_Italic'] italic font-normal">Content</span>
          </h2>

          <div className="space-y-8">
            {/* Medium Articles */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
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
                  className="text-[#ff6347] mr-3"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                Tech Articles & Insights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Medium Article 1 */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/ai-concept-art.png"
                      alt="Leveraging LLMs for Automated Testing"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                      April 2024
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 dark:text-black">Leveraging LLMs for Automated Testing</h4>
                    <p className="text-gray-700 mb-4 text-sm">
                      In this article, I explore practical applications of large language models for generating comprehensive test cases and automating software testing processes.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#ff6347] text-sm font-medium">Medium</span>
                      <a
                        href="https://medium.com/@yourusername/leveraging-llms-for-automated-testing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-600 hover:text-[#ff6347] transition-colors"
                      >
                        Read Article
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
                          className="ml-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tech Newsletter/Blog Post */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/modern-coding-workspace.png"
                      alt="Building Scalable AI Agents with Modern Architecture"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                      February 2024
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 dark:text-black">Building Scalable AI Agents with Modern Architecture</h4>
                    <p className="text-gray-700 mb-4 text-sm">
                      A comprehensive guide to designing AI agents that can scale effectively while maintaining performance and reliability in production environments.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#ff6347] text-sm font-medium">Personal Blog</span>
                      <a
                        href="/blog/building-scalable-ai-agents"
                        className="flex items-center text-sm text-gray-600 hover:text-[#ff6347] transition-colors"
                      >
                        Read Article
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
                          className="ml-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Content */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
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
                  className="text-[#ff6347] mr-3"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                Educational Content
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* YouTube Tutorial */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/codetv-channel-banner.png"
                      alt="Building a Trading Bot with MT5 and MQL5"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                      Video Tutorial
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-black dark:text-black">Building Trading Bots with MT5 and MQL5</h4>
                    <p className="text-gray-700 mb-4 text-sm">
                      A step-by-step video tutorial showing how to create automated trading systems with MetaTrader 5, featuring CafeAlgo BaristaFusion Prime.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#ff6347] text-sm font-medium">YouTube</span>
                      <a
                        href="https://youtube.com/your-channel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-600 hover:text-[#ff6347] transition-colors"
                      >
                        Watch Video
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
                          className="ml-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Open Source Project */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/code-visualization.png"
                      alt="Open Source Project - AI Tools Collection"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                      Open Source
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 dark:text-black">AI Developer Toolkit</h4>
                    <p className="text-gray-700 mb-4 text-sm">
                      A collection of open-source utilities and libraries I've developed to help streamline AI development workflows and improve productivity.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#ff6347] text-sm font-medium">GitHub</span>
                      <a
                        href="https://github.com/yourusername/ai-developer-toolkit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-600 hover:text-[#ff6347] transition-colors"
                      >
                        View Project
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
                          className="ml-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Blog */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
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
                  className="text-[#ff6347] mr-3"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
                Medium Articles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Medium Post 1 */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-2">March 15, 2024</div>
                    <h4 className="text-lg font-bold mb-3 dark:text-black">The Future of Internet Computer Protocol</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Exploring how DFINITY's Internet Computer is revolutionizing blockchain technology with its unique approach to smart contracts and decentralized applications.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden mr-2">
                          <Image
                            src="/styner-headshot.png"
                            alt="Author"
                            width={24}
                            height={24}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-600">8 min read</span>
                      </div>
                      <a href="https://medium.com/@stynerstiner/the-future-of-internet-computer-protocol" className="text-xs text-[#ff6347] hover:underline">
                        Read on Medium →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Medium Post 2 */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-2">February 7, 2024</div>
                    <h4 className="text-lg font-bold mb-3 dark:text-black">Algorithmic Trading: A Developer's Perspective</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      An in-depth look at how developers can build effective trading algorithms using modern programming techniques and data analysis.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden mr-2">
                          <Image
                            src="/styner-headshot.png"
                            alt="Author"
                            width={24}
                            height={24}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-600">12 min read</span>
                      </div>
                      <a href="https://medium.com/@stynerstiner/algorithmic-trading-developers-perspective" className="text-xs text-[#ff6347] hover:underline">
                        Read on Medium →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Medium Post 3 */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-2">January 22, 2024</div>
                    <h4 className="text-lg font-bold mb-3 dark:text-black">Building a Career in Web3 Development</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Strategic advice for developers looking to transition into blockchain and decentralized application development, with practical steps and resource recommendations.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden mr-2">
                          <Image
                            src="/styner-headshot.png"
                            alt="Author"
                            width={24}
                            height={24}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-600">15 min read</span>
                      </div>
                      <a href="https://medium.com/@stynerstiner/building-career-web3-development" className="text-xs text-[#ff6347] hover:underline">
                        Read on Medium →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= CONTACT SECTION ========= */}
        <div className="mb-16 py-12 border-t border-gray-200">
          <div className="text-sm mb-2">(GET IN TOUCH)</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            LET'S <span className="font-['Serif_Italic'] italic font-normal">Connect</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl text-gray-700 mb-6">
                Ready to discuss your project or explore how we could work together? I'm always interested in innovative
                challenges and collaborative opportunities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center mr-4">
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
                      className="text-[#ff6347]"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-700">COMING SOON</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center mr-4">
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
                      className="text-[#ff6347]"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-700">hello@stynerdev.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center mr-4">
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
                      className="text-[#ff6347]"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-gray-700">San Francisco Bay Area, California</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#ff6347]/10 rounded-full flex items-center justify-center hover:bg-[#ff6347]/20 transition-colors"
                  aria-label="Visit my GitHub profile"
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
                    className="text-[#ff6347]"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
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
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347]"
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
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347]"
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
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#ff6347]"
                  >
                    <path d="M18 3v18H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></path>
                    <circle cx="9" cy="12" r="1.5"></circle>
                    <circle cx="15" cy="12" r="1.5"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-black">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6347]/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6347]/50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6347]/50"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6347]/50 h-32"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-3 rounded-md shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center font-medium"
                  >
                    Send Message
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
                      className="ml-2"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
