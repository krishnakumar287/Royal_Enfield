"use client"

import { MapPin, Clock, Users, Briefcase, GraduationCap, Heart } from "lucide-react"

const jobOpenings = [
  {
    title: "Senior Software Engineer",
    department: "Technology",
    location: "Chennai, India",
    type: "Full-time",
    experience: "5-8 years",
    description: "Join our technology team to build next-generation digital experiences for Royal Enfield riders.",
  },
  {
    title: "Product Manager - Motorcycles",
    department: "Product Development",
    location: "Chennai, India",
    type: "Full-time",
    experience: "7-10 years",
    description: "Lead product strategy and development for our iconic motorcycle lineup.",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Gurugram, India",
    type: "Full-time",
    experience: "4-6 years",
    description: "Drive brand campaigns and marketing initiatives across digital and traditional channels.",
  },
  {
    title: "Design Engineer",
    department: "R&D",
    location: "Chennai, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Design and develop innovative motorcycle components and systems.",
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "2-4 years",
    description: "Drive sales growth and customer relationships at our dealership network.",
  },
  {
    title: "Quality Assurance Engineer",
    department: "Manufacturing",
    location: "Chennai, India",
    type: "Full-time",
    experience: "3-6 years",
    description: "Ensure the highest quality standards in our manufacturing processes.",
  },
]

const benefits = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Learning & Development",
    description: "Continuous learning opportunities, skill development programs, and career growth",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous leave policies",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Employee Benefits",
    description: "Competitive salary, performance bonuses, and employee motorcycle purchase schemes",
  },
]

const dealershipCareers = [
  {
    role: "Dealership Owner",
    investment: "₹2-5 Crores",
    location: "Pan India",
    description: "Own and operate a Royal Enfield dealership in your city",
  },
  {
    role: "Sales Manager",
    experience: "5+ years",
    location: "Major Cities",
    description: "Lead sales teams at our premium dealership locations",
  },
  {
    role: "Service Advisor",
    experience: "2-4 years",
    location: "All Dealerships",
    description: "Provide expert service consultation to Royal Enfield customers",
  },
  {
    role: "Parts Specialist",
    experience: "1-3 years",
    location: "Service Centers",
    description: "Manage genuine parts inventory and customer requirements",
  },
]

const CareersSection = () => {
  return (
    <section id="careers" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Careers</h2>
          <p className="text-xl text-gray-300">Join the Royal Enfield family and be part of our legendary journey</p>
        </div>

        {/* Life at Royal Enfield */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Life at Royal Enfield</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Life+at+Royal+Enfield"
                alt="Life at Royal Enfield"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Be Part of Something Legendary</h4>
              <p className="text-gray-300 mb-4">
                At Royal Enfield, we don't just make motorcycles – we craft legends. Our team is passionate about
                creating experiences that inspire adventure and foster community among riders worldwide.
              </p>
              <p className="text-gray-300 mb-4">
                We believe in nurturing talent, encouraging innovation, and maintaining the highest standards of
                craftsmanship. Join us in our mission to continue the legacy of pure motorcycling.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're an engineer, designer, marketer, or sales professional, there's a place for you in our
                diverse and inclusive workplace where every voice matters.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Watch Our Culture Video
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black rounded-lg p-6 text-center">
                <div className="text-red-500 mb-4 flex justify-center">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Current Openings</h3>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">{job.experience}</span>
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 mt-4 md:mt-0">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              View All Openings
            </button>
          </div>
        </div>

        {/* Careers at Dealership */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Careers at Dealership</h3>
          <div className="bg-black rounded-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Join Our Dealership Network</h4>
              <p className="text-gray-300">
                Be part of our extensive dealership network and help bring the Royal Enfield experience to riders across
                the country. We offer various opportunities from ownership to employment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dealershipCareers.map((career, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-3">{career.role}</h5>
                  <div className="space-y-2 mb-4">
                    {career.investment && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investment:</span>
                        <span className="text-red-500 font-semibold">{career.investment}</span>
                      </div>
                    )}
                    {career.experience && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Experience:</span>
                        <span className="text-white">{career.experience}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white">{career.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{career.description}</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersSection
