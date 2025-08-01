"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

const HomePage = ({ onNavigate }) => {
  return (
    <main className="pt-16 bg-white">
      <HeroCarousel />

      {/* Quick Navigation */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Explore Royal Enfield</h2>
            <p className="text-xl text-gray-600">Discover everything we have to offer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Motorcycles",
                page: "motorcycles",
                image: "/placeholder.svg?height=200&width=300&text=Motorcycles",
              },
              {
                name: "Rides & Events",
                page: "rides-events",
                image: "/placeholder.svg?height=200&width=300&text=Rides",
              },
              { name: "Support", page: "support", image: "/placeholder.svg?height=200&width=300&text=Support" },
              { name: "Our World", page: "our-world", image: "/placeholder.svg?height=200&width=300&text=Our+World" },
            ].map((item) => (
              <div
                key={item.page}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate(item.page)}
              >
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
                  <button className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300">
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
