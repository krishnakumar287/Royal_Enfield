"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  MapPin,
  User,
  Search,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
} from "lucide-react"

// Mock data for motorcycles
const motorcyclesData = [
  {
    id: 1,
    name: "Himalayan",
    price: "₹2,16,755",
    image: "/placeholder.svg?height=300&width=400&text=Himalayan",
    category: "Adventure",
    colors: ["Granite Black", "Mirage Silver", "Pine Green"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Himalayan+Front",
      "/placeholder.svg?height=600&width=800&text=Himalayan+Side",
      "/placeholder.svg?height=600&width=800&text=Himalayan+Back",
    ],
    specs: {
      engine: {
        "Engine Type": "Single cylinder, 4 stroke, Air cooled",
        Displacement: "411cc",
        "Max Power": "24.3 bhp @ 6500 rpm",
        "Max Torque": "32 Nm @ 4000-4500 rpm",
      },
      transmission: {
        Gearbox: "5 Speed",
        Clutch: "Wet, Multi-plate",
      },
      dimensions: {
        Length: "2190 mm",
        Width: "840 mm",
        Height: "1360 mm",
        Wheelbase: "1465 mm",
      },
    },
  },
  {
    id: 2,
    name: "Classic 350",
    price: "₹1,93,389",
    image: "/placeholder.svg?height=300&width=400&text=Classic+350",
    category: "Cruiser",
    colors: ["Stealth Black", "Halcyon Green", "Signals Airborne Blue"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Classic+350+Front",
      "/placeholder.svg?height=600&width=800&text=Classic+350+Side",
      "/placeholder.svg?height=600&width=800&text=Classic+350+Back",
    ],
    specs: {
      engine: {
        "Engine Type": "Single cylinder, 4 stroke, Air cooled",
        Displacement: "349cc",
        "Max Power": "20.2 bhp @ 6100 rpm",
        "Max Torque": "27 Nm @ 4000 rpm",
      },
      transmission: {
        Gearbox: "5 Speed",
        Clutch: "Wet, Multi-plate",
      },
      dimensions: {
        Length: "2160 mm",
        Width: "800 mm",
        Height: "1090 mm",
        Wheelbase: "1370 mm",
      },
    },
  },
  {
    id: 3,
    name: "Meteor 350",
    price: "₹2,06,584",
    image: "/placeholder.svg?height=300&width=400&text=Meteor+350",
    category: "Cruiser",
    colors: ["Fireball Red", "Stellar Black", "Supernova Blue"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Meteor+350+Front",
      "/placeholder.svg?height=600&width=800&text=Meteor+350+Side",
      "/placeholder.svg?height=600&width=800&text=Meteor+350+Back",
    ],
    specs: {
      engine: {
        "Engine Type": "Single cylinder, 4 stroke, Air cooled",
        Displacement: "349cc",
        "Max Power": "20.2 bhp @ 6100 rpm",
        "Max Torque": "27 Nm @ 4000 rpm",
      },
      transmission: {
        Gearbox: "5 Speed",
        Clutch: "Wet, Multi-plate",
      },
      dimensions: {
        Length: "2140 mm",
        Width: "845 mm",
        Height: "1140 mm",
        Wheelbase: "1400 mm",
      },
    },
  },
  {
    id: 4,
    name: "Hunter 350",
    price: "₹1,49,900",
    image: "/placeholder.svg?height=300&width=400&text=Hunter+350",
    category: "Roadster",
    colors: ["Rebel Black", "Rebel Blue", "Rebel Red"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Hunter+350+Front",
      "/placeholder.svg?height=600&width=800&text=Hunter+350+Side",
      "/placeholder.svg?height=600&width=800&text=Hunter+350+Back",
    ],
    specs: {
      engine: {
        "Engine Type": "Single cylinder, 4 stroke, Air cooled",
        Displacement: "349cc",
        "Max Power": "20.2 bhp @ 6100 rpm",
        "Max Torque": "27 Nm @ 4000 rpm",
      },
      transmission: {
        Gearbox: "5 Speed",
        Clutch: "Wet, Multi-plate",
      },
      dimensions: {
        Length: "2055 mm",
        Width: "800 mm",
        Height: "1050 mm",
        Wheelbase: "1370 mm",
      },
    },
  },
  {
    id: 5,
    name: "Continental GT 650",
    price: "₹3,19,887",
    image: "/placeholder.svg?height=300&width=400&text=Continental+GT+650",
    category: "Cafe Racer",
    colors: ["Ventura Storm", "British Racing Green", "Rocker Red"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Continental+GT+650+Front",
      "/placeholder.svg?height=600&width=800&text=Continental+GT+650+Side",
      "/placeholder.svg?height=600&width=800&text=Continental+GT+650+Back",
    ],
    specs: {
      engine: {
        "Engine Type": "Parallel twin, 4 stroke, Air/Oil cooled",
        Displacement: "648cc",
        "Max Power": "47 bhp @ 7250 rpm",
        "Max Torque": "52 Nm @ 5250 rpm",
      },
      transmission: {
        Gearbox: "6 Speed",
        Clutch: "Wet, Multi-plate",
      },
      dimensions: {
        Length: "2122 mm",
        Width: "789 mm",
        Height: "1067 mm",
        Wheelbase: "1400 mm",
      },
    },
  },
  {
    id: 6,
    name: "Interceptor 650",
    price: "₹2,98,494",
    image: "/placeholder.svg?height=300&width=400&text=Interceptor+650",
    category: "Twin",
    colors: ["Orange Crush", "Baker Express", "Ravishing Red"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Interceptor+650+Front",
      "/placeholder.svg?height=600&width=800&text=Interceptor+650+Side",
      "/placeholder.svg?height=600&width=800&text=Interceptor+650+Back",
    ],
    specs: {
      engine: {
        "Engine Type": "Parallel twin, 4 stroke, Air/Oil cooled",
        Displacement: "648cc",
        "Max Power": "47 bhp @ 7250 rpm",
        "Max Torque": "52 Nm @ 5250 rpm",
      },
      transmission: {
        Gearbox: "6 Speed",
        Clutch: "Wet, Multi-plate",
      },
      dimensions: {
        Length: "2122 mm",
        Width: "789 mm",
        Height: "1165 mm",
        Wheelbase: "1400 mm",
      },
    },
  },
]

// Hero carousel data
const heroSlides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1200&text=All-New+Himalayan+Hero",
    title: "All-New Himalayan",
    subtitle: "Adventure Redefined",
    cta: "Explore Now",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1200&text=Classic+350+Hero",
    title: "Classic 350",
    subtitle: "Pure Motorcycling",
    cta: "Discover More",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1200&text=Continental+GT+650+Hero",
    title: "Continental GT 650",
    subtitle: "Cafe Racer Spirit",
    cta: "Experience Now",
  },
]

// Accessories data
const accessoriesData = [
  { name: "Touring Seat", price: "₹8,500" },
  { name: "Panniers Set", price: "₹15,000" },
  { name: "Engine Guard", price: "₹4,200" },
  { name: "Windscreen", price: "₹6,800" },
  { name: "LED Auxiliary Lights", price: "₹12,000" },
  { name: "Tank Pad", price: "₹2,500" },
]

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Motorcycles", page: "motorcycles" },
    { name: "Rides", page: "rides" },
    { name: "Apparel", page: "apparel" },
    { name: "Accessories", page: "accessories" },
    { name: "Our World", page: "our-world" },
    { name: "Support", page: "support" },
  ]

  const handleNavigation = (page) => {
    setCurrentPage(page)
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
                className={`text-sm font-medium transition-colors duration-300 hover:text-red-500 ${
                  currentPage === item.page ? "text-red-500" : "text-gray-300"
                }`}
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
              <div className="mt-8 space-y-4">
                <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                  <span>Find a Store</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

// Hero Carousel Component
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">{slide.subtitle}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-600" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Motorcycle Card Component
const MotorcycleCard = ({ motorcycle, onViewDetails, onConfigure, onTestRide }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <img src={motorcycle.image || "/placeholder.svg"} alt={motorcycle.name} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {motorcycle.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{motorcycle.name}</h3>
        <p className="text-2xl font-bold text-red-500 mb-4">Starting at {motorcycle.price}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onViewDetails(motorcycle)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
          >
            View Details
          </button>
          <button
            onClick={() => onConfigure(motorcycle)}
            className="flex-1 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-500 py-2 px-4 rounded-lg font-semibold transition-all duration-300"
          >
            Configure
          </button>
        </div>
        <button
          onClick={() => onTestRide(motorcycle)}
          className="w-full mt-3 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
        >
          Book a Test Ride
        </button>
      </div>
    </div>
  )
}

// Configuration Modal Component
const ConfigurationModal = ({ motorcycle, isOpen, onClose }) => {
  const [selectedAccessories, setSelectedAccessories] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const accessoryTotal = selectedAccessories.reduce((sum, accessory) => {
      return sum + Number.parseInt(accessory.price.replace("₹", "").replace(",", ""))
    }, 0)
    setTotalPrice(accessoryTotal)
  }, [selectedAccessories])

  const toggleAccessory = (accessory) => {
    setSelectedAccessories((prev) => {
      const isSelected = prev.find((item) => item.name === accessory.name)
      if (isSelected) {
        return prev.filter((item) => item.name !== accessory.name)
      } else {
        return [...prev, accessory]
      }
    })
  }

  if (!isOpen || !motorcycle) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Configure {motorcycle.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <img
              src={motorcycle.image || "/placeholder.svg"}
              alt={motorcycle.name}
              className="w-full md:w-1/2 h-48 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{motorcycle.name}</h3>
              <p className="text-gray-300 mb-4">Base Price: {motorcycle.price}</p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Configuration Total</h4>
                <p className="text-2xl font-bold text-red-500">₹{totalPrice.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Genuine Motorcycle Accessories</h4>
            <div className="space-y-3">
              {accessoriesData.map((accessory) => {
                const isSelected = selectedAccessories.find((item) => item.name === accessory.name)
                return (
                  <label
                    key={accessory.name}
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={!!isSelected}
                        onChange={() => toggleAccessory(accessory)}
                        className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
                      />
                      <span className="text-white font-medium">{accessory.name}</span>
                    </div>
                    <span className="text-red-500 font-semibold">{accessory.price}</span>
                  </label>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
            >
              Save Configuration
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Home Page Component
const HomePage = ({ setCurrentPage, setSelectedMotorcycle, setShowConfigModal }) => {
  const handleViewDetails = (motorcycle) => {
    setSelectedMotorcycle(motorcycle)
    setCurrentPage("motorcycle-detail")
  }

  const handleConfigure = (motorcycle) => {
    setSelectedMotorcycle(motorcycle)
    setShowConfigModal(true)
  }

  const handleTestRide = (motorcycle) => {
    alert(`Test ride booked for ${motorcycle.name}!`)
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Motorcycles Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Motorcycles</h2>
            <p className="text-xl text-gray-300">Discover the perfect ride for your journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcyclesData.slice(0, 6).map((motorcycle) => (
              <MotorcycleCard
                key={motorcycle.id}
                motorcycle={motorcycle}
                onViewDetails={handleViewDetails}
                onConfigure={handleConfigure}
                onTestRide={handleTestRide}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="relative h-80 bg-cover bg-center rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              style={{ backgroundImage: "url(/placeholder.svg?height=400&width=600&text=Rides+Events)" }}
              onClick={() => setCurrentPage("rides")}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Rides</h3>
                <p className="text-gray-300 mb-4">Join epic adventures and connect with fellow riders</p>
                <button className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300">
                  Explore Now →
                </button>
              </div>
            </div>

            <div
              className="relative h-80 bg-cover bg-center rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              style={{ backgroundImage: "url(/placeholder.svg?height=400&width=600&text=Apparel+Gear)" }}
              onClick={() => setCurrentPage("apparel")}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Apparel</h3>
                <p className="text-gray-300 mb-4">Premium riding gear and lifestyle clothing</p>
                <button className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300">
                  Explore Now →
                </button>
              </div>
            </div>

            <div
              className="relative h-80 bg-cover bg-center rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              style={{ backgroundImage: "url(/placeholder.svg?height=400&width=600&text=Accessories+Parts)" }}
              onClick={() => setCurrentPage("accessories")}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Accessories</h3>
                <p className="text-gray-300 mb-4">Genuine parts and accessories for your ride</p>
                <button className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300">
                  Explore Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our World Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=700&text=Royal+Enfield+Heritage"
                alt="Royal Enfield Heritage"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our World</h2>
              <p className="text-xl text-gray-300 mb-6">
                Since 1901, Royal Enfield has been at the forefront of motorcycling, creating machines that embody the
                spirit of pure motorcycling. Our legacy spans over a century of craftsmanship, adventure, and the
                relentless pursuit of motorcycling excellence.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                From the battlefields of World War I to the highest motorable roads in the world, Royal Enfield
                motorcycles have been the trusted companions of riders who dare to explore the unexplored.
              </p>
              <button
                onClick={() => setCurrentPage("our-world")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Motorcycles Page Component
const MotorcyclesPage = ({ setCurrentPage, setSelectedMotorcycle, setShowConfigModal }) => {
  const handleViewDetails = (motorcycle) => {
    setSelectedMotorcycle(motorcycle)
    setCurrentPage("motorcycle-detail")
  }

  const handleConfigure = (motorcycle) => {
    setSelectedMotorcycle(motorcycle)
    setShowConfigModal(true)
  }

  const handleTestRide = (motorcycle) => {
    alert(`Test ride booked for ${motorcycle.name}!`)
  }

  return (
    <main className="pt-16 bg-black min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Motorcycles</h1>
          <p className="text-xl text-gray-300">Choose your perfect ride from our complete range</p>
        </div>
      </section>

      {/* Motorcycles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcyclesData.map((motorcycle) => (
              <MotorcycleCard
                key={motorcycle.id}
                motorcycle={motorcycle}
                onViewDetails={handleViewDetails}
                onConfigure={handleConfigure}
                onTestRide={handleTestRide}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Motorcycle Detail Page Component
const MotorcycleDetailPage = ({ motorcycle, setShowConfigModal }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(motorcycle?.colors[0] || "")

  if (!motorcycle) {
    return (
      <main className="pt-16 bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Motorcycle not found</div>
      </main>
    )
  }

  const handleConfigure = () => {
    setShowConfigModal(true)
  }

  const handleTestRide = () => {
    alert(`Test ride booked for ${motorcycle.name}!`)
  }

  return (
    <main className="pt-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{motorcycle.name}</h1>
          <p className="text-2xl text-red-500 font-bold">Starting at {motorcycle.price}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={motorcycle.images[selectedImageIndex] || "/placeholder.svg"}
                alt={`${motorcycle.name} - Image ${selectedImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-4 overflow-x-auto">
              {motorcycle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImageIndex === index ? "border-red-500" : "border-gray-600"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${motorcycle.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Color Selector */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Available Colors</h3>
              <div className="flex flex-wrap gap-3">
                {motorcycle.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedColor === color
                        ? "border-red-500 bg-red-500/20 text-red-500"
                        : "border-gray-600 text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mb-8 space-y-4">
              <button
                onClick={handleTestRide}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Book a Test Ride
              </button>
              <button
                onClick={handleConfigure}
                className="w-full border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-500 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Configure
              </button>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Specifications</h3>

              {/* Engine & Transmission */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-red-500 mb-3">Engine & Transmission</h4>
                <div className="bg-gray-900 rounded-lg p-4 space-y-2">
                  {Object.entries(motorcycle.specs.engine).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                  {Object.entries(motorcycle.specs.transmission).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-red-500 mb-3">Dimensions</h4>
                <div className="bg-gray-900 rounded-lg p-4 space-y-2">
                  {Object.entries(motorcycle.specs.dimensions).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Placeholder Page Component
const PlaceholderPage = ({ title, description }) => {
  return (
    <main className="pt-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </main>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Motorcycles */}
          <div>
            <h3 className="text-white font-semibold mb-4">Motorcycles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Classic 350
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Meteor 350
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Himalayan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Continental GT 650
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Interceptor 650
                </a>
              </li>
            </ul>
          </div>

          {/* Rides & Events */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rides & Events</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Upcoming Rides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Rider Mania
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  One Ride
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Himalayan Odyssey
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Service Centers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Owner's Manual
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Our World */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our World</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Heritage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Pure Motorcycling
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>1800-210-0007</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@royalenfield.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Royal Enfield. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedMotorcycle, setSelectedMotorcycle] = useState(null)
  const [showConfigModal, setShowConfigModal] = useState(false)

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedMotorcycle={setSelectedMotorcycle}
            setShowConfigModal={setShowConfigModal}
          />
        )
      case "motorcycles":
        return (
          <MotorcyclesPage
            setCurrentPage={setCurrentPage}
            setSelectedMotorcycle={setSelectedMotorcycle}
            setShowConfigModal={setShowConfigModal}
          />
        )
      case "motorcycle-detail":
        return <MotorcycleDetailPage motorcycle={selectedMotorcycle} setShowConfigModal={setShowConfigModal} />
      case "rides":
        return (
          <PlaceholderPage
            title="Rides & Events"
            description="Join epic adventures and connect with fellow riders. Discover upcoming rides, events, and the legendary Rider Mania experience."
          />
        )
      case "apparel":
        return (
          <PlaceholderPage
            title="Apparel"
            description="Premium riding gear and lifestyle clothing designed for the modern motorcyclist. Quality, style, and protection in every piece."
          />
        )
      case "accessories":
        return (
          <PlaceholderPage
            title="Accessories"
            description="Genuine parts and accessories to enhance your Royal Enfield experience. From touring essentials to performance upgrades."
          />
        )
      case "our-world":
        return (
          <PlaceholderPage
            title="Our World"
            description="Discover the rich heritage and community that makes Royal Enfield more than just a motorcycle brand. Since 1901, we've been crafting legends."
          />
        )
      case "support":
        return (
          <PlaceholderPage
            title="Support"
            description="Get the help you need with our comprehensive support services. From service centers to owner resources, we're here for you."
          />
        )
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedMotorcycle={setSelectedMotorcycle}
            setShowConfigModal={setShowConfigModal}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
      <Footer />
      <ConfigurationModal
        motorcycle={selectedMotorcycle}
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
      />
    </div>
  )
}

export default App
