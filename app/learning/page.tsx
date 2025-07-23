"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Youtube,
  Globe,
  Bookmark,
  Star,
  Code,
  Coffee,
  ChevronDown,
  ChevronUp,
  Search,
  CheckCircle,
  BookOpen,
  Brain,
  ShieldAlert,
  Filter,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Input } from "../../components/ui/input"
import AnimatedSection from "../../components/animated-section"

export default function LearningPage() {
  const [showAllRepos, setShowAllReposState] = useState(false)
  const [showAllVideos, setShowAllVideosState] = useState(false)
  const [showAllBooks, setShowAllBooksState] = useState(false)
  const [searchQuery, setSearchQueryState] = useState("")
  const [activeBookCategory, setActiveBookCategoryState] = useState("all")
  const [activeRepoCategory, setActiveRepoCategoryState] = useState("all")
  const [activeVideoCategory, setActiveVideoCategoryState] = useState("all")
  const [showAllWebsites, setShowAllWebsitesState] = useState(false)
  const [showAllPlatforms, setShowAllPlatformsState] = useState(false)
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // GitHub repositories data
  const githubRepos = [
    {
      name: "fireship-io/next-firebase-course",
      description: "Build a full-stack app with Next.js and Firebase",
      fullDescription:
        "Build a full-stack application with Next.js, Firebase, and TypeScript. Includes authentication, Firestore, and deployment.",
      stars: "4.2k",
      language: "TypeScript",
      owner: "Fireship",
      ownerImage: "https://github.com/fireship-io.png",
      url: "https://github.com/fireship-io/next-firebase-course",
      category: "frontend",
    },
    {
      name: "shadcn/ui",
      description: "Beautifully designed components",
      fullDescription:
        "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
      stars: "35.1k",
      language: "TypeScript",
      owner: "shadcn",
      ownerImage: "https://github.com/shadcn.png",
      url: "https://github.com/shadcn/ui",
      category: "frontend",
    },
    {
      name: "vercel/ai",
      description: "AI SDK for Next.js, React, Svelte",
      fullDescription: "The Vercel AI SDK is a library for building AI-powered user interfaces that run on the edge.",
      stars: "5.8k",
      language: "TypeScript",
      owner: "Vercel",
      ownerImage: "https://github.com/vercel.png",
      url: "https://github.com/vercel/ai",
      category: "fullstack",
    },
    {
      name: "facebook/react",
      description: "A declarative, efficient, and flexible JavaScript library",
      fullDescription: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      stars: "212k",
      language: "JavaScript",
      owner: "Facebook",
      ownerImage: "https://github.com/facebook.png",
      url: "https://github.com/facebook/react",
      category: "frontend",
    },
    {
      name: "microsoft/TypeScript",
      description: "TypeScript is a superset of JavaScript",
      fullDescription:
        "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript.",
      stars: "93.4k",
      language: "TypeScript",
      owner: "Microsoft",
      ownerImage: "https://github.com/microsoft.png",
      url: "https://github.com/microsoft/TypeScript",
      category: "fullstack",
    },
    {
      name: "tailwindlabs/tailwindcss",
      description: "A utility-first CSS framework",
      fullDescription:
        "A utility-first CSS framework for rapid UI development. Quickly build modern websites without ever leaving your HTML.",
      stars: "71.2k",
      language: "CSS",
      owner: "Tailwind Labs",
      ownerImage: "https://github.com/tailwindlabs.png",
      url: "https://github.com/tailwindlabs/tailwindcss",
      category: "frontend",
    },
    {
      name: "vercel/next.js",
      description: "The React Framework for the Web",
      fullDescription: "Next.js gives you the best developer experience with all the features you need for production.",
      stars: "112k",
      language: "JavaScript",
      owner: "Vercel",
      ownerImage: "https://github.com/vercel.png",
      url: "https://github.com/vercel/next.js",
      category: "fullstack",
    },
    {
      name: "prisma/prisma",
      description: "Next-generation ORM for Node.js and TypeScript",
      fullDescription:
        "Prisma is a next-generation ORM that consists of these tools: Prisma Client, Prisma Migrate, and Prisma Studio.",
      stars: "32.1k",
      language: "TypeScript",
      owner: "Prisma",
      ownerImage: "https://github.com/prisma.png",
      url: "https://github.com/prisma/prisma",
      category: "backend",
    },
    {
      name: "supabase/supabase",
      description: "Open source Firebase alternative",
      fullDescription:
        "Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, and realtime subscriptions.",
      stars: "58.7k",
      language: "TypeScript",
      owner: "Supabase",
      ownerImage: "https://github.com/supabase.png",
      url: "https://github.com/supabase/supabase",
      category: "backend",
    },
    {
      name: "sveltejs/svelte",
      description: "Cybernetically enhanced web apps",
      fullDescription:
        "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.",
      stars: "72.3k",
      language: "JavaScript",
      owner: "Svelte",
      ownerImage: "https://github.com/sveltejs.png",
      url: "https://github.com/sveltejs/svelte",
      category: "frontend",
    },
    {
      name: "vuejs/vue",
      description: "Progressive JavaScript framework",
      fullDescription:
        "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
      stars: "203k",
      language: "JavaScript",
      owner: "Vue.js",
      ownerImage: "https://github.com/vuejs.png",
      url: "https://github.com/vuejs/vue",
      category: "frontend",
    },
    {
      name: "angular/angular",
      description: "Modern web developer platform",
      fullDescription:
        "Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.",
      stars: "89.7k",
      language: "TypeScript",
      owner: "Angular",
      ownerImage: "https://github.com/angular.png",
      url: "https://github.com/angular/angular",
      category: "frontend",
    },
    {
      name: "denoland/deno",
      description: "A secure JavaScript and TypeScript runtime",
      fullDescription:
        "Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.",
      stars: "91.2k",
      language: "Rust",
      owner: "Deno",
      ownerImage: "https://github.com/denoland.png",
      url: "https://github.com/denoland/deno",
      category: "backend",
    },
    {
      name: "golang/go",
      description: "The Go programming language",
      fullDescription:
        "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
      stars: "114k",
      language: "Go",
      owner: "Go",
      ownerImage: "https://github.com/golang.png",
      url: "https://github.com/golang/go",
      category: "languages",
    },
    {
      name: "rust-lang/rust",
      description: "Empowering everyone to build reliable and efficient software",
      fullDescription:
        "Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.",
      stars: "83.9k",
      language: "Rust",
      owner: "Rust",
      ownerImage: "https://github.com/rust-lang.png",
      url: "https://github.com/rust-lang/rust",
      category: "languages",
    },
    {
      name: "python/cpython",
      description: "The Python programming language",
      fullDescription:
        "CPython is the reference implementation of the Python programming language. It is an interpreted, high-level, general-purpose programming language.",
      stars: "53.7k",
      language: "Python",
      owner: "Python",
      ownerImage: "https://github.com/python.png",
      url: "https://github.com/python/cpython",
      category: "languages",
    },
    {
      name: "tensorflow/tensorflow",
      description: "An open source machine learning framework",
      fullDescription:
        "TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources.",
      stars: "177k",
      language: "C++",
      owner: "TensorFlow",
      ownerImage: "https://github.com/tensorflow.png",
      url: "https://github.com/tensorflow/tensorflow",
      category: "aiml",
    },
    {
      name: "pytorch/pytorch",
      description: "Tensors and Dynamic neural networks in Python",
      fullDescription:
        "PyTorch is an open source machine learning framework that accelerates the path from research prototyping to production deployment.",
      stars: "69.8k",
      language: "Python",
      owner: "PyTorch",
      ownerImage: "https://github.com/pytorch.png",
      url: "https://github.com/pytorch/pytorch",
      category: "aiml",
    },
    {
      name: "kubernetes/kubernetes",
      description: "Production-Grade Container Orchestration",
      fullDescription:
        "Kubernetes, also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications.",
      stars: "101k",
      language: "Go",
      owner: "Kubernetes",
      ownerImage: "https://github.com/kubernetes.png",
      url: "https://github.com/kubernetes/kubernetes",
      category: "devops",
    },
    {
      name: "docker/docker-ce",
      description: "Docker Community Edition",
      fullDescription:
        "Docker Community Edition (CE) is ideal for developers and small teams looking to get started with Docker and experimenting with container-based apps.",
      stars: "64.3k",
      language: "Go",
      owner: "Docker",
      ownerImage: "https://github.com/docker.png",
      url: "https://github.com/docker/docker-ce",
      category: "devops",
    },
    {
      name: "expressjs/express",
      description: "Fast, unopinionated, minimalist web framework for Node.js",
      fullDescription:
        "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      stars: "60.2k",
      language: "JavaScript",
      owner: "Express",
      ownerImage: "https://github.com/expressjs.png",
      url: "https://github.com/expressjs/express",
      category: "backend",
    },
    {
      name: "nestjs/nest",
      description: "A progressive Node.js framework",
      fullDescription:
        "Nest is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript and is built with TypeScript.",
      stars: "58.9k",
      language: "TypeScript",
      owner: "NestJS",
      ownerImage: "https://github.com/nestjs.png",
      url: "https://github.com/nestjs/nest",
      category: "backend",
    },
    {
      name: "laravel/laravel",
      description: "A PHP framework for web artisans",
      fullDescription:
        "Laravel is a web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the small things.",
      stars: "73.6k",
      language: "PHP",
      owner: "Laravel",
      ownerImage: "https://github.com/laravel.png",
      url: "https://github.com/laravel/laravel",
      category: "backend",
    },
    {
      name: "django/django",
      description: "The Web framework for perfectionists with deadlines",
      fullDescription:
        "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
      stars: "69.7k",
      language: "Python",
      owner: "Django",
      ownerImage: "https://github.com/django.png",
      url: "https://github.com/django/django",
      category: "backend",
    },
    {
      name: "flutter/flutter",
      description: "Google's UI toolkit for building apps",
      fullDescription:
        "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase.",
      stars: "153k",
      language: "Dart",
      owner: "Flutter",
      ownerImage: "https://github.com/flutter.png",
      url: "https://github.com/flutter/flutter",
      category: "mobile",
    },
    {
      name: "electron/electron",
      description: "Build cross-platform desktop apps with JavaScript, HTML, and CSS",
      fullDescription:
        "Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS.",
      stars: "108k",
      language: "C++",
      owner: "Electron",
      ownerImage: "https://github.com/electron.png",
      url: "https://github.com/electron/electron",
      category: "mobile",
    },
    {
      name: "remix-run/remix",
      description: "Full stack web framework",
      fullDescription:
        "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.",
      stars: "24.8k",
      language: "TypeScript",
      owner: "Remix",
      ownerImage: "https://github.com/remix-run.png",
      url: "https://github.com/remix-run/remix",
      category: "fullstack",
    },
    {
      name: "astro-build/astro",
      description: "The all-in-one web framework",
      fullDescription:
        "Astro is an all-in-one web framework for building fast, content-focused websites. Pull content from anywhere and deploy everywhere.",
      stars: "34.2k",
      language: "TypeScript",
      owner: "Astro",
      ownerImage: "https://github.com/astro-build.png",
      url: "https://github.com/astro-build/astro",
      category: "fullstack",
    },
    {
      name: "solidjs/solid",
      description: "A declarative, efficient, and flexible JavaScript library",
      fullDescription:
        "Solid is a declarative JavaScript library for creating user interfaces. It does not use a Virtual DOM, instead it compiles templates to real DOM nodes and updates them with fine-grained reactions.",
      stars: "27.9k",
      language: "TypeScript",
      owner: "SolidJS",
      ownerImage: "https://github.com/solidjs.png",
      url: "https://github.com/solidjs/solid",
      category: "frontend",
    },
    {
      name: "vitejs/vite",
      description: "Next generation frontend tooling",
      fullDescription:
        "Vite is a new breed of frontend build tool that significantly improves the frontend development experience.",
      stars: "58.7k",
      language: "TypeScript",
      owner: "Vite",
      ownerImage: "https://github.com/vitejs.png",
      url: "https://github.com/vitejs/vite",
      category: "tools",
    },
    {
      name: "evanw/esbuild",
      description: "An extremely fast JavaScript bundler",
      fullDescription:
        "esbuild is an extremely fast JavaScript bundler and minifier. It packages up JavaScript and TypeScript code for distribution on the web.",
      stars: "35.9k",
      language: "Go",
      owner: "Evan Wallace",
      ownerImage: "https://github.com/evanw.png",
      url: "https://github.com/evanw/esbuild",
      category: "tools",
    },
    {
      name: "rome/tools",
      description: "Unified developer tools",
      fullDescription:
        "Rome is a formatter, linter, bundler, and more for JavaScript, TypeScript, JSON, HTML, Markdown, and CSS.",
      stars: "21.3k",
      language: "Rust",
      owner: "Rome Tools",
      ownerImage: "https://github.com/rome.png",
      url: "https://github.com/rome/tools",
      category: "tools",
    },
    {
      name: "deno/fresh",
      description: "The next-gen web framework",
      fullDescription:
        "Fresh is a next generation web framework, built for speed, reliability, and simplicity. It's built on top of Deno and uses just-in-time rendering on the edge.",
      stars: "11.2k",
      language: "TypeScript",
      owner: "Deno",
      ownerImage: "https://github.com/denoland.png",
      url: "https://github.com/deno/fresh",
      category: "fullstack",
    },
    {
      name: "trpc/trpc",
      description: "End-to-end typesafe APIs",
      fullDescription:
        "tRPC allows you to easily build & consume fully typesafe APIs without schemas or code generation.",
      stars: "28.7k",
      language: "TypeScript",
      owner: "tRPC",
      ownerImage: "https://github.com/trpc.png",
      url: "https://github.com/trpc/trpc",
      category: "backend",
    },
    {
      name: "withastro/starlight",
      description: "Build beautiful documentation sites",
      fullDescription: "Starlight is a documentation theme for Astro. It's fast, accessible, and easy to use.",
      stars: "2.8k",
      language: "TypeScript",
      owner: "Astro",
      ownerImage: "https://github.com/withastro.png",
      url: "https://github.com/withastro/starlight",
      category: "fullstack",
    },
    {
      name: "tauri-apps/tauri",
      description: "Build smaller, faster, and more secure desktop applications",
      fullDescription:
        "Tauri is a framework for building tiny, blazingly fast binaries for all major desktop platforms.",
      stars: "67.9k",
      language: "Rust",
      owner: "Tauri",
      ownerImage: "https://github.com/tauri-apps.png",
      url: "https://github.com/tauri-apps/tauri",
      category: "mobile",
    },
    {
      name: "oven-sh/bun",
      description: "Incredibly fast JavaScript runtime",
      fullDescription:
        "Bun is a fast all-in-one JavaScript runtime. Bundle, transpile, install and run JavaScript & TypeScript projects.",
      stars: "59.3k",
      language: "Zig",
      owner: "Oven",
      ownerImage: "https://github.com/oven-sh.png",
      url: "https://github.com/oven-sh/bun",
      category: "backend",
    },
    {
      name: "pmndrs/react-three-fiber",
      description: "React renderer for Three.js",
      fullDescription:
        "React-three-fiber is a React renderer for three.js, allowing you to build your three.js scene declaratively with React.",
      stars: "23.7k",
      language: "TypeScript",
      owner: "Poimandres",
      ownerImage: "https://github.com/pmndrs.png",
      url: "https://github.com/pmndrs/react-three-fiber",
      category: "frontend",
    },
    {
      name: "framer/motion",
      description: "Production-ready animation library for React",
      fullDescription:
        "Framer Motion is a production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams.",
      stars: "19.8k",
      language: "TypeScript",
      owner: "Framer",
      ownerImage: "https://github.com/framer.png",
      url: "https://github.com/framer/motion",
      category: "frontend",
    },
    {
      name: "tldraw/tldraw",
      description: "A tiny little drawing app",
      fullDescription:
        "tldraw is a tiny little drawing app. It's also a React library for creating infinite canvas experiences.",
      stars: "21.4k",
      language: "TypeScript",
      owner: "tldraw",
      ownerImage: "https://github.com/tldraw.png",
      url: "https://github.com/tldraw/tldraw",
      category: "frontend",
    },
    {
      name: "excalidraw/excalidraw",
      description: "Virtual whiteboard for sketching",
      fullDescription:
        "Excalidraw is a virtual collaborative whiteboard tool that lets you easily sketch diagrams with a hand-drawn feel.",
      stars: "55.7k",
      language: "TypeScript",
      owner: "Excalidraw",
      ownerImage: "https://github.com/excalidraw.png",
      url: "https://github.com/excalidraw/excalidraw",
      category: "frontend",
    },
  ]

  // YouTube videos data
  const youtubeVideos = [
    {
      title: "Python Tutorial: UV - A Faster, All-in-One Package Manager to Replace Pip and Venv",
      channel: "Corey Schafer",
      description:
        "Learn about UV, a new and fast Python package manager from Astral, the makers of Ruff. See how UV aims to simplify your Python workflow.",
      thumbnail: "https://i.ytimg.com/vi/AMdG7IjgSPM/maxresdefault.jpg",
      url: "https://youtu.be/AMdG7IjgSPM",
      category: "aiml",
    },
    {
      title: "CodeTV (formerly Learn With Jason)",
      channel: "CodeTV",
      description:
        "TV for developers with over 90.6K subscribers and 654 videos. Tutorials, live coding sessions, and developer resources.",
      thumbnail: "/codetv-banner-glitch.png",
      url: "https://youtube.com/@codetv-dev",
      category: "channel",
    },
    {
      title: "React in 100 Seconds",
      channel: "Fireship",
      description:
        "Learn the fundamentals of React in just 100 seconds. Quick overview of components, props, and state.",
      thumbnail: "https://i.ytimg.com/vi/Tn6-PIqc4UM/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
      category: "webdev",
    },
    {
      title: "React Course - Beginner's Tutorial",
      channel: "freeCodeCamp",
      description: "Learn React by building eight real-world projects and solving 140+ coding challenges.",
      thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
      category: "webdev",
    },
    {
      title: "Next.js 13 Full Course",
      channel: "Traversy Media",
      description: "Learn Next.js 13 with the App Router, Server Components, and the latest features.",
      thumbnail: "https://i.ytimg.com/vi/jx5hdo50a2M/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=jx5hdo50a2M",
      category: "webdev",
    },
    {
      title: "TypeScript Course for Beginners",
      channel: "Academind",
      description: "Learn TypeScript from scratch with this comprehensive course for beginners.",
      thumbnail: "https://i.ytimg.com/vi/BwuLxPH8IDs/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
      category: "webdev",
    },
    {
      title: "JavaScript: Understanding the Weird Parts",
      channel: "Tony Alicea",
      description: "An advanced JavaScript course for everyone, covering the toughest parts of JS.",
      thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts",
      category: "webdev",
    },
    {
      title: "CSS Grid Tutorial",
      channel: "The Net Ninja",
      description: "Learn CSS Grid layout, from basic concepts to advanced techniques.",
      thumbnail: "https://i.ytimg.com/vi/x7tLPhnA06w/maxresdefault.jpg",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      category: "webdev",
    },
    {
      title: "Git and GitHub for Beginners",
      channel: "freeCodeCamp",
      description: "Learn the basics of Git and GitHub, essential tools for every developer.",
      thumbnail: "https://i.ytimg.com/vi/RGOj5yH7evk/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
      category: "tutorial",
    },
    {
      title: "Docker Tutorial for Beginners",
      channel: "TechWorld with Nana",
      description: "Learn Docker from scratch with this step-by-step tutorial for beginners.",
      thumbnail: "https://i.ytimg.com/vi/3c-iBn73dDE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
      category: "devops",
    },
    {
      title: "Rust Programming Course",
      channel: "freeCodeCamp",
      description: "Learn the Rust programming language with this comprehensive course.",
      thumbnail: "https://i.ytimg.com/vi/MsocPEZBd-M/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=MsocPEZBd-M",
      category: "course",
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      description: "Learn Python programming with this beginner-friendly course.",
      thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
      category: "course",
    },
    {
      title: "Machine Learning for Everybody",
      channel: "Fireship",
      description: "Learn the basics of machine learning in this accessible introduction.",
      thumbnail: "https://i.ytimg.com/vi/i_LwzRVP7bg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=i_LwzRVP7bg",
      category: "aiml",
    },
    {
      title: "Web Development in 2023",
      channel: "Traversy Media",
      description: "A roadmap for web development in 2023, covering the latest technologies and trends.",
      thumbnail: "https://i.ytimg.com/vi/u72H_zZzkcw/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=u72H_zZzkcw",
      category: "explanation",
    },
    {
      title: "Tailwind CSS Crash Course",
      channel: "Traversy Media",
      description: "Learn the basics of Tailwind CSS in this crash course for beginners.",
      thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=dFgzHOX84xQ",
      category: "webdev",
    },
    {
      title: "Full Stack Development with MERN",
      channel: "JavaScript Mastery",
      description: "Build a full stack application with MongoDB, Express, React, and Node.js.",
      thumbnail: "https://i.ytimg.com/vi/ngc9gnGgUdA/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=ngc9gnGgUdA",
      category: "webdev",
    },
    {
      title: "GraphQL Crash Course",
      channel: "Web Dev Simplified",
      description: "Learn GraphQL basics and how to implement it in your applications.",
      thumbnail: "https://i.ytimg.com/vi/ZQL7tL2S0oQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=ZQL7tL2S0oQ",
      category: "webdev",
    },
    {
      title: "Svelte Tutorial for Beginners",
      channel: "The Net Ninja",
      description: "Learn Svelte from scratch with this comprehensive tutorial series.",
      thumbnail: "https://i.ytimg.com/vi/zojEMeQGGHs/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=zojEMeQGGHs",
      category: "webdev",
    },
    {
      title: "Vue.js Course for Beginners",
      channel: "freeCodeCamp",
      description: "Learn Vue.js with this beginner-friendly course covering all the basics.",
      thumbnail: "https://i.ytimg.com/vi/FXpIoQ_rT_c/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
      category: "webdev",
    },
    {
      title: "Angular Crash Course",
      channel: "Traversy Media",
      description: "Learn the basics of Angular in this crash course for beginners.",
      thumbnail: "https://i.ytimg.com/vi/3dHNOWTI7H8/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=3dHNOWTI7H8",
      category: "webdev",
    },
    {
      title: "AWS Certified Cloud Practitioner Training",
      channel: "freeCodeCamp",
      description: "Complete training for the AWS Certified Cloud Practitioner exam.",
      thumbnail: "https://i.ytimg.com/vi/3hLmDS179YE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=3hLmDS179YE",
      category: "devops",
    },
    {
      title: "Kubernetes Tutorial for Beginners",
      channel: "TechWorld with Nana",
      description: "Learn Kubernetes from scratch with this step-by-step tutorial.",
      thumbnail: "https://i.ytimg.com/vi/X48VuDVv0do/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=X48VuDVv0do",
      category: "devops",
    },
    {
      title: "Flutter Course for Beginners",
      channel: "Academind",
      description: "Learn Flutter and Dart from scratch and build iOS and Android apps.",
      thumbnail: "https://i.ytimg.com/vi/x0uinJvhNxI/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=x0uinJvhNxI",
      category: "course",
    },
    {
      title: "React Native Crash Course",
      channel: "Traversy Media",
      description: "Learn the basics of React Native in this crash course for beginners.",
      thumbnail: "https://i.ytimg.com/vi/Hf4MJH0jDb4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Hf4MJH0jDb4",
      category: "tutorial",
    },
    {
      title: "Data Structures and Algorithms in JavaScript",
      channel: "freeCodeCamp",
      description: "Learn data structures and algorithms with JavaScript implementations.",
      thumbnail: "https://i.ytimg.com/vi/t2CEgPsws3U/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=t2CEgPsws3U",
      category: "course",
    },
    {
      title: "System Design Interview",
      channel: "ByteByteGo",
      description: "Learn how to approach system design interviews with practical examples.",
      thumbnail: "https://i.ytimg.com/vi/i53Gi_K3o7I/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=i53Gi_K3o7I",
      category: "explanation",
    },
    {
      title: "Clean Code: Writing Code for Humans",
      channel: "Coding Tech",
      description: "Learn principles of clean code that will make your code more readable and maintainable.",
      thumbnail: "https://i.ytimg.com/vi/7EmboKQH8lM/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=7EmboKQH8lM",
      category: "explanation",
    },
    {
      title: "Microservices Explained",
      channel: "IBM Technology",
      description: "Learn about microservices architecture and how it compares to monolithic applications.",
      thumbnail: "https://i.ytimg.com/vi/CdBtNQZH8a4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=CdBtNQZH8a4",
      category: "devops",
    },
    {
      title: "DevOps CI/CD Explained",
      channel: "TechWorld with Nana",
      description: "Learn about Continuous Integration and Continuous Deployment in DevOps.",
      thumbnail: "https://i.ytimg.com/vi/scEDHsr3APg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=scEDHsr3APg",
      category: "devops",
    },
    {
      title: "SQL Tutorial for Beginners",
      channel: "Programming with Mosh",
      description: "Learn SQL in this comprehensive tutorial for beginners.",
      thumbnail: "https://i.ytimg.com/vi/7S_tz1z_5bA/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
      category: "tutorial",
    },
    {
      title: "NoSQL Database Tutorial",
      channel: "Academind",
      description: "Learn about NoSQL databases like MongoDB and when to use them.",
      thumbnail: "https://i.ytimg.com/vi/uD3p_rZPBUQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=uD3p_rZPBUQ",
      category: "tutorial",
    },
    {
      title: "Redis Crash Course",
      channel: "Web Dev Simplified",
      description: "Learn the basics of Redis, an in-memory data structure store.",
      thumbnail: "https://i.ytimg.com/vi/jgpVdJB2sKQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
      category: "tutorial",
    },
    {
      title: "Blockchain Explained",
      channel: "Simply Explained",
      description: "Learn how blockchain technology works and its applications beyond cryptocurrency.",
      thumbnail: "https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=SSo_EIwHSd4",
      category: "explanation",
    },
    {
      title: "Web3 for Beginners",
      channel: "Fireship",
      description: "Learn the basics of Web3, decentralized apps, and blockchain technology.",
      thumbnail: "https://i.ytimg.com/vi/nHhAEkG1y2U/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=nHhAEkG1y2U",
      category: "explanation",
    },
    {
      title: "Functional Programming in JavaScript",
      channel: "Fun Fun Function",
      description: "Learn functional programming concepts and how to apply them in JavaScript.",
      thumbnail: "https://i.ytimg.com/vi/BMUiFMZr7vk/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=BMUiFMZr7vk",
      category: "explanation",
    },
    {
      title: "Design Patterns in Object Oriented Programming",
      channel: "Christopher Okhravi",
      description: "Learn about design patterns and how to implement them in your code.",
      thumbnail: "https://i.ytimg.com/vi/v9ejT8FO-7I/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=v9ejT8FO-7I",
      category: "explanation",
    },
    {
      title: "SOLID Principles of Object-Oriented Design",
      channel: "Dev Mastery",
      description: "Learn the five SOLID principles for writing maintainable object-oriented code.",
      thumbnail: "https://i.ytimg.com/vi/rtmFCcjEgEw/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=rtmFCcjEgEw",
      category: "explanation",
    },
    {
      title: "Test-Driven Development (TDD)",
      channel: "Traversy Media",
      description: "Learn test-driven development and how to implement it in your workflow.",
      thumbnail: "https://i.ytimg.com/vi/r9HdJ8P6GQI/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=r9HdJ8P6GQI",
      category: "explanation",
    },
    {
      title: "Agile Scrum Full Course",
      channel: "Edureka",
      description: "Learn Agile and Scrum methodologies for software development.",
      thumbnail: "https://i.ytimg.com/vi/TRcReyRYIMg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=TRcReyRYIMg",
      category: "course",
    },
    {
      title: "How to Build a Portfolio Website",
      channel: "Traversy Media",
      description: "Learn how to build a professional portfolio website from scratch.",
      thumbnail: "https://i.ytimg.com/vi/r_hYR53r61M/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=r_hYR53r61M",
      category: "webdev",
    },
    {
      title: "How to Ace Coding Interviews",
      channel: "Clement Mihailescu",
      description: "Learn strategies for succeeding in technical coding interviews.",
      thumbnail: "https://i.ytimg.com/vi/azcrPFhaY9k/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=azcrPFhaY9k",
      category: "explanation",
    },
    {
      title: "How to Learn to Code - FAST",
      channel: "Andy Sterkowitz",
      description: "Strategies for learning programming quickly and effectively.",
      thumbnail: "https://i.ytimg.com/vi/R2pIutTspQA/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=R2pIutTspQA",
      category: "explanation",
    },
  ]

  useEffect(() => {
    // When searching, show all results
    if (searchQuery.length > 0) {
      setShowAllReposState(true);
      setShowAllVideosState(true);
      setShowAllBooksState(true);
      setShowAllWebsitesState(true);
      setShowAllPlatformsState(true);
    }
  }, [searchQuery])

  useEffect(() => {
    if (searchQuery && searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchQuery]);

  // Books data
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      description:
        "A handbook of agile software craftsmanship that has helped countless programmers write better code.",
      category: "coding",
      coverImage: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/CleanCode.jpg",
      link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      description:
        "A classic that cuts through the increasing specialization and technicalities of modern software development.",
      category: "coding",
      coverImage: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/ThePragmaticProgrammer.jpg",
      link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
    },
    {
      title: "Design Patterns",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      description:
        "The classic 'Gang of Four' book that introduced 23 patterns to solve common software design problems.",
      category: "coding",
      coverImage: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/DesignPatterns.jpg",
      link: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612",
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      description: "189 programming questions and solutions to help you prepare for coding interviews.",
      category: "coding",
      coverImage: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/Cracking-the-Coding-Interview.jpg",
      link: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
    },
    {
      title: "The Art of Computer Programming",
      author: "Donald E. Knuth",
      description:
        "A comprehensive monograph written by computer scientist Donald Knuth that covers many kinds of programming algorithms and their analysis.",
      category: "coding",
      coverImage: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/TheArt-of-ComputerProgramming.jpg",
      link: "https://www.amazon.com/Computer-Programming-Volumes-1-4A-Boxed/dp/0321751043",
    },
    {
      title: "Ghost in the Wires",
      author: "Kevin Mitnick",
      description: "The thrilling memoir from the world's most famous hacker and cybersecurity expert.",
      category: "hacking",
      coverImage: "/ghost-in-the-wires-book-cover.png",
      link: "https://www.amazon.com/Ghost-Wires-Adventures-Worlds-Wanted/dp/0316037729",
    },
    {
      title: "The Web Application Hacker's Handbook",
      author: "Dafydd Stuttard & Marcus Pinto",
      description: "A practical guide to finding and exploiting security flaws in web applications.",
      category: "hacking",
      coverImage: "/web-app-hacking-book-cover.png",
      link: "https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470",
    },
    {
      title: "Practical Malware Analysis",
      author: "Michael Sikorski & Andrew Honig",
      description:
        "The hands-on guide to dissecting malicious software to understand how it works, how to identify it, and how to defeat it.",
      category: "hacking",
      coverImage: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/PracticalMalwareAnalysis.jpg",
      link: "https://www.amazon.com/Practical-Malware-Analysis-Hands-Dissecting/dp/1593272901",
    },
    {
      title: "Hacking: The Art of Exploitation",
      author: "Jon Erickson",
      description: "A comprehensive guide that teaches the fundamentals of C programming from a hacker's perspective.",
      category: "hacking",
      coverImage: "/hacking-art-of-exploitation-book-cover.png",
      link: "https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441",
    },
    {
      title: "Social Engineering: The Science of Human Hacking",
      author: "Christopher Hadnagy",
      description:
        "The art of human hacking - how attackers use manipulation, influence, and deception to achieve their objectives.",
      category: "hacking",
      coverImage: "/social-engineering-book-cover.png",
      link: "https://www.amazon.com/Social-Engineering-Science-Human-Hacking/dp/111943338X",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "An easy and proven way to build good habits and break bad ones with practical strategies.",
      category: "personal-development",
      coverImage: "/atomic-habits-cover.png",
      link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      description: "Rules for focused success in a distracted world - how to develop the superpower of deep focus.",
      category: "personal-development",
      coverImage: "https://pub-d0ca23724b3941f0980d6ccac4aa18f2.r2.dev/DeepWork.jpg",
      link: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
    },
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      description:
        "How we can learn to fulfill our potential by understanding the difference between a fixed and growth mindset.",
      category: "personal-development",
      coverImage: "/mindset-book-cover.png",
      link: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      description: "Powerful lessons in personal change that have helped millions of people transform their lives.",
      category: "personal-development",
      coverImage: "/seven-habits-cover.png",
      link: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description: "An exploration of the two systems that drive the way we think and make choices.",
      category: "personal-development",
      coverImage: "/thinking-fast-and-slow-cover.png",
      link: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
    },
  ]

  // Websites & Articles data
  const websites = [
    {
      title: "DEV Community",
      site: "dev.to",
      description: "A constructive and inclusive social network for software developers.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resized_logo_UQww2soKuUsjaOGNB38o-HBQKp0qO8a4C6T3EWZlJRg3zL6apqI.png",
      url: "https://dev.to",
      type: "website",
    },
    {
      title: "Understanding JavaScript Promises",
      site: "Medium",
      description: "A comprehensive guide to JavaScript Promises and async/await.",
      image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      url: "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261",
      type: "article",
    },
    {
      title: "Hashnode",
      site: "hashnode.com",
      description: "A blogging platform for developers, with a strong community focus.",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1611242155728/W3_BYVVVh.png",
      url: "https://hashnode.com",
      type: "website",
    },
    {
      title: "A Complete Guide to Flexbox",
      site: "CSS-Tricks",
      description: "Everything you need to know about Flexbox, visualized and explained.",
      image: "https://css-tricks.com/wp-content/uploads/2019/06/akqRGyta_400x400.jpg",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      type: "article",
    },
  ];

  // Learning Platforms data
  const learningPlatforms = [
    {
      title: "freeCodeCamp",
      description: "Learn to code for free with interactive challenges, projects, and certifications.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-BFE5pZm8w8B4kpUpQYaOYK4eIqqasa.png",
      url: "https://www.freecodecamp.org/",
    },
    {
      title: "Harvard CS50",
      description: "Harvard University's introduction to computer science and programming.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-fnPaFczu656fg90igoOrbx9iBKCUB2.jpeg",
      url: "https://cs50.harvard.edu/x/2023/",
    },
    {
      title: "Frontend Masters",
      description: "Advanced courses on frontend development from industry experts.",
      image: "https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg",
      url: "https://frontendmasters.com/",
    },
  ];

  // Filter books based on category and search query
  const filteredBooks = books.filter((book) => {
    const matchesCategory = activeBookCategory === "all" || book.category === activeBookCategory
    const matchesSearch =
      searchQuery === "" ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Filter repositories based on category and search query
  const filteredRepos = githubRepos.filter((repo) => {
    const matchesCategory = activeRepoCategory === "all" || repo.category === activeRepoCategory
    const matchesSearch =
      searchQuery === "" ||
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.fullDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Filter videos based on category and search query
  const filteredVideos = youtubeVideos.filter((video) => {
    const matchesCategory = activeVideoCategory === "all" || video.category === activeVideoCategory
    const matchesSearch =
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Filter websites based on search query
  const filteredWebsites = websites.filter((website) => {
    const matchesSearch =
      searchQuery === "" ||
      website.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      website.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
      website.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Filter learning platforms based on search query
  const filteredPlatforms = learningPlatforms.filter((platform) => {
    const matchesSearch =
      searchQuery === "" ||
      platform.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-0">
      <style jsx global>{`
        .scrollbar-container {
          scrollbar-width: thick !important;
          scrollbar-color: #ff6347 #f3f4f6 !important;
          -webkit-overflow-scrolling: touch !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
        }
        
        /* Desktop scrollbar styling */
        .scrollbar-container::-webkit-scrollbar {
          height: 20px !important;
          -webkit-appearance: none !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          position: relative !important;
          z-index: 999 !important;
        }
        
        .scrollbar-container::-webkit-scrollbar-track {
          background: #f3f4f6 !important;
          border-radius: 10px !important;
          margin: 0 8px !important;
          box-shadow: inset 0 0 6px rgba(0,0,0,0.1) !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
          height: 20px !important;
        }
        
        .scrollbar-container::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #ff6347, #ff8c69) !important;
          border-radius: 10px !important;
          border: 3px solid #f3f4f6 !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
          min-width: 50px !important;
          opacity: 1 !important;
          visibility: visible !important;
          cursor: grab !important;
          display: block !important;
          height: 20px !important;
        }

        /* Mobile-specific permanent scrollbar */
        @media (max-width: 768px) {
          .scrollbar-container {
            position: relative !important;
            overflow-x: scroll !important;
            overflow-y: hidden !important;
            scrollbar-width: thick !important;
            scrollbar-color: #ff6347 #f3f4f6 !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: 40px !important;
            margin-bottom: 10px !important;
          }
          
          /* Force scrollbar to always show on mobile */
          .scrollbar-container::-webkit-scrollbar {
            height: 35px !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            -webkit-appearance: none !important;
            background: rgba(243, 244, 246, 0.98) !important;
            border-top: 3px solid #ff6347 !important;
            border-radius: 0 !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1001 !important;
          }
          
          .scrollbar-container::-webkit-scrollbar-track {
            height: 35px !important;
            background: rgba(243, 244, 246, 0.98) !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            border-radius: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
          
          .scrollbar-container::-webkit-scrollbar-thumb {
            min-width: 120px !important;
            height: 35px !important;
            border: 6px solid rgba(243, 244, 246, 0.98) !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            background: linear-gradient(45deg, #ff6347, #ff8c69) !important;
            cursor: grab !important;
            border-radius: 12px !important;
            box-shadow: 0 3px 10px rgba(255, 99, 71, 0.4) !important;
          }
          
          /* Prevent any scrollbar hiding behaviors */
          .scrollbar-container::-webkit-scrollbar,
          .scrollbar-container::-webkit-scrollbar-track,
          .scrollbar-container::-webkit-scrollbar-thumb {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }
          
          .scrollbar-container::-webkit-scrollbar-thumb:hover,
          .scrollbar-container::-webkit-scrollbar-thumb:active {
            background: linear-gradient(45deg, #d43c20, #e5573e) !important;
            cursor: grabbing !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }
          
          /* Override any system hiding behaviors */
          .scrollbar-container {
            scrollbar-width: thick !important;
          }
          
          .scrollbar-container::-webkit-scrollbar:horizontal {
            height: 35px !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
          
          /* Force visibility even during scroll events */
          .scrollbar-container:not(:hover)::-webkit-scrollbar,
          .scrollbar-container:hover::-webkit-scrollbar {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .scrollbar-container {
            scrollbar-color: #ff6347 #374151 !important;
          }
          
          .scrollbar-container::-webkit-scrollbar-track {
            background: #374151 !important;
            box-shadow: inset 0 0 6px rgba(255,255,255,0.1) !important;
          }
          
          .scrollbar-container::-webkit-scrollbar-thumb {
            border-color: #374151 !important;
          }
          
          @media (max-width: 768px) {
            .scrollbar-container::-webkit-scrollbar {
              background: rgba(55, 65, 81, 0.98) !important;
              border-top: 3px solid #ff6347 !important;
            }
            
            .scrollbar-container::-webkit-scrollbar-track {
              background: rgba(55, 65, 81, 0.98) !important;
            }
            
            .scrollbar-container::-webkit-scrollbar-thumb {
              border-color: rgba(55, 65, 81, 0.98) !important;
            }
          }
        }
      `}</style>
      {/* Hero Section */}
      <AnimatedSection animation="animate-fadeIn">
        <div className="mb-16 py-12 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection animation="animate-slideInLeft" delay={200}>
                <div className="text-sm mb-2">(LEARNING RESOURCES)</div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  MY <span className="font-['Serif_Italic'] italic font-normal">Learning</span>
                  <br className="hidden sm:block" /> JOURNEY
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  A curated collection of resources that have shaped my development skills and knowledge. Explore these
                  tools, courses, and references to accelerate your own learning path.
                </p>
                <div className="mb-6 p-4 border-l-4 border-[#ff6347] bg-gray-50 dark:bg-gray-800/50">
                  <blockquote className="text-lg font-medium text-black dark:text-black italic">
                    "Tech is temporary. Curiosity is permanent."
                  </blockquote>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fadeIn" delay={400}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700">GitHub Repositories</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700">YouTube Tutorials</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700">Technical Articles</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700">Learning Platforms</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700">Documentation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#ff6347]">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-gray-700">Online Courses</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fadeIn" delay={600}>
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder="Search for resources..."
                    className="pl-10 py-3 border-gray-300 focus:border-[#ff6347] focus:ring-[#ff6347] w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQueryState(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQueryState("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#ff6347]"
                      aria-label="Clear search"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                    </button>
                  )}
                </div>
              </AnimatedSection>
            </div>

            <div className="md:w-1/2">
              <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="rounded-[24px] overflow-hidden shadow-lg max-w-[500px] mx-auto">
                  <Image
                    src="/developer-learning.png"
                    alt="Learning resources"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {searchQuery && (
        <div
          ref={searchResultsRef}
          className="mb-8 p-6 bg-gradient-to-r from-[#ff6347]/10 to-[#ff6347]/5 rounded-lg border border-[#ff6347]/20 shadow-md"
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Search className="mr-2 text-[#ff6347]" />
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-gray-600 mb-3">
            Found {filteredRepos.length} repositories, {filteredVideos.length} videos, {filteredBooks.length} books,
            {filteredWebsites.length} websites/articles, and {filteredPlatforms.length} learning platforms
            matching your search.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" className="border-[#ff6347] text-[#ff6347] hover:bg-[#ff6347] hover:text-white" onClick={() => setSearchQueryState("")}>
              Clear Search
            </Button>
            {filteredRepos.length > 0 && (
              <Button variant="ghost" className="text-[#ff6347] hover:bg-[#ff6347]/10" onClick={() => document.getElementById('github-repos')?.scrollIntoView({ behavior: 'smooth' })}>
                View Repositories
              </Button>
            )}
            {filteredVideos.length > 0 && (
              <Button variant="ghost" className="text-[#ff6347] hover:bg-[#ff6347]/10" onClick={() => document.getElementById('youtube-videos')?.scrollIntoView({ behavior: 'smooth' })}>
                View Videos
              </Button>
            )}
            {filteredBooks.length > 0 && (
              <Button variant="ghost" className="text-[#ff6347] hover:bg-[#ff6347]/10" onClick={() => document.getElementById('books-reading')?.scrollIntoView({ behavior: 'smooth' })}>
                View Books
              </Button>
            )}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* GitHub Repositories */}
        <section id="github-repos" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Github className="mr-2 text-[#ff6347]" />
              GitHub Repositories
            </h2>
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-sm md:text-base px-3 md:px-4 py-2 md:py-2 whitespace-nowrap">
              <Bookmark className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden md:inline">Save New Repo</span>
              <span className="md:hidden">Save Repo</span>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              variant={activeRepoCategory === "all" ? "default" : "outline"}
              className={activeRepoCategory === "all" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("all")}
            >
              <Filter className="mr-2 h-4 w-4" /> All Categories
            </Button>
            <Button
              variant={activeRepoCategory === "frontend" ? "default" : "outline"}
              className={activeRepoCategory === "frontend" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("frontend")}
            >
              <Code className="mr-2 h-4 w-4" /> Frontend
            </Button>
            <Button
              variant={activeRepoCategory === "backend" ? "default" : "outline"}
              className={activeRepoCategory === "backend" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("backend")}
            >
              <Code className="mr-2 h-4 w-4" /> Backend
            </Button>
            <Button
              variant={activeRepoCategory === "devops" ? "default" : "outline"}
              className={activeRepoCategory === "devops" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("devops")}
            >
              <Code className="mr-2 h-4 w-4" /> DevOps
            </Button>
            <Button
              variant={activeRepoCategory === "aiml" ? "default" : "outline"}
              className={activeRepoCategory === "aiml" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("aiml")}
            >
              <Code className="mr-2 h-4 w-4" /> AI/ML
            </Button>
            <Button
              variant={activeRepoCategory === "languages" ? "default" : "outline"}
              className={activeRepoCategory === "languages" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("languages")}
            >
              <Code className="mr-2 h-4 w-4" /> Languages
            </Button>
            <Button
              variant={activeRepoCategory === "tools" ? "default" : "outline"}
              className={activeRepoCategory === "tools" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("tools")}
            >
              <Code className="mr-2 h-4 w-4" /> Tools
            </Button>
            <Button
              variant={activeRepoCategory === "fullstack" ? "default" : "outline"}
              className={activeRepoCategory === "fullstack" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("fullstack")}
            >
              <Code className="mr-2 h-4 w-4" /> Full Stack
            </Button>
            <Button
              variant={activeRepoCategory === "mobile" ? "default" : "outline"}
              className={activeRepoCategory === "mobile" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveRepoCategoryState("mobile")}
            >
              <Code className="mr-2 h-4 w-4" /> Mobile
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.slice(0, showAllRepos ? filteredRepos.length : 9).map((repo, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow group"
              >
                <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3 bg-gray-200 dark:bg-gray-700">
                      <Image src={repo.ownerImage || "/placeholder.svg"} alt={repo.owner} width={40} height={40} />
                    </div>
                    <div>
                      <h3 className="font-semibold !text-[#ff6347] group-hover:!text-[#e5573e] transition-colors">{repo.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{repo.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-sm mb-3">
                    <div className="flex items-center mr-4">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-4 w-4 text-blue-500 mr-1" />
                      <span>{repo.language}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{repo.fullDescription}</p>
                  <Link
                    href={repo.url}
                    target="_blank"
                    className="text-[#ff6347] hover:underline text-sm font-medium flex items-center"
                  >
                    View Repository <Globe className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={() => setShowAllReposState(!showAllRepos)}
              variant="outline"
              className="border-[#ff6347] text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
            >
              {showAllRepos ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Repositories <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </section>

        {/* Books Section */}
        <section id="books-reading" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <BookOpen className="mr-2 text-[#ff6347]" />
              Books & Reading
            </h2>
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-sm md:text-base px-3 md:px-4 py-2 md:py-2 whitespace-nowrap">
              <Bookmark className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden md:inline">Save New Book</span>
              <span className="md:hidden">Save Book</span>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              variant={activeBookCategory === "all" ? "default" : "outline"}
              className={activeBookCategory === "all" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveBookCategoryState("all")}
            >
              <Filter className="mr-2 h-4 w-4" /> All Categories
            </Button>
            <Button
              variant={activeBookCategory === "coding" ? "default" : "outline"}
              className={activeBookCategory === "coding" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveBookCategoryState("coding")}
            >
              <Code className="mr-2 h-4 w-4" /> Coding
            </Button>
            <Button
              variant={activeBookCategory === "hacking" ? "default" : "outline"}
              className={activeBookCategory === "hacking" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveBookCategoryState("hacking")}
            >
              <ShieldAlert className="mr-2 h-4 w-4" /> Hacking
            </Button>
            <Button
              variant={activeBookCategory === "personal-development" ? "default" : "outline"}
              className={activeBookCategory === "personal-development" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveBookCategoryState("personal-development")}
            >
              <Brain className="mr-2 h-4 w-4" /> Personal Development
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredBooks.slice(0, showAllBooks ? filteredBooks.length : 10).map((book, index) => (
              <div key={index} className="group relative perspective-1000 h-[320px] w-full">
                <div className="book-container relative preserve-3d transition-transform duration-1000 w-full h-full group-hover:rotate-y-30">
                  {/* Book Cover */}
                  <div className="absolute inset-0 backface-hidden shadow-xl rounded-lg overflow-hidden transform-style-3d">
                    <div className="relative w-full h-full">
                      <Image
                        src={book.coverImage || "/placeholder.svg"}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 pl-8">
                        <h3 className="text-white font-bold text-sm md:text-base line-clamp-2">{book.title}</h3>
                        <p className="text-white/80 text-xs md:text-sm">{book.author}</p>
                      </div>
                      <div className="absolute top-2 right-2 bg-white/90 text-[#ff6347] text-xs font-bold py-1 px-2 rounded capitalize">
                        {book.category.replace("-", " ")}
                      </div>
                      <div className="absolute top-0 left-0 w-[20px] h-full bg-gradient-to-r from-black/20 to-transparent"></div>
                      <div className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-l from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Book Spine */}
                  <div className="absolute left-0 top-0 w-[20px] h-full bg-gradient-to-r from-gray-800 to-gray-600 origin-left transform-style-3d rotate-y-90 flex items-center justify-center">
                    <span className="text-white text-xs whitespace-nowrap rotate-90 font-bold line-clamp-1 max-w-[300px]">
                      {book.title}
                    </span>
                  </div>
                </div>

                {/* Hover Info */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 dark:bg-gray-800/95 rounded-lg p-4 flex flex-col justify-between shadow-xl">
                  <div>
                    <h3 className="font-bold text-sm md:text-base mb-1 !text-[#ff6347]">{book.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-2">{book.author}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-6">{book.description}</p>
                  </div>
                  <Link
                    href={book.link}
                    target="_blank"
                    className="text-[#ff6347] hover:underline text-sm font-medium flex items-center mt-2"
                  >
                    View Book <Globe className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length > 10 && (

            <Button
              onClick={() => setShowAllBooksState(!showAllBooks)}
              variant="outline"
              className="border-[#ff6347] text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
            >
              {showAllBooks ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Books <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

          )}
        </section>

        {/* YouTube Videos */}
        <section id="youtube-videos" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Youtube className="mr-2 text-[#ff6347]" />
              YouTube Channels & Videos
            </h2>
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-sm md:text-base px-3 md:px-4 py-2 md:py-2 whitespace-nowrap">
              <Bookmark className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden md:inline">Save New Video</span>
              <span className="md:hidden">Save Video</span>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              variant={activeVideoCategory === "all" ? "default" : "outline"}
              className={activeVideoCategory === "all" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveVideoCategoryState("all")}
            >
              <Filter className="mr-2 h-4 w-4" /> All Categories
            </Button>
            <Button
              variant={activeVideoCategory === "tutorial" ? "default" : "outline"}
              className={activeVideoCategory === "tutorial" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveVideoCategoryState("tutorial")}
            >
              <Youtube className="mr-2 h-4 w-4" /> Tutorials
            </Button>
            <Button
              variant={activeVideoCategory === "course" ? "default" : "outline"}
              className={activeVideoCategory === "course" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveVideoCategoryState("course")}
            >
              <Youtube className="mr-2 h-4 w-4" /> Courses
            </Button>
            <Button
              variant={activeVideoCategory === "webdev" ? "default" : "outline"}
              className={activeVideoCategory === "webdev" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveVideoCategoryState("webdev")}
            >
              <Youtube className="mr-2 h-4 w-4" /> Web Dev
            </Button>
            <Button
              variant={activeVideoCategory === "devops" ? "default" : "outline"}
              className={activeVideoCategory === "devops" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveVideoCategoryState("devops")}
            >
              <Youtube className="mr-2 h-4 w-4" /> DevOps
            </Button>
            <Button
              variant={activeVideoCategory === "aiml" ? "default" : "outline"}
              className={activeVideoCategory === "aiml" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveVideoCategoryState("aiml")}
            >
              <Youtube className="mr-2 h-4 w-4" /> AI/ML
            </Button>
            <Button
              variant={activeVideoCategory === "channel" ? "default" : "outline"}
              className={activeVideoCategory === "channel" ? "bg-[#ff6347] hover:bg-[#e5573e]" : ""}
              onClick={() => setActiveVideoCategoryState("channel")}
            >
              <Youtube className="mr-2 h-4 w-4" /> Channels
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.slice(0, showAllVideos ? filteredVideos.length : 9).map((video, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="relative pb-[56.25%]">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[16px] border-l-red-600 ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 !text-[#ff6347]">{video.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{video.channel}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{video.description}</p>
                  <Link
                    href={video.url}
                    target="_blank"
                    className="text-[#ff6347] hover:underline text-sm font-medium flex items-center"
                  >
                    Watch Video <Globe className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={() => setShowAllVideosState(!showAllVideos)}
              variant="outline"
              className="border-[#ff6347] text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
            >
              {showAllVideos ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Videos <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </section>

        {/* Websites & Articles */}
        <section id="websites-articles" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Globe className="mr-2 text-[#ff6347]" />
              Websites & Articles
            </h2>
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-sm md:text-base px-3 md:px-4 py-2 md:py-2 whitespace-nowrap">
              <Bookmark className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden md:inline">Save New Link</span>
              <span className="md:hidden">Save Link</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredWebsites.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow flex"
              >
                <div className="w-1/3 relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-semibold mb-1 !text-[#ff6347]">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.site}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {item.description}
                  </p>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="text-[#ff6347] hover:underline text-sm font-medium flex items-center"
                  >
                    {item.type === "website" ? "Visit Website" : "Read Article"} <Globe className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Platforms */}
        <section id="learning-platforms" className="mb-32">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Coffee className="mr-2 text-[#ff6347]" />
              Learning Platforms
            </h2>
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-sm md:text-base px-3 md:px-4 py-2 md:py-2 whitespace-nowrap">
              <Bookmark className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden md:inline">Save New Platform</span>
              <span className="md:hidden">Save Platform</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="h-40 relative">
                  <Image
                    src={platform.image || "/placeholder.svg"}
                    alt={platform.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 !text-[#ff6347]">{platform.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {platform.description}
                  </p>
                  <Link
                    href={platform.url}
                    target="_blank"
                    className="text-[#ff6347] hover:underline text-sm font-medium flex items-center"
                  >
                    Visit Platform <Globe className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Backend & Database Technologies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#ff6347]">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              Backend & Database Technologies
            </h2>
            <Button className="bg-[#ff6347] hover:bg-[#e5573e] text-sm md:text-base px-3 md:px-4 py-2 md:py-2 whitespace-nowrap">
              <Bookmark className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Save New Technology</span>
              <span className="sm:hidden">Save Tech</span>
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-black">My Backend Technology Stack</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I've worked with a diverse range of backend technologies and database systems, allowing me to choose the right tool for each specific project requirement. Here's an overview of the technologies I'm proficient with:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Backend Frameworks */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center text-black dark:text-black">
                  <Code className="mr-2 h-5 w-5 text-[#ff6347]" /> Backend Frameworks
                </h4>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">Node.js & Express</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        JavaScript runtime and minimalist web framework for building scalable APIs and microservices.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">Django & Flask</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Python frameworks for rapid development of secure and maintainable websites and APIs.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">Spring Boot</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Java-based framework for building enterprise-grade applications with minimal configuration.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">NestJS</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Progressive Node.js framework for building efficient and scalable server-side applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database Systems */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center text-black dark:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#ff6347]">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg> Database Systems
                </h4>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">SQL Databases</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        PostgreSQL, MySQL, and SQL Server for relational data with ACID compliance.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">NoSQL Databases</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        MongoDB, Firebase, and DynamoDB for flexible schema and horizontal scaling.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">In-Memory Databases</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Redis and Memcached for caching, session storage, and real-time analytics.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff6347]"></div>
                    <div className="pl-2">
                      <h5 className="font-medium mb-2 text-black dark:text-black">Graph Databases</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Neo4j and Amazon Neptune for complex relationship modeling and traversal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Serverless Architecture */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center text-black dark:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#ff6347]">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg> Serverless Architecture
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Experience with AWS Lambda, Vercel Functions, and Firebase Cloud Functions for event-driven, scalable applications without server management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-2 py-1 rounded">AWS Lambda</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-2 py-1 rounded">Vercel</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-2 py-1 rounded">Firebase</span>
                </div>
              </div>

              {/* Containerization & Orchestration */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center text-black dark:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#ff6347]">
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM10 9V6M14 9V6M10 13v-1M14 13v-1"></path>
                  </svg> Containerization & Orchestration
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Proficient with Docker and Kubernetes for containerizing applications and managing deployments across environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">Docker</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">Kubernetes</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">Microservices</span>
                </div>
              </div>

              {/* API Development & Integration */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center text-black dark:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#ff6347]">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
                  </svg> API Development & Integration
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Expertise in RESTful API design, GraphQL, and WebSockets for real-time communication and data exchange.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">REST</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">GraphQL</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">WebSockets</span>
                </div>
              </div>
            </div>

            {/* Database Selection Philosophy */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6347] to-[#ff9d7e]"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6347]/5 rounded-full blur-3xl"></div>

              <div className="relative">
                <h4 className="text-xl font-bold mb-5 text-black dark:text-black flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#ff6347]">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  Database Selection Philosophy
                </h4>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed border-l-4 border-[#ff6347]/20 pl-4 italic">
                  Choosing the right database is crucial for application success. My approach is to select the database technology based on data structure, access patterns, scalability needs, and consistency requirements.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#ff6347]/5 rounded-bl-full"></div>
                    <h5 className="font-semibold mb-4 text-black dark:text-black flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#ff6347]">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="3" y1="15" x2="21" y2="15"></line>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                        <line x1="15" y1="3" x2="15" y2="21"></line>
                      </svg>
                      <span className="text-black dark:text-black">When to Choose SQL</span>
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#ff6347] mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Complex queries and transactions requiring ACID properties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#ff6347] mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Well-defined, stable schema with relational data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#ff6347] mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Data integrity and consistency are critical</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      {/* Desktop view - always visible */}
                      <div className="hidden md:flex items-center text-sm text-gray-500">
                        <span className="font-medium mr-2">Popular options:</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded mr-1 text-gray-900 dark:text-white">PostgreSQL</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded mr-1 text-gray-900 dark:text-white">MySQL</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-900 dark:text-white">SQL Server</span>
                      </div>

                      {/* Mobile view - collapsible */}
                      <div className="md:hidden">
                        <button
                          className="flex items-center justify-between w-full text-sm text-gray-500 py-2"
                          onClick={(e) => {
                            const content = e.currentTarget.nextElementSibling;
                            const arrow = e.currentTarget.querySelector('svg');
                            content?.classList.toggle('hidden');
                            if (arrow) {
                              arrow.style.transform = content?.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                            }
                          }}
                        >
                          <span className="font-medium">Popular options:</span>
                          <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="hidden space-y-2 mt-2">
                          <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded mr-1 text-gray-900 dark:text-white inline-block">PostgreSQL</span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded mr-1 text-gray-900 dark:text-white inline-block">MySQL</span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-900 dark:text-white inline-block">SQL Server</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#ff6347]/5 rounded-bl-full"></div>
                    <h5 className="font-semibold mb-4 text-black dark:text-black flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-[#ff6347]">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      When to Choose NoSQL
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#ff6347] mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Rapid development with evolving schema requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#ff6347] mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Horizontal scaling for large volumes of data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#ff6347] mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">Hierarchical data or complex relationships (graph databases)</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      {/* Desktop view - always visible */}
                      <div className="hidden md:flex items-center text-sm text-gray-500">
                        <span className="font-medium mr-2">Popular options:</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded mr-1 text-gray-900 dark:text-white">MongoDB</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded mr-1 text-gray-900 dark:text-white">Firebase</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-900 dark:text-white">Redis</span>
                      </div>

                      {/* Mobile view - collapsible */}
                      <div className="md:hidden">
                        <button
                          className="flex items-center justify-between w-full text-sm text-gray-500 py-2"
                          onClick={() => {
                            const content = document.getElementById('mobile-db-options');
                            const icon = document.getElementById('mobile-db-arrow');
                            if (content && icon) {
                              content.classList.toggle('hidden');
                              icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                            }
                          }}
                        >
                          <span className="font-medium">Popular options:</span>
                          <svg
                            id="mobile-db-arrow"
                            className="w-4 h-4 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div id="mobile-db-options" className="hidden space-y-2 mt-2">
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-900 dark:text-white">MongoDB</span>
                            <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-900 dark:text-white">Firebase</span>
                            <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-900 dark:text-white">Redis</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Comparison Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-xl relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6347] to-[#ff9d7e]"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6347]/5 rounded-full blur-3xl"></div>

            <div className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-black flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#ff6347]">
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M3 10h18"></path>
                  <path d="M18 21H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3z"></path>
                  <path d="m9 17 3-3 3 3"></path>
                </svg>
                Technology Comparison
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-8 text-base leading-relaxed max-w-3xl">
                Comparing different technologies helps you choose the right tool for your specific needs. This comparison highlights key characteristics of popular backend and database technologies.
              </p>

              {/* Mobile scroll hint */}
              <div className="md:hidden mb-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-[#ff6347]/10 p-2 rounded-lg">
                  ← Swipe horizontally to see all columns →
                </p>
              </div>

              <div className="relative">
                <div className="overflow-x-auto rounded-lg border border-gray-100 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800 scrollbar-container">
                  <div className="min-w-[800px]">
                    <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gradient-to-r from-[#ff6347]/10 to-[#ff6347]/5 dark:from-[#ff6347]/20 dark:to-[#ff6347]/10">
                        <tr>
                          <th
                            className="px-6 py-4 text-left text-sm font-light text-black dark:text-black uppercase tracking-widest"
                          >
                            Technology
                          </th>
                          <th
                            className="px-6 py-4 text-left text-sm font-light text-black dark:text-black uppercase tracking-widest"
                          >
                            Type
                          </th>
                          <th
                            className="px-6 py-4 text-left text-sm font-light text-black dark:text-black uppercase tracking-widest"
                          >
                            Best For
                          </th>
                          <th
                            className="px-6 py-4 text-left text-sm font-light text-black dark:text-black uppercase tracking-widest"
                          >
                            Learning Curve
                          </th>
                          <th
                            className="px-6 py-4 text-left text-sm font-light text-black dark:text-black uppercase tracking-widest"
                          >
                            Scalability
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-[#ff6347]/10 dark:divide-[#ff6347]/20">
                        <tr className="hover:bg-[#ff6347]/5 transition-colors duration-150">
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                  <path d="M12 19c-1.1 0-2 .9-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5.5"></path>
                                  <path d="M16 19h6"></path>
                                  <path d="M19 16v6"></path>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Node.js</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">JavaScript Runtime</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              Runtime
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Real-time applications</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Medium</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#ff6347]/5 transition-colors duration-150">
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                  <path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"></path>
                                  <path d="M2 8v11a2 2 0 0 0 2 2h14"></path>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Django</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Python Framework</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                              Framework
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Full-stack applications</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Medium</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#ff6347]/5 transition-colors duration-150">
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">PostgreSQL</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Relational Database</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              SQL Database
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Complex queries, ACID</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Medium</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Medium</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#ff6347]/5 transition-colors duration-150">
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                  <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z"></path>
                                  <path d="M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                                  <path d="M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">MongoDB</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Document Database</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              NoSQL Database
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Flexible schema</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Low</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#ff6347]/5 transition-colors duration-150">
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                                  <path d="M2 22V12c0-5.5 4.5-10 10-10s10 4.5 10 10v10"></path>
                                  <path d="M16 8a4 4 0 0 0-8 0v14h8V8z"></path>
                                  <path d="M9 22h6"></path>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Redis</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Key-Value Store</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                              In-Memory DB
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Caching, real-time</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Low</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#ff6347]/5 transition-colors duration-150">
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                                  <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">GraphQL</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Query Language</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                              API Query Language
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Flexible data fetching</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Medium</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#ff6347]/5 transition-colors duration-150">
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                  <path d="M21 18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"></path>
                                  <path d="M7 10h.01"></path>
                                  <path d="M11 10h.01"></path>
                                  <path d="M15 10h.01"></path>
                                  <path d="M7 14h.01"></path>
                                  <path d="M11 14h.01"></path>
                                  <path d="M15 14h.01"></path>
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Docker</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Container Platform</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              Containerization
                            </span>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Consistent environments</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">Medium</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-end">
                <Button variant="outline" className="border-[#ff6347] text-[#ff6347] hover:bg-[#ff6347] hover:text-white">
                  Compare More Technologies
                </Button>
                <Button className="bg-[#ff6347] hover:bg-[#e5573e]">
                  Download Comparison PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="mb-16 bg-gradient-to-r from-[#ff6347]/10 to-[#ff6347]/5 rounded-2xl p-8 border border-[#ff6347]/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Continue Your Learning Journey</h2>
              <p className="text-gray-700 mb-6">
                Learning is a lifelong journey. The resources collected here represent just a fraction of the incredible knowledge available to developers today. As you explore these materials, remember that consistent practice and curiosity are your greatest assets.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-gray-700 text-sm">Set aside dedicated time each day for learning</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-gray-700 text-sm">Apply what you learn through personal projects</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-gray-700 text-sm">Share your knowledge with others to reinforce your understanding</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[#ff6347]">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-gray-700 text-sm">Join communities to connect with fellow learners</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-[#ff6347] hover:bg-[#e5573e]">
                  Suggest a Resource
                </Button>
                <Button variant="outline" className="border-[#ff6347] text-[#ff6347] hover:bg-[#ff6347] hover:text-white">
                  Share Your Journey
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/developer-learning-journey.png"
                  alt="Learning journey"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                  <blockquote className="text-white text-lg italic mb-2">
                    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
                  </blockquote>
                  <p className="text-white/80 text-sm">— Brian Herbert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#ff6347]/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-600 text-sm">
                  New resources are added regularly. Subscribe to get notified about the latest additions.
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-xs border-gray-300 focus:border-[#ff6347] focus:ring-[#ff6347]"
                />
                <Button className="bg-[#ff6347] hover:bg-[#e5573e] whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transform Your Digital Experience Section */}
        <section className="mb-16 rounded-2xl overflow-hidden shadow-xl relative">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6347]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6347]/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] bg-cover opacity-10 mix-blend-overlay"></div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to <span className="text-[#ff6347]">Transform</span> Your Digital Experience?
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                Let's collaborate on your next project and create something extraordinary together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Custom Development */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff6347] to-[#ff8367] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff6347] transition-colors duration-300">Custom Development</h3>
                <p className="text-gray-300">
                  Tailored solutions built with cutting-edge technologies to meet your specific needs.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff6347]"></span>
                      <span className="w-2 h-2 rounded-full bg-white/30"></span>
                      <span className="w-2 h-2 rounded-full bg-white/30"></span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6347] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* AI Solutions */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff6347] to-[#ff8367] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2c1.1 0 2 .9 2 2v1a1 1 0 0 0 1 1h3c1.1 0 2 .9 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h3a1 1 0 0 0 1-1V4c0-1.1.9-2 2-2z"></path>
                    <path d="M9 10h6"></path>
                    <path d="M12 14v4"></path>
                    <path d="M9 18h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff6347] transition-colors duration-300">AI Solutions</h3>
                <p className="text-gray-300">
                  Harness the power of artificial intelligence to automate processes and gain insights.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="w-2 h-2 rounded-full bg-white/30"></span>
                      <span className="w-2 h-2 rounded-full bg-[#ff6347]"></span>
                      <span className="w-2 h-2 rounded-full bg-white/30"></span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6347] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Technical Consultation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff6347] to-[#ff8367] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff6347] transition-colors duration-300">Technical Consultation</h3>
                <p className="text-gray-300">
                  Expert advice to guide your technical decisions and optimize your digital strategy.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="w-2 h-2 rounded-full bg-white/30"></span>
                      <span className="w-2 h-2 rounded-full bg-white/30"></span>
                      <span className="w-2 h-2 rounded-full bg-[#ff6347]"></span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6347] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-[#ff6347] hover:bg-[#ff7d67] text-white font-semibold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
