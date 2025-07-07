"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Database,
  Server,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  GraduationCap,
  Briefcase,
  Trophy,
  Lock,
  Phone,
  Award,
  Calendar,
  Smartphone,
  Monitor,
  Settings,
  Search,
  Utensils,
  Plane,
  Film,
  Home,
  ArrowUp,
  Send,
  Loader2,
  FileText,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
)

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCVModal, setShowCVModal] = useState(false)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null)
  const { toast } = useToast()

  const router = useRouter()

  const handleCaseStudyClick = (projectTitle: string) => {
    router.push(`/case-studies/${projectTitle.toLowerCase().replace(/ /g, '-')}`)
  }

  const CaseStudyDialog = () => {
    if (!selectedCaseStudy) return null
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-2xl w-full mx-4">
          <h2 className="text-2xl font-bold mb-4">{selectedCaseStudy} - Case Study</h2>
          <p>It is a case study of this project</p>
          <Button 
            className="mt-4" 
            onClick={() => setSelectedCaseStudy(null)}
          >
            Close
          </Button>
        </div>
      </div>
    )
  }

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Docker",
    "AWS",
    "React Native",
    "C/C++",
  ]

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building visually appealing and responsive user interfaces that ensure smooth and engaging interactions.",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      description: "Creating secure, scalable, and efficient server-side systems to support complex web applications.",
      icon: Server,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mobile App Development",
      description:
        "Developing high-performance mobile applications to ensure seamless user experiences across all platforms.",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Database Management",
      description:
        "Managing and optimizing databases to ensure efficient data storage, retrieval, and reliability for your applications.",
      icon: Database,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "API Integration",
      description: "Integrating APIs to enhance system capabilities and connect with third-party services seamlessly.",
      icon: Search,
      color: "from-teal-500 to-blue-500",
    },
    {
      title: "Custom Solutions",
      description:
        "Developing tailored web solutions to meet unique business needs, ensuring they align with your objectives.",
      icon: Settings,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const projects = [
    {
      title: "Horizon Impact Fund Managers",
      description:
        "Built a paid client project with advanced authentication, 2FA security, Redis caching, and RTK Query for optimal performance.",
      tech: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "RTK Query"],
      image: "assets/horizon.png",
      demo: "https://www.horizonimpactfundmanagers.com/",
      source: "https://github.com/im-shafiqurrehman/HorizonImpactFundManagers",
      isPaid: true,
      featured: true,
      date: "March 2025",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Developed a paid full-stack e-commerce application with comprehensive authentication and Redux state management.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      image: "assets/multivendor.png",
      demo: "https://www.halfattire.com/",
      source: null,  // Keep it private
      isPaid: true,
      featured: true,
      date: "April – July 2025",
      caseStudy: true
    },
    {
      title: "Learning Management System",
      description:
        "Industry-level LMS with authentication, Redis caching, and RTK state management for optimal performance.",
      tech: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "RTK Query"],
      image: "assets/lms.png",
      demo: "https://e-learning-lms-frontend-theta.vercel.app/",
      source: "https://github.com/im-shafiqurrehman/E-LEARNING_LMS",
      isPaid: false,
      featured: true,
      date: "Jan – Feb 2025",
      caseStudy: true
    },
    {
      title: "Real Estate Platform",
      description:
        "Real estate site with property listings, user authentication, and advanced filters for seamless property search.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      image: "assets/estate.png",
      demo: "https://real-estate-mern-frontend-pied.vercel.app/",
      source: "https://github.com/im-shafiqurrehman/RealEstate-Mern",
      isPaid: false,
      featured: true,
      date: "August 2024",
      icon: Home,
    },
    {
      title: "Travel Website",
      description:
        "Fully functional multi-page travel website with seamless performance using React JS and modern design.",
      tech: ["React", "JavaScript", "CSS", "HTML"],
      image: "assets/travel.png",
      demo: "https://traveltraverse.netlify.app/",
      source: "https://github.com/im-shafiqurrehman/React-travel-website",
      isPaid: false,
      featured: true,
      date: "2024",
      icon: Plane,
    },
    {
      title: "Movix Website",
      description:
        "Movies search Multi-Page site with advanced UI and API integrations using React JS for movie enthusiasts.",
      tech: ["React", "JavaScript", "API Integration", "CSS"],
      image: "assets/movie.png",
      demo: "https://665d569b77ed45078128f057--movix-millions-movies.netlify.app/",
      source: "https://github.com/im-shafiqurrehman/Movix",
      isPaid: false,
      featured: true,
      date: "2024",
      icon: Film,
    },
    {
      title: "Food Website",
      description:
        "Food ordering application featuring a user-friendly interface and secure payments for restaurant businesses.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "assets/food.png",
      demo: "https://main--swiftbite.netlify.app/",
      source: "https://github.com/im-shafiqurrehman/React-Marco-website",
      isPaid: false,
      featured: false,
      date: "2024",
      icon: Utensils,
    },
    {
      title: "Portfolio Project",
      description: "Fully Functional Portfolio Website Using React JS",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "assets/smith.png",
      demo: "https://main--smithdesigns.netlify.app/",
      source: "https://github.com/im-shafiqurrehman/barber-shop-project",
      isPaid: false,
      featured: false,
      date: "2024",
    },
    {
      title: "E-Commerce Store",
      description: "Full-featured e-commerce platform with modern UI and shopping cart functionality.",
      tech: ["HTML", "CSS", "JavaScript", "React JS"],
      image: "assets/store.png",
      demo: "https://main--easybuyhub.netlify.app/",
      source: "https://github.com/im-shafiqurrehman/ShopWare",
      isPaid: false,
      featured: false,
      date: "2024",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "53de5187-73e5-4778-9ec3-cd61c3a95e1e",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon!",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Failed to Send Message 😞",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleViewCV = () => {
    setShowCVModal(true)
  }

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv/Shafiq_Ur_Rehman_CV.pdf" // Path to your CV file
    link.download = "Shafiq_Ur_Rehman_CV.pdf" // Downloaded file name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show success toast
    toast({
      title: "CV Downloaded Successfully! 📄",
      description: "Thank you for downloading my CV. Let's connect!",
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 text-foreground transition-all duration-500">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-green-400/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-1500"></div>

        {/* Moving gradient lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse delay-1000"></div>
      </div>

      {/* CV Modal */}
      {showCVModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-2xl">My CV/Resume</CardTitle>
                <CardDescription>Shafiq Ur Rehman - Software Engineer & MERN Stack Developer</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCVModal(false)}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              {/* PDF Viewer */}
              <div className="w-full h-[60vh] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <iframe
                  src="/cv/Shafiq_Ur_Rehman_CV.pdf"
                  className="w-full h-full border-0"
                  title="Shafiq Ur Rehman CV"
                />
              </div>

              {/* Download Section */}
              <div className="p-6 border-t bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-lg mb-1">Download My CV</h3>
                    <p className="text-muted-foreground text-sm">Get the latest version of my resume in PDF format</p>
                  </div>
                  <Button
                    onClick={handleDownloadCV}
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 animate-bounce" />
                    Download CV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300 animate-in slide-in-from-top">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Shafiq Ur Rehman
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleViewCV}
                className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
              >
                <FileText className="w-4 h-4 animate-pulse" />
                View CV
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:scale-110 transform transition-all duration-300 hover:rotate-180"
              >
                {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:scale-110 transform transition-all duration-300 hover:rotate-180"
              >
                {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:scale-110 transform transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  Contact
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleViewCV}
                  className="gap-2 w-fit hover:scale-105 transform transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  View CV
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-in fade-in-50 duration-1000">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-pulse hover:scale-110 transform transition-all duration-500 hover:rotate-3">
                <img src="assets/shafiq.png" alt="" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Shafiq Ur Rehman
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
                Software Engineer & MERN Stack Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
                Computer Science undergraduate at UE'27 building scalable web applications. Headstart AI Fellow with
                200+ LeetCode problems solved and expertise in full-stack development.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-800">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-pulse"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-4 h-4 animate-bounce" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open("https://github.com/im-shafiqurrehman", "_blank")}
              >
                <Github className="w-4 h-4 hover:rotate-12 transition-transform duration-300" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open("https://www.linkedin.com/in/im-shafiqurrehman/", "_blank")}
              >
                <Linkedin className="w-4 h-4 hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
              {skills.slice(0, 11).map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm hover:scale-110 transform transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:rotate-1 animate-in fade-in "
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-top duration-700">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 transform border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 animate-in slide-in-from-left  delay-200 hover:-rotate-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600 animate-bounce" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bachelor of Computer Science</h4>
                    <p className="text-muted-foreground">University of Education (UE'27)</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Aug 2023 – Aug 2027
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                      Coursework: DSA, OOP in C++, Software Engineering, AI, Networking, MySQL
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 transform border-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/50 dark:to-blue-950/50 animate-in slide-in-from-right  delay-400 hover:rotate-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-600 animate-pulse" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Software Engineering Fellow</h4>
                    <p className="text-muted-foreground">Headstart AI (Remote)</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      July 2024 - November 2024
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      Developed 5 projects, completed technical interviews, tackled DSA challenges
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 transform border-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 animate-in slide-in-from-bottom  delay-200 hover:rotate-2">
                <CardContent className="pt-6">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-600 animate-bounce" />
                  <h3 className="text-2xl font-bold mb-2">200+</h3>
                  <p className="text-muted-foreground">LeetCode Problems</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 transform border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 animate-in slide-in-from-bottom  delay-400 hover:-rotate-2">
                <CardContent className="pt-6">
                  <Code className="w-12 h-12 mx-auto mb-4 text-purple-600 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">CodeForces Problems</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all  hover:scale-105 transform border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 animate-in slide-in-from-bottom duration-700 delay-600 hover:rotate-2">
                <CardContent className="pt-6">
                  <Globe
                    className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <h3 className="text-2xl font-bold mb-2">MERN</h3>
                  <p className="text-muted-foreground">Stack Expert</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all  hover:scale-105 transform border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 animate-in slide-in-from-bottom duration-700 delay-800 hover:-rotate-2">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 mx-auto mb-4 text-green-600 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">3rd</h3>
                  <p className="text-muted-foreground">UE Code Quest</p>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/50 animate-in slide-in-from-bottom  delay-1000 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="animate-in slide-in-from-left duration-500">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="animate-in slide-in-from-left duration-500 delay-200">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: "2s" }} />
                      Frontend
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>React, Next.js, React Native</p>
                      <p>JavaScript, TypeScript</p>
                      <p>HTML, CSS, Tailwind CSS</p>
                    </div>
                  </div>
                  <div className="animate-in slide-in-from-left duration-500 delay-400">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Server className="w-4 h-4 text-green-600 animate-pulse" />
                      Backend
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Node.js, Express.js</p>
                      <p>REST APIs, RTK Query</p>
                      <p>Authentication, Redis</p>
                    </div>
                  </div>
                  <div className="animate-in slide-in-from-left duration-500 delay-600">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4 text-purple-600 animate-bounce" />
                      Database & Cloud
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>MongoDB, PostgreSQL, MySQL</p>
                      <p>Firebase, Supabase</p>
                      <p>AWS, Cloudinary, Docker</p>
                    </div>
                  </div>
                  <div className="animate-in slide-in-from-left duration-500 delay-800">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-orange-600 animate-pulse" />
                      Programming
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>C++, Data Structures</p>
                      <p>Algorithms, OOP</p>
                      <p>Competitive Programming</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-top duration-700">
              Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in slide-in-from-top duration-700 delay-200">
              I offer comprehensive development services to help bring your ideas to life with modern technologies and
              best practices.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden animate-in slide-in-from-bottom hover:-rotate-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12 animate-pulse`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-top duration-700">
              Featured Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in slide-in-from-top duration-700 delay-200">
              Here are some of my recent projects showcasing expertise in full-stack development, from enterprise
              solutions to learning platforms.
            </p>

            {/* Featured Projects */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 animate-in slide-in-from-left duration-500">Featured Work</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 overflow-hidden animate-in slide-in-from-bottom  hover:rotate-1"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500 group-hover:rotate-1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {project.icon && (
                          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                            <project.icon className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          {project.isPaid && (
                            <Badge
                              variant="secondary"
                              className="gap-1 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 animate-pulse"
                            >
                              <Lock className="w-3 h-3" />
                              Paid
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.date}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-110 animate-in fade-in "
                              style={{ animationDelay: `${techIndex * 50}ms` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                              onClick={() => window.open(project.demo!, "_blank")}
                            >
                              <Globe className="w-3 h-3" />
                              Free Demo
                            </Button>
                            {project.source && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                                onClick={() => window.open(project.source!, "_blank")}
                              >
                                <Github className="w-3 h-3 hover:rotate-12 transition-transform duration-300" />
                                Source Code
                              </Button>
                            )}
                            {project.isPaid && !project.source && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 hover:bg-yellow-50 dark:hover:bg-yellow-950 hover:scale-105 transition-all duration-300 border-yellow-300 text-yellow-700 dark:text-yellow-300"
                                onClick={() => window.open("mailto:shafiqurrehmanbscs2022@gmail.com?subject=Paid Source Code Request&body=Hello! I'm interested in purchasing the source code for the " + project.title + " project.", "_blank")}
                              >
                                <Lock className="w-3 h-3" />
                                Paid Source
                              </Button>
                            )}
                          </div>
                          {project.caseStudy && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                              onClick={() => {
                                if (project.title === "E-Commerce Platform") {
                                  router.push("/half-attire")
                                } else if (project.title === "Learning Management System") {
                                  router.push("/learning-management-system")
                                } else {
                                  router.push(`/${project.title.toLowerCase().replace(/ /g, '-')}-case-study`)
                                }
                              }}
                            >
                              <FileText className="w-3 h-3" />
                              View Case Study
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            <Separator className="my-8 animate-in slide-in-from-left duration-500" />

            {/* Other Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 animate-in slide-in-from-left duration-500">Other Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => !project.featured)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden animate-in slide-in-from-bottom hover:-rotate-1"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {project.icon && (
                          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <project.icon className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          {project.isPaid && (
                            <Badge variant="secondary" className="gap-1">
                              <Lock className="w-3 h-3" />
                              Paid
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.date}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-110"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                            onClick={() => window.open(project.demo!, "_blank")}
                          >
                            <Globe className="w-3 h-3" />
                            Free Demo
                          </Button>
                          {project.source ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                              onClick={() => window.open(project.source!, "_blank")}
                            >
                              <Github className="w-3 h-3 hover:rotate-12 transition-transform duration-300" />
                              Source Code
                            </Button>
                          ) : project.isPaid ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 hover:bg-yellow-50 dark:hover:bg-yellow-950 hover:scale-105 transition-all duration-300 border-yellow-300 text-yellow-700 dark:text-yellow-300"
                              onClick={() => window.open("mailto:shafiqurrehmanbscs2022@gmail.com?subject=Paid Source Code Request&body=Hello! I'm interested in purchasing the source code for the " + project.title + " project.", "_blank")}
                            >
                              <Lock className="w-3 h-3" />
                              Paid Source
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" disabled className="gap-2">
                              <Lock className="w-3 h-3" />
                              Private
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>


      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-top duration-700">
              Contact Me
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-in slide-in-from-top duration-700 delay-200">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life with cutting-edge
              technology and innovative solutions.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="animate-in slide-in-from-left duration-700 delay-400">
                <h3 className="text-xl md:text-2xl font-semibold mb-6">Let's Work Together</h3>
                <p className="text-muted-foreground mb-8 text-sm md:text-base">
                  I'm always open to discussing new opportunities, collaborations, and exciting projects. Whether you
                  need a full-stack developer or want to contribute to open-source, let's connect!
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-sm md:text-base">Email</h4>
                      <p className="text-muted-foreground text-xs md:text-sm break-all">
                        shafiqurrehmanbscs2022@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-sm md:text-base">Phone</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">+92 326 4139439</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-sm md:text-base">Location</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <h4 className="font-semibold mb-4 text-sm md:text-base">Follow Me</h4>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 transform hover:scale-105 transition-all duration-300 text-xs md:text-sm"
                      onClick={() => window.open("https://github.com/im-shafiqurrehman", "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 transform hover:scale-105 transition-all duration-300 text-xs md:text-sm"
                      onClick={() => window.open("https://www.linkedin.com/in/im-shafiqurrehman/", "_blank")}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 transform hover:scale-105 transition-all duration-300 text-xs md:text-sm"
                      onClick={() => window.open("https://leetcode.com/u/im-shafiqurrehman/", "_blank")}
                    >
                      <Code className="w-4 h-4" />
                      LeetCode
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="animate-in slide-in-from-right delay-600 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl">Send Me a Message</CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs md:text-sm">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:scale-105 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs md:text-sm">
                          Your Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:scale-105 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs md:text-sm">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Project Discussion"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:scale-105 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs md:text-sm">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:scale-105 resize-none text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 md:w-5 md:h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* WhatsApp Button */}
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 transition-all  animate-none group relative overflow-hidden"
          onClick={() => window.open("https://wa.me/923264139439", "_blank")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          <WhatsAppIcon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
        </Button>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            size="lg"
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 animate-in slide-in-from-bottom-2 group relative overflow-hidden"
            onClick={scrollToTop}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <ArrowUp className="w-8 h-8 text-white relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />

            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping delay-500"></div>
          </Button>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 border-t bg-background/50 backdrop-blur-sm animate-in slide-in-from-bottom duration-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Shafiq Ur Rehman. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {selectedCaseStudy && <CaseStudyDialog />}
    </div>
  )
}
