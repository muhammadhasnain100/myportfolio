"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Eye, Code, Star, Zap, Rocket, Award } from "lucide-react"
import TechnologyLogos from "./TechnologyLogos"

interface ProjectsProps {
  isDarkMode: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Projects({ isDarkMode, scrollToSection }: ProjectsProps) {
  const projects = [
    {
      title: "Client-Handler Agent",
      description: "An intelligent WhatsApp agent that engages prospects in real time to discuss products and services, collects necessary details (e.g. budget, requirements), sends follow-up emails with proposals, and checks participants' free slots and auto-schedules Google Meet calls.",
      tech: ["MongoDB", "OpenAI", "FAISS", "LangChain", "LangGraph", "Twilio", "FastAPI", "Google Meet API"],
      category: "AI/ML",
      status: "Live Product",
      company: "LLC based company",
      github: null,
      live: null,
      icon: "🤖",
      color: isDarkMode ? "text-blue-400" : "text-blue-600"
    },
    {
      title: "Multi-Subject Tutor Chatbot",
      description: "A versatile chatbot platform with 30+ domain experts (English, Math, Sanskrit, Hindi, etc.) that accepts text, voice, and image inputs to answer questions, generates educational videos by scripting via OpenAI LLMs and animating images, and combines narration (via ElevenLabs) with visuals into a cohesive video lesson.",
      tech: ["AWS S3", "OpenAI", "LangChain", "FAISS", "ElevenLabs", "Custom Image-to-Video Pipelines"],
      category: "AI/ML",
      status: "Live Product",
      company: "BrainJEE Eduventures",
      github: null,
      live: "https://www.brainjeeeduventures.com/",
      icon: "🎓",
      color: isDarkMode ? "text-green-400" : "text-green-600"
    },
    {
      title: "AI-Based Call Analysis System",
      description: "A scalable service that ingests long or bulk audio recordings (via threaded processing), analyzes conversation flow to generate 'first-call' and 'follow-up' response suggestions, and streams real-time visualization of sentiment, topics, and key metrics.",
      tech: ["Python threading", "FastAPI", "React", "Google Gemini", "AWS S3"],
      category: "AI/ML",
      status: "Live Project",
      company: "Call Centers",
      github: null,
      live: null,
      icon: "📞",
      color: isDarkMode ? "text-purple-400" : "text-purple-600"
    },
    {
      title: "LongTrainer (Open-Source Library)",
      description: "A turnkey toolkit that converts any LLM checkpoint + prompt set into a production-ready chatbot in under 2 minutes, provides encryption/decryption, persistent chat storage (create/delete/update), and knowledge-base syncing, and supports on-the-fly web search and vision capabilities.",
      tech: ["OpenAI", "LangChain", "FAISS", "MongoDB"],
      category: "Open Source",
      status: "Live & Installable",
      company: "pip install longtrainer",
      github: "https://github.com/ENDEVSOLS/Long-Trainer",
      live: null,
      icon: "📦",
      color: isDarkMode ? "text-orange-400" : "text-orange-600"
    },
    {
      title: "Face-Recognition Attendance System",
      description: "An end-to-end liveness-verified attendance platform where users register by uploading a live video + Aadhaar card image, are authenticated via face/Aadhaar matching and liveness checks, and have attendance automatically logged only once per session (deduplication via FAISS).",
      tech: ["AWS Rekognition", "FAISS", "PyTorch", "MTCNN", "VGG16", "Google Gemini"],
      category: "AI/ML",
      status: "Private Confidential",
      company: "Confidential",
      github: null,
      live: null,
      icon: "👤",
      color: isDarkMode ? "text-pink-400" : "text-pink-600"
    },
    {
      title: "Audio-Beat Timestamp Model",
      description: "A custom deep-learning pipeline that trains on a 35 GB dataset to detect and timestamp musical beats and outputs precise beat-onset markers for each track.",
      tech: ["PyTorch", "Hugging Face Transformers", "Librosa", "Custom Time-Series Models"],
      category: "AI/ML",
      status: "Confidential",
      company: "Confidential",
      github: null,
      live: null,
      icon: "🎵",
      color: isDarkMode ? "text-indigo-400" : "text-indigo-600"
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return isDarkMode ? "bg-blue-600" : "bg-blue-500"
      case "Open Source":
        return isDarkMode ? "bg-green-600" : "bg-green-500"
      case "Web Dev":
        return isDarkMode ? "bg-purple-600" : "bg-purple-500"
      default:
        return isDarkMode ? "bg-gray-600" : "bg-gray-500"
    }
  }

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-3d-animation">
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
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Projects
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Showcasing my expertise in AI/ML, web development, and open-source contributions. 
            From live products to confidential solutions, each project demonstrates innovative problem-solving.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-hover animate-scale-in group ${
                isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"
              } border shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Icon Header */}
              <div className={`p-6 pb-0 ${isDarkMode ? "bg-gray-700/50" : "bg-gray-50/50"}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-4xl animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                    {project.icon}
                  </div>
                  <Badge className={`text-xs ${getCategoryColor(project.category)} text-white animate-bounce-in`}>
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 sm:p-8">
                <div className="mb-4">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base mb-4 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className={`w-4 h-4 ${project.color}`} />
                    <p className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Status: <span className="text-green-500">{project.status}</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className={`w-4 h-4 ${project.color}`} />
                    <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {project.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className={`text-xs transition-all duration-300 hover:scale-105 flex items-center space-x-1 group/tech ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                      } border`}
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      <TechnologyLogos technology={tech} size={16} />
                      <span className="group-hover/tech:scale-105 transition-transform duration-300">{tech}</span>
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      className={`flex-1 transition-all duration-300 hover:scale-105 hover-lift ${
                        isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                      } ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      asChild
                      size="sm"
                      className={`flex-1 transition-all duration-300 hover:scale-105 hover-lift ${
                        isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                      } text-white`}
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <Card
          className={`card-hover animate-bounce-in transform-gpu perspective-1000 ${
            isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"
          } border backdrop-blur-sm group hover:rotate-y-2 hover:scale-105 transition-all duration-500`}
          style={{ animationDelay: "800ms" }}
        >
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="text-4xl animate-float group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className={`text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:scale-105 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                100+ Projects Delivered
              </h3>
              <div className="text-4xl animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "1s" }}>🎯</div>
            </div>
            
            <p className={`text-lg mb-6 transition-all duration-300 group-hover:translate-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Ranging from Streamlit POCs and FastAPI backends to full MVPs and production deployments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className={`px-6 py-3 text-lg transition-all duration-300 hover:scale-105 hover-lift transform-gpu hover:rotate-y-1 ${
                  isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                <a href="https://github.com/muhammadhasnain100" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View My GitHub Profile
                </a>
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className={`px-6 py-3 text-lg transition-all duration-300 hover:scale-105 hover-lift transform-gpu hover:rotate-y-1 ${
                  isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700 border-gray-600" : "bg-white text-gray-900 hover:bg-gray-50 border-gray-300"
                } border`}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 