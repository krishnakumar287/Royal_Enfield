"use client"

import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

const Footer = ({ onNavigate, onItemClick }) => {
  const footerData = {
    motorcycles: [
      "Hunter 350",
      "Classic 650",
      "Scram 440",
      "Goan Classic 350",
      "Bear 650",
      "Classic 350",
      "Guerrilla 450",
      "Shotgun 650",
      "New Himalayan",
      "Bullet 350",
      "Super Meteor 650",
      "Meteor 350",
      "Interceptor 650",
      "Continental GT 650",
    ],
    ridesEvents: ["Rides", "Rentals", "Tours"],
    support: [
      "Service Centres",
      "Stores",
      "Owner's Manual",
      "Contact Us",
      "Book a Test Ride",
      "Make It Yours",
      "Become a Dealer",
      "Become a Genuine Parts Distributor",
    ],
    about: ["Since 1901", "About Eicher Motors"],
    newsMedia: ["News", "Press Releases", "Media Kit", "Events"],
    careers: ["Life at Royal Enfield", "Careers at Dealership"],
    ourWorld: [
      "Royal Enfield TV",
      "Royal Enfield App",
      "Royal Enfield Tripper",
      "Royal Enfield Wingman",
      "Royal Enfield Tripper Dash",
      "Reown",
      "Goa Garage Cafe",
      "Custom World",
      "News and Media",
      "Since 1901",
      "Wallpapers",
      "Made In Madras",
      "Our Social Mission",
    ],
  }

  const handleSectionClick = (sectionId) => {
    onNavigate(sectionId)
  }

  const handleItemClick = (sectionId, item) => {
    // Handle specific item clicks
    if (item === "Contact Us") {
      onNavigate("contact")
    } else {
      onItemClick(sectionId, item)
    }
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Social Media Bar - Exact match to screenshot */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end space-x-4">
            <span className="text-white text-sm font-medium">Join the conversation</span>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-white hover:text-red-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Exact structure from screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Motorcycles */}
          <div>
            <h3
              className="text-black font-bold mb-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => handleSectionClick("motorcycles")}
            >
              Motorcycles
            </h3>
            <ul className="space-y-2">
              {footerData.motorcycles.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick("motorcycles", item)}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-left text-sm block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rides & Events */}
          <div>
            <h3
              className="text-black font-bold mb-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => handleSectionClick("rides-events")}
            >
              Rides & Events
            </h3>
            <ul className="space-y-2">
              {footerData.ridesEvents.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick("rides-events", item)}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-left text-sm block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3
              className="text-black font-bold mb-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => handleSectionClick("support")}
            >
              Support
            </h3>
            <ul className="space-y-2">
              {footerData.support.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick("support", item)}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-left text-sm block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3
              className="text-black font-bold mb-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => handleSectionClick("about")}
            >
              About Us
            </h3>
            <ul className="space-y-2">
              {footerData.about.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick("about", item)}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-left text-sm block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* News & Media */}
          <div>
            <h3
              className="text-black font-bold mb-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => handleSectionClick("news-media")}
            >
              News & Media
            </h3>
            <ul className="space-y-2">
              {footerData.newsMedia.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick("news-media", item)}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-left text-sm block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3
              className="text-black font-bold mb-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => handleSectionClick("careers")}
            >
              Careers
            </h3>
            <ul className="space-y-2">
              {footerData.careers.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick("careers", item)}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-left text-sm block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our World */}
          <div>
            <h3
              className="text-black font-bold mb-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => handleSectionClick("our-world")}
            >
              Our World
            </h3>
            <ul className="space-y-2">
              {footerData.ourWorld.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick("our-world", item)}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-left text-sm block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright - Exact match to screenshot */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center mb-4 md:mb-0">
              <span>© 2025. Royal Enfield. | T&C apply. Images shown here may differ from the actual product.</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-black transition-colors duration-300">Private Import Policy</button>
              <span>|</span>
              <button className="hover:text-black transition-colors duration-300">Privacy</button>
              <span>|</span>
              <button className="hover:text-black transition-colors duration-300">Terms & Conditions</button>
              <span>|</span>
              <button className="hover:text-black transition-colors duration-300">Cookies</button>
              <span>|</span>
              <button className="hover:text-black transition-colors duration-300">Sitemap</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
