"use client"
import Button from "@/components/shared/Button"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, User, MailIcon, PhoneIcon } from "lucide-react"
import { useState } from "react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our support team",
    details: "+977-1-XXXXXXX",
    secondary: "+977-98XXXXXXX",
    action: "Call Now",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    details: "info@sanchigyan.edu.np",
    secondary: "support@sanchigyan.edu.np",
    action: "Send Email",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come meet us in person",
    details: "Kathmandu, Nepal",
    secondary: "Putalisadak, Near City Hall",
    action: "Get Directions",
    color: "from-orange-500 to-amber-400"
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "We&apos;re here to help you",
    details: "Sun-Fri: 7:00 AM - 7:00 PM",
    secondary: "Sat: 9:00 AM - 5:00 PM",
    action: "View Schedule",
    color: "from-purple-500 to-violet-400"
  }
]

const faqs = [
  {
    question: "What courses do you offer for high school students?",
    answer: "We offer comprehensive courses for classes 2-10 covering all major subjects including Mathematics, Science, English, Nepali, Social Studies, and Computer Science."
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can enroll directly through our website, via phone call, or by visiting our office. Our team will guide you through the entire process."
  },
  {
    question: "Do you offer scholarships or financial aid?",
    answer: "Yes, we provide scholarships for deserving students. Contact our support team to learn about eligibility criteria and application process."
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#f8fdff] to-[#f0f9ff] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="top-0 right-0 absolute w-full h-full overflow-hidden">
          <div className="top-0 right-0 absolute bg-[#9AD0D3] opacity-10 blur-3xl rounded-full w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="bottom-0 left-0 absolute bg-[#EDBEA4] opacity-10 blur-3xl rounded-full w-[500px] h-[500px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Get in <span className="text-[#06a6ae]">Touch</span>
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg md:text-xl leading-relaxed">
              We&apos;re here to help you on your educational journey. Whether you have questions about courses, 
              need technical support, or want to discuss learning opportunities, our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 shadow-lg hover:shadow-xl backdrop-blur-sm p-6 border border-gray-100 rounded-2xl group-hover:scale-105 transition-all duration-300">
                  <div className={`flex justify-center items-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl mb-4 mx-auto`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900 text-lg text-center">{method.title}</h3>
                  <p className="mb-4 text-gray-600 text-sm text-center">{method.description}</p>
                  <div className="mb-4 text-center">
                    <div className="font-semibold text-gray-900">{method.details}</div>
                    <div className="mt-1 text-gray-500 text-sm">{method.secondary}</div>
                  </div>
                  <Button variant="secondary" className="py-2 w-full text-sm">
                    {method.action}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-12 grid lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/90 shadow-xl backdrop-blur-sm p-8 border border-gray-100 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] rounded-2xl w-12 h-12">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-2xl">Send us a Message</h2>
                    <p className="text-gray-600">We&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="gap-6 grid md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-sm">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="py-3 pr-4 pl-10 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2 w-full transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium text-gray-700 text-sm">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <PhoneIcon className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="py-3 pr-4 pl-10 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2 w-full transition-all"
                          placeholder="+977 XXX XXX XXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-sm">
                      Email Address *
                    </label>
                    <div className="relative">
                      <MailIcon className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 pr-4 pl-10 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2 w-full transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 text-sm">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-3 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2 w-full transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="payment-issue">Payment Issue</option>
                      <option value="scholarship">Scholarship Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-sm">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="px-4 py-3 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2 w-full transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#06a6ae] hover:from-[#059298] to-[#9AD0D3] hover:to-[#88c2c5] shadow-lg hover:shadow-xl py-3 rounded-xl w-full font-semibold text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Interactive Map */}
              <div className="bg-white/90 shadow-xl backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden">
                <div className="flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 h-64">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 w-12 h-12 text-[#06a6ae]" />
                    <h3 className="font-bold text-gray-900 text-lg">Kathmandu Office</h3>
                    <p className="text-gray-600">Putalisadak, Near City Hall</p>
                    <Button variant="secondary" className="mt-4">
                      Open in Maps
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-4 font-bold text-lg">Visit Our Office</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#06a6ae]" />
                      <span className="text-gray-700">Sunday - Friday: 7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#06a6ae]" />
                      <span className="text-gray-700">Saturday: 9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#06a6ae]" />
                      <span className="text-gray-700">+977-1-XXXXXXX</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 shadow-xl backdrop-blur-sm p-6 border border-gray-100 rounded-2xl">
                <h3 className="mb-6 font-bold text-gray-900 text-xl">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-gray-100 border-b last:border-b-0">
                      <h4 className="mb-2 font-semibold text-gray-900">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Button variant="secondary" className="mt-6 w-full">
                  View All FAQs
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Support Banner */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] p-8 rounded-2xl text-white text-center"
          >
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 font-bold text-2xl md:text-3xl">Need Immediate Help?</h2>
              <p className="mb-6 text-white/90">
                For urgent technical issues or course access problems, our emergency support line is available 24/7.
              </p>
              <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+977-98XXXXXXX</span>
                </div>
                <Button variant="secondary" className="bg-white hover:bg-gray-100 text-[#06a6ae]">
                  Emergency Support
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}