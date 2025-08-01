"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, ExternalLink, Code, Users, Globe } from "lucide-react"

interface FooterProps {
  isDarkMode: boolean
}

export default function Footer({ isDarkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className={`py-12 sm:py-16 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900/50 border-t border-gray-800" : "bg-gray-50/50 border-t border-gray-200"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6 group">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  isDarkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
                } shadow-lg`}
              >
                MH
              </div>
              <span className={`text-2xl font-bold transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                Muhammad Hasnain
              </span>
            </div>
            <p className={`text-base leading-relaxed mb-6 animate-fade-in-up animation-delay-200 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              AI Engineer & Product Developer passionate about creating intelligent solutions that transform ideas into
              reality. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/muhammadhasnain100",
                  bgColor: isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100",
                  textColor: isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black",
                  delay: 0
                },
                {
                  icon: Mail,
                  href: "mailto:hasnainnaseer987@gmail.com",
                  bgColor: isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100",
                  textColor: isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black",
                  delay: 100
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover-lift shadow-lg ${social.bgColor} ${social.textColor} animate-bounce-in`}
                  style={{ animationDelay: `${social.delay}ms` }}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="flex items-center space-x-2 mb-6">
              <ExternalLink className={`w-5 h-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
              <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <li key={item} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm transition-all duration-300 hover:scale-105 flex items-center space-x-2 group ${
                      isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <div className={`w-1 h-1 rounded-full transition-all duration-300 group-hover:scale-150 ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}></div>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex items-center space-x-2 mb-6">
              <Code className={`w-5 h-5 ${isDarkMode ? "text-green-400" : "text-green-600"}`} />
              <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>
                Services
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "AI Development", icon: "🤖" },
                { name: "Product Development", icon: "🚀" },
                { name: "Consulting", icon: "💡" },
                { name: "Open Source", icon: "📦" }
              ].map((service, index) => (
                <li key={service.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`text-sm transition-all duration-300 flex items-center space-x-2 group ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    <span>{service.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-12 pt-8 border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          } text-center animate-fade-in-up animation-delay-800`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2025 Muhammad Hasnain. All rights reserved. Made by Muhammad Hasnain
            </p>
            
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover-lift shadow-lg ${
                isDarkMode 
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 