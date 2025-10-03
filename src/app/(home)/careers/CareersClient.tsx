"use client"
import Button from "@/components/shared/Button"
import SectionTitle from "@/components/shared/SectionTitle"
import { motion } from "framer-motion"
import { Rocket, Users, Heart, GraduationCap, MapPin, Clock, DollarSign, BookOpen, Zap, Award, UsersIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface Job {
  _id: number
  title: string
  description: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  salary?: string
  requirements: string[]
  status: 'active' | 'closed'
  createdAt: Date
  urgency: 'low' | 'medium' | 'high'
  featured: boolean
  experience: string
  deadline: string
}

interface Props {
  initialJobs: Job[]
}

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Above industry standard compensation with regular reviews",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate educators and innovators",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Clear career path and professional development support",
    color: "from-purple-500 to-violet-400"
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family",
    color: "from-pink-500 to-rose-400"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance with flexible scheduling options",
    color: "from-orange-500 to-amber-400"
  },
  {
    icon: Award,
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences",
    color: "from-red-500 to-orange-400"
  }
]

const cultureValues = [
  {
    icon: GraduationCap,
    title: "Passion for Education",
    description: "We believe in transforming lives through quality education"
  },
  {
    icon: UsersIcon,
    title: "Student First",
    description: "Every decision is made with student&apos;s success in mind"
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "We embrace new ideas and technologies to improve learning"
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We grow together through knowledge sharing and development"
  }
]

export default function CareersClient({ initialJobs }: Props) {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const jobOpenings = initialJobs
  const departments = ["All", "Academic", "Technology", "Content Creation", "Operations", "Media"]
  const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"]

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    const matchesType = selectedType === "All" || job.type === selectedType
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesDepartment && matchesType && matchesSearch
  })

  const featuredJobs = jobOpenings.filter(job => job.featured)
  // const selectedJobData = jobOpenings.find(job => job.id === selectedJob)

  return (
    <div className="bg-gradient-to-br from-white via-[#f8fdff] to-[#f0f9ff] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="top-0 right-0 absolute w-full h-full overflow-hidden">
          <div className="top-0 right-0 absolute bg-[#9AD0D3] opacity-10 blur-3xl rounded-full w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="bottom-0 left-0 absolute bg-[#EDBEA4] opacity-10 blur-3xl rounded-full w-[500px] h-[500px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex md:flex-row flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Build the Future of{' '}
                <span className="relative text-[#06a6ae]">
                  Education
                  <svg className="-bottom-2 left-0 absolute w-full" viewBox="0 0 200 10">
                    <path d="M 0 5 Q 50 10 100 5 T 200 5" stroke="#9AD0D3" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="mb-8 text-gray-600 text-lg md:text-xl leading-relaxed">
                Join Sanchi Gyan in our mission to transform education in Nepal. We&apos;re looking for 
                passionate individuals who want to make a real impact on student&apos;s lives through 
                innovative technology and quality education.
              </p>
              <div className="flex gap-4">
                <Button className="px-6 py-3 text-lg">View Open Positions</Button>
                <Button variant="secondary" className="px-6 py-3 text-lg">Learn About Culture</Button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="font-bold text-2xl md:text-3xl">25+</div>
                  <div className="text-[#06a6ae]">Team Members</div>
                </div>
                <div>
                  <div className="font-bold text-2xl md:text-3xl">50+</div>
                  <div className="text-[#06a6ae]">Positions Filled</div>
                </div>
                <div>
                  <div className="font-bold text-2xl md:text-3xl">98%</div>
                  <div className="text-[#06a6ae]">Retention Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative md:w-1/2"
            >
              <div className="gap-4 grid grid-cols-2">
                {featuredJobs.slice(0, 4).map((job, index) => (
                  <motion.div
                    key={job._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white/80 shadow-lg backdrop-blur-sm p-4 border border-gray-100 rounded-2xl"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${
                        job.urgency === 'high' ? 'bg-red-500' : 
                        job.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <span className="font-medium text-gray-500 text-xs">{job.department}</span>
                    </div>
                    <h3 className="mb-1 font-semibold text-gray-900 line-clamp-1">{job.title}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white/50 backdrop-blur-sm py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionTitle
            title="Why Join Sanchi Gyan?"
            subtitle="We offer more than just a job - we offer a mission, a community, and an opportunity to make a difference"
          />
          
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className={`flex justify-center items-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 font-bold text-gray-900 text-xl">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionTitle
            title="Our Culture & Values"
            subtitle="What makes Sanchi Gyan a great place to work and grow"
          />
          
          <div className="gap-8 grid md:grid-cols-2 mt-16">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] rounded-2xl w-12 h-12">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-gray-900 text-lg">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-white/80 backdrop-blur-sm py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionTitle
            title="Current Openings"
            subtitle="Explore opportunities to join our growing team"
          />

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex lg:flex-row flex-col gap-4 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search jobs by title, skills, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="shadow-sm py-3 pr-4 pl-4 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2 w-full"
                />
              </div>
              <div className="flex gap-4">
                <select 
                title="Filter by defartment"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <select 
                title="Filter by job type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 border border-gray-200 focus:border-transparent rounded-xl focus:ring-[#06a6ae] focus:ring-2"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-gray-600 text-sm">
              Showing {filteredJobs.length} of {jobOpenings.length} positions
            </div>
          </motion.div>

          {/* Jobs Grid */}
          <div className="gap-6 grid lg:grid-cols-2">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl border-2 transition-all duration-300 ${
                  selectedJob === job._id ? 'border-[#06a6ae]' : 'border-transparent hover:border-gray-200'
                } ${job.featured ? 'ring-2 ring-yellow-400' : ''}`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {job.featured && (
                          <span className="bg-yellow-100 px-2 py-1 rounded-full font-medium text-yellow-800 text-xs">
                            Featured
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.urgency === 'high' ? 'bg-red-100 text-red-800' : 
                          job.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {job.urgency === 'high' ? 'Urgent' : job.urgency === 'medium' ? 'Hiring Soon' : 'Open'}
                        </span>
                      </div>
                      <h3 className="mb-1 font-bold text-gray-900 text-xl">{job.title}</h3>
                      <div className="flex items-center gap-4 mb-3 text-gray-600 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span>{job.type}</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#06a6ae] text-lg">{job.salary}</div>
                      <div className="text-gray-500 text-sm">Apply by {job.deadline}</div>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600 line-clamp-2">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.slice(0, 3).map((req, reqIndex) => (
                      <span key={reqIndex} className="bg-gray-100 px-2 py-1 rounded-full text-gray-700 text-xs">
                        {req}
                      </span>
                    ))}
                    {job.requirements.length > 3 && (
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-700 text-xs">
                        +{job.requirements.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <Link href={`/careers/${job._id}`}>
                        <Button 
                      onClick={() => setSelectedJob(job._id)}
                      variant={selectedJob === job._id ? "primary" : "secondary"}
                      className="px-6 py-2"
                    >
                      View Details
                    </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center"
            >
              <div className="flex justify-center items-center bg-gray-100 mx-auto mb-4 rounded-full w-24 h-24">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-600 text-xl">No positions found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-bold text-white text-3xl md:text-4xl">
              Ready to Make an Impact?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90 text-lg">
              Join us in our mission to transform education in Nepal. Even if you don&apos;t see the perfect role, 
              we&apos;re always interested in meeting passionate people.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Button variant="secondary" className="bg-white hover:bg-gray-100 px-8 py-3 text-[#06a6ae] text-lg">
                Apply Now
              </Button>
              <Button className="bg-transparent hover:bg-white/10 px-8 py-3 border-2 border-white text-white text-lg">
                Send General Application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}