"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Search, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

// Dummy data
const featuredCourses = [
  {
    id: 1,
    title: "Grade 8 – Science Masterclass",
    teacher: "Dr. Sharma",
    rating: 4.8,
    students: 320,
    image: "https://i.ibb.co/3zJxwBk/science.jpg",
  },
  {
    id: 2,
    title: "Grade 6 – Mathematics Essentials",
    teacher: "Prof. Karki",
    rating: 4.9,
    students: 410,
    image: "https://i.ibb.co/5vFyM8m/math.jpg",
  },
]

const allCourses = [
  { id: 3, title: "Grade 7 – English Grammar", rating: 4.7, students: 210, image: "https://i.ibb.co/VD8k1r1/english.jpg" },
  { id: 4, title: "Grade 9 – Social Studies", rating: 4.6, students: 185, image: "https://i.ibb.co/NykdcgT/social.jpg" },
  { id: 5, title: "Grade 10 – Nepali Literature", rating: 4.8, students: 280, image: "https://i.ibb.co/8j6nW2s/nepali.jpg" },
  { id: 6, title: "Grade 5 – Basic Science", rating: 4.5, students: 160, image: "https://i.ibb.co/Z6q5Ljv/basic-science.jpg" },
]

// ⭐ Rating component
const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 text-yellow-500">
    <Star className="fill-current w-4 h-4" />
    <span className="text-sm">{rating.toFixed(1)}</span>
  </div>
)

export default function CoursesPage() {
  const [search, setSearch] = useState("")

  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-sky-100 min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto py-16 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-sky-900 text-4xl md:text-5xl"
        >
          Explore Courses for Classes 2–10
        </motion.h1>
        <p className="mt-4 text-gray-600 text-lg">
          Learn with interactive lessons, practice tests, and expert guidance – tailored for Nepal’s high school curriculum.
        </p>

        <div className="flex justify-center gap-2 mx-auto mt-6 max-w-md">
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white shadow-md"
          />
          <Button>
            <Search className="mr-1 w-4 h-4" /> Search
          </Button>
        </div>
      </section>

      <Separator />

      {/* Featured Courses */}
      <section className="mx-auto py-12 max-w-6xl">
        <h2 className="mb-6 font-semibold text-sky-900 text-2xl">🌟 Featured Courses</h2>
        <div className="gap-6 grid md:grid-cols-2">
          {featuredCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-gray-500 text-sm">By {course.teacher}</p>
                  <div className="flex justify-between items-center mt-3">
                    <Rating rating={course.rating} />
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="mr-1 w-4 h-4" /> {course.students}
                    </div>
                  </div>
                  <Button className="mt-4 w-full">View Details</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator />

      {/* All Courses */}
      <section className="mx-auto py-12 max-w-6xl">
        <h2 className="mb-6 font-semibold text-sky-900 text-2xl">📚 All Courses</h2>
        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
          {allCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-md overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <Rating rating={course.rating} />
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="mr-1 w-4 h-4" /> {course.students}
                    </div>
                  </div>
                  <Button className="mt-4 w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 py-12 text-white text-center">
        <h2 className="font-bold text-3xl">Start Your Learning Journey Today</h2>
        <p className="mt-2 text-lg">Choose from 100+ courses for Classes 2–10.</p>
        <Button className="bg-white hover:bg-gray-200 mt-6 text-sky-700">Join Now</Button>
      </section>
    </div>
  )
}
