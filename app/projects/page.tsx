import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Tablet,
  Server,
  Database,
  Bot,
  Code,
  Cloud,
  Cog,
  Zap,
  Brain,
  Cpu,
  Globe,
  Bolt,
  Plug,
  Terminal,
} from "lucide-react"
import AnimatedSection from "../../components/animated-section"

export default function ProjectsPage() {
  const projects = [

    {
      title: "MT5 & Coinbase Trading Bots",
      description:
        "Automated trading bots built for MetaTrader 5 and Coinbase that execute algorithmic strategies with real-time market data integration and customizable parameters.",
      image: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/1.MT5%26CoinbaseTradingBotsBackgroundRemoved.png",
      tags: ["AWS Lambda", "Next.js", "DynamoDB", "Stripe"],
      link: "/projects/serverless-ecommerce",
    },
    {
      title: "ICP/DFINITY Blockchain",
      description:
        "Develop decentralized applications and smart contracts on the Internet Computer Protocol (ICP) network, leveraging Motoko and decentralized data storage.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
      tags: ["ICP", "Motoko", "Blockchain"],
      link: "/projects/icp-dfinity-blockchain",
    },
    {
      title: "AI-Powered Content Management",
      description:
        "A content management system enhanced with AI capabilities for automated content organization, tagging, and recommendations.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "AI", "Prisma", "PostgreSQL"],
      link: "/projects/ai-cms",
    },
    {
      title: "Workflow Automation Platform",
      description:
        "Enterprise-grade platform that automates complex business workflows across multiple systems and departments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "Temporal", "AWS"],
      link: "/projects/workflow-platform",
    },
    {
      title: "Healthcare Assistant Chatbot",
      description:
        "An intelligent chatbot system for healthcare providers that assists patients with scheduling, information, and basic triage.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI", "OpenAI", "React", "Python"],
      link: "/projects/healthcare-chatbot",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard providing real-time insights into business metrics with customizable views and alerts.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      tags: ["D3.js", "Next.js", "Firebase", "WebSockets"],
      link: "/projects/analytics-dashboard",
    },
  ]

  const mobileProjects = [
    {
      title: "Cross-Platform Fitness App",
      description:
        "A comprehensive fitness application built with React Native that provides workout tracking, nutrition planning, and progress visualization with a seamless experience across devices.",
      image: "https://images.unsplash.com/photo-1510440777527-38815cfc6cc2?q=80&w=2070&auto=format&fit=crop",
      tags: ["React Native", "Firebase", "Redux", "Health APIs"],
      link: "/projects/fitness-tracker-app",
      platforms: ["iOS", "Android"],
    },
    {
      title: "Smart Home Control App",
      description:
        "Mobile application that connects to smart home APIs, providing users with an intuitive interface to control their connected devices from anywhere, with automation features and usage analytics.",
      image: "https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=2074&auto=format&fit=crop",
      tags: ["Flutter", "REST APIs", "BLoC Pattern", "Firebase"],
      link: "/projects/smart-home-app",
      platforms: ["iOS", "Android", "Web"],
    },
    {
      title: "E-commerce Mobile Experience",
      description:
        "Feature-rich e-commerce mobile app with advanced product discovery, AR product visualization, secure payment processing, and personalized recommendations based on user behavior.",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop",
      tags: ["React Native", "GraphQL", "Stripe", "AWS Amplify"],
      link: "/projects/ecommerce-mobile-app",
      platforms: ["iOS", "Android", "Tablet"],
    },
  ]

  const aiProjects = [
    {
      title: "Autonomous Research Agent",
      description:
        "Built with Google's Agent Development Kit (ADK), this autonomous agent conducts comprehensive market research, analyzes data, and generates detailed reports with minimal human intervention.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop",
      tags: ["Google ADK", "LangChain", "Python", "NLP"],
      link: "/projects/autonomous-research-agent",
    },
    {
      title: "Context7 Documentation Server",
      description:
        "An MCP-compatible server that provides code documentation and context to AI agents, enabling them to understand complex codebases and assist developers more effectively.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
      tags: ["Model Context Protocol", "Node.js", "TypeScript", "Docker"],
      link: "/projects/context7-server",
    },
    {
      title: "Suna Integration Platform",
      description:
        "Implementation and customization of the open-source Suna AI agent framework for enterprise use cases, with custom tools and workflows for specific business domains.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      tags: ["Suna", "Python", "AI", "API Integration"],
      link: "/projects/suna-integration",
    },
  ]

  const automationProjects = [
    {
      title: "Inventory Management Automation",
      description:
        "Google Sheets-based inventory management system with Apps Script automation for order processing, stock alerts, and supplier communication, integrated with e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      tags: ["Google Sheets", "Apps Script", "JavaScript", "API Integration"],
      link: "/projects/inventory-automation",
    },
    {
      title: "Document Processing Pipeline",
      description:
        "Automated document processing system using OCRmyPDF to convert scanned documents into searchable PDFs, with metadata extraction and intelligent filing into document management systems.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2070&auto=format&fit=crop",
      tags: ["OCRmyPDF", "Python", "Document Processing", "Automation"],
      link: "/projects/document-processing",
    },
    {
      title: "Customer Communication System",
      description:
        "Transactional email automation platform using Resend for triggered communications based on customer actions, with personalized content and analytics tracking.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2069&auto=format&fit=crop",
      tags: ["Resend", "Node.js", "Email Automation", "Analytics"],
      link: "/projects/communication-system",
    },
  ]

  const infrastructureProjects = [
    {
      title: "Edge Computing Platform",
      description:
        "Cloudflare Workers-based edge computing solution for global content delivery, real-time data processing, and security enforcement at the network edge.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      tags: ["Cloudflare Workers", "JavaScript", "Edge Computing", "Security"],
      link: "/projects/edge-computing",
    },
    {
      title: "Serverless Microservices Architecture",
      description:
        "AWS-based serverless architecture using Lambda, API Gateway, and DynamoDB for scalable, cost-effective microservices with automated deployment pipelines.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless"],
      link: "/projects/serverless-microservices",
    },
    {
      title: "Private Cloud Processing System",
      description:
        "Local file storage and processing system for organizations with strict data privacy requirements, enabling efficient workflows while maintaining complete data sovereignty.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      tags: ["Private Cloud", "Docker", "Data Privacy", "Workflow Automation"],
      link: "/projects/private-cloud",
    },
  ]

  const databaseProjects = [
    {
      title: "Document Database Migration",
      description:
        "Migration of a legacy relational database to MongoDB, with custom data transformation pipelines, validation rules, and performance optimization for improved scalability.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
      tags: ["MongoDB", "Data Migration", "Node.js", "Performance Optimization"],
      link: "/projects/mongodb-migration",
    },
    {
      title: "Real-time Analytics Database",
      description:
        "PostgreSQL-based analytics database with optimized query performance, partitioning strategies, and real-time data processing capabilities for business intelligence applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["PostgreSQL", "SQL", "Data Analytics", "Performance Tuning"],
      link: "/projects/analytics-database",
    },
    {
      title: "Firebase Realtime Sync System",
      description:
        "Multi-device data synchronization system built on Firebase Realtime Database and Firestore, enabling real-time collaboration and offline-first functionality for mobile and web applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      tags: ["Firebase", "Realtime Database", "Firestore", "Offline-First"],
      link: "/projects/firebase-sync-system",
    },
  ]

  const backendProjects = [
    {
      title: "E-commerce Backend System",
      description:
        "Comprehensive backend system for e-commerce operations, including inventory management, order processing, payment integration, and customer management with robust security.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      tags: ["Node.js", "Express", "MongoDB", "Payment Processing"],
      link: "/projects/ecommerce-backend",
    },
    {
      title: "Authentication Microservice",
      description:
        "Secure authentication and authorization microservice with multi-factor authentication, JWT token management, and code signing capabilities for enterprise applications.",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2070&auto=format&fit=crop",
      tags: ["Authentication", "Security", "Microservices", "JWT"],
      link: "/projects/auth-microservice",
    },
    {
      title: "AI Integration Backend",
      description:
        "Backend system designed for AI model integration, with efficient data processing pipelines, model serving infrastructure, and API endpoints for machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI Integration", "Python", "FastAPI", "Model Serving"],
      link: "/projects/ai-backend",
    },
  ]

  const localLLMProjects = [
    {
      title: "Enterprise LLM Deployment Framework",
      description:
        "Comprehensive framework for deploying and managing local LLMs in enterprise environments using Ollama, with custom model management, access controls, and integration capabilities.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      tags: ["Ollama", "Docker", "Python", "Enterprise LLM"],
      link: "/projects/enterprise-llm-framework",
    },
    {
      title: "LLM Testing & Evaluation Suite",
      description:
        "Comprehensive testing and evaluation suite for local LLMs using LM Studio, enabling organizations to benchmark model performance, fine-tune parameters, and select optimal models for specific use cases.",
      image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop",
      tags: ["LM Studio", "Model Evaluation", "Benchmarking", "Python"],
      link: "/projects/llm-evaluation-suite",
    },
    {
      title: "Workflow Automation Assistant",
      description:
        "Local LLM-powered assistant built with Requesty.ai that automates complex workflows, integrates with enterprise systems, and provides secure, privacy-focused AI assistance without data leaving the organization.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      tags: ["Requesty.ai", "Workflow Automation", "Local LLM", "Enterprise Integration"],
      link: "/projects/workflow-assistant",
    },
  ]

  const hostedLLMProjects = [
    {
      title: "Multi-Model AI Gateway",
      description:
        "Unified API gateway for accessing multiple LLM providers through OpenRouter.ai, with intelligent model routing, fallback mechanisms, and cost optimization strategies.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop",
      tags: ["OpenRouter.ai", "API Gateway", "Multi-Model", "Cost Optimization"],
      link: "/projects/multi-model-gateway",
    },
    {
      title: "Hugging Face Model Deployment",
      description:
        "End-to-end solution for deploying custom fine-tuned models on Hugging Face Inference API, with monitoring, scaling, and integration with existing applications.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
      tags: ["Hugging Face", "Model Deployment", "Fine-Tuning", "API Integration"],
      link: "/projects/huggingface-deployment",
    },
  ]

  const lightningAIProjects = [
    {
      title: "AI Training Orchestration Platform",
      description:
        "Comprehensive platform built on Lightning AI for orchestrating model training workflows, with distributed training capabilities, experiment tracking, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      tags: ["Lightning AI", "PyTorch Lightning", "Model Training", "MLOps"],
      link: "/projects/training-orchestration",
    },
    {
      title: "AI Model API Deployment",
      description:
        "Streamlined solution for deploying AI models as production-ready APIs using Lightning AI's cloud infrastructure, with monitoring, scaling, and version management capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      tags: ["Lightning AI", "API Endpoints", "Model Serving", "Cloud Deployment"],
      link: "/projects/lightning-api-deployment",
    },
  ]

  const sdkIntegrationProjects = [
    {
      title: "Firebase Multi-Platform Integration",
      description:
        "Comprehensive integration of Firebase services across web and mobile platforms, providing unified authentication, real-time data synchronization, and cloud functions for seamless cross-platform experiences.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      tags: ["Firebase", "Authentication", "Realtime DB", "Cloud Functions"],
      link: "/projects/firebase-integration",
    },
    {
      title: "Google ADK Enterprise Solution",
      description:
        "Enterprise-grade implementation of Google's Agent Development Kit (ADK) for creating autonomous agents that integrate with existing business systems and workflows.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop",
      tags: ["Google ADK", "Enterprise Integration", "Autonomous Agents", "Workflow Automation"],
      link: "/projects/adk-enterprise",
    },
    {
      title: "API Integration Platform",
      description:
        "Flexible platform for integrating diverse APIs (RESTful, GraphQL, LLM) into unified workflows, with data transformation, error handling, and monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      tags: ["API Integration", "GraphQL", "REST", "Data Pipelines"],
      link: "/projects/api-integration-platform",
    },
  ]

  const aiInfraProjects = [
    {
      title: "Edge AI Deployment Platform",
      description:
        "Cloudflare Workers-based platform for deploying lightweight AI models at the edge, enabling low-latency inference and personalized experiences without centralized infrastructure.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      tags: ["Cloudflare Workers", "Edge AI", "Inference Optimization", "Distributed Computing"],
      link: "/projects/edge-ai-platform",
    },
    {
      title: "AWS ML Infrastructure",
      description:
        "Comprehensive AWS-based infrastructure for machine learning workflows, including data processing with Lambda, model training with SageMaker, and deployment with container services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      tags: ["AWS", "SageMaker", "Lambda", "Container Services"],
      link: "/projects/aws-ml-infrastructure",
    },
    {
      title: "Private AI Compute Cluster",
      description:
        "On-premises AI compute infrastructure for organizations with strict data privacy requirements, enabling secure model training and inference without data leaving the organization.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      tags: ["Private Infrastructure", "GPU Clusters", "Data Privacy", "On-Premises AI"],
      link: "/projects/private-ai-cluster",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mb-16 py-12 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection animation="animate-slideInLeft" delay={200}>
                <div className="text-sm mb-2">(MY WORK)</div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  INNOVATIVE <span className="font-['Serif_Italic'] italic font-normal">projects</span> &
                  <br className="hidden sm:block" /> DIGITAL SOLUTIONS
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Explore a collection of my most impactful projects, showcasing a blend of technical expertise, creative
                  problem-solving, and business value creation.
                </p>
                <div className="mb-6 p-4 border-l-4 border-[#ff6347] bg-gray-50 dark:bg-gray-800/50">
                  <blockquote className="text-lg font-medium text-black dark:text-black italic">
                    "Languages change. My hunger to learn doesn't."
                  </blockquote>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fadeIn" delay={400}>
                <div className="grid grid-cols-2 gap-4 mb-8">
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
                    <p className="text-gray-700">Custom AI Development</p>
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
                    <p className="text-gray-700">Web Applications</p>
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
                    <p className="text-gray-700">Autonomous AI Agents</p>
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
                    <p className="text-gray-700">Mobile Apps (Expo Router)</p>
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
                    <p className="text-gray-700">Workflow Automation</p>
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
                    <p className="text-gray-700">Advanced LLM Integration</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fadeInUp" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-2 shadow-[0_4px_0_0_#d43c20] hover:shadow-[0_2px_0_0_#d43c20] hover:translate-y-[2px] transition-all duration-200">
                    Filter Projects
                  </Button>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="px-6 py-2 shadow-[0_4px_0_0_#d1d5db] hover:shadow-[0_2px_0_0_#d1d5db] hover:translate-y-[2px] transition-all duration-200"
                    >
                      Discuss a Project
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection animation="animate-slideInRight" delay={300}>
                <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="rounded-[24px] overflow-hidden shadow-md">
                    <Image
                      src="/modern-coding-workspace.png"
                      alt="Modern coding workspace"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="animate-fadeIn">
        <div className="mb-12 text-center">
          <div className="text-sm mb-2">(PROJECTS)</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            INNOVATIVE <span className="font-['Serif_Italic'] italic font-normal">solutions</span> FOR
            <br className="hidden sm:block" /> REAL-WORLD CHALLENGES
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore a selection of innovative projects where I've applied modern technologies to solve real-world
            challenges and deliver exceptional results.
          </p>
        </div>
      </AnimatedSection>

      {/* Project Sections */}
      <AnimatedSection animation="animate-fadeIn" delay={300}>
        <div className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-[#ff6347] inline-block pb-1 mb-8">Web Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} animation="animate-fadeInUp" delay={300 + index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-1 px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-black">
                      {project.title.split(" ").map((word, i, arr) =>
                        i === arr.length - 1 ? (
                          <span key={i}>
                            <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                          </span>
                        ) : (
                          <span key={i}>{word} </span>
                        ),
                      )}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
                    >
                      View Project
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
                  <div className="overflow-hidden bg-gradient-to-b from-white via-white to-[#FAFCFB]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={`${project.title === "MT5 & Coinbase Trading Bots"
                        ? "w-full aspect-[3/2] object-contain transition-transform hover:scale-105"
                        : "w-full h-auto object-cover transition-transform hover:scale-105"
                        }`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* AI Model Installation & Local Development Section */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mt-24 mb-16">
          <div className="flex items-center mb-4">
            <Cpu className="h-8 w-8 text-[#ff6347] mr-3" />
            <div className="text-sm">(AI MODEL INSTALLATION & LOCAL DEVELOPMENT)</div>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            LOCAL <span className="font-['Serif_Italic'] italic font-normal">LLM</span>
            <br className="hidden sm:block" /> DEPLOYMENT SOLUTIONS
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Specialized expertise in setting up and optimizing local LLM environments using Ollama, LM Studio,
            Requesty.ai, and Hugging Face Transformers for privacy-focused AI capabilities.
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-16">
        {localLLMProjects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {project.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i}>
                      <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
              >
                View Project
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
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-16 py-12 px-8 bg-gray-50 rounded-xl">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-black">
            Local LLM <span className="font-['Serif_Italic'] italic font-normal">Deployment</span> Capabilities
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Specialized expertise in deploying and optimizing local language models for privacy-focused AI
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
              <Terminal className="h-6 w-6 text-[#ff6347]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">Ollama Deployment</h3>
            <p className="text-gray-700">
              Setup and optimization of Ollama for lightweight, efficient local LLM deployment with custom model
              management and integration capabilities for enterprise environments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
              <Cpu className="h-6 w-6 text-[#ff6347]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">LM Studio Configuration</h3>
            <p className="text-gray-700">
              Implementation of LM Studio for local LLM testing, evaluation, and fine-tuning, with custom workflows
              for model selection and performance optimization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-[#ff6347]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">Hugging Face Integration</h3>
            <p className="text-gray-700">
              Deployment of open-source models from Hugging Face in GGUF format for optimal performance on consumer
              hardware, with custom pipelines for specific use cases.
            </p>
          </div>
        </div>
      </div>

      {/* API Access to Hosted LLMs Section */}
      <div className="mt-24 mb-16">
        <div className="flex items-center mb-4">
          <Globe className="h-8 w-8 text-[#ff6347] mr-3" />
          <div className="text-sm">(API ACCESS TO HOSTED LLMS)</div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          HOSTED <span className="font-['Serif_Italic'] italic font-normal">LLM</span>
          <br className="hidden sm:block" /> API INTEGRATION
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Expert integration of hosted LLM services through OpenRouter.ai and Hugging Face Inference API, providing
          access to state-of-the-art models with optimal performance and cost efficiency.
        </p>

        <div className="space-y-16">
          {hostedLLMProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i}>
                        <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    ),
                  )}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
                >
                  View Project
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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

      {/* Lightning AI Stack Section */}
      <div className="mt-24 mb-16">
        <div className="flex items-center mb-4">
          <Bolt className="h-8 w-8 text-[#ff6347] mr-3" />
          <div className="text-sm">(LIGHTNING AI STACK)</div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          ACCELERATED <span className="font-['Serif_Italic'] italic font-normal">AI</span>
          <br className="hidden sm:block" /> DEVELOPMENT
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Leveraging the Lightning AI stack to accelerate AI development with cloud studios, API endpoints, model
          training orchestration, and team-based workflows.
        </p>

        <div className="space-y-16">
          {lightningAIProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i}>
                        <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    ),
                  )}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
                >
                  View Project
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-16 py-12 px-8 bg-gray-50 rounded-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-black">
              Lightning AI <span className="font-['Serif_Italic'] italic font-normal">Stack</span> Capabilities
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Leveraging the Lightning AI ecosystem to accelerate AI development and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
                <Bolt className="h-6 w-6 text-[#ff6347]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">Cloud Studios</h3>
              <p className="text-gray-700">
                Implementation of Lightning AI cloud studios for collaborative AI development, with integrated
                environments for code, data, and model management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-[#ff6347]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">API Endpoints</h3>
              <p className="text-gray-700">
                Deployment of AI models as scalable API endpoints using Lightning AI infrastructure, with monitoring,
                versioning, and integration capabilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-[#ff6347]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">PyTorch Lightning</h3>
              <p className="text-gray-700">
                Utilization of PyTorch Lightning for structured model training with distributed computing capabilities,
                experiment tracking, and reproducible workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SDKs, APIs, and Integration Tools Section */}
      <div className="mt-24 mb-16">
        <div className="flex items-center mb-4">
          <Plug className="h-8 w-8 text-[#ff6347] mr-3" />
          <div className="text-sm">(SDKS, APIS, AND INTEGRATION TOOLS)</div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          SEAMLESS <span className="font-['Serif_Italic'] italic font-normal">system</span>
          <br className="hidden sm:block" /> INTEGRATION
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Expert integration of diverse technologies through SDKs, APIs, and custom tools, connecting systems and
          enabling powerful workflows across platforms.
        </p>

        <div className="space-y-16">
          {sdkIntegrationProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i}>
                        <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    ),
                  )}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
                >
                  View Project
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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

      {/* AI/ML Infrastructure & Hosting Section */}
      <div className="mt-24 mb-16">
        <div className="flex items-center mb-4">
          <Cloud className="h-8 w-8 text-[#ff6347] mr-3" />
          <div className="text-sm">(AI/ML INFRASTRUCTURE & HOSTING)</div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          SCALABLE <span className="font-['Serif_Italic'] italic font-normal">AI</span>
          <br className="hidden sm:block" /> INFRASTRUCTURE
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Robust infrastructure solutions for AI/ML workloads using Cloudflare, AWS, and private storage solutions,
          ensuring security, scalability, and optimal performance.
        </p>

        <div className="space-y-16">
          {aiInfraProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i}>
                        <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    ),
                  )}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
                >
                  View Project
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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

      {/* Databases Section */}
      <div className="mt-24 mb-16">
        <div className="flex items-center mb-4">
          <Database className="h-8 w-8 text-[#ff6347] mr-3" />
          <div className="text-sm">(DATABASES)</div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          OPTIMIZED <span className="font-['Serif_Italic'] italic font-normal">data</span>
          <br className="hidden sm:block" /> STORAGE SOLUTIONS
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Efficient database solutions using MongoDB, PostgreSQL/SQL, and Firebase to store, manage, and retrieve data
          with optimal performance and scalability.
        </p>

        <div className="space-y-16">
          {databaseProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-black">
                  {project.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i}>
                        <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    ),
                  )}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
                >
                  View Project
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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

      {/* Backend Development Section */}
      <div className="mt-24 mb-16">
        <div className="flex items-center mb-4">
          <Server className="h-8 w-8 text-[#ff6347] mr-3" />
          <div className="text-sm">(BACKEND DEVELOPMENT)</div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          POWERFUL <span className="font-['Serif_Italic'] italic font-normal">backend</span>
          <br className="hidden sm:block" /> SYSTEMS
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Robust backend solutions for applications, AI agents, authentication, database integration, and e-commerce
          functionality, built with scalability and security in mind.
        </p>

        <div className="space-y-16">
          {backendProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-black">
                  {project.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i}>
                        <span className="font-['Serif_Italic'] italic font-normal">{word}</span>
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    ),
                  )}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#ff6347] hover:text-[#e5573e] font-medium"
                >
                  View Project
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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

      {/* Other Strengths Section */}
      <div className="mt-24 mb-16">
        <div className="flex items-center mb-4">
          <Zap className="h-8 w-8 text-[#ff6347] mr-3" />
          <div className="text-sm">(OTHER STRENGTHS)</div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          ADDITIONAL <span className="font-['Serif_Italic'] italic font-normal">EXPERIENCES</span> &
          <br className="hidden sm:block" /> CAPABILITIES
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Beyond specific technologies, I bring valuable skills in system design, problem-solving, building from
          scratch, and connecting SDKs and APIs to create comprehensive solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff6347"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" y1="22" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">System Design</h3>
            <p className="text-gray-700">
              Expertise in designing scalable, maintainable system architectures that align with business goals and
              technical requirements, ensuring long-term success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff6347"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">Problem Solving</h3>
            <p className="text-gray-700">
              Strong analytical skills and creative problem-solving approach to tackle complex technical challenges and
              deliver effective solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff6347"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">Building from Scratch</h3>
            <p className="text-gray-700">
              Ability to create complete solutions from the ground up, from initial concept to final implementation,
              with attention to detail and best practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#ff6347]/10 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff6347"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-black">Connecting SDKs & APIs</h3>
            <p className="text-gray-700">
              Skilled at integrating diverse technologies through SDKs and APIs to create cohesive, powerful systems
              that leverage the best tools for each task.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start your <span className="font-['Serif_Italic'] italic font-normal">project</span>?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can leverage technology to achieve your business goals. I'm ready to help you build
            innovative solutions for real-world challenges.
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-white px-6 py-2 text-lg">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div >
  )
}
