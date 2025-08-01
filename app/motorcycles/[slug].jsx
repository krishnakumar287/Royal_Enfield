"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const motorcyclesData = [
  {
    slug: "hunter-350",
    name: "Hunter 350",
    price: "₹1,49,900",
    category: "Roadster",
    image: "/placeholder.svg?height=300&width=400&text=Hunter+350",
    description: "A dynamic roadster with a modern twist, perfect for city rides and beyond.",
    features: ["349cc engine", "20.2 bhp", "5-speed gearbox", "Dual-channel ABS"],
  },
  {
    slug: "classic-650",
    name: "Classic 650",
    price: "₹3,24,755",
    category: "Twin",
    image: "/placeholder.svg?height=300&width=400&text=Classic+650",
    description: "A timeless classic with a powerful twin engine for those who love heritage and performance.",
    features: ["648cc twin engine", "47 bhp", "6-speed gearbox", "Retro styling"],
  },
  {
    slug: "scram-440",
    name: "Scram 440",
    price: "₹2,08,755",
    category: "Adventure",
    image: "/placeholder.svg?height=300&width=400&text=Scram+440",
    description: "Adventure-ready scrambler for on and off-road fun.",
    features: ["440cc engine", "Long travel suspension", "Dual-purpose tires", "Digital console"],
  },
  {
    slug: "goan-classic-350",
    name: "Goan Classic 350",
    price: "₹2,04,755",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Goan+Classic",
    description: "A cruiser inspired by the spirit of Goa, blending comfort and style.",
    features: ["350cc engine", "Classic design", "Comfort seat", "Chrome accents"],
  },
  {
    slug: "bear-650",
    name: "Bear 650",
    price: "₹3,39,755",
    category: "Scrambler",
    image: "/placeholder.svg?height=300&width=400&text=Bear+650",
    description: "A powerful scrambler for those who crave adventure and performance.",
    features: ["648cc engine", "High ground clearance", "Knobby tires", "LED lighting"],
  },
  {
    slug: "classic-350",
    name: "Classic 350",
    price: "₹1,93,389",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Classic+350",
    description: "The iconic Classic 350, a symbol of pure motorcycling.",
    features: ["349cc engine", "Timeless design", "Reliable performance", "Comfortable ride"],
  },
  {
    slug: "guerrilla-450",
    name: "Guerrilla 450",
    price: "₹2,39,755",
    category: "Roadster",
    image: "/placeholder.svg?height=300&width=400&text=Guerrilla+450",
    description: "A bold roadster for the urban explorer.",
    features: ["450cc engine", "Aggressive styling", "Lightweight frame", "Modern tech"],
  },
  {
    slug: "shotgun-650",
    name: "Shotgun 650",
    price: "₹3,59,755",
    category: "Bobber",
    image: "/placeholder.svg?height=300&width=400&text=Shotgun+650",
    description: "A bobber with attitude and a punchy twin engine.",
    features: ["648cc engine", "Bobber styling", "Solo seat", "Custom options"],
  },
  {
    slug: "new-himalayan",
    name: "New Himalayan",
    price: "₹2,85,755",
    category: "Adventure",
    image: "/placeholder.svg?height=300&width=400&text=New+Himalayan",
    description: "The all-new Himalayan, built for adventure and exploration.",
    features: ["452cc engine", "Long travel suspension", "Rugged build", "Navigation display"],
  },
  {
    slug: "bullet-350",
    name: "Bullet 350",
    price: "₹1,74,755",
    category: "Classic",
    image: "/placeholder.svg?height=300&width=400&text=Bullet+350",
    description: "A true classic, the Bullet 350 is a legend on Indian roads.",
    features: ["346cc engine", "Iconic design", "Reliable build", "Comfortable seat"],
  },
  {
    slug: "super-meteor-650",
    name: "Super Meteor 650",
    price: "₹3,49,755",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Super+Meteor",
    description: "A premium cruiser with a powerful twin engine and modern features.",
    features: ["648cc engine", "Premium finish", "LED headlamp", "Touring comfort"],
  },
  {
    slug: "meteor-350",
    name: "Meteor 350",
    price: "₹2,06,584",
    category: "Cruiser",
    image: "/placeholder.svg?height=300&width=400&text=Meteor+350",
    description: "A cruiser designed for the open road, blending comfort and style.",
    features: ["349cc engine", "Ergonomic design", "Bluetooth connectivity", "Alloy wheels"],
  },
]

export default function MotorcycleDetailPage({ params }) {
  const { slug } = params
  const [bike, setBike] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const found = motorcyclesData.find((m) => m.slug === slug)
    if (!found) {
      router.replace("/motorcycles")
    } else {
      setBike(found)
    }
  }, [slug, router])

  if (!bike) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="max-w-3xl mx-auto p-8">
      <img src={bike.image} alt={bike.name} className="w-full h-80 object-cover rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-2">{bike.name}</h1>
      <div className="text-lg text-gray-600 mb-2">{bike.category}</div>
      <div className="text-2xl text-red-600 font-bold mb-4">{bike.price}</div>
      <p className="mb-6 text-gray-700">{bike.description}</p>
      <h2 className="text-xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-6">
        {bike.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300" onClick={() => router.back()}>
        Back
      </button>
    </div>
  )
}
