"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Github, Monitor, Server, Database, Shield, Zap, Users, BookOpen, Trophy, Star, CreditCard, MessageSquare, BarChart3, Video, Smartphone, Settings, CheckCircle, ZoomIn, ZoomOut, Maximize, ShoppingCart, Store, DollarSign, Clock, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function HalfAttireCaseStudy() {
  const router = useRouter()
  const [imageZoom, setImageZoom] = useState(1)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const keyFeatures = [
    {
      icon: Store,
      title: "Multi-Vendor Support",
      description: "Independent vendor stores with customizable profiles and dashboards"
    },
    {
      icon: MessageSquare,
      title: "Real-Time Messaging",
      description: "Live chat between customers and vendors using Socket.io"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Stripe, Debit/Cradit Card, and Cash on Delivery integration"
    },
    {
      icon: ShoppingCart,
      title: "Advanced Cart System",
      description: "Persistent cart across sessions with wishlist functionality"
    },
    {
      icon: BarChart3,
      title: "Vendor Analytics",
      description: "Comprehensive sales analytics and revenue tracking"
    },
    {
      icon: Clock,
      title: "Event-Based Sales",
      description: "Time-limited sales events with countdown timers"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Customer, Vendor, and Admin roles with granular permissions"
    },
    {
      icon: Smartphone,
      title: "Progressive Web App",
      description: "Mobile-first responsive design with PWA capabilities"
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "JWT-based security with Google OAuth integration"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Code splitting, lazy loading, and CDN integration"
    }
  ]

  const techStack = {
    frontend: [
      { name: "Next.js 14", description: "React Framework" },
      { name: "Redux Toolkit", description: "State Management" },
      { name: "Tailwind CSS", description: "Styling" },
      { name: "React Hook Form", description: "Form Handling" }
    ],
    backend: [
      { name: "Node.js", description: "Runtime" },
      { name: "Express.js", description: "Web Framework" },
      { name: "MongoDB", description: "Database" },
      { name: "Mongoose", description: "ODM" },
      { name: "Socket.io", description: "Real-time" },
      { name: "JWT", description: "Authentication" }
    ],
    integrations: [
      { name: "Stripe", description: "Payment Processing" },
      { name: "Cloudinary", description: "Image Storage" },
      { name: "Firebase Auth", description: "Authentication" },
      { name: "Nodemailer", description: "Email Service" },
      { name: "Vercel", description: "Deployment" },
    ]
  }

  const projectStats = [
    { label: "Lines of Code", value: "18k+" },
    { label: "React Components", value: "60+" },
    { label: "API Endpoints", value: "30+" },
    { label: "MongoDB Collections", value: "8" }
  ]

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc)
    setIsImageModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-red-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-amber-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-3000"></div>
          <div className="absolute bottom-1/3 right-10 w-36 h-36 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-4000"></div>
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 relative z-10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Enhanced animated title with glow effect */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent relative animate-pulse">
                HalfAttire
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent blur-lg opacity-30 animate-pulse delay-500"></div>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Multi-Vendor E-Commerce Platform Case Study
            </h2>
            
            {/* Enhanced Technology Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 px-4 py-2 text-sm font-medium">Next.js 14</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:from-green-200 hover:to-green-300 transition-all duration-300 px-4 py-2 text-sm font-medium">Node.js</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 px-4 py-2 text-sm font-medium">MongoDB</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 hover:from-indigo-200 hover:to-indigo-300 transition-all duration-300 px-4 py-2 text-sm font-medium">Express.js</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 hover:from-teal-200 hover:to-teal-300 transition-all duration-300 px-4 py-2 text-sm font-medium">Tailwind CSS</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 hover:from-pink-200 hover:to-pink-300 transition-all duration-300 px-4 py-2 text-sm font-medium">Socket.io</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 hover:from-yellow-200 hover:to-yellow-300 transition-all duration-300 px-4 py-2 text-sm font-medium">Stripe</Badge>
            </div>
            
            {/* Enhanced description with better typography */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 mb-10 shadow-xl border border-white/20">
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A comprehensive full-stack multi-vendor e-commerce platform developed in 2025, designed to connect multiple vendors 
                with customers through a unified marketplace. Specializing in 
                <span className="text-orange-600 font-semibold"> fashion and lifestyle products</span>, the platform provides 
                seamless shopping experiences with 
                <span className="text-red-600 font-semibold"> real-time features</span>, 
                <span className="text-green-600 font-semibold"> secure payment processing</span>, and advanced vendor management capabilities.
              </p>
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                size="lg"
                className="gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3 text-lg relative overflow-hidden group"
                onClick={() => window.open("#", "_blank")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <Globe className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Live Demo</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                disabled
                className="gap-3 cursor-not-allowed opacity-75 border-2 border-red-200 px-8 py-3 text-lg relative"
              >
                <Lock className="w-5 h-5" />
                <span>Paid Source Code</span>
              </Button>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mb-20">
            {/* Customer Experience Section */}
            <Card className="mb-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-orange-600">Customer Experience</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Customers enjoy a comprehensive shopping experience with intuitive product browsing, advanced search and filtering, 
                      and seamless checkout processes. The platform features a responsive design with modern UI components, 
                      real-time chat with vendors, wishlist functionality, and multiple payment options including 
                      <span className="text-orange-600 font-semibold"> Stripe</span>, 
                      <span className="text-blue-600 font-semibold"> PayPal</span>, and 
                      <span className="text-green-600 font-semibold"> Cash on Delivery</span> for maximum convenience.
                    </p>
                    {/* Feature highlights */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Smart Product Search</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Wishlist & Cart Sync</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Real-time Chat</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Secure Payments</span>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="relative h-80 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                    onClick={() => openImageModal("/assets/halfattire/user.png")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-500/20 z-10"></div>
                    <Image
                      src="/assets/halfattire/user.png"
                      alt="Customer Dashboard"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vendor Experience Section */}
            <Card className="mb-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div 
                    className="relative h-80 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                    onClick={() => openImageModal("/assets/halfattire/seller.png")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 z-10"></div>
                    <Image
                      src="/assets/halfattire/seller.png"
                      alt="Vendor Dashboard"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="order-2 md:order-1 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Store className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-green-600">Vendor Management</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Vendors have access to a comprehensive dashboard for managing their store, products, orders, and customer communications. 
                      The platform provides detailed analytics, revenue tracking, event management for sales campaigns, 
                      and real-time messaging capabilities. Vendors can customize their store profiles, manage inventory, 
                      and track performance through intuitive charts and metrics.
                    </p>
                    {/* Feature highlights */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Sales Analytics</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Inventory Management</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Order Processing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Revenue Tracking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admin Functionality Section */}
            <Card className="mb-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-purple-600">Admin Control Panel</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      The administrative interface provides complete platform oversight with user management, vendor verification, 
                      order monitoring, and financial analytics. Admins can manage platform-wide settings, handle disputes, 
                      approve vendor applications, monitor transactions, and access comprehensive reporting tools. 
                      The system includes automated notifications, bulk operations, and advanced security controls.
                    </p>
                    {/* Feature highlights */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>User Management</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Vendor Verification</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Financial Analytics</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Security Controls</span>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="relative h-80 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                    onClick={() => openImageModal("/assets/halfattire/admin.png")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 z-10"></div>
                    <Image
                      src="/assets/halfattire/admin.png"
                      alt="Admin Dashboard"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="mb-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-2xl">
            <CardHeader className="pb-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Key Features
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Essential e-commerce functionality for multi-vendor platform
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-orange-700 dark:text-orange-300">Multi-Vendor Support</h3>
                      <p className="text-xs text-muted-foreground">Independent vendor stores with dashboards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-blue-700 dark:text-blue-300">Real-Time Messaging</h3>
                      <p className="text-xs text-muted-foreground">Live chat between customers and vendors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-green-700 dark:text-green-300">Multiple Payment Methods</h3>
                      <p className="text-xs text-muted-foreground">Stripe, Card, and Cash on Delivery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-purple-700 dark:text-purple-300">Advanced Cart System</h3>
                      <p className="text-xs text-muted-foreground">Persistent cart with wishlist functionality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-teal-700 dark:text-teal-300">Vendor Analytics</h3>
                      <p className="text-xs text-muted-foreground">Sales analytics and revenue tracking</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-amber-700 dark:text-amber-300">Event-Based Sales</h3>
                      <p className="text-xs text-muted-foreground">Time-limited sales with countdown timers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-rose-700 dark:text-rose-300">Role-Based Access</h3>
                      <p className="text-xs text-muted-foreground">Customer, Vendor, and Admin roles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-violet-700 dark:text-violet-300">Progressive Web App</h3>
                      <p className="text-xs text-muted-foreground">Mobile-first responsive design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-emerald-700 dark:text-emerald-300">Secure Authentication</h3>
                      <p className="text-xs text-muted-foreground">JWT-based security with OAuth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20">
                    <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-sm text-sky-700 dark:text-sky-300">Performance Optimized</h3>
                      <p className="text-xs text-muted-foreground">Code splitting and lazy loading</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Statistics */}
          <Card className="mb-16 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4">Project Statistics</h3>
                <p className="text-orange-100 text-lg">Comprehensive development metrics</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {projectStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-orange-100">{stat.label}</div>
                  </div>
                ))}
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
                Modern technologies for scalable multi-vendor marketplace
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

          {/* Challenges & Solutions */}
          <Card className="mb-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-2xl">
            <CardHeader className="pb-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Challenges & Solutions
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Technical challenges overcome during development
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
                {/* Real-time Communication Challenge */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Real-time Communication</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                              <span className="inline-flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                Challenge:
                              </span>
                            </h4>
                            <p className="text-muted-foreground leading-relaxed pl-4">
                              Implementing real-time messaging between multiple vendors and customers while maintaining performance.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                              <span className="inline-flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Solution:
                              </span>
                            </h4>
                            <p className="text-muted-foreground leading-relaxed pl-4">
                              Utilized Socket.io for real-time bidirectional communication, implemented proper room management, 
                              and optimized event handling for scalability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi-vendor Architecture Challenge */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Store className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">Multi-vendor Architecture</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                              <span className="inline-flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                Challenge:
                              </span>
                            </h4>
                            <p className="text-muted-foreground leading-relaxed pl-4">
                              Building a scalable multi-vendor system with separate dashboards, order management, and commission tracking.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                              <span className="inline-flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Solution:
                              </span>
                            </h4>
                            <p className="text-muted-foreground leading-relaxed pl-4">
                              Designed a flexible MongoDB schema with role-based access control, implemented vendor-specific analytics, 
                              and created automated commission calculations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                Multi-vendor database design with complex relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                  The database architecture supports a complex multi-vendor ecosystem with separate vendor stores, customer management, 
                  order processing, and real-time messaging. The ERD illustrates relationships between users, shops, products, orders, 
                  events, and messaging systems.
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
                      onClick={() => openImageModal("/assets/halfattire/Multiven-database.png")}
                      className="gap-2"
                    >
                      <Maximize className="w-4 h-4" />
                      Full View
                    </Button>
                  </div>
                </div>
                
                <div className="relative overflow-auto max-h-96 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <div 
                    className="transition-transform duration-300 ease-in-out cursor-zoom-in"
                    style={{ transform: `scale(${imageZoom})`, transformOrigin: 'top left' }}
                    onClick={() => openImageModal("/assets/halfattire/Multiven-database.png")}
                  >
                    <Image
                      src="/assets/halfattire/Multiven-database.png"
                      alt="HalfAttire Database Entity Relationship Diagram"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Current Zoom: {Math.round(imageZoom * 100)}% | Click image or use controls to zoom
                </div>
              </div>
              
              {/* Database Details */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg">
                  <h5 className="font-semibold text-lg mb-2 text-blue-600">Core Collections</h5>
                  <p className="text-sm text-muted-foreground">Users, Shops, Products, Orders, Events, Messages</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg">
                  <h5 className="font-semibold text-lg mb-2 text-green-600">Vendor Isolation</h5>
                  <p className="text-sm text-muted-foreground">Shop-specific data scoping and vendor management</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg">
                  <h5 className="font-semibold text-lg mb-2 text-purple-600">Real-time Data</h5>
                  <p className="text-sm text-muted-foreground">Live messaging and event-driven updates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Architecture Section */}
          <Card className="mb-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
                <Settings className="w-8 h-8" />
                System Architecture
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Scalable multi-vendor e-commerce system design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                  The system architecture demonstrates a modern, scalable approach to multi-vendor e-commerce platforms 
                  with clear separation of concerns, real-time capabilities, and secure payment processing.
                </p>
              </div>
              
              {/* System Architecture Diagram */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Architecture Overview</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openImageModal("/assets/halfattire/Multivendor--system architecture.png")}
                    className="gap-2"
                  >
                    <Maximize className="w-4 h-4" />
                    Full View
                  </Button>
                </div>
                
                <div 
                  className="relative overflow-auto max-h-96 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-zoom-in"
                  onClick={() => openImageModal("/assets/halfattire/Multivendor--system architecture.png")}
                >
                  <Image
                    src="/assets/halfattire/Multivendor--system architecture.png"
                    alt="HalfAttire System Architecture"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modal for Full Image View */}
          {isImageModalOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-7xl max-h-full overflow-auto bg-white dark:bg-gray-900 rounded-lg">
                <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Full View</h3>
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
                    src={selectedImage}
                    alt="Full View"
                    width={1600}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          )}
        
        </div>
      </div>
    </div>
  )
}
