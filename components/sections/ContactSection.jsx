"use client"

import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react"

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Support",
    details: "1800-210-0007",
    description: "Mon-Sat: 9:00 AM - 6:00 PM",
    action: "Call Now",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Support",
    details: "support@royalenfield.com",
    description: "We'll respond within 24 hours",
    action: "Send Email",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    details: "Find nearest dealership",
    description: "500+ locations across India",
    action: "Find Store",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Live Chat",
    details: "Chat with our experts",
    description: "Available 24/7",
    action: "Start Chat",
  },
]

const offices = [
  {
    city: "Chennai (Head Office)",
    address: "Tiruvottiyur High Road, Tiruvottiyur, Chennai - 600019",
    phone: "+91-44-42200000",
    email: "info@royalenfield.com",
  },
  {
    city: "Gurugram",
    address: "Tower A, DLF Phase II, Sector 24, Gurugram - 122002",
    phone: "+91-124-4819000",
    email: "marketing@royalenfield.com",
  },
  {
    city: "Mumbai",
    address: "Nariman Point, Mumbai - 400021",
    phone: "+91-22-66289000",
    email: "mumbai@royalenfield.com",
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">Get in touch with us for any queries or support</p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-6 text-center hover:bg-gray-800 transition-all duration-300"
            >
              <div className="text-red-500 mb-4 flex justify-center">{method.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
              <p className="text-red-400 font-semibold mb-2">{method.details}</p>
              <p className="text-gray-300 text-sm mb-4">{method.description}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-black rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Service Support</option>
                  <option>Parts & Accessories</option>
                  <option>Test Ride</option>
                  <option>Dealership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-black rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-500 mb-3">{office.city}</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-300 text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-300 text-sm">{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-black rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-red-500 mb-2">How can I book a test ride?</h4>
                <p className="text-gray-300">
                  You can book a test ride online through our website, mobile app, or by visiting your nearest Royal
                  Enfield dealership.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-500 mb-2">What is the warranty period?</h4>
                <p className="text-gray-300">
                  All Royal Enfield motorcycles come with a 3-year/40,000 km warranty, whichever comes first.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-500 mb-2">Where can I find service centers?</h4>
                <p className="text-gray-300">
                  Use our store locator on the website or app to find the nearest authorized service center in your
                  area.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-red-500 mb-2">How do I become a dealer?</h4>
                <p className="text-gray-300">
                  Visit our 'Become a Dealer' section or contact our business development team for partnership
                  opportunities.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-500 mb-2">Are genuine parts available online?</h4>
                <p className="text-gray-300">
                  Yes, genuine Royal Enfield parts and accessories are available through our official website and
                  authorized dealers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-500 mb-2">What are the service intervals?</h4>
                <p className="text-gray-300">
                  We recommend servicing every 6 months or 10,000 km, whichever comes first, for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
