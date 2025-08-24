'use client'

import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import {
  Code,
  Smartphone,
  Brain,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ChevronUp,
  Menu,
  X
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 300)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      color: "border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/20"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/20"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Solutions",
      description: "Intelligent automation and AI-powered solutions to streamline your business processes.",
      color: "border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/20"
    }
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with AI-powered recommendations",
      image: "/project1.jpg",
      category: "Web Development"
    },
    {
      title: "Health & Fitness App",
      description: "Cross-platform mobile app with real-time tracking",
      image: "/project2.jpg",
      category: "Mobile Development"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent customer support automation system",
      image: "/project3.jpg",
      category: "AI Solutions"
    }
  ]

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-foreground">SoftwareHouse</h2>
          <p className="text-muted-foreground">Loading amazing things...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
             {/* Ultra Modern Header */}
       <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
         isScrolled 
           ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-lg' 
           : 'bg-black/20 backdrop-blur-2xl border-b border-white/10'
       }`}>
         <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
           {/* Elegant Logo */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex items-center space-x-3 group cursor-pointer"
             onClick={() => scrollToSection('home')}
           >
             <motion.div 
               className="relative w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center shadow-md"
               whileHover={{ 
                 scale: 1.05,
                 boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
               }}
               transition={{ duration: 0.3 }}
             >
               <Code className="w-5 h-5 text-white dark:text-gray-900" />
             </motion.div>
             <div className="flex flex-col">
               <motion.span 
                 className={`text-xl font-bold transition-all duration-500 ${
                   isScrolled 
                     ? 'text-gray-900' 
                     : 'text-white'
                 }`}
                 whileHover={{ scale: 1.02 }}
               >
                 SoftwareHouse
               </motion.span>
               <motion.div 
                 className="h-0.5 bg-gray-400 dark:bg-gray-600 rounded-full"
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ delay: 0.5, duration: 0.8 }}
               />
             </div>
           </motion.div>
           
           {/* Clean Navigation Menu */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="hidden md:flex items-center space-x-1"
           >
             {[
               { href: "home", label: "Home" },
               { href: "about", label: "About" },
               { href: "services", label: "Services" },
               { href: "portfolio", label: "Portfolio" },
               { href: "contact", label: "Contact" }
             ].map((item, index) => (
               <motion.a
                 key={item.href}
                 onClick={() => scrollToSection(item.href)}
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                 className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group rounded-lg cursor-pointer ${
                   isScrolled 
                     ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                     : 'text-white/90 hover:text-white hover:bg-white/10'
                 } ${activeSection === item.href ? 'text-emerald-600 dark:text-emerald-400' : ''}`}
                 whileHover={{ 
                   scale: 1.02,
                   y: -1
                 }}
                 whileTap={{ scale: 0.98 }}
               >
                 <span className="relative z-10">
                   {item.label}
                 </span>
                 <motion.div
                   className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 rounded-full ${
                     activeSection === item.href ? 'w-full' : 'w-0'
                   }`}
                   initial={{ width: 0 }}
                   animate={{ width: activeSection === item.href ? "100%" : "0" }}
                   transition={{ duration: 0.3 }}
                 />
               </motion.a>
             ))}
             
             {/* Elegant CTA Button */}
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.8, duration: 0.6 }}
               className="ml-4"
             >
               <Button
                 size="sm"
                 className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border ${
                   isScrolled 
                     ? 'bg-gray-900 text-white hover:bg-gray-800 border-gray-900' 
                     : 'bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm'
                 }`}
                 whileHover={{ 
                   scale: 1.02,
                   y: -1
                 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={() => scrollToSection('contact')}
               >
                 Get Started
               </Button>
             </motion.div>
           </motion.div>
           
           {/* Clean Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className={`md:hidden relative p-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/90 border-gray-200/50 shadow-md' 
                  : 'bg-white/10 border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <motion.div 
                  className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  }`}
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                />
                <motion.div 
                  className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  }`}
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.div 
                  className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  }`}
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                />
              </div>
            </motion.button>
          </nav>

       {/* Mobile Menu Overlay */}
       <motion.div
         initial={{ opacity: 0, height: 0 }}
         animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
         transition={{ duration: 0.3 }}
         className={`md:hidden overflow-hidden ${
           isScrolled 
             ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200/50' 
             : 'bg-black/90 backdrop-blur-2xl border-b border-white/10'
         }`}
       >
         <div className="container mx-auto px-6 py-6">
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
             transition={{ delay: 0.1 }}
             className="flex flex-col space-y-4"
           >
             {[
               { href: "home", label: "Home" },
               { href: "about", label: "About" },
               { href: "services", label: "Services" },
               { href: "portfolio", label: "Portfolio" },
               { href: "contact", label: "Contact" }
             ].map((item, index) => (
               <motion.a
                 key={item.href}
                 onClick={() => scrollToSection(item.href)}
                 initial={{ opacity: 0, x: -20 }}
                 animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                 transition={{ delay: index * 0.1 + 0.2 }}
                 className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                   isScrolled 
                     ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                     : 'text-white/90 hover:text-white hover:bg-white/10'
                 } ${activeSection === item.href ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : ''}`}
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                 <span>{item.label}</span>
               </motion.a>
             ))}
             
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
               transition={{ delay: 0.6 }}
               className="pt-4"
             >
               <Button
                 size="lg"
                 className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                   isScrolled 
                     ? 'bg-gray-900 text-white hover:bg-gray-800 border-gray-900' 
                     : 'bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm'
                 }`}
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={() => scrollToSection('contact')}
               >
                 Get Started
               </Button>
             </motion.div>
           </motion.div>
         </div>
       </motion.div>
    </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8 shadow-lg"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="font-semibold">Trusted by 500+ companies worldwide</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.div>
          </motion.div>

                     <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight"
           >
            <motion.span
              className="bg-gradient-to-r from-white via-emerald-200 to-amber-200 bg-clip-text text-transparent block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Build.
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-emerald-200 via-white to-indigo-200 bg-clip-text text-transparent block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Scale.
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-amber-200 via-emerald-200 to-white bg-clip-text text-transparent block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Innovate.
            </motion.span>
          </motion.h1>

                     <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 text-indigo-100 max-w-3xl mx-auto leading-relaxed font-light px-4"
           >
            We craft modern software solutions to help businesses grow and innovate faster.
          </motion.p>

                     {/* Enhanced Stats */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-8 text-center px-4"
           >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-black text-emerald-400 mb-1">500+</div>
              <div className="text-xs text-indigo-200 font-medium">Projects Delivered</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-black text-amber-400 mb-1">99%</div>
              <div className="text-xs text-indigo-200 font-medium">Client Satisfaction</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-black text-indigo-400 mb-1">24/7</div>
              <div className="text-xs text-indigo-200 font-medium">Support Available</div>
            </motion.div>
          </motion.div>

                     {/* Enhanced Tech Stack Icons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 px-4"
           >
             <div className="text-white/70 text-sm font-semibold">Built with:</div>
             <div className="flex space-x-4 sm:space-x-6">
               <motion.div
                 whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                 className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg"
               >
                 <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
               </motion.div>
               <motion.div
                 whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                 className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg"
               >
                 <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
               </motion.div>
               <motion.div
                 whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                 className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg"
               >
                 <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
               </motion.div>
             </div>
           </motion.div>

                     <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.7, duration: 0.8 }}
             className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-24 px-4"
           >
             <motion.div
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
               className="w-full sm:w-auto"
             >
               <Button
                 size="lg"
                 className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 font-semibold"
               >
                 Get Started
                 <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
               </Button>
             </motion.div>
             <motion.div
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
               className="w-full sm:w-auto"
             >
                              <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white/20 hover:text-white px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-xl backdrop-blur-sm font-semibold bg-white/5"
                >
                  Watch Demo
                </Button>
             </motion.div>
           </motion.div>
        </motion.div>

                                   {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 sm:w-2 sm:h-4 bg-white/80 rounded-full mt-1.5 sm:mt-2"
              />
            </motion.div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 text-xs sm:text-sm mt-1 sm:mt-2 font-medium text-center px-2"
            >
              Scroll to explore
            </motion.p>
          </motion.div>


      </section>

             {/* About Us Section */}
       <section id="about" className="py-16 sm:py-20 bg-background relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
         <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
         
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
           {/* Header */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center max-w-4xl mx-auto mb-16"
           >
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-6"
             >
               <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
               About Our Company
             </motion.div>
             
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
               We Build Digital Solutions That
               <span className="text-emerald-600 dark:text-emerald-400"> Drive Growth</span>
             </h2>
             
             <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
               We are a passionate team of developers, designers, and innovators dedicated to creating
               exceptional software solutions that help businesses thrive in the digital age.
             </p>
           </motion.div>

           {/* Main Content Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
             {/* Left Column - Mission & Vision */}
             <motion.div
               initial={{ opacity: 0, x: -60 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
             >
               {/* Mission */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                 <div className="flex items-center mb-6">
                   <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mr-4">
                     <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                 </div>
                 <p className="text-muted-foreground leading-relaxed">
                   To empower businesses with innovative technology solutions that drive efficiency, 
                   growth, and competitive advantage. We believe in creating software that not only 
                   meets current needs but anticipates future challenges.
                 </p>
               </div>

               {/* Vision */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                 <div className="flex items-center mb-6">
                   <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mr-4">
                     <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                 </div>
                 <p className="text-muted-foreground leading-relaxed">
                   To be the leading force in digital transformation, helping organizations 
                   leverage cutting-edge technology to create meaningful impact and sustainable 
                   success in an ever-evolving digital landscape.
                 </p>
               </div>
             </motion.div>

             {/* Right Column - Stats & Values */}
             <motion.div
               initial={{ opacity: 0, x: 60 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
             >
               {/* Key Stats */}
               <div className="grid grid-cols-2 gap-4">
                 <motion.div
                   whileHover={{ scale: 1.05, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">8+</div>
                   <div className="text-sm text-muted-foreground">Years Experience</div>
                 </motion.div>
                 <motion.div
                   whileHover={{ scale: 1.05, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
                   <div className="text-sm text-muted-foreground">Team Members</div>
                 </motion.div>
                 <motion.div
                   whileHover={{ scale: 1.05, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">500+</div>
                   <div className="text-sm text-muted-foreground">Projects Delivered</div>
                 </motion.div>
                 <motion.div
                   whileHover={{ scale: 1.05, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">99%</div>
                   <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                 </motion.div>
               </div>

               {/* Core Values */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
                 <div className="space-y-4">
                   <div className="flex items-start space-x-3">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h4 className="font-semibold text-foreground">Innovation First</h4>
                       <p className="text-sm text-muted-foreground">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                     </div>
                   </div>
                   <div className="flex items-start space-x-3">
                     <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h4 className="font-semibold text-foreground">Quality Excellence</h4>
                       <p className="text-sm text-muted-foreground">Every line of code is crafted with precision and attention to detail.</p>
                     </div>
                   </div>
                   <div className="flex items-start space-x-3">
                     <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h4 className="font-semibold text-foreground">Client Partnership</h4>
                       <p className="text-sm text-muted-foreground">We build long-term relationships based on trust, transparency, and mutual success.</p>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>

           {/* Team Highlights */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center mb-12"
           >
             <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Meet Our Expert Team</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { role: "Frontend Developers", count: "15+", icon: <Code className="w-6 h-6" /> },
                 { role: "Backend Engineers", count: "12+", icon: <Brain className="w-6 h-6" /> },
                 { role: "UI/UX Designers", count: "8+", icon: <Smartphone className="w-6 h-6" /> },
                 { role: "DevOps Specialists", count: "6+", icon: <Code className="w-6 h-6" /> }
               ].map((member, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1, duration: 0.6 }}
                   whileHover={{ scale: 1.05, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                     <div className="text-emerald-600 dark:text-emerald-400">
                       {member.icon}
                     </div>
                   </div>
                   <div className="text-2xl font-bold text-foreground mb-2">{member.count}</div>
                   <div className="text-sm text-muted-foreground">{member.role}</div>
                 </motion.div>
               ))}
             </div>
           </motion.div>

           {/* CTA Section */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center"
           >
             <div className="bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white">
               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
               <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                 Let's discuss how our team can help bring your vision to life with innovative 
                 technology solutions tailored to your business needs.
               </p>
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Button
                   size="lg"
                   className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg"
                 >
                   Get Started Today
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Button>
               </motion.div>
             </div>
           </motion.div>
         </div>
       </section>

             {/* Services Section */}
       <section id="services" className="py-16 sm:py-20 bg-muted/30 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
         <div className="absolute top-10 right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
         <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
         
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
           {/* Header */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center max-w-4xl mx-auto mb-16"
           >
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="inline-flex items-center px-4 py-2 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-medium mb-6"
             >
               <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
               What We Offer
             </motion.div>
             
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
               Comprehensive Solutions for
               <span className="text-indigo-600 dark:text-indigo-400"> Digital Success</span>
             </h2>
             
             <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
               From concept to deployment, we provide end-to-end software development services 
               that transform your ideas into powerful, scalable digital solutions.
             </p>
           </motion.div>

           {/* Main Services Grid */}
           <motion.div
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
           >
             {services.map((service, index) => (
               <motion.div
                 key={index}
                 variants={fadeInUp}
                 whileHover={{ y: -10, scale: 1.02 }}
                 transition={{ duration: 0.3 }}
                 className="group"
               >
                 <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
                   {/* Background Pattern */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-indigo-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                   
                   {/* Icon */}
                   <div className="relative z-10 mb-6">
                     <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                       <div className="text-white text-2xl">
                         {service.icon}
                       </div>
                     </div>
                   </div>
                   
                   {/* Content */}
                   <div className="relative z-10">
                     <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                       {service.title}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed mb-6">
                       {service.description}
                     </p>
                     
                     {/* Features List */}
                     <div className="space-y-3 mb-6">
                       {[
                         "Custom Development",
                         "Responsive Design", 
                         "Performance Optimization",
                         "24/7 Support"
                       ].map((feature, featureIndex) => (
                         <div key={featureIndex} className="flex items-center space-x-3">
                           <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                           <span className="text-sm text-muted-foreground">{feature}</span>
                         </div>
                       ))}
                     </div>
                     
                     {/* CTA Button */}
                     <motion.div
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="inline-block"
                     >
                       <Button
                         variant="outline"
                         className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-900/20"
                       >
                         Learn More
                         <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                     </motion.div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </motion.div>

           {/* Additional Services */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mb-16"
           >
             <div className="text-center mb-12">
               <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Specialized Solutions</h3>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 Beyond our core services, we offer specialized solutions to meet your unique business requirements.
               </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: "API Development", icon: "🔌", description: "RESTful & GraphQL APIs" },
                 { title: "Database Design", icon: "🗄️", description: "Optimized data architecture" },
                 { title: "Cloud Migration", icon: "☁️", description: "AWS, Azure, Google Cloud" },
                 { title: "Security Audit", icon: "🔒", description: "Comprehensive security review" }
               ].map((specialty, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1, duration: 0.6 }}
                   whileHover={{ scale: 1.05, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="text-3xl mb-3">{specialty.icon}</div>
                   <h4 className="font-semibold text-foreground mb-2">{specialty.title}</h4>
                   <p className="text-sm text-muted-foreground">{specialty.description}</p>
                 </motion.div>
               ))}
             </div>
           </motion.div>

           {/* Process Section */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mb-16"
           >
             <div className="text-center mb-12">
               <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Development Process</h3>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 We follow a proven methodology that ensures quality, transparency, and successful project delivery.
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { step: "01", title: "Discovery", description: "Understanding your requirements and objectives" },
                 { step: "02", title: "Planning", description: "Creating detailed project roadmap and architecture" },
                 { step: "03", title: "Development", description: "Building your solution with best practices" },
                 { step: "04", title: "Deployment", description: "Launching and maintaining your application" }
               ].map((process, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.2, duration: 0.6 }}
                   className="relative"
                 >
                   <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                     <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                       {process.step}
                     </div>
                     <h4 className="font-semibold text-foreground mb-3">{process.title}</h4>
                     <p className="text-sm text-muted-foreground">{process.description}</p>
                   </div>
                   
                   {/* Connector Line */}
                   {index < 3 && (
                     <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-indigo-600 transform -translate-y-1/2"></div>
                   )}
                 </motion.div>
               ))}
             </div>
           </motion.div>

           {/* CTA Section */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center"
           >
             <div className="bg-gradient-to-r from-indigo-500 to-emerald-600 rounded-2xl p-8 sm:p-12 text-white">
               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
               <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                 Let's discuss your project requirements and explore how our services can help 
                 you achieve your digital transformation goals.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Button
                     size="lg"
                     className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg"
                   >
                     Get Free Consultation
                     <ArrowRight className="ml-2 h-5 w-5" />
                   </Button>
                 </motion.div>
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Button
                     variant="outline"
                     size="lg"
                     className="border-white/30 text-white hover:bg-white/20 hover:text-white px-8 py-4 rounded-xl font-semibold bg-white/5 backdrop-blur-sm"
                   >
                     View Case Studies
                   </Button>
                 </motion.div>
               </div>
             </div>
           </motion.div>
         </div>
       </section>

             {/* Portfolio Section */}
       <section id="portfolio" className="py-16 sm:py-20 bg-background relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
         <div className="absolute top-20 right-20 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl"></div>
         <div className="absolute bottom-20 left-20 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl"></div>
         
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
           {/* Header */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center max-w-4xl mx-auto mb-16"
           >
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="inline-flex items-center px-4 py-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium mb-6"
             >
               <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
               Our Work
             </motion.div>
             
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
               Showcasing Our
               <span className="text-amber-600 dark:text-amber-400"> Creative Excellence</span>
             </h2>
             
             <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
               Explore our diverse portfolio of successful projects that demonstrate our expertise 
               in creating innovative digital solutions across various industries.
             </p>
           </motion.div>

           {/* Portfolio Stats */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
           >
             {[
               { number: "150+", label: "Projects Completed" },
               { number: "50+", label: "Happy Clients" },
               { number: "15+", label: "Industries Served" },
               { number: "4.9", label: "Average Rating" }
             ].map((stat, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.6 }}
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
               >
                 <div className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                   {stat.number}
                 </div>
                 <div className="text-sm text-muted-foreground">{stat.label}</div>
               </motion.div>
             ))}
           </motion.div>

           {/* Project Categories */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mb-16"
           >
             <div className="text-center mb-12">
               <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Featured Projects</h3>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 Discover our latest work across different technologies and industries
               </p>
             </div>
             
             <motion.div
               variants={staggerContainer}
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
             >
               {[
                 {
                   title: "E-Commerce Platform",
                   description: "Modern e-commerce solution with AI-powered recommendations and seamless user experience",
                   category: "Web Development",
                   tech: ["React", "Node.js", "MongoDB"],
                   image: "🛒",
                   color: "from-blue-500 to-indigo-600"
                 },
                 {
                   title: "Health & Fitness App",
                   description: "Cross-platform mobile app with real-time tracking and personalized workout plans",
                   category: "Mobile Development",
                   tech: ["React Native", "Firebase", "AI"],
                   image: "💪",
                   color: "from-green-500 to-emerald-600"
                 },
                 {
                   title: "AI Chat Assistant",
                   description: "Intelligent customer support automation system with natural language processing",
                   category: "AI Solutions",
                   tech: ["Python", "TensorFlow", "AWS"],
                   image: "🤖",
                   color: "from-purple-500 to-pink-600"
                 },
                 {
                   title: "Financial Dashboard",
                   description: "Real-time financial analytics platform with interactive charts and reporting",
                   category: "Web Development",
                   tech: ["Vue.js", "Django", "PostgreSQL"],
                   image: "📊",
                   color: "from-amber-500 to-orange-600"
                 },
                 {
                   title: "Smart Home IoT",
                   description: "Connected home automation system with mobile control and voice commands",
                   category: "IoT Development",
                   tech: ["IoT", "React Native", "AWS"],
                   image: "🏠",
                   color: "from-teal-500 to-cyan-600"
                 },
                 {
                   title: "Learning Management System",
                   description: "Comprehensive educational platform with video streaming and progress tracking",
                   category: "Web Development",
                   tech: ["Next.js", "Node.js", "Redis"],
                   image: "🎓",
                   color: "from-red-500 to-pink-600"
                 }
               ].map((project, index) => (
                 <motion.div
                   key={index}
                   variants={fadeInUp}
                   whileHover={{ y: -10, scale: 1.02 }}
                   transition={{ duration: 0.3 }}
                   className="group cursor-pointer"
                 >
                   <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 h-full">
                     {/* Project Image */}
                     <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                       <div className="text-6xl">{project.image}</div>
                       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <div className="bg-white/90 rounded-lg px-4 py-2 text-sm font-semibold text-gray-800">
                           View Details
                         </div>
                       </div>
                     </div>
                     
                     {/* Project Content */}
                     <div className="p-6">
                       <div className="flex items-center justify-between mb-3">
                         <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                           {project.category}
                         </span>
                         <div className="flex space-x-1">
                           {project.tech.slice(0, 2).map((tech, techIndex) => (
                             <span key={techIndex} className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                           ))}
                         </div>
                       </div>
                       
                       <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                         {project.title}
                       </h3>
                       
                       <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                         {project.description}
                       </p>
                       
                       {/* Tech Stack */}
                       <div className="flex flex-wrap gap-2 mb-4">
                         {project.tech.map((tech, techIndex) => (
                           <span
                             key={techIndex}
                             className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded-md"
                           >
                             {tech}
                           </span>
                         ))}
                       </div>
                       
                       {/* Project Stats */}
                       <div className="flex items-center justify-between text-xs text-muted-foreground">
                         <span>Completed 2024</span>
                         <span>★★★★★</span>
                       </div>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </motion.div>
           </motion.div>

           {/* Client Testimonials */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mb-16"
           >
             <div className="text-center mb-12">
               <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">What Our Clients Say</h3>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 Don't just take our word for it - hear from the clients we've helped succeed
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   name: "Sarah Johnson",
                   role: "CEO, TechStart Inc.",
                   content: "SoftwareHouse delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and innovative solutions helped us increase sales by 300%.",
                   rating: 5
                 },
                 {
                   name: "Michael Chen",
                   role: "CTO, HealthFlow",
                   content: "The mobile app they built for us is simply outstanding. The user experience is intuitive, and the performance is incredible. Highly recommended!",
                   rating: 5
                 },
                 {
                   name: "Emily Rodriguez",
                   role: "Founder, EduTech Pro",
                   content: "Working with SoftwareHouse was a game-changer for our business. Their AI solutions transformed our customer support and improved efficiency dramatically.",
                   rating: 5
                 }
               ].map((testimonial, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.2, duration: 0.6 }}
                   whileHover={{ scale: 1.02, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="flex items-center mb-4">
                     <div className="flex text-amber-400">
                       {[...Array(testimonial.rating)].map((_, i) => (
                         <span key={i}>★</span>
                       ))}
                     </div>
                   </div>
                   
                   <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                     "{testimonial.content}"
                   </p>
                   
                   <div>
                     <div className="font-semibold text-foreground">{testimonial.name}</div>
                     <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.div>

           {/* CTA Section */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center"
           >
             <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-white">
               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
               <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
                 Let's create something amazing together. Our team is ready to bring your vision to life 
                 with cutting-edge technology and innovative design.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Button
                     size="lg"
                     className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg"
                   >
                     Start Your Project
                     <ArrowRight className="ml-2 h-5 w-5" />
                   </Button>
                 </motion.div>
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Button
                     variant="outline"
                     size="lg"
                     className="border-white/30 text-white hover:bg-white/20 hover:text-white px-8 py-4 rounded-xl font-semibold bg-white/5 backdrop-blur-sm"
                   >
                     View All Projects
                   </Button>
                 </motion.div>
               </div>
             </div>
           </motion.div>
         </div>
       </section>

             {/* Contact Section */}
       <section id="contact" className="py-16 sm:py-20 bg-muted/30 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
         <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
         <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>
         
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
           {/* Header */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center max-w-4xl mx-auto mb-16"
           >
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-6"
             >
               <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
               Let's Connect
             </motion.div>
             
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
               Ready to Start Your
               <span className="text-emerald-600 dark:text-emerald-400"> Next Project?</span>
             </h2>
             
             <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
               Get in touch with our team to discuss your project requirements, get a free consultation, 
               or learn more about how we can help bring your ideas to life.
             </p>
           </motion.div>

           {/* Contact Methods */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
           >
             {[
               {
                 icon: <Mail className="w-6 h-6" />,
                 title: "Email Us",
                 description: "Send us a message and we'll get back to you within 24 hours",
                 contact: "hello@softwarehouse.com",
                 action: "Send Email"
               },
               {
                 icon: <Phone className="w-6 h-6" />,
                 title: "Call Us",
                 description: "Speak directly with our team for immediate assistance",
                 contact: "+1 (555) 123-4567",
                 action: "Call Now"
               },
               {
                 icon: <MapPin className="w-6 h-6" />,
                 title: "Visit Us",
                 description: "Schedule a meeting at our office for a detailed discussion",
                 contact: "123 Tech Street, Innovation City",
                 action: "Get Directions"
               }
             ].map((method, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.6 }}
                 whileHover={{ scale: 1.02, y: -5 }}
                 className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
               >
                 <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <div className="text-emerald-600 dark:text-emerald-400">
                     {method.icon}
                   </div>
                 </div>
                 
                 <h3 className="text-xl font-bold text-foreground mb-3">{method.title}</h3>
                 <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                 
                 <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                   {method.contact}
                 </div>
                 
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Button
                     variant="outline"
                     className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                   >
                     {method.action}
                   </Button>
                 </motion.div>
               </motion.div>
             ))}
           </motion.div>

           {/* Main Contact Form */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl mx-auto"
           >
             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2">
                 {/* Contact Information */}
                 <div className="bg-gradient-to-br from-emerald-500 to-indigo-600 p-8 text-white">
                   <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                   <p className="text-emerald-100 mb-8">
                     Ready to transform your business with innovative technology solutions? 
                     Let's discuss your project and explore the possibilities together.
                   </p>
                   
                   <div className="space-y-6">
                     <div className="flex items-start space-x-4">
                       <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Mail className="w-5 h-5" />
                       </div>
                       <div>
                         <div className="font-semibold mb-1">Email</div>
                         <div className="text-emerald-100">hello@softwarehouse.com</div>
                       </div>
                     </div>
                     
                     <div className="flex items-start space-x-4">
                       <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Phone className="w-5 h-5" />
                       </div>
                       <div>
                         <div className="font-semibold mb-1">Phone</div>
                         <div className="text-emerald-100">+1 (555) 123-4567</div>
                       </div>
                     </div>
                     
                     <div className="flex items-start space-x-4">
                       <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                         <MapPin className="w-5 h-5" />
                       </div>
                       <div>
                         <div className="font-semibold mb-1">Office</div>
                         <div className="text-emerald-100">123 Tech Street, Innovation City, IC 12345</div>
                       </div>
                     </div>
                   </div>
                   
                   <div className="mt-8">
                     <h4 className="font-semibold mb-4">Follow Us</h4>
                     <div className="flex space-x-3">
                       <motion.a
                         href="#"
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                       >
                         <Github className="w-5 h-5" />
                       </motion.a>
                       <motion.a
                         href="#"
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                       >
                         <Linkedin className="w-5 h-5" />
                       </motion.a>
                       <motion.a
                         href="#"
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                       >
                         <Twitter className="w-5 h-5" />
                       </motion.a>
                     </div>
                   </div>
                 </div>
                 
                 {/* Contact Form */}
                 <div className="p-8">
                   <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                   
                   <form className="space-y-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div>
                         <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                           Full Name *
                         </label>
                         <Input
                           id="name"
                           type="text"
                           placeholder="John Doe"
                           required
                           className="w-full border-gray-300 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500"
                         />
                       </div>
                       <div>
                         <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                           Email Address *
                         </label>
                         <Input
                           id="email"
                           type="email"
                           placeholder="john@example.com"
                           required
                           className="w-full border-gray-300 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500"
                         />
                       </div>
                     </div>
                     
                     <div>
                       <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                         Phone Number
                       </label>
                       <Input
                         id="phone"
                         type="tel"
                         placeholder="+1 (555) 123-4567"
                         className="w-full border-gray-300 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500"
                       />
                     </div>
                     
                     <div>
                       <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                         Company Name
                       </label>
                       <Input
                         id="company"
                         type="text"
                         placeholder="Your Company Inc."
                         className="w-full border-gray-300 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500"
                       />
                     </div>
                     
                     <div>
                       <label htmlFor="project-type" className="block text-sm font-medium text-foreground mb-2">
                         Project Type
                       </label>
                       <select
                         id="project-type"
                         className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-foreground focus:border-emerald-500 focus:ring-emerald-500"
                       >
                         <option value="">Select a project type</option>
                         <option value="web-development">Web Development</option>
                         <option value="mobile-app">Mobile App</option>
                         <option value="ai-solutions">AI Solutions</option>
                         <option value="consultation">Consultation</option>
                         <option value="other">Other</option>
                       </select>
                     </div>
                     
                     <div>
                       <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                         Project Details *
                       </label>
                       <Textarea
                         id="message"
                         placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                         required
                         className="w-full min-h-[120px] border-gray-300 dark:border-gray-600 focus:border-emerald-500 focus:ring-emerald-500"
                       />
                     </div>
                     
                     <motion.div
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                     >
                       <Button
                         type="submit"
                         className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-lg font-semibold shadow-lg"
                       >
                         Send Message
                         <ArrowRight className="ml-2 h-5 w-5" />
                       </Button>
                     </motion.div>
                   </form>
                 </div>
               </div>
             </div>
           </motion.div>

           {/* Office Locations */}
           <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mt-16"
           >
             <div className="text-center mb-12">
               <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Global Offices</h3>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 We have offices around the world to serve our clients better
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   city: "San Francisco",
                   country: "United States",
                   address: "123 Tech Street, Innovation City, CA 94105",
                   phone: "+1 (555) 123-4567",
                   email: "sf@softwarehouse.com"
                 },
                 {
                   city: "London",
                   country: "United Kingdom",
                   address: "456 Innovation Lane, Tech District, EC1A 1BB",
                   phone: "+44 20 1234 5678",
                   email: "london@softwarehouse.com"
                 },
                 {
                   city: "Singapore",
                   country: "Singapore",
                   address: "789 Digital Road, Marina Bay, 018956",
                   phone: "+65 6123 4567",
                   email: "sg@softwarehouse.com"
                 }
               ].map((office, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1, duration: 0.6 }}
                   whileHover={{ scale: 1.02, y: -5 }}
                   className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                 >
                   <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                     <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                   </div>
                   
                   <h4 className="text-lg font-bold text-foreground mb-1">{office.city}</h4>
                   <p className="text-muted-foreground text-sm mb-4">{office.country}</p>
                   
                   <div className="space-y-2 text-sm">
                     <div className="text-muted-foreground">{office.address}</div>
                     <div className="text-emerald-600 dark:text-emerald-400">{office.phone}</div>
                     <div className="text-emerald-600 dark:text-emerald-400">{office.email}</div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </section>

             {/* Scroll to Top Button */}
             <motion.button
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
               transition={{ duration: 0.3 }}
               onClick={scrollToTop}
               className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                 showScrollTop ? 'pointer-events-auto' : 'pointer-events-none'
               }`}
               whileHover={{ scale: 1.1, y: -2 }}
               whileTap={{ scale: 0.9 }}
             >
               <ChevronUp className="w-6 h-6" />
             </motion.button>

             {/* Footer */}
       <footer className="bg-foreground text-background py-8 sm:py-12">
         <div className="container mx-auto px-4 sm:px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">SoftwareHouse</div>
             <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4 sm:px-0">
               Building the future, one line of code at a time.
             </p>
             <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
               <a href="#" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Privacy Policy</a>
               <a href="#" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Terms of Service</a>
               <a href="#" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Careers</a>
             </div>
             <div className="border-t border-border pt-4 sm:pt-6">
               <p className="text-xs sm:text-sm text-muted-foreground">
                 © 2024 SoftwareHouse. All rights reserved.
               </p>
             </div>
           </motion.div>
         </div>
       </footer>
    </div>
  )
}
