"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HomePage from "../components/sections/HomePage"
import MotorcyclesSection from "../components/sections/MotorcyclesSection"
import RidesEventsSection from "../components/sections/RidesEventsSection"
import SupportSection from "../components/sections/SupportSection"
import AboutSection from "../components/sections/AboutSection"
import NewsMediaSection from "../components/sections/NewsMediaSection"
import CareersSection from "../components/sections/CareersSection"
import OurWorldSection from "../components/sections/OurWorldSection"
import ContactSection from "../components/sections/ContactSection"

const App = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [isScrolling, setIsScrolling] = useState(false)

  // Smooth scroll to section with offset for fixed header
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      setIsScrolling(true)
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 1000)
    }
  }

  // Handle navigation from header or footer
  const handleNavigation = (page) => {
    if (page === "home") {
      setCurrentPage("home")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      setCurrentPage("sections")
      setTimeout(() => scrollToSection(page), 100)
    }
  }

  // Handle specific footer item clicks
  const handleFooterItemClick = (sectionId, itemId) => {
    setCurrentPage("sections")
    setTimeout(() => {
      scrollToSection(sectionId)
      // Additional logic for specific items can be added here
      console.log(`Navigated to ${sectionId} - ${itemId}`)
    }, 100)
  }

  const renderContent = () => {
    if (currentPage === "home") {
      return <HomePage onNavigate={handleNavigation} />
    }

    return (
      <main className="pt-16 bg-white">
        <MotorcyclesSection />
        <RidesEventsSection />
        <SupportSection />
        <AboutSection />
        <NewsMediaSection />
        <CareersSection />
        <OurWorldSection />
        <ContactSection />
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      {renderContent()}
      <Footer onNavigate={handleNavigation} onItemClick={handleFooterItemClick} />
    </div>
  )
}

export default App
