"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Github, Monitor, Server, Database, Shield, Zap, Users, BookOpen, Trophy, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LMSCaseStudy() {
  const router = useRouter()

  const features = [
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user roles and permissions system with admin and student interfaces"
    },
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Create, edit, and manage courses with video content, quizzes, and assignments"
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "JWT-based authentication with role-based access control and session management"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Live progress tracking and instant notifications for course updates"
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Detailed analytics and progress reports for students and instructors"
    },
    {
      icon: Star,
      title: "Interactive Content",
      description: "Engaging multimedia content with quizzes, videos, and interactive exercises"
    }
  ]

  const techStack = [
    { name: "Next.js", type: "Frontend Framework", color: "bg-blue-500" },
    { name: "TypeScript", type: "Programming Language", color: "bg-blue-600" },
    { name: "Node.js", type: "Backend Runtime", color: "bg-green-500" },
    { name: "Express.js", type: "Web Framework", color: "bg-gray-600" },
    { name: "MongoDB", type: "Database", color: "bg-green-600" },
    { name: "Redis", type: "Caching", color: "bg-red-500" },
    { name: "RTK Query", type: "State Management", color: "bg-purple-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Elearning
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              An industry-level LMS platform with advanced features, Redis caching, and RTK state management for optimal performance and user experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button
                className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://e-learning-lms-frontend-theta.vercel.app/", "_blank")}
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://github.com/im-shafiqurrehman/E-LEARNING_LMS", "_blank")}
              >
                <Github className="w-4 h-4" />
                Source Code
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12 relative">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/lms.png"
                alt="Elearning Platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Key Features */}
          <Card className="mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4">
                Key Features
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Comprehensive features designed for modern online learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Stack */}
          <Card className="mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4">
                Technical Stack
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Modern technologies for scalable and efficient performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-10 h-10 ${tech.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{tech.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Frontend Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Next.js 14 with App Router for optimal performance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    TypeScript for type safety and better development experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    RTK Query for efficient state management and caching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Responsive design with Tailwind CSS
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Backend Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Node.js with Express.js for robust API development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    MongoDB for flexible document-based data storage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Redis for high-performance caching and session management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    JWT authentication with role-based access control
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Performance Highlights */}
          <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Performance Highlights</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <p className="text-muted-foreground">Performance Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">&lt; 2s</div>
                    <p className="text-muted-foreground">Page Load Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <p className="text-muted-foreground">Mobile Responsive</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Timeline */}
          <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4">
                Project Timeline
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Development completed in 2 months (Jan - Feb 2025)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Planning & Design</h3>
                    <p className="text-muted-foreground">User research, wireframing, and technical architecture</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Backend Development</h3>
                    <p className="text-muted-foreground">API development, database design, and authentication system</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Frontend Development</h3>
                    <p className="text-muted-foreground">UI implementation, state management, and responsive design</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold">Testing & Deployment</h3>
                    <p className="text-muted-foreground">Quality assurance, performance optimization, and deployment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
