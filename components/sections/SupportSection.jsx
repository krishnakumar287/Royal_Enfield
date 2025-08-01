"use client"

import { MapPin, Phone, Mail, Book, Wrench, Store, UserPlus, Package } from "lucide-react"

const supportServices = [
  {
    title: "Service Centres",
    description: "Find authorized service centers near you for maintenance and repairs",
    icon: <Wrench className="w-8 h-8" />,
    action: "Find Centers",
  },
  {
    title: "Stores",
    description: "Locate Royal Enfield stores and dealerships across the country",
    icon: <Store className="w-8 h-8" />,
    action: "Find Stores",
  },
  {
    title: "Owner's Manual",
    description: "Download comprehensive manuals for your Royal Enfield motorcycle",
    icon: <Book className="w-8 h-8" />,
    action: "Download",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our customer support team for assistance",
    icon: <Phone className="w-8 h-8" />,
    action: "Contact",
  },
  {
    title: "Book a Test Ride",
    description: "Schedule a test ride at your nearest dealership",
    icon: <MapPin className="w-8 h-8" />,
    action: "Book Now",
  },
  {
    title: "Make It Yours",
    description: "Customize your motorcycle with genuine accessories",
    icon: <Package className="w-8 h-8" />,
    action: "Customize",
  },
  {
    title: "Become a Dealer",
    description: "Join the Royal Enfield family as an authorized dealer",
    icon: <UserPlus className="w-8 h-8" />,
    action: "Apply",
  },
  {
    title: "Become a Genuine Parts Distributor",
    description: "Partner with us to distribute genuine Royal Enfield parts",
    icon: <Package className="w-8 h-8" />,
    action: "Partner",
  },
]

const contactInfo = [
  {
    type: "Customer Care",
    phone: "1800-210-0007",
    email: "support@royalenfield.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
  {
    type: "Roadside Assistance",
    phone: "1800-103-7974",
    email: "roadside@royalenfield.com",
    hours: "24/7 Available",
  },
  {
    type: "Parts & Accessories",
    phone: "1800-572-7974",
    email: "parts@royalenfield.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
]

const SupportSection = () => {
  return (
    <section id="support" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Support</h2>
          <p className="text-xl text-gray-300">We're here to help you with all your Royal Enfield needs</p>
        </div>

        {/* Support Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-red-500 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                {service.action}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-bold text-red-500 mb-4">{contact.type}</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-300">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{contact.email}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{contact.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                question: "How often should I service my Royal Enfield?",
                answer: "We recommend servicing your Royal Enfield every 6 months or 10,000 km, whichever comes first.",
              },
              {
                question: "Where can I find genuine Royal Enfield parts?",
                answer: "Genuine parts are available at all authorized Royal Enfield dealerships and service centers.",
              },
              {
                question: "What is covered under warranty?",
                answer:
                  "Our motorcycles come with a 3-year/40,000 km warranty covering manufacturing defects and engine issues.",
              },
              {
                question: "How can I book a test ride?",
                answer:
                  "You can book a test ride online through our website or by visiting your nearest Royal Enfield dealership.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
