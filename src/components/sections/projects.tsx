"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSection } from "@/components/motion-components";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProjectsSection() {
  const projects = [
    {
      title: "DayFlow",
      description:
        "High-performance hybrid task manager built with Tauri 2.0, React 19, and TypeScript. Features real-time drag-and-drop kanban boards, AI-powered scheduling and task creation, comprehensive goals tracking, advanced sprint modes with dynamic window management, and Google Calendar integration.",
      detailsTitle: "AI-Powered Cross-Platform Task Management System",
      detailsDescription:
        "A sophisticated task management application that works as both a native desktop app and modern web app with the same codebase. Features advanced AI integration, real-time collaboration, and comprehensive productivity tools.",
      keyFeatures: [
        "AI-Enhanced Productivity Suite with Google Gemini AI for intelligent task scheduling and natural language task creation",
        "Cross-platform architecture using Tauri 2.0 for native desktop compilation with shared React 19 codebase",
        "Real-time Kanban system with drag-and-drop functionality and Supabase real-time subscriptions",
        "Sprint Mode (Desktop Exclusive) with fullscreen, sidebar, and focus view modes for enhanced productivity",
        "Advanced Timer System with Pomodoro, custom countdown, and stopwatch modes with task integration",
        "Google Calendar Integration with bidirectional sync and AI-enhanced scheduling conflict resolution",
        "Comprehensive Goals System with structured goal tracking, progress visualization, and AI-driven prioritization",
        "Recurring Tasks with flexible patterns and AI-optimized scheduling based on completion history",
      ],
      technicalHighlights: [
        "Scaled from 0 to 300+ daily active users in 8 weeks with PostgreSQL optimization via Supabase",
        "Implemented AI-powered task scheduling with 40+ personalized preferences including working hours and energy levels",
        "Built hybrid architecture supporting both native desktop (Tauri) and web deployment with unified codebase",
        "Created advanced window management with always-on-top functionality and dynamic resizing via Tauri APIs",
        'Integrated Google Gemini AI for natural language processing like "plan mom\'s birthday party next week"',
        "Developed real-time collaboration features with optimistic updates and cross-device synchronization",
        "Used Bun for fast package management and Vite 6.0 for optimized build performance",
        "Implemented comprehensive goals system with AI-influenced task prioritization and progress tracking",
      ],
      tags: [
        "Tauri 2.0",
        "React 19",
        "TypeScript 5.6",
        "Vite 6.0",
        "PostgreSQL",
        "Supabase",
        "Google Gemini AI",
        "Bun",
        "Tailwind CSS v4",
        "shadcn/ui",
        "@dnd-kit",
      ],
      github: "https://github.com/nikitalobanov12/dayflow",
      live: "https://dayflow.ca",
    },
    {
      title: "Circles",
      description:
        "Circles is a photo sharing and organization platform for close friends. It is envisioned as Google Drive but with social features — allowing friends to create groups (circles), share albums, and interact with each other's content in a more personal and organized way than traditional photo organization platforms.",
      detailsTitle: "Advanced Social Media Platform for Close Communities",
      detailsDescription:
        "A sophisticated full-stack social media application built with modern web technologies, showcasing advanced database optimization, real-time features, and enterprise-level architecture patterns.",
      keyFeatures: [
        "Advanced Circle Management System with private/public visibility and granular permission controls",
        "Sophisticated Image Upload & Management with Cloudinary integration and client-side cropping",
        "Real-time Activity Feed System with friend request notifications and activity aggregation",
        "Complex Database Architecture with optimized many-to-many relationships and Redis caching",
        "Enterprise-grade Authentication with NextAuth.js and session management",
        "Performance Optimizations including query batching, database indexing, and connection pooling",
      ],
      technicalHighlights: [
        "Eliminated N+1 query problems reducing database calls from 200+ to 3 per page load",
        "Implemented Redis caching for frequently accessed data and session management",
        "Built complex many-to-many relationships with role-based access controls",
        "Integrated Cloudinary for optimized image processing with automatic format conversion",
        "Used Prisma ORM with PostgreSQL for type-safe database operations",
        "Deployed on Vercel with edge functions for optimal performance",
      ],
      tags: [
        "Next.js 15",
        "React 18",
        "TypeScript",
        "Prisma ORM",
        "PostgreSQL",
        "Redis",
        "NextAuth.js",
        "Cloudinary",
        "Tailwind CSS",
        "Vercel",
      ],
      github: "https://github.com/nikitalobanov12/circle",
      live: "https://circles.nikitalobanov.com/search",
    },
    {
      title: "WriteShare",
      description:
        "Real-time collaborative markdown editor built with Next.js 15, React 19, and TypeScript. Features Google Docs-style multi-user editing with Liveblocks/Yjs CRDT, rich text formatting, workspace management, and Redis caching for optimal performance.",
      detailsTitle: "Enterprise-Grade Collaborative Document Editor",
      detailsDescription:
        "A sophisticated collaborative markdown editor that enables real-time multi-user editing with advanced conflict resolution, comprehensive caching strategies, and enterprise-level architecture patterns.",
      keyFeatures: [
        "Real-time Collaborative Editing with Liveblocks and Yjs CRDT enabling conflict-free multi-user editing",
        "Rich Text Editor powered by Tiptap with formatting, tables, code blocks, task lists, and media embedding",
        "Workspace Management with NextAuth.js authentication supporting Google, GitHub, and Discord",
        "Advanced Performance Optimization with PostgreSQL database and Redis caching layer",
        "Comprehensive Testing Suite with Vitest for unit tests and Playwright for end-to-end testing",
        "Docker Containerization with multi-stage builds and production-ready deployment scripts",
        "Enterprise Security with input validation, CSRF protection, session management, and audit logging",
        "Developer Experience enhancements with Bun package manager, TypeScript strict mode, and ESLint",
      ],
      technicalHighlights: [
        "Resolved infinite save loop challenge by separating document content state from metadata management",
        "Implemented PostgreSQL optimization with proper indexing, connection pooling, and query plan analysis",
        "Built modular architecture with separation of concerns between UI, business logic, and data access layers",
        "Created comprehensive API security with authentication, authorization, input validation, and rate limiting",
        "Developed real-time collaboration using WebSocket connections with optimistic UI updates and rollback",
        "Established CI/CD pipeline with automated testing, linting, and deployment workflows",
        "Integrated Redis caching with TTLs and invalidation strategies for optimal performance",
        "Used tRPC for type-safe APIs with Zod validation and consistent error handling",
      ],
      tags: [
        "Next.js 14",
        "React 19",
        "TypeScript",
        "tRPC",
        "Prisma ORM",
        "PostgreSQL",
        "Redis",
        "NextAuth.js",
        "Liveblocks",
        "Yjs CRDT",
        "Tiptap",
        "Docker",
        "Bun",
        "Vitest",
        "Playwright",
      ],
      github: "https://github.com/nikitalobanov12/WriteShare",
      live: "https://writeshare.nikitalobanov.com",
    },
    {
      title: "Markdown Parser API",
      description:
        "High-performance Go microservice for converting markdown text to HTML with real-time parsing capabilities. Supports GitHub Flavored Markdown, WebSocket connections for live updates, and handles multiple concurrent users efficiently.",
      detailsTitle: "Go Microservice for Real-Time Markdown Processing",
      detailsDescription:
        "A lightweight, high-performance API service built in Go that provides real-time markdown to HTML conversion with support for advanced markdown features and concurrent user handling.",
      keyFeatures: [
        "Real-time Markdown Processing with instant conversion of markdown syntax to HTML",
        "GitHub Flavored Markdown Support including tables, checkboxes, code blocks, and syntax highlighting",
        "WebSocket Integration for real-time updates and live typing pattern detection",
        "High Concurrency Support designed to handle multiple users simultaneously with Go's goroutines",
        "RESTful API Design with clean endpoints for both single conversions and batch processing",
        "Typing Pattern Detection that converts patterns like # to headings instantly as users type",
        "Lightweight Architecture with minimal dependencies and optimized for performance",
        "Production Ready with proper error handling, logging, and configuration management",
      ],
      technicalHighlights: [
        "Built with Go for maximum performance and efficient memory usage in concurrent scenarios",
        "Implemented WebSocket connections for real-time bidirectional communication",
        "Designed stateless architecture allowing horizontal scaling across multiple instances",
        "Used Go's built-in concurrency primitives (goroutines and channels) for handling multiple users",
        "Implemented GitHub Flavored Markdown parser with support for advanced syntax features",
        "Created efficient pattern matching for instant syntax conversion during typing",
        "Optimized for low latency with minimal processing overhead per request",
        "Integrated comprehensive logging and error handling for production deployment",
      ],
      tags: [
        "Go",
        "WebSockets",
        "REST API",
        "Microservices",
        "GitHub Flavored Markdown",
        "Goroutines",
        "Concurrent Programming",
        "Real-time Processing",
      ],
      github: "https://github.com/nikitalobanov12/markdown-parser",
      live: null,
    },
  ];
  return (
    <MotionSection
      id="projects"
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <MotionDiv
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight section-heading">
            Projects
          </h2>
          <p className="text-muted-foreground">
            A showcase of my recent development work featuring full-stack
            applications, microservices, and modern web technologies
          </p>
        </MotionDiv>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 project-card enhanced-card">
                <CardHeader>
                  <CardTitle className="">{project.title}</CardTitle>
                  <CardDescription>
                    {project.live
                      ? "Full-Stack Application"
                      : "API Microservice"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <MotionDiv
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + tagIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="hover:bg-blue-500 hover:text-white transition-colors duration-200 blue-glow"
                        >
                          {tag}
                        </Badge>
                      </MotionDiv>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 flex-wrap">
                  <Dialog>
                    <DialogTrigger asChild>
                      <MotionDiv
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </MotionDiv>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-2">
                          {project.detailsTitle}
                        </DialogTitle>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                          {project.detailsDescription}
                        </p>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                            Key Features
                          </h3>
                          <ul className="space-y-2">
                            {project.keyFeatures.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-500 mt-2 text-xs">
                                  ●
                                </span>
                                <span className="text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                            Technical Highlights
                          </h3>
                          <ul className="space-y-2">
                            {project.technicalHighlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-500 mt-2 text-xs">
                                  ●
                                </span>
                                <span className="text-sm leading-relaxed">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                            Technology Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-600 transition-colors duration-200"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4 border-t">
                          {project.github && (
                            <Button variant="outline" asChild>
                              <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                GitHub Repository
                              </Link>
                            </Button>
                          )}
                          {project.live && (
                            <Button asChild className="btn-blue-gradient">
                              <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Application
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {project.github && (
                    <MotionDiv
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    </MotionDiv>
                  )}
                  {project.live && (
                    <MotionDiv
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" asChild className="btn-blue-gradient">
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </MotionDiv>
                  )}
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
