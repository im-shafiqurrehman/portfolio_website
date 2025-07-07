"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Mail, ShoppingCart, Server, Database, Shield, Zap, Users, CreditCard, Trophy, Star, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function EcommerceCaseStudy() {
  const router = useRouter()

  const features = [
    {
      icon: ShoppingCart,
      title: "Shopping Cart",
      description: "Advanced cart functionality with quantity management and real-time updates"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user authentication and profile management system"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure Stripe payment processing with multiple payment methods"
    },
    {
      icon: Shield,
      title: "Security",
      description: "JWT authentication, data encryption, and secure API endpoints"
    },
    {
      icon: Database,
      title: "Product Management",
      description: "Complete product catalog with categories, filters, and search functionality"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed with Redux state management and lazy loading"
    }
  ]

  const techStack = [
    { name: "Next.js", type: "Frontend Framework", color: "bg-blue-500" },
    { name: "Redux", type: "State Management", color: "bg-purple-500" },
    { name: "Node.js", type: "Backend Runtime", color: "bg-green-500" },
    { name: "Express.js", type: "Web Framework", color: "bg-gray-600" },
    { name: "MongoDB", type: "Database", color: "bg-green-600" },
    { name: "Stripe", type: "Payment Processing", color: "bg-blue-600" }
  ]

  const handlePaidSourceRequest = () => {
    window.open("mailto:shafiqurrehmanbscs2022@gmail.com?subject=Paid Source Code Request - E-Commerce Platform&body=Hello! I'm interested in purchasing the source code for the E-Commerce Platform project. Could you please provide more details about pricing and what's included?", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              E-Commerce Platform
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive full-stack e-commerce solution with advanced authentication, Redux state management, and secure Stripe payment integration.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button
                className="gap-2 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://www.halfattire.com/", "_blank")}
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                className="gap-2 hover:bg-yellow-50 dark:hover:bg-yellow-950 hover:scale-105 transition-all duration-300 border-yellow-300 text-yellow-700 dark:text-yellow-300"
                onClick={handlePaidSourceRequest}
              >
                <Lock className="w-4 h-4" />
                Paid Source Code
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12 relative">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/multivendor.png"
                alt="E-Commerce Platform"
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
                Enterprise-grade features for modern e-commerce
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
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
                Modern technologies for scalable e-commerce solutions
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
                  <ShoppingCart className="w-5 h-5" />
                  E-Commerce Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Complete product catalog management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Advanced shopping cart with quantity controls
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    User wishlist and favorites functionality
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Product search and filtering system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Order management and tracking
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
                    RESTful API design with Express.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    MongoDB for flexible data storage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    JWT authentication and authorization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Stripe payment processing integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Email notifications and order confirmations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Business Impact */}
          <Card className="mb-12 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/50 dark:to-pink-950/50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Business Impact</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <p className="text-muted-foreground">Secure Transactions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
                    <p className="text-muted-foreground">Online Availability</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Mobile</div>
                    <p className="text-muted-foreground">Responsive Design</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Status */}
          <Card className="mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4">
                Project Status
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Development Period: April - July 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 dark:text-green-300 font-medium">Successfully Deployed</span>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  This is a paid client project that's currently live and serving customers. The source code is available for purchase for educational and commercial purposes.
                </p>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="gap-2 hover:bg-yellow-50 dark:hover:bg-yellow-950 hover:scale-105 transition-all duration-300 border-yellow-300 text-yellow-700 dark:text-yellow-300"
                    onClick={handlePaidSourceRequest}
                  >
                    <Mail className="w-4 h-4" />
                    Request Source Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}