"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Loader2, Phone, Mail, MapPin, Github, Linkedin, Send, MessageSquare, User, Calendar } from "lucide-react"

interface ContactProps {
  isDarkMode: boolean
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [state, handleSubmit] = useForm("mkgzzqby")

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        {/* Success Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card
            className={`${
              isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"
            } border shadow-lg max-w-2xl mx-auto backdrop-blur-sm animate-bounce-in`}
          >
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-checkmark shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className={`text-3xl font-bold mb-4 animate-fade-in-up ${isDarkMode ? "text-white" : "text-black"}`}>
                Message Sent Successfully!
              </h2>
              <p className={`text-lg mb-8 animate-fade-in-up animation-delay-200 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className={`px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover-lift ${
                  isDarkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-3d-animation">
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
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center animate-fade-in-up ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg sm:text-xl text-center mb-12 sm:mb-16 animate-fade-in-up animation-delay-200 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Ready to turn your ideas into intelligent solutions? Let's talk!
          </p>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <Card
              className={`card-hover animate-slide-in-left ${
                isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"
              } border shadow-lg backdrop-blur-sm`}
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDarkMode ? "bg-blue-600" : "bg-blue-500"
                  }`}>
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
                    Contact Information
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "03231579019",
                      color: isDarkMode ? "bg-blue-600" : "bg-blue-500",
                      delay: 0
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hasnainnaseer987@gmail.com",
                      color: isDarkMode ? "bg-pink-600" : "bg-pink-500",
                      delay: 100
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Islamabad, Pakistan",
                      color: isDarkMode ? "bg-purple-600" : "bg-purple-500",
                      delay: 200
                    }
                  ].map((contact, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 group hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg p-3 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${contact.delay}ms` }}
                    >
                      <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                          {contact.label}
                        </p>
                        <p className={`transition-all duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-8 pt-8 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
                  <h4 className={`text-lg sm:text-xl font-bold mb-4 animate-fade-in-up ${isDarkMode ? "text-white" : "text-black"}`}>
                    Social Links
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/muhammadhasnain100",
                        bgColor: "bg-gray-800 hover:bg-gray-700",
                        delay: 0
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/muhammad-hasnain-b4639a275/",
                        bgColor: "bg-blue-600 hover:bg-blue-700",
                        delay: 100
                      }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 ${social.bgColor} rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover-lift shadow-lg animate-bounce-in`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ animationDelay: `${social.delay}ms` }}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card
              className={`card-hover animate-slide-in-right ${
                isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"
              } border shadow-lg backdrop-blur-sm`}
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDarkMode ? "bg-green-600" : "bg-green-500"
                  }`}>
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
                    Send Message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    {
                      id: "name",
                      label: "Name *",
                      type: "text",
                      placeholder: "Your name",
                      icon: User,
                      required: true
                    },
                    {
                      id: "email",
                      label: "Email Address *",
                      type: "email",
                      placeholder: "your@email.com",
                      icon: Mail,
                      required: true
                    },
                    {
                      id: "subject",
                      label: "Subject",
                      type: "text",
                      placeholder: "Project inquiry, consultation, etc.",
                      icon: MessageSquare,
                      required: false
                    }
                  ].map((field, index) => (
                    <div key={field.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <label
                        htmlFor={field.id}
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {field.label}
                      </label>
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}>
                          <field.icon className="w-5 h-5" />
                        </div>
                        <input
                          id={field.id}
                          type={field.type}
                          name={field.id}
                          required={field.required}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 ${
                            isDarkMode
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-white border-gray-300 text-black placeholder-gray-500"
                          }`}
                          placeholder={field.placeholder}
                        />
                      </div>
                      <ValidationError prefix={field.label.split(' ')[0]} field={field.id} errors={state.errors} />
                    </div>
                  ))}

                  <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                    <label
                      htmlFor="project-type"
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 ${
                        isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
                      }`}
                    >
                      <option value="">Select project type</option>
                      <option value="ai-ml">AI/ML Development</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    <ValidationError prefix="Project Type" field="project-type" errors={state.errors} />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-black placeholder-gray-500"
                      }`}
                      placeholder="Tell me about your project, requirements, timeline, budget, etc."
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover-lift ${
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    } disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up`}
                    style={{ animationDelay: "500ms" }}
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg animate-fade-in-up">
                      <p className="text-red-700 text-sm">There was an error sending your message. Please try again.</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 