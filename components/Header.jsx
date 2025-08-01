"use client"

import { useState } from "react"
import { Menu, X, MapPin, User, Search } from "lucide-react"

const Header = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Motorcycles", page: "motorcycles" },
    { name: "Rides & Events", page: "rides-events" },
    { name: "Support", page: "support" },
    { name: "About Us", page: "about" },
    { name: "News & Media", page: "news-media" },
    { name: "Careers", page: "careers" },
    { name: "Our World", page: "our-world" },
  ]

  const handleNavigation = (page) => {
    onNavigate(page)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation("home")}>
            <div className="text-white font-bold text-xl">ROYAL ENFIELD</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className="text-sm font-medium transition-colors duration-300 hover:text-red-500 text-gray-300"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Utility Links */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Find a Store</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
              <User className="w-4 h-4" />
              <span className="text-sm">Login</span>
            </button>
            <button className="text-gray-300 hover:text-white transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="text-white font-bold text-xl">ROYAL ENFIELD</div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white" aria-label="Close mobile menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-8">
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className="block w-full text-left py-4 text-lg font-medium text-gray-300 hover:text-red-500 transition-colors duration-300 border-b border-gray-800"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
