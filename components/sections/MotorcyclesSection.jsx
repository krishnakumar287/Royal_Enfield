"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const motorcyclesData = [
  {
    slug: "hunter-350",
    name: "Hunter 350",
    price: "₹1,49,900",
    category: "Roadster",
    image: "/placeholder.svg?height=300&width=400&text=Hunter+350",
  },
  {
    slug: "classic-650",
    name: "Classic 650",
    price: "₹3,24,755",
    category: "Twin",
    image: "/placeholder.svg?height=300&width=400&text=Classic+650",
  },
  {
    slug: "scram-440",
    name: "Scram 440",
    price: "₹2,08,755",
    category: "Adventure",
    image: "/placeholder.svg?height=300&width=400&text=Scram+440",
  },
  {
    slug: "goan-classic-350",
    name: "Goan Classic 350",
    price: "₹2,04,755",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Goan+Classic",
  },
  {
    slug: "bear-650",
    name: "Bear 650",
    price: "₹3,39,755",
    category: "Scrambler",
    image: "/placeholder.svg?height=300&width=400&text=Bear+650",
  },
  {
    slug: "classic-350",
    name: "Classic 350",
    price: "₹1,93,389",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Classic+350",
  },
  {
    slug: "guerrilla-450",
    name: "Guerrilla 450",
    price: "₹2,39,755",
    category: "Roadster",
    image: "/placeholder.svg?height=300&width=400&text=Guerrilla+450",
  },
  {
    slug: "shotgun-650",
    name: "Shotgun 650",
    price: "₹3,59,755",
    category: "Bobber",
    image: "/placeholder.svg?height=300&width=400&text=Shotgun+650",
  },
  {
    slug: "new-himalayan",
    name: "New Himalayan",
    price: "₹2,85,755",
    category: "Adventure",
    image: "/placeholder.svg?height=300&width=400&text=New+Himalayan",
  },
  {
    slug: "bullet-350",
    name: "Bullet 350",
    price: "₹1,74,755",
    category: "Classic",
    image: "/placeholder.svg?height=300&width=400&text=Bullet+350",
  },
  {
    slug: "super-meteor-650",
    name: "Super Meteor 650",
    price: "₹3,49,755",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Super+Meteor",
  },
  {
    slug: "meteor-350",
    name: "Meteor 350",
    price: "₹2,06,584",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Meteor+350",
  },
]

const MotorcycleCard = ({ motorcycle, index }) => {
  return (
    <div className="motorcycle-card flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-4">
      <div className="relative">
        <img src={motorcycle.image || "/placeholder.svg"} alt={motorcycle.name} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {motorcycle.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{motorcycle.name}</h3>
        <div className="flex flex-col gap-3">
          <Link href={`/motorcycles/${motorcycle.slug}`} legacyBehavior>
            <a className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-center">
              Explore
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}


const MotorcyclesSection = () => {
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const scrollContainer = scrollContainerRef.current
    if (!section || !scrollContainer) return

    // Set up GSAP horizontal scroll
    let ctx = gsap.context(() => {
      let totalWidth = scrollContainer.scrollWidth
      let viewportWidth = section.offsetWidth
      let scrollLength = totalWidth - viewportWidth

      gsap.to(scrollContainer, {
        x: () => `-${scrollLength}`,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollLength}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      })
    }, section)

    // Responsive: refresh on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="motorcycles" ref={sectionRef} className="relative bg-gray-100" style={{ minHeight: '100vh' }}>
      <div className="h-full flex flex-col">
        {/* Fixed Header */}
        <div className="flex-shrink-0 text-center py-8 bg-gray-100 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Motorcycles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover the perfect ride for your journey - from classic cruisers to modern adventures
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex items-center py-8"
            style={{ width: 'max-content', paddingLeft: '2rem', paddingRight: '2rem' }}
          >
            {motorcyclesData.map((motorcycle, index) => (
              <MotorcycleCard key={`${motorcycle.name}-${index}`} motorcycle={motorcycle} index={index} />
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
          <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm mb-2">
            {progress < 1 ? "Scroll to explore motorcycles →" : "Scroll down to continue"}
          </div>
          <div className="w-48 h-2 bg-gray-300 rounded-full mx-auto">
            <div
              className="h-full bg-red-600 rounded-full transition-all duration-100"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MotorcyclesSection
