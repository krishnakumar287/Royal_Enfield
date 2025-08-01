"use client"

import {
  Smartphone,
  Tv,
  Navigation,
  Headphones,
  Camera,
  Coffee,
  Wrench,
  Globe,
  ImageIcon,
  Factory,
  Users,
  Award,
} from "lucide-react"

const digitalProducts = [
  {
    title: "Royal Enfield TV",
    description: "Exclusive content, documentaries, and stories from the world of Royal Enfield",
    icon: <Tv className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Royal+Enfield+TV",
  },
  {
    title: "Royal Enfield App",
    description: "Your companion app for service bookings, ride tracking, and community features",
    icon: <Smartphone className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=RE+App",
  },
  {
    title: "Royal Enfield Tripper",
    description: "Turn-by-turn navigation system designed specifically for motorcycles",
    icon: <Navigation className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Tripper+Navigation",
  },
  {
    title: "Royal Enfield Wingman",
    description: "Advanced connectivity solution for enhanced riding experience",
    icon: <Headphones className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Wingman",
  },
  {
    title: "Royal Enfield Tripper Dash",
    description: "Next-generation instrument cluster with smartphone connectivity",
    icon: <Camera className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Tripper+Dash",
  },
]

const experiences = [
  {
    title: "Reown",
    description: "Certified pre-owned Royal Enfield motorcycles with warranty and quality assurance",
    icon: <Award className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Reown+Program",
  },
  {
    title: "Goa Garage Cafe",
    description: "A unique cafe experience celebrating motorcycle culture and community",
    icon: <Coffee className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Garage+Cafe",
  },
  {
    title: "Custom World",
    description: "Personalize your Royal Enfield with genuine accessories and customization options",
    icon: <Wrench className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Custom+World",
  },
]

const heritage = [
  {
    title: "Since 1901",
    description: "Explore our rich heritage and the stories that shaped Royal Enfield",
    icon: <Globe className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Heritage+1901",
  },
  {
    title: "Made In Madras",
    description: "Discover how our Chennai facility crafts each Royal Enfield motorcycle",
    icon: <Factory className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Made+in+Madras",
  },
  {
    title: "Our Social Mission",
    description: "Learn about our commitment to community development and social responsibility",
    icon: <Users className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Social+Mission",
  },
  {
    title: "Wallpapers",
    description: "Download high-quality Royal Enfield wallpapers for your devices",
    icon: <ImageIcon className="w-8 h-8" />,
    image: "/placeholder.svg?height=200&width=300&text=Wallpapers",
  },
]

const OurWorldSection = () => {
  return (
    <section id="our-world" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our World</h2>
          <p className="text-xl text-gray-300">Discover the complete Royal Enfield ecosystem</p>
        </div>

        {/* Digital Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Digital Innovation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-red-500 mr-3">{product.icon}</div>
                    <h4 className="text-lg font-bold text-white">{product.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Unique Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-red-500 mr-3">{experience.icon}</div>
                    <h4 className="text-lg font-bold text-white">{experience.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage & Community */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Heritage & Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heritage.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-red-500 mr-3">{item.icon}</div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm">
                    Discover
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News and Media Link */}
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-300 mb-6">
            Get the latest updates, news, and stories from the Royal Enfield community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Visit News & Media
            </button>
            <button className="border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWorldSection
