"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  User, 
  Code, 
  Brain, 
  Rocket, 
  Award, 
  BookOpen, 
  Lightbulb, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Building,
  Calendar,
  MapPin,
  Github,
  Search,
  GraduationCap,
  Briefcase
} from "lucide-react"

interface AboutProps {
  isDarkMode: boolean
}

export default function About({ isDarkMode }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const experiences = [
    {
      title: "AI Engineer & CTO",
      company: "Endevsols LLC",
      period: "2023 - 2024",
      description: "Leading AI development initiatives and serving as Chief Technology Officer, driving innovation in AI-powered solutions.",
      achievements: [
        "Leading AI development and technology strategy",
        "Managing technical teams and project delivery",
        "Architecting scalable AI solutions for enterprise clients",
        "Driving innovation in AI-powered business solutions"
      ],
      icon: Brain,
      color: isDarkMode ? "text-blue-400" : "text-blue-600",
      link: "https://endevsols.com/"
    },
    {
      title: "Product Designer & AI Expert",
      company: "Brahmandai",
      period: "2024 - 2025",
      description: "Specialized in product design and AI expertise, creating innovative solutions for enterprise applications.",
      achievements: [
        "Designed AI-powered product solutions",
        "Implemented advanced AI algorithms and models",
        "Collaborated with cross-functional teams",
        "Delivered cutting-edge AI applications"
      ],
      icon: Rocket,
      color: isDarkMode ? "text-green-400" : "text-green-600",
      link: "https://brahmandai.in/"
    },
    {
      title: "AI Expert & International Collaborator",
      company: "Freelance & International Projects",
      period: "2023 - 2025",
      description: "Collaborating with international clients and projects as an AI expert, delivering innovative solutions globally.",
      achievements: [
        "Collaborated with international clients worldwide",
        "Delivered AI solutions for diverse industries",
        "Provided expert consultation on AI implementations",
        "Contributed to global AI research initiatives"
      ],
      icon: Star,
      color: isDarkMode ? "text-purple-400" : "text-purple-600",
      link: null
    },
    {
      title: "AI Researcher & Open Source Contributor",
      company: "Research & Open Source",
      period: "2023 - 2025",
      description: "Currently working as an AI researcher and active open source contributor in the AI field.",
      achievements: [
        "Contributing to cutting-edge AI research projects",
        "Developing and maintaining open-source AI libraries",
        "Publishing research papers and technical articles",
        "Mentoring developers in AI/ML technologies"
      ],
      icon: Github,
      color: isDarkMode ? "text-orange-400" : "text-orange-600",
      link: null
    }
  ]

  const education = [
    {
      degree: "Bachelor in Artificial Intelligence",
      institution: "COMSATS University Islamabad",
      period: "2021 - 2025",
      location: "Islamabad, Pakistan",
      cgpa: "3.5 out of 4.0",
      description: "Specialized in Artificial Intelligence with focus on machine learning, deep learning, and AI systems.",
      achievements: [
        "CGPA: 3.5/4.0 (First Class Honours)",
        "Specialized in AI and Machine Learning",
        "Completed 100+ AI/ML projects",
        "Led AI research initiatives"
      ],
      icon: GraduationCap,
      color: isDarkMode ? "text-purple-400" : "text-purple-600"
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-3d-animation">
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            About Me
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Passionate AI Engineer and CTO specializing in AI development, research, and open-source contributions. 
            Building intelligent systems and driving innovation in artificial intelligence.
          </p>
        </div>

        {/* Vertical Story First, Then Education & Experience Side by Side */}
        <div className="space-y-12 perspective-1000">
          {/* Story Section - Full Width */}
          <div className="animate-slide-in-left transform-gpu" style={{ animationDelay: "200ms" }}>
            <Card
              className={`card-hover animate-scale-in transform-gpu perspective-1000 ${
                isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"
              } border backdrop-blur-sm group hover:shadow-2xl hover:rotate-y-1 hover:scale-105 transition-all duration-500`}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDarkMode ? "bg-purple-600" : "bg-purple-500"
                  }`}>
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    My AI Journey
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column - Story Part 1 */}
                  <div className="space-y-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                      <h4 className={`text-base font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        The Beginning (2021-2022)
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Started my AI journey in <strong className={isDarkMode ? "text-blue-400" : "text-blue-600"}>2021</strong> learning ML fundamentals. 
                        Created my first ML project in <strong className={isDarkMode ? "text-green-400" : "text-green-600"}>early 2022</strong>, then focused on deep learning with EEG data.
                      </p>
                    </div>
                    
                    <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                      <h4 className={`text-base font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        AI Transformers & LLMs (2023)
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        In <strong className={isDarkMode ? "text-orange-400" : "text-orange-600"}>early 2023</strong>, transitioned to AI transformers and full AI projects. 
                        By <strong className={isDarkMode ? "text-red-400" : "text-red-600"}>mid-2023</strong>, worked on LLM development, prompt engineering, and building chatbots.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column - Story Part 2 */}
                  <div className="space-y-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
                      <h4 className={`text-base font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Research & Development (Late 2023-2024)
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Started research projects in <strong className={isDarkMode ? "text-indigo-400" : "text-indigo-600"}>late 2023</strong>. 
                        By <strong className={isDarkMode ? "text-yellow-400" : "text-yellow-600"}>mid-2024</strong>, deployed AI agents and FastAPI backends for chatbots.
                      </p>
                    </div>
                    
                    <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
                      <h4 className={`text-base font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Full-Stack & Products (Late 2024-Present)
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Expanded to web development in <strong className={isDarkMode ? "text-emerald-400" : "text-emerald-600"}>late 2024</strong>. 
                        Currently building AI-powered products and POCs that solve real-world problems.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-6 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
                  <Target className={`w-5 h-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                  <span className={`text-sm font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                    Building intelligent systems that transform ideas into reality
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Education */}
            <div className="animate-slide-in-left transform-gpu" style={{ animationDelay: "800ms" }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"
                }`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className={`card-hover animate-scale-in transform-gpu perspective-1000 ${
                      isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"
                    } border backdrop-blur-sm group hover:shadow-2xl hover:rotate-y-1 hover:scale-105 transition-all duration-500`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8">
                      {/* Header Section */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:rotate-y-3 animate-float ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-100"
                          }`}>
                            <edu.icon className={`w-8 h-8 ${edu.color} transition-all duration-300 group-hover:scale-110`} />
                          </div>
                          <div>
                            <h4 className={`text-xl font-bold transition-all duration-300 group-hover:scale-105 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {edu.degree}
                            </h4>
                            <p className={`text-lg font-medium ${edu.color} transition-all duration-300 group-hover:translate-x-2 group-hover:scale-105`}>
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <div className={`px-4 py-2 rounded-full ${edu.color} bg-opacity-10 border ${edu.color} border-opacity-30 transition-all duration-300 group-hover:scale-105`}>
                          <p className={`text-sm font-bold ${edu.color}`}>
                            {edu.cgpa}
                          </p>
                        </div>
                      </div>
                      
                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 group/detail hover:translate-x-1 transition-all duration-300">
                          <Calendar className={`w-5 h-5 ${edu.color} transition-all duration-300 group-hover/detail:scale-110 group-hover/detail:rotate-6`} />
                          <div>
                            <p className={`text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Duration</p>
                            <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{edu.period}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 group/detail hover:translate-x-1 transition-all duration-300">
                          <MapPin className={`w-5 h-5 ${edu.color} transition-all duration-300 group-hover/detail:scale-110 group-hover/detail:rotate-6`} />
                          <div>
                            <p className={`text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Location</p>
                            <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{edu.location}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                        <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {edu.description}
                        </p>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          Key Achievements
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-center space-x-3 p-3 rounded-lg group/achievement hover:translate-x-2 hover:translate-y-1 transition-all duration-300"
                              style={{
                                background: isDarkMode 
                                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))' 
                                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'
                              }}
                            >
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover/achievement:scale-110 group-hover/achievement:rotate-12 ${
                                isDarkMode ? "bg-gray-700" : "bg-gray-100"
                              }`}>
                                <CheckCircle className={`w-4 h-4 ${edu.color}`} />
                              </div>
                              <span className={`text-sm font-medium transition-all duration-300 group-hover/achievement:font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right - Experience */}
            <div className="animate-slide-in-right transform-gpu" style={{ animationDelay: "1000ms" }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDarkMode ? "bg-green-600" : "bg-green-500"
                }`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Experience
                </h3>
              </div>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className={`card-hover animate-scale-in transform-gpu perspective-1000 ${
                      isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"
                    } border backdrop-blur-sm group hover:shadow-2xl hover:rotate-y-1 hover:scale-105 transition-all duration-500`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:rotate-y-3 animate-float ${
                          isDarkMode ? "bg-gray-700" : "bg-gray-100"
                        }`}>
                          <exp.icon className={`w-6 h-6 ${exp.color} transition-all duration-300 group-hover:scale-110`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2 animate-fade-in-up group-hover:translate-x-1 transition-all duration-300" style={{ animationDelay: "100ms" }}>
                            <h4 className={`text-lg font-bold transition-all duration-300 group-hover:scale-105 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {exp.title}
                            </h4>
                            <Star className={`w-4 h-4 ${exp.color} animate-pulse group-hover:rotate-12 transition-transform duration-300`} />
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-1 animate-fade-in-up group/company hover:translate-x-1 transition-all duration-300" style={{ animationDelay: "200ms" }}>
                            <Building className={`w-4 h-4 ${exp.color} transition-all duration-300 group-hover/company:scale-110 group-hover/company:rotate-6`} />
                            <p className={`text-base font-medium ${exp.color} transition-all duration-300 group-hover/company:translate-x-2 group-hover:company:scale-105`}>
                              {exp.company}
                            </p>
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-1 rounded transition-all duration-300 hover:scale-110 hover:rotate-12 hover:rotate-y-6 animate-bounce-in ${
                                  isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
                                }`}
                              >
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          
                          <p className={`text-sm mb-3 animate-fade-in-up transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} style={{ animationDelay: "300ms" }}>
                            {exp.period}
                          </p>
                          
                          <p className={`mb-4 leading-relaxed animate-fade-in-up transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} style={{ animationDelay: "400ms" }}>
                            {exp.description}
                          </p>
                          
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <div
                                key={achievementIndex}
                                className="flex items-center space-x-2 animate-fade-in-up group/achievement hover:translate-x-2 hover:translate-y-1 transition-all duration-300"
                                style={{ animationDelay: `${500 + achievementIndex * 100}ms` }}
                              >
                                <CheckCircle className={`w-4 h-4 ${exp.color} transition-all duration-300 group-hover/achievement:scale-110 group-hover/achievement:rotate-12`} />
                                <span className={`text-sm transition-all duration-300 group-hover/achievement:font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 