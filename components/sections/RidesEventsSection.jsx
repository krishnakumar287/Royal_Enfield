"use client"

import { Calendar, MapPin, Users, Clock } from "lucide-react"

const ridesData = [
  {
    title: "Himalayan Odyssey 2024",
    date: "June 15-30, 2024",
    location: "Leh-Ladakh",
    participants: "50 Riders",
    duration: "15 Days",
    image: "/placeholder.svg?height=300&width=400&text=Himalayan+Odyssey",
    description: "The ultimate high-altitude adventure through the world's highest motorable roads.",
  },
  {
    title: "Rider Mania 2024",
    date: "November 22-24, 2024",
    location: "Goa",
    participants: "5000+ Riders",
    duration: "3 Days",
    image: "/placeholder.svg?height=300&width=400&text=Rider+Mania",
    description: "The biggest Royal Enfield gathering in India with music, rides, and community.",
  },
  {
    title: "One Ride",
    date: "April 7, 2024",
    location: "Pan India",
    participants: "100,000+ Riders",
    duration: "1 Day",
    image: "/placeholder.svg?height=300&width=400&text=One+Ride",
    description: "A synchronized ride across the country celebrating the spirit of motorcycling.",
  },
]

const rentalsData = [
  {
    model: "Classic 350",
    price: "₹1,200/day",
    locations: "Delhi, Mumbai, Bangalore",
    image: "/placeholder.svg?height=200&width=300&text=Classic+350+Rental",
  },
  {
    model: "Himalayan",
    price: "₹1,800/day",
    locations: "Manali, Leh, Rishikesh",
    image: "/placeholder.svg?height=200&width=300&text=Himalayan+Rental",
  },
  {
    model: "Interceptor 650",
    price: "₹2,000/day",
    locations: "Goa, Chennai, Pune",
    image: "/placeholder.svg?height=200&width=300&text=Interceptor+Rental",
  },
]

const toursData = [
  {
    name: "Spiti Valley Expedition",
    duration: "12 Days",
    difficulty: "Extreme",
    price: "₹85,000",
    image: "/placeholder.svg?height=250&width=350&text=Spiti+Valley",
  },
  {
    name: "Rajasthan Heritage Tour",
    duration: "8 Days",
    difficulty: "Moderate",
    price: "₹65,000",
    image: "/placeholder.svg?height=250&width=350&text=Rajasthan+Tour",
  },
  {
    name: "Coastal Karnataka Ride",
    duration: "5 Days",
    difficulty: "Easy",
    price: "₹45,000",
    image: "/placeholder.svg?height=250&width=350&text=Karnataka+Coast",
  },
]

const RidesEventsSection = () => {
  return (
    <section id="rides-events" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Rides & Events</h2>
          <p className="text-xl text-gray-300">Join epic adventures and connect with fellow riders</p>
        </div>

        {/* Rides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Upcoming Rides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ridesData.map((ride, index) => (
              <div
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img src={ride.image || "/placeholder.svg"} alt={ride.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{ride.title}</h4>
                  <p className="text-gray-300 mb-4">{ride.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{ride.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{ride.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{ride.participants}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{ride.duration}</span>
                    </div>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rentals */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Motorcycle Rentals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalsData.map((rental, index) => (
              <div
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img src={rental.image || "/placeholder.svg"} alt={rental.model} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{rental.model}</h4>
                  <p className="text-2xl font-bold text-red-500 mb-2">{rental.price}</p>
                  <p className="text-gray-300 mb-4">Available in: {rental.locations}</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tours */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Guided Tours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.map((tour, index) => (
              <div
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img src={tour.image || "/placeholder.svg"} alt={tour.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{tour.name}</h4>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300">{tour.duration}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        tour.difficulty === "Easy"
                          ? "bg-green-600 text-white"
                          : tour.difficulty === "Moderate"
                            ? "bg-yellow-600 text-white"
                            : "bg-red-600 text-white"
                      }`}
                    >
                      {tour.difficulty}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-red-500 mb-4">{tour.price}</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                    Book Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RidesEventsSection
