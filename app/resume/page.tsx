"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode))
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/hasnain_resume.pdf"
    link.download = "Muhammad_Hasnain_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isClient) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-white via-blue-50 to-pink-50"
      }`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className={`mt-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Loading resume...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-white via-blue-50 to-pink-50"
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${
        isDarkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/95 border-gray-200"
      } border-b backdrop-blur-md shadow-lg`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className={`flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={downloadResume}
                className={`transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
                }`}
              >
                {isDarkMode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            }`}>
              Muhammad Hasnain
            </h1>
            <p className={`text-xl sm:text-2xl font-semibold mb-2 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              AI Engineer & Product Developer
            </p>
            <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Transforming ideas into intelligent, real-world solutions
            </p>
          </div>

          {/* PDF Viewer */}
          <div className={`rounded-lg shadow-2xl overflow-hidden ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
            <div className="aspect-[8.5/11] w-full">
              <iframe
                src="/hasnain_resume.pdf"
                className="w-full h-full"
                title="Muhammad Hasnain Resume"
              />
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            } border shadow-lg`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-black"
              }`}>
                Contact
              </h3>
              <div className={`space-y-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <p>📧 hasnainnaseer987@gmail.com</p>
                <p>📱 03231579019</p>
                <p>📍 Islamabad, Pakistan</p>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            } border shadow-lg`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-black"
              }`}>
                Education
              </h3>
              <div className={`space-y-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <p className="font-medium">Bachelor of Science in AI</p>
                <p>COMSATS University Islamabad</p>
                <p>2021 - 2025</p>
                <p>CGPA: 3.5</p>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            } border shadow-lg`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? "text-white" : "text-black"
              }`}>
                Experience
              </h3>
              <div className={`space-y-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <p className="font-medium">CTO - Endevsols LLC</p>
                <p>AI innovation & product development</p>
                <p className="font-medium mt-3">AI Engineer - BrahmandAI</p>
                <p>AI solutions & product design</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={downloadResume}
                className={`px-8 py-4 text-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Link href="/#contact">
                <Button
                  className={`px-8 py-4 text-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-white text-black hover:bg-gray-50"
                  } border ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 