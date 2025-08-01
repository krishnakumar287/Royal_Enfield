"use client"

import { Calendar, Award, Globe, Users } from "lucide-react"

const milestones = [
  { year: "1901", event: "Royal Enfield founded in Redditch, England" },
  { year: "1955", event: "Production begins in Chennai, India" },
  { year: "1990", event: "Eicher Motors acquires Royal Enfield" },
  { year: "2013", event: "Launch of Continental GT 535" },
  { year: "2017", event: "Introduction of 650 Twin platform" },
  { year: "2020", event: "Launch of Meteor 350" },
  { year: "2023", event: "New Himalayan and Hunter 350 launched" },
  { year: "2024", event: "Expansion into new global markets" },
]

const achievements = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "123+ Years",
    description: "Of motorcycling heritage",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "60+ Countries",
    description: "Global presence",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "1M+ Riders",
    description: "Active community worldwide",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "50+ Awards",
    description: "Industry recognition",
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-gray-300">Since 1901, crafting legends on two wheels</p>
        </div>

        {/* Heritage Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="/placeholder.svg?height=500&width=700&text=Royal+Enfield+Heritage+1901"
              alt="Royal Enfield Heritage"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">Since 1901</h3>
            <p className="text-lg text-gray-300 mb-6">
              Royal Enfield is the world's oldest motorcycle brand in continuous production. Founded in 1901 in
              Redditch, England, we have been at the forefront of motorcycling for over a century, creating machines
              that embody the spirit of pure motorcycling.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From the battlefields of World War I to the highest motorable roads in the world, Royal Enfield
              motorcycles have been the trusted companions of riders who dare to explore the unexplored. Our legacy
              spans generations, connecting riders across cultures and continents.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Today, we continue to honor our heritage while embracing innovation, crafting motorcycles that inspire
              adventure and foster a sense of community among riders worldwide.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-fit">
              Read Our Full Story
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-black rounded-lg p-6 text-center">
                <div className="text-red-500 mb-4 flex justify-center">{achievement.icon}</div>
                <h4 className="text-2xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-black rounded-lg p-4">
                      <h4 className="text-xl font-bold text-red-500 mb-2">{milestone.year}</h4>
                      <p className="text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Eicher Motors */}
        <div className="bg-black rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">About Eicher Motors</h3>
              <p className="text-gray-300 mb-4">
                Eicher Motors Limited is the parent company of Royal Enfield, India's leading manufacturer of
                motorcycles. Founded in 1948, Eicher Motors has been instrumental in reviving and growing the Royal
                Enfield brand since acquiring it in 1994.
              </p>
              <p className="text-gray-300 mb-6">
                Under Eicher's stewardship, Royal Enfield has transformed from a niche brand to a global phenomenon,
                expanding its reach while staying true to its core values of authenticity, craftsmanship, and pure
                motorcycling.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                Learn More About Eicher Motors
              </button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Eicher+Motors+Logo"
                alt="Eicher Motors"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
