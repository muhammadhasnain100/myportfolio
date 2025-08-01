"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Code, Briefcase, GraduationCap, Sparkles, TrendingUp, Users, Zap, Award } from "lucide-react"
import TechnologyLogos from "./TechnologyLogos"

interface HeroProps {
  isDarkMode: boolean
  scrollToSection: (sectionId: string) => void
  downloadResume: () => void
}

export default function Hero({ isDarkMode, scrollToSection, downloadResume }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const circles: Array<{
      x: number
      y: number
      radius: number
      dx: number
      dy: number
      opacity: number
      color: string
    }> = []

    // Create floating circles
    for (let i = 0; i < 15; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1,
        color: isDarkMode ? "#3b82f6" : "#6366f1",
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circles.forEach((circle) => {
        // Update position
        circle.x += circle.dx
        circle.y += circle.dy

        // Bounce off edges
        if (circle.x < 0 || circle.x > canvas.width) circle.dx *= -1
        if (circle.y < 0 || circle.y > canvas.height) circle.dy *= -1

        // Draw circle
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${circle.color}${Math.floor(circle.opacity * 255).toString(16).padStart(2, "0")}`
        ctx.fill()

        // Draw connections
        circles.forEach((otherCircle) => {
          const distance = Math.sqrt(
            Math.pow(circle.x - otherCircle.x, 2) + Math.pow(circle.y - otherCircle.y, 2)
          )
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(circle.x, circle.y)
            ctx.lineTo(otherCircle.x, otherCircle.y)
            ctx.strokeStyle = `${circle.color}${Math.floor((circle.opacity * 0.3) * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isDarkMode, isClient])

  const technologies = [
    "Python", "React", "TensorFlow", "PyTorch", "JavaScript", "AWS", 
    "GCP", "Node.js", "Docker", "MongoDB", "HuggingFace", "GitHub"
  ]

  const experienceStats = [
    { 
      number: "2+", 
      label: "Years Experience", 
      icon: TrendingUp,
      color: isDarkMode ? "text-blue-400" : "text-blue-600",
      bgColor: isDarkMode ? "bg-blue-600/20" : "bg-blue-100",
      borderColor: isDarkMode ? "border-blue-500/30" : "border-blue-200",
      gradient: isDarkMode ? "from-blue-600 to-blue-700" : "from-blue-500 to-blue-600"
    },
    { 
      number: "100+", 
      label: "Projects Completed", 
      icon: Code,
      color: isDarkMode ? "text-green-400" : "text-green-600",
      bgColor: isDarkMode ? "bg-green-600/20" : "bg-green-100",
      borderColor: isDarkMode ? "border-green-500/30" : "border-green-200",
      gradient: isDarkMode ? "from-green-600 to-green-700" : "from-green-500 to-green-600"
    },
    { 
      number: "10+", 
      label: "AI Models Deployed", 
      icon: Zap,
      color: isDarkMode ? "text-purple-400" : "text-purple-600",
      bgColor: isDarkMode ? "bg-purple-600/20" : "bg-purple-100",
      borderColor: isDarkMode ? "border-purple-500/30" : "border-purple-200",
      gradient: isDarkMode ? "from-purple-600 to-purple-700" : "from-purple-500 to-purple-600"
    },
    { 
      number: "100%", 
      label: "Client Satisfaction", 
      icon: Award,
      color: isDarkMode ? "text-orange-400" : "text-orange-600",
      bgColor: isDarkMode ? "bg-orange-600/20" : "bg-orange-100",
      borderColor: isDarkMode ? "border-orange-500/30" : "border-orange-200",
      gradient: isDarkMode ? "from-orange-600 to-orange-700" : "from-orange-500 to-orange-600"
    },
  ]

  const services = [
    {
      icon: Code,
      title: "AI Development",
      description: "Building intelligent systems with machine learning, LLM agents, and deep learning technologies",
      color: isDarkMode ? "bg-blue-600" : "bg-blue-500",
      gradient: isDarkMode ? "from-blue-600 to-blue-700" : "from-blue-500 to-blue-600",
      features: ["Machine Learning", "LLM Agents", "Deep Learning", "AI Systems"],
      delay: 0
    },
    {
      icon: Briefcase,
      title: "Product Development",
      description: "Creating scalable B2B and B2C solutions with custom development for enterprise clients",
      color: isDarkMode ? "bg-orange-600" : "bg-orange-500",
      gradient: isDarkMode ? "from-orange-600 to-orange-700" : "from-orange-500 to-orange-600",
      features: ["B2B Solutions", "B2C Applications", "Enterprise Apps", "Custom Development"],
      delay: 200
    },
    {
      icon: GraduationCap,
      title: "Consulting",
      description: "Providing expert guidance on AI implementation, custom AI models, and research solutions",
      color: isDarkMode ? "bg-purple-600" : "bg-purple-500",
      gradient: isDarkMode ? "from-purple-600 to-purple-700" : "from-purple-500 to-purple-600",
      features: ["AI Strategy", "Model Development", "Research Solutions", "Expert Guidance"],
      delay: 400
    },
  ]

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-3d-animation">
      {/* 3D Background Elements */}
      <div className="bg-3d-grid"></div>
      <div className="bg-3d-wave"></div>
      
      {/* Floating 3D Shapes */}
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      
      {/* 3D Particles */}
      <div className="particle-3d"></div>
      <div className="particle-3d"></div>
      <div className="particle-3d"></div>
      <div className="particle-3d"></div>
      <div className="particle-3d"></div>
      <div className="particle-3d"></div>
      
      {/* Animated Background */}
      {isClient && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Title Section */}
          <div className="mb-12">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              Muhammad Hasnain
            </h1>
            
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 animate-fade-in-up animation-delay-200 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              AI Engineer & Product Developer
            </h2>
            
            <p className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Transforming Ideas Into Intelligent Solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <Button
              onClick={() => scrollToSection("projects")}
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover-lift"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={downloadResume}
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover-lift"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
            <Button
              asChild
              className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg bg-purple-600 hover:bg-purple-700 text-white hover-lift"
            >
              <a href="/resume">
                View Resume
              </a>
            </Button>
          </div>

          {/* Technologies */}
          <div className="mb-16 animate-fade-in-up animation-delay-800">
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Technologies
            </h3>
            
            {/* Moving tech banner */}
            <div className="overflow-hidden rounded-xl p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover-lift">
              <div className="flex animate-scroll-left space-x-6 whitespace-nowrap">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                      isDarkMode ? "bg-gray-800/50" : "bg-white/50"
                    } backdrop-blur-sm border ${
                      isDarkMode ? "border-gray-700" : "border-gray-200"
                    } shadow-sm hover:shadow-md`}
                  >
                    <TechnologyLogos technology={tech} size={20} />
                    <span className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 animate-fade-in-up ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Experience Highlights
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {experienceStats.map((stat, index) => (
                <Card
                  key={index}
                  className={`card-hover animate-bounce-in ${
                    isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"
                  } border backdrop-blur-sm text-center group overflow-hidden relative`}
                  style={{
                    animationDelay: `${(index + 1) * 200}ms`,
                  }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div 
                      className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                        isDarkMode ? "bg-gray-700/50" : "bg-gray-100/50"
                      } border ${stat.borderColor}`}
                    >
                      <stat.icon className={`w-6 h-6 ${stat.color} animate-float`} style={{ animationDelay: `${index * 0.5}s` }} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <p className={`text-sm font-medium transition-all duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {stat.label}
                    </p>
                    
                    {/* Hover effect line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 animate-fade-in-up ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Services (What I Do)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`card-hover animate-scale-in group overflow-hidden relative ${
                    isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"
                  } border backdrop-blur-sm`}
                  style={{
                    animationDelay: `${service.delay}ms`,
                  }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center ${service.color} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 transition-all duration-300 group-hover:scale-105 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-6 transition-all duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                            isDarkMode ? "bg-gray-700/50 text-gray-300" : "bg-gray-100/50 text-gray-600"
                          }`}
                          style={{ animationDelay: `${featureIndex * 100}ms` }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Hover effect border */}
                    <div className={`absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 group-hover:border-opacity-30 ${service.color.replace('bg-', 'border-')}`}></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 