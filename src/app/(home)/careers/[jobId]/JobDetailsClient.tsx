
"use client"
import { motion } from "framer-motion"
import { MapPin, Clock,  Briefcase, Calendar, ArrowLeft } from "lucide-react"
import Button from "@/components/shared/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useState } from "react"

interface Job {
  _id: string
  title: string
  description: string
  department: string
  location: string
  type: string
  salary?: string
  requirements: string[]
  experience: string
  deadline: string
  responsibilities?: string[]
  qualifications?: string[]
  benefits?: string[]
}

export default function JobDetailsClient({ job }: { job: Job }) {
  const router = useRouter()
  const { status } = useSession()
  const [showLoginAlert, setShowLoginAlert] = useState(false)

  const handleApplyClick = () => {
    if (status === "unauthenticated") {
      setShowLoginAlert(true)
      setTimeout(() => {
        router.push(`/login?callbackUrl=/careers/${job._id}/apply`)
      }, 2000)
    } else {
      router.push(`/careers/${job._id}/apply`)
    }
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#f8fdff] to-[#f0f9ff] py-20 min-h-screen">
      {/* Login Alert */}
      {showLoginAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="top-4 left-1/2 z-50 fixed bg-yellow-100 shadow-lg p-4 border-2 border-yellow-400 rounded-lg -translate-x-1/2"
        >
          <p className="font-medium text-yellow-800">
            Please login first to apply for this position
          </p>
        </motion.div>
      )}

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        {/* Back Button */}
        <Link href="/careers">
          <Button variant="secondary" className="flex justify-around items-center mb-6 p-2">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Careers
          </Button>
        </Link>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg mb-8 p-8 rounded-2xl"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="mb-2 font-bold text-gray-900 text-3xl">{job.title}</h1>
              <p className="text-gray-600 text-lg">{job.department}</p>
            </div>
            <div className="text-right">
              <div className="font-bold text-[#06a6ae] text-2xl">{job.salary}</div>
            </div>
          </div>

          <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Apply by {job.deadline}</span>
            </div>
          </div>

          <Button onClick={handleApplyClick} className="px-8 py-3 w-full md:w-auto">
            Apply for this Position
          </Button>
        </motion.div>

        {/* Job Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white shadow-lg mb-8 p-8 rounded-2xl"
        >
          <h2 className="mb-4 font-bold text-gray-900 text-2xl">Job Description</h2>
          <p className="text-gray-600 leading-relaxed">{job.description}</p>
        </motion.div>

        {/* Key Responsibilities */}
        {job.responsibilities && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white shadow-lg mb-8 p-8 rounded-2xl"
          >
            <h2 className="mb-4 font-bold text-gray-900 text-2xl">Key Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-[#06a6ae] mt-2 rounded-full w-2 h-2"></div>
                  <span className="text-gray-600">{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white shadow-lg mb-8 p-8 rounded-2xl"
        >
          <h2 className="mb-4 font-bold text-gray-900 text-2xl">Requirements</h2>
          <div className="flex flex-wrap gap-2">
            {job.requirements.map((req, index) => (
              <span
                key={index}
                className="bg-[#06a6ae]/10 px-4 py-2 rounded-full font-medium text-[#06a6ae] text-sm"
              >
                {req}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Apply Button Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] shadow-lg p-8 rounded-2xl text-center"
        >
          <h2 className="mb-4 font-bold text-white text-2xl">
            Ready to Join Our Team?
          </h2>
          <p className="mb-6 text-white/90">
            Take the next step in your career with Sanchi Gyan
          </p>
          <Button
            onClick={handleApplyClick}
            variant="secondary"
            className="bg-white hover:bg-gray-100 px-8 py-3 text-[#06a6ae]"
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </div>
  )
}