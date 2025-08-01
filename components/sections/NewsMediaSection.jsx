"use client"

import { Calendar, ExternalLink, Download } from "lucide-react"

const newsData = [
  {
    title: "Royal Enfield Launches All-New Himalayan 450",
    date: "January 15, 2024",
    category: "Product Launch",
    excerpt:
      "The new Himalayan 450 sets new benchmarks in adventure motorcycling with enhanced performance and features.",
    image: "/placeholder.svg?height=200&width=300&text=Himalayan+450+News",
    featured: true,
  },
  {
    title: "Royal Enfield Expands Global Footprint",
    date: "December 20, 2023",
    category: "Business",
    excerpt: "Company announces expansion into 5 new international markets, strengthening global presence.",
    image: "/placeholder.svg?height=200&width=300&text=Global+Expansion",
    featured: false,
  },
  {
    title: "Rider Mania 2023 Breaks All Records",
    date: "November 25, 2023",
    category: "Events",
    excerpt: "Over 8,000 riders gather in Goa for the biggest Royal Enfield celebration of the year.",
    image: "/placeholder.svg?height=200&width=300&text=Rider+Mania+2023",
    featured: false,
  },
  {
    title: "Royal Enfield Wins 'Motorcycle of the Year'",
    date: "October 10, 2023",
    category: "Awards",
    excerpt: "Continental GT 650 receives prestigious award for design and performance excellence.",
    image: "/placeholder.svg?height=200&width=300&text=Award+Winner",
    featured: false,
  },
]

const pressReleases = [
  {
    title: "Q3 FY2024 Financial Results",
    date: "February 1, 2024",
    type: "Financial",
    downloadUrl: "#",
  },
  {
    title: "New Manufacturing Facility Announcement",
    date: "January 20, 2024",
    type: "Business",
    downloadUrl: "#",
  },
  {
    title: "Sustainability Initiative Launch",
    date: "December 15, 2023",
    type: "CSR",
    downloadUrl: "#",
  },
  {
    title: "Partnership with Adventure Tourism Board",
    date: "November 30, 2023",
    type: "Partnership",
    downloadUrl: "#",
  },
]

const mediaKit = [
  {
    title: "Brand Guidelines",
    description: "Official Royal Enfield brand guidelines and logo usage",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    title: "Product Images - High Resolution",
    description: "High-quality images of all Royal Enfield motorcycles",
    type: "ZIP",
    size: "45 MB",
  },
  {
    title: "Company Fact Sheet",
    description: "Key facts and figures about Royal Enfield",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Executive Bios",
    description: "Biographies of key leadership team members",
    type: "PDF",
    size: "800 KB",
  },
]

const upcomingEvents = [
  {
    title: "Royal Enfield Himalayan Odyssey 2024",
    date: "June 15-30, 2024",
    location: "Leh-Ladakh",
    type: "Adventure Ride",
  },
  {
    title: "Royal Enfield Continental GT Cup",
    date: "March 10-12, 2024",
    location: "Chennai",
    type: "Racing Event",
  },
  {
    title: "One Ride 2024",
    date: "April 7, 2024",
    location: "Pan India",
    type: "Community Ride",
  },
  {
    title: "Royal Enfield Rider Mania 2024",
    date: "November 22-24, 2024",
    location: "Goa",
    type: "Festival",
  },
]

const NewsMediaSection = () => {
  return (
    <section id="news-media" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">News & Media</h2>
          <p className="text-xl text-gray-300">Stay updated with the latest from Royal Enfield</p>
        </div>

        {/* Latest News */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Latest News</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured News */}
            <div className="lg:col-span-2">
              {newsData
                .filter((news) => news.featured)
                .map((news, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6">
                        <div className="flex items-center mb-2">
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                            {news.category}
                          </span>
                          <span className="text-gray-400 text-sm flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {news.date}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{news.title}</h4>
                        <p className="text-gray-300 mb-4">{news.excerpt}</p>
                        <button className="flex items-center text-red-500 hover:text-red-400 font-semibold">
                          Read More <ExternalLink className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Other News */}
            {newsData
              .filter((news) => !news.featured)
              .map((news, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                        {news.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {news.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{news.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{news.excerpt}</p>
                    <button className="flex items-center text-red-500 hover:text-red-400 font-semibold text-sm">
                      Read More <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Press Releases</h3>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{release.title}</h4>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{release.date}</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">{release.type}</span>
                    </div>
                  </div>
                  <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Media Kit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="bg-black rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-semibold">{item.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{item.size}</span>
                  <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>
                <p className="text-gray-300 mb-4">{event.location}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsMediaSection
