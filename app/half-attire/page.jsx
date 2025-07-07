"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Github, Monitor, Server, Database, Shield, Zap, Users, BookOpen, Trophy, Star, CreditCard, MessageSquare, BarChart3, Video, Smartphone, Settings, CheckCircle, ZoomIn, ZoomOut, Maximize, ShoppingCart, Store, DollarSign, Clock } from "lucide-react"
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
    { label: "Lines of Code", value: "25,000+" },
    { label: "Components", value: "85+" },
    { label: "API Endpoints", value: "45+" },
    { label: "DB Collections", value: "12" }
  ]

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc)
    setIsImageModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              HalfAttire
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Multi-Vendor E-Commerce Platform Case Study
            </h2>
            
            {/* Technology Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">Next.js 14</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">Node.js</Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">MongoDB</Badge>
              <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Express.js</Badge>
              <Badge variant="secondary" className="bg-teal-100 text-teal-800 hover:bg-teal-200">Tailwind CSS</Badge>
              <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200">Socket.io</Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Stripe</Badge>
  
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A comprehensive full-stack multi-vendor e-commerce platform developed in 2025, designed to connect multiple vendors 
              with customers through a unified marketplace. Specializing in fashion and lifestyle products, the platform provides 
              seamless shopping experiences with real-time features, secure payment processing, and advanced vendor management capabilities.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button
                className="gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("#", "_blank")}
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                className="gap-2 hover:bg-orange-50 dark:hover:bg-orange-950 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("#", "_blank")}
              >
                <Github className="w-4 h-4" />
                Source Code
              </Button>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mb-16">
            {/* User Experience Section */}
            <Card className="mb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-600">Customer Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Customers enjoy a comprehensive shopping experience with intuitive product browsing, advanced search and filtering, 
                      and seamless checkout processes. The platform features a responsive design with modern UI components, 
                      real-time chat with vendors, wishlist functionality, and multiple payment options including Stripe, PayPal, 
                      and Cash on Delivery for maximum convenience.
                    </p>
                  </div>
                  <div 
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-zoom-in"
                    onClick={() => openImageModal("/assets/halfattire/user.png")}
                  >
                    <Image
                      src="/assets/halfattire/user.png"
                      alt="Customer Dashboard"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vendor Experience Section */}
            <Card className="mb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">Vendor Management</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Vendors have access to a comprehensive dashboard for managing their store, products, orders, and customer communications. 
                      The platform provides detailed analytics, revenue tracking, event management for sales campaigns, 
                      and real-time messaging capabilities. Vendors can customize their store profiles, manage inventory, 
                      and track performance through intuitive charts and metrics.
                    </p>
                  </div>
                  <div 
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg order-1 md:order-2 cursor-zoom-in"
                    onClick={() => openImageModal("/assets/halfattire/seller.png")}
                  >
                    <Image
                      src="/assets/halfattire/seller.png"
                      alt="Vendor Dashboard"
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
                    <h3 className="text-2xl font-bold mb-4 text-purple-600">Admin Control Panel</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The administrative interface provides complete platform oversight with user management, vendor verification, 
                      order monitoring, and financial analytics. Admins can manage platform-wide settings, handle disputes, 
                      approve vendor applications, monitor transactions, and access comprehensive reporting tools. 
                      The system includes automated notifications, bulk operations, and advanced security controls.
                    </p>
                  </div>
                  <div 
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-zoom-in"
                    onClick={() => openImageModal("/assets/halfattire/admin.png")}
                  >
                    <Image
                      src="/assets/halfattire/admin.png"
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
                Comprehensive e-commerce functionality for multi-vendor marketplace
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Multi-Vendor Support</h3>
                      <p className="text-muted-foreground text-sm">Independent vendor stores with customizable profiles and dashboards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Real-Time Messaging</h3>
                      <p className="text-muted-foreground text-sm">Live chat between customers and vendors using Socket.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Multiple Payment Methods</h3>
                      <p className="text-muted-foreground text-sm">Stripe, Debit/Cradit Card, and Cash on Delivery integration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Advanced Cart System</h3>
                      <p className="text-muted-foreground text-sm">Persistent cart across sessions with wishlist functionality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Vendor Analytics</h3>
                      <p className="text-muted-foreground text-sm">Comprehensive sales analytics and revenue tracking</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Event-Based Sales</h3>
                      <p className="text-muted-foreground text-sm">Time-limited sales events with countdown timers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Role-Based Access</h3>
                      <p className="text-muted-foreground text-sm">Customer, Vendor, and Admin roles with granular permissions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Progressive Web App</h3>
                      <p className="text-muted-foreground text-sm">Mobile-first responsive design with PWA capabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Secure Authentication</h3>
                      <p className="text-muted-foreground text-sm">JWT-based security with Google OAuth integration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Performance Optimized</h3>
                      <p className="text-muted-foreground text-sm">Code splitting, lazy loading, and CDN integration</p>
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
