"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Upload, CheckCircle } from "lucide-react"
import Button from "@/components/shared/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Job {
  _id: string
  title: string
  department: string
}

interface Props {
  job: Job
  userEmail: string | null | undefined
  userName: string | null | undefined
}

export default function JobApplicationForm({ job, userEmail, userName }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  
  const [formData, setFormData] = useState({
    fullName: userName || "",
    address: "",
    email: userEmail || "",
    phone: "",
    education: "",
    coverLetter: "",
    jobTitle: job.title,
    jobId: job._id
  })
  
  const [resume, setResume] = useState<File | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setError("Please upload PDF or DOC file only")
        return
      }
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should not exceed 5MB")
        return
      }
      setResume(file)
      setError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Create FormData for file upload
      const data = new FormData()
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key as keyof typeof formData])
      })
      if (resume) {
        data.append('resume', resume)
      }

      const response = await fetch('/api/job-applications', {
        method: 'POST',
        body: data
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/careers')
      }, 3000)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex justify-center items-center bg-gradient-to-br from-white via-[#f8fdff] to-[#f0f9ff] min-h-screen">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white shadow-lg p-12 rounded-2xl max-w-md text-center"
        >
          <CheckCircle className="mx-auto mb-6 w-20 h-20 text-green-500" />
          <h2 className="mb-4 font-bold text-gray-900 text-3xl">Application Submitted!</h2>
          <p className="mb-6 text-gray-600">
            Thank you for applying. We'll review your application and get back to you soon.
          </p>
          <Link href="/careers">
            <Button>Back to Careers</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#f8fdff] to-[#f0f9ff] py-20 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        <Link href={`/careers/${job._id}`}>
          <Button variant="secondary" className="flex justify-around items-center mb-6 p-2">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Job Details
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg p-8 rounded-2xl"
        >
          <h1 className="mb-2 font-bold text-gray-900 text-3xl">Apply for Position</h1>
          <p className="mb-8 text-gray-600 text-lg">{job.title} - {job.department}</p>

          {error && (
            <div className="bg-red-100 mb-6 px-4 py-3 border-2 border-red-400 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-[#06a6ae] focus:ring-2 w-full"
                placeholder="Enter your full name"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-[#06a6ae] focus:ring-2 w-full"
                placeholder="Enter your address"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled
                className="bg-gray-50 px-4 py-3 border border-gray-300 rounded-lg w-full cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-[#06a6ae] focus:ring-2 w-full"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Education */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Educational Qualification <span className="text-red-500">*</span>
              </label>
              <select
                title="Educational Qualification"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-[#06a6ae] focus:ring-2 w-full"
              >
                <option value="">Select qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Upload Resume/Portfolio <span className="text-red-500">*</span>
              </label>
              <div className="p-6 border-2 border-gray-300 hover:border-[#06a6ae] border-dashed rounded-lg text-center transition-colors">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="mx-auto mb-3 w-12 h-12 text-gray-400" />
                  <p className="mb-1 text-gray-600">
                    {resume ? resume.name : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-gray-500 text-sm">PDF or DOC (max 5MB)</p>
                </label>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Cover Letter (Optional)
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={5}
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-[#06a6ae] focus:ring-2 w-full"
                placeholder="Tell us why you're a great fit for this role..."
              />
            </div>

            {/* Job Title (Read-only) */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Job Title Applied For
              </label>
              <input
                title="Job title"
                type="text"
                value={formData.jobTitle}
                disabled
                className="bg-gray-50 px-4 py-3 border border-gray-300 rounded-lg w-full cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="py-3 w-full text-lg"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}