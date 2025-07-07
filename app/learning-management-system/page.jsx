"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Github, Monitor, Server, Database, Shield, Zap, Users, BookOpen, Trophy, Star, CreditCard, MessageSquare, BarChart3, Video, Smartphone, Settings, CheckCircle, ZoomIn, ZoomOut, Maximize } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function ELearningCaseStudy() {
  const router = useRouter()
  const [imageZoom, setImageZoom] = useState(1)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const keyFeatures = [
    {
      icon: Users,
      title: "Multi-Role Authentication",
      description: "JWT-based security with admin, instructor, and student roles"
    },
    {
      icon: MessageSquare,
      title: "Real-Time Communication",
      description: "Socket.io integration for live messaging and notifications"
    },
    {
      icon: CreditCard,
      title: "Secure Payment Processing",
      description: "Stripe integration with webhook handling for course purchases"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive reporting with visual charts and data export"
    },
    {
      icon: BookOpen,
      title: "Course Management System",
      description: "Rich course builder with multimedia support and progress tracking"
    },
    {
      icon: Video,
      title: "Video Streaming Platform",
      description: "VdoCipher integration for DRM-protected content delivery"
    },
    {
      icon: Trophy,
      title: "Multi-Vendor Support",
      description: "Comprehensive instructor dashboards with revenue analytics"
    },
    {
      icon: Smartphone,
      title: "Mobile-Responsive UI",
      description: "Dark/light theme support with Material-UI components"
    },
    {
      icon: Shield,
      title: "Social Authentication",
      description: "Google and GitHub OAuth integration via NextAuth.js"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Redis caching, lazy loading, and CDN integration"
    }
  ]

  const techStack = {
    frontend: [
      { name: "Next.js 14", description: "App Router" },
      { name: "TypeScript", description: "Type Safety" },
      { name: "Redux Toolkit", description: "State Management" },
      { name: "RTK Query", description: "Data Fetching" },
      { name: "Tailwind CSS", description: "Styling" },
      { name: "Material-UI", description: "Component Library" }
    ],
    backend: [
      { name: "Node.js", description: "Runtime" },
      { name: "Express.js", description: "Web Framework" },
      { name: "MongoDB", description: "Database" },
      { name: "Mongoose", description: "ODM" },
      { name: "Redis", description: "Caching" },
      { name: "JWT", description: "Authentication" }
    ],
    integrations: [
      { name: "Stripe", description: "Payment Processing" },
      { name: "Cloudinary", description: "Media CDN" },
      { name: "VdoCipher", description: "Video DRM" },
      { name: "Socket.io", description: "Real-time" },
      { name: "NextAuth.js", description: "OAuth" },
      { name: "Nodemailer", description: "Email Service" },
      { name: "Vercel", description: "Deployment" }
    ]
  }

  const projectStats = [
    { label: "Lines of Code", value: "15,000+" },
    { label: "Components", value: "50+" },
    { label: "API Endpoints", value: "20+" },
    { label: "DB Collections", value: "8" }
  ]

  const performanceMetrics = [
    { metric: "Read Operations", value: "< 100ms", description: "Average response time" },
    { metric: "Write Operations", value: "< 200ms", description: "Average response time" },
    { metric: "Concurrent Users", value: "10,000+", description: "Simultaneous users" },
    { metric: "Mobile Performance", value: "95%", description: "Lighthouse score" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduPlatform Pro
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              E-Learning Platform Case Study
            </h2>
            
            {/* Technology Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">Next.js 14</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">Node.js</Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">TypeScript</Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">MongoDB</Badge>
              <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">Redis</Badge>
              <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Express.js</Badge>
              <Badge variant="secondary" className="bg-teal-100 text-teal-800 hover:bg-teal-200">Tailwind CSS</Badge>
              <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200">Material-UI</Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Stripe</Badge>
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Socket.io</Badge>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A comprehensive, production-ready e-learning management system built in 2025 using the MERN stack. 
              This modern platform delivers seamless learning experiences through real-time communication, secure payment processing, 
              and advanced analytics. Designed for scalability and performance, it serves educational institutions, individual educators, 
              and corporate training programs with enterprise-grade features and mobile-responsive design.
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

          {/* Screenshots Section */}
          <div className="mb-16">
            {/* Overview Section */}
            <Card className="mb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      EduPlatform Pro represents a comprehensive e-learning ecosystem designed to revolutionize online education. 
                      Built with modern MERN stack technologies, this platform seamlessly integrates course management, payment processing, 
                      and real-time communication features. The system supports multiple user roles including students, instructors, and administrators, 
                      providing each with tailored interfaces and functionalities to ensure optimal learning and teaching experiences.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/lms/lms-home.png"
                      alt="Home Page Overview"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Experience Section */}
            <Card className="mb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">User Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Students enjoy an intuitive dashboard that tracks their learning progress, manages course enrollments, and facilitates 
                      seamless communication with instructors. The platform features responsive design with dark/light themes, making it accessible 
                      across all devices. Advanced features include course bookmarking, progress analytics, certificate generation, and integrated 
                      payment systems that make purchasing and accessing courses effortless and secure.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                    <Image
                      src="/assets/lms/lms-user.png"
                      alt="User Dashboard"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admin Functionality Section */}
            <Card className="mb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-600">Admin Functionality</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The administrative interface provides comprehensive platform management capabilities including user administration, 
                      course oversight, and detailed analytics dashboards. Administrators can monitor platform performance through real-time 
                      metrics, manage content moderation, handle payment disputes, and access extensive reporting tools. The system includes 
                      automated notification systems, bulk operations for user management, and advanced security controls to ensure platform integrity.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/lms/lms-admin.png"
                      alt="Admin Dashboard"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="mb-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center mb-4">
                Key Features
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Comprehensive features designed for modern online learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Multi-Role Authentication</h3>
                      <p className="text-muted-foreground text-sm">JWT-based security with admin, instructor, and student roles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Real-Time Communication</h3>
                      <p className="text-muted-foreground text-sm">Socket.io integration for live messaging and notifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Secure Payment Processing</h3>
                      <p className="text-muted-foreground text-sm">Stripe integration with webhook handling for course purchases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Advanced Analytics Dashboard</h3>
                      <p className="text-muted-foreground text-sm">Comprehensive reporting with visual charts and data export</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Course Management System</h3>
                      <p className="text-muted-foreground text-sm">Rich course builder with multimedia support and progress tracking</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Video Streaming Platform</h3>
                      <p className="text-muted-foreground text-sm">VdoCipher integration for DRM-protected content delivery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Multi-Vendor Support</h3>
                      <p className="text-muted-foreground text-sm">Comprehensive instructor dashboards with revenue analytics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mobile-Responsive UI</h3>
                      <p className="text-muted-foreground text-sm">Dark/light theme support with Material-UI components</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Social Authentication</h3>
                      <p className="text-muted-foreground text-sm">Google and GitHub OAuth integration via NextAuth.js</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Performance Optimization</h3>
                      <p className="text-muted-foreground text-sm">Redis caching, lazy loading, and CDN integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Stack */}
          <Card className="mb-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center mb-4">
                Technical Stack
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Modern technologies for scalable and efficient performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {/* Frontend Technologies */}
                {techStack.frontend.map((tech, index) => (
                  <div key={`frontend-${index}`} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                    <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">{tech.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}

                {/* Backend Technologies */}
                {techStack.backend.map((tech, index) => (
                  <div key={`backend-${index}`} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                    <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">{tech.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}

                {/* Integration Technologies */}
                {techStack.integrations.map((tech, index) => (
                  <div key={`integration-${index}`} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                    <div className="w-6 h-6 bg-purple-500 rounded-md flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">{tech.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Statistics */}
          <Card className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center mb-4">
                Project Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8">
                {projectStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Database Architecture Section */}
          <Card className="mb-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
                <Database className="w-8 h-8" />
                Database Architecture & ERD
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Comprehensive database design with entity relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                  The database architecture is designed with optimal relationships between entities, ensuring data integrity and efficient querying. 
                  The ERD below illustrates the complete schema including users, courses, enrollments, payments, and content management.
                </p>
              </div>
              
              {/* Database ERD with Zoom Controls */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Entity Relationship Diagram</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setImageZoom(Math.max(0.5, imageZoom - 0.25))}
                      className="gap-2"
                    >
                      <ZoomOut className="w-4 h-4" />
                      Zoom Out
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setImageZoom(Math.min(3, imageZoom + 0.25))}
                      className="gap-2"
                    >
                      <ZoomIn className="w-4 h-4" />
                      Zoom In
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsImageModalOpen(true)}
                      className="gap-2"
                    >
                      <Maximize className="w-4 h-4" />
                      Full View
                    </Button>
                  </div>
                </div>
                
                <div className="relative overflow-auto max-h-96 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <div 
                    className="transition-transform duration-300 ease-in-out"
                    style={{ transform: `scale(${imageZoom})`, transformOrigin: 'top left' }}
                  >
                    <Image
                      src="/assets/lms/lms_database_erd.png"
                      alt="LMS Database Entity Relationship Diagram"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Current Zoom: {Math.round(imageZoom * 100)}% | Use zoom controls or scroll to navigate
                </div>
              </div>
              
              {/* Database Details */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg">
                  <h5 className="font-semibold text-lg mb-2 text-blue-600">Core Entities</h5>
                  <p className="text-sm text-muted-foreground">Users, Courses, Lessons, Enrollments, Orders</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg">
                  <h5 className="font-semibold text-lg mb-2 text-green-600">Relationships</h5>
                  <p className="text-sm text-muted-foreground">One-to-Many, Many-to-Many associations</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg">
                  <h5 className="font-semibold text-lg mb-2 text-purple-600">Indexing</h5>
                  <p className="text-sm text-muted-foreground">Optimized queries with proper indexing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modal for Full Image View */}
          {isImageModalOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-7xl max-h-full overflow-auto bg-white dark:bg-gray-900 rounded-lg">
                <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Database ERD - Full View</h3>
                  <Button
                    variant="outline"
                    onClick={() => setIsImageModalOpen(false)}
                    className="gap-2"
                  >
                    Close
                  </Button>
                </div>
                <div className="p-4">
                  <Image
                    src="/assets/lms/lms_database_erd.png"
                    alt="LMS Database Entity Relationship Diagram - Full View"
                    width={1600}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Architecture Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Database className="w-6 h-6" />
                  System Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The platform follows a modern microservices-inspired architecture with clear separation of concerns. 
                  The frontend leverages Next.js 14's App Router for optimal performance and SEO, while the backend implements 
                  a robust Express.js API with JWT authentication, role-based access control, and comprehensive error handling.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Microservices Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>JWT Authentication</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Role-based Access Control</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Database className="w-6 h-6" />
                  Database Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  MongoDB serves as the primary database with optimized schemas for users, courses, orders, and notifications. 
                  The database design supports efficient queries through proper indexing, with Redis providing session management 
                  and caching for improved performance.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Optimized Schemas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Proper Indexing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Redis Caching</span>
                </div>
              </CardContent>
            </Card>
          </div>
        
        </div>
      </div>
    </div>
  )
}
