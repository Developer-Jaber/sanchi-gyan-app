"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Anisha K.",
    role: "Grade 12 Student",
    feedback:
      "Sanchi Gyan completely changed how I study. The courses are so interactive, and I love the quality of teaching.",
    rating: 5,
  },
  {
    name: "Ramesh P.",
    role: "Parent",
    feedback:
      "As a parent, I can see how much confidence my son has gained. The lifetime access to content is very valuable.",
    rating: 4,
  },
  {
    name: "Prakash T.",
    role: "Grade 11 Student",
    feedback:
      "Learning here feels engaging, and the instructors explain concepts clearly. It’s the best online education in Nepal!",
    rating: 5,
  },
]

export default function RatingsSection() {
  return (
    <section className="bg-gradient-to-b from-[#fefefe] via-[#fdfdfd] to-[#fafafa] py-16 md:py-24">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-[#0F172A] text-3xl md:text-4xl lg:text-5xl"
          >
            Trusted by{" "}
            <span className="relative text-[#06a6ae]">
              Thousands
              <svg
                className="-bottom-2 left-0 absolute w-full"
                viewBox="0 0 200 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 5 Q 50 10 100 5 T 200 5"
                  stroke="#EDBEA4"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hear what students and parents say about Sanchi Gyan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-white shadow-xl hover:shadow-2xl border-none rounded-2xl h-full transition-all duration-300">
                <CardContent className="flex flex-col justify-between p-6">
                  {/* Quote Icon */}
                  <Quote className="opacity-50 mb-4 w-10 h-10 text-[#9AD0D3]" />

                  {/* Feedback */}
                  <p className="mb-6 text-gray-700 italic leading-relaxed">
                    "{item.feedback}"
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < item.rating
                            ? "text-[#fcb894] fill-[#fcb894]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* User Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
