"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Github, Download } from "lucide-react"

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
  activeSection: string
  scrollToSection: (sectionId: string) => void
  downloadResume: () => void
}

export default function Header({
  isDarkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection,
  downloadResume,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? `${isDarkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-md shadow-lg`
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer hover-lift" 
            onClick={() => scrollToSection("home")}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110 ${
                isDarkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              MH
            </div>
            <span
              className={`text-lg font-bold transition-all duration-300 group-hover:scale-105 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              M. Hasnain
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                  activeSection === item.id
                    ? isDarkMode
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-blue-500 text-white shadow-lg"
                    : isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-blue-400 opacity-20 animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="transition-all duration-300 hover:scale-105 rounded-lg hover-lift"
            >
              <a 
                href="https://github.com/muhammadhasnain100" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              onClick={downloadResume}
              variant="ghost"
              size="sm"
              className="transition-all duration-300 hover:scale-105 rounded-lg hover-lift"
            >
              <Download className="w-5 h-5 mr-2" />
              <span className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
              }`}>
                Download
              </span>
            </Button>
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="sm"
              className="transition-all duration-300 hover:scale-105 rounded-lg hover-lift"
            >
              <span className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
              }`}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="transition-all duration-300 rounded-lg hover-lift"
            >
              <span className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
              }`}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t animate-fade-in ${
              isDarkMode ? "border-gray-700 bg-gray-900/95" : "border-gray-200 bg-white/95"
            } backdrop-blur-md`}
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 stagger-item ${
                    activeSection === item.id
                      ? isDarkMode
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-blue-500 text-white shadow-lg"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="transition-all duration-300 rounded-lg hover-lift"
                >
                  <a 
                    href="https://github.com/muhammadhasnain100" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${
                      isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  onClick={downloadResume}
                  variant="ghost"
                  size="sm"
                  className="transition-all duration-300 rounded-lg hover-lift"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span className={`${
                    isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                  }`}>
                    Download
                  </span>
                </Button>
                <Button
                  onClick={toggleDarkMode}
                  variant="ghost"
                  size="sm"
                  className="transition-all duration-300 rounded-lg hover-lift"
                >
                  <span className={`${
                    isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                  }`}>
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 