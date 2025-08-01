"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Create a link to download the PDF file
    const link = document.createElement("a")
    link.href = "/hasnain_resume.pdf"
    link.download = "Muhammad_Hasnain_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Track active section on scroll
  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isClient])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-white via-blue-50 to-pink-50"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        downloadResume={downloadResume}
      />

      <main>
        <Hero
          isDarkMode={isDarkMode}
          scrollToSection={scrollToSection}
          downloadResume={downloadResume}
        />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
