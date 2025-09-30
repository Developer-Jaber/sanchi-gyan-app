"use client"
import Button from "@/components/shared/Button"
import SectionTitle from "@/components/shared/SectionTitle"
import { motion } from "framer-motion"
import { Users, Award, BookOpen, Target, Heart, GraduationCap, Star, Globe } from "lucide-react"
import Image from "next/image"
import IlustrationImg from "../../../../public/Untitled design (5).png"

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Students" },
  { icon: BookOpen, value: "500+", label: "Expert Courses" },
  { icon: Award, value: "50+", label: "Qualified Instructors" },
  { icon: GraduationCap, value: "98%", label: "Success Rate" }
]

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make quality education accessible to every Nepali student, breaking geographical and financial barriers through innovative technology.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "To become Nepal&apos;s leading educational platform that empowers students to achieve academic excellence and lifelong learning.",
    color: "from-pink-500 to-rose-400"
  },
  {
    icon: Globe,
    title: "Our Impact",
    description: "Transforming education in rural and urban Nepal alike, creating equal opportunities for all students regardless of their background.",
    color: "from-green-500 to-emerald-400"
  }
]

const teamMembers = [
  {
    name: "Dr. Anil Sharma",
    role: "Founder & CEO",
    image: "https://img.icons8.com/?size=100&id=103890&format=png&color=000000",
    bio: "Former Professor at TU with 15+ years in education",
    specialties: ["Curriculum Design", "Educational Technology"]
  },
  {
    name: "Prof. Maya Gurung",
    role: "Academic Director",
    image: "https://img.icons8.com/?size=100&id=48446&format=png&color=000000",
    bio: "M.Ed. from Kathmandu University, 12 years teaching experience",
    specialties: ["Science Education", "Teacher Training"]
  },
  {
    name: "Mr. Ramesh Adhikari",
    role: "Head of Content",
    image: "https://img.icons8.com/?size=100&id=103890&format=png&color=000000",
    bio: "MA in English Literature, Curriculum Development Expert",
    specialties: ["Content Strategy", "Quality Assurance"]
  },
  {
    name: "Ms. Sunita Karki",
    role: "Student Success Manager",
    image: "https://img.icons8.com/?size=100&id=48446&format=png&color=000000",
    bio: "Psychology Graduate, Student Counseling Specialist",
    specialties: ["Student Support", "Progress Monitoring"]
  }
]

const milestones = [
  { year: "2020", event: "Sanchi Gyan Founded", description: "Started with 3 courses and 50 students" },
  { year: "2021", event: "Platform Launch", description: "Launched interactive learning platform" },
  { year: "2022", event: "10K Students", description: "Reached 10,000+ registered students" },
  { year: "2023", event: "National Recognition", description: "Awarded Best EdTech Startup in Nepal" },
  { year: "2024", event: "Curriculum Expansion", description: "Expanded to cover classes 2-10 comprehensively" }
]

export default function About() {
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
                Transforming Education in{' '}
                <span className="relative text-[#06a6ae]">
                  Nepal
                  <svg className="-bottom-2 left-0 absolute w-full" viewBox="0 0 200 10">
                    <path d="M 0 5 Q 50 10 100 5 T 200 5" stroke="#9AD0D3" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="mb-8 text-gray-600 text-lg md:text-xl leading-relaxed">
                Sanchi Gyan is Nepal&apos;s premier online educational platform, dedicated to providing 
                high-quality learning experiences for students from classes 2 to 10. We combine 
                traditional educational values with modern technology to create engaging, effective, 
                and accessible learning solutions.
              </p>
              <div className="flex gap-4">
                <Button className="px-6 py-3 text-lg">Join Our Community</Button>
                <Button variant="secondary" className="px-6 py-3 text-lg">Watch Our Story</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative md:w-1/2"
            >
              <div className="relative">
                <Image
                  src={IlustrationImg}
                  alt="Nepali Students Learning"
                  width={600}
                  height={400}
                  className="shadow-2xl rounded-2xl"
                />
                <div className="-bottom-6 -left-6 absolute bg-white/90 shadow-lg backdrop-blur-md p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] rounded-full w-12 h-12">
                      <Star className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">4.9/5</div>
                      <div className="text-gray-600 text-sm">Student Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center items-center bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] mx-auto mb-4 rounded-2xl w-16 h-16">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-2 font-bold text-gray-900 text-3xl md:text-4xl">{stat.value}</div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Impact */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionTitle
            title="Our Core Values"
            subtitle="Guiding principles that drive our mission to transform education in Nepal"
          />
          
          <div className="gap-8 grid md:grid-cols-3 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`flex justify-center items-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl mx-auto mb-6`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-4 font-bold text-gray-900 text-xl">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white/80 backdrop-blur-sm py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Passionate educators and innovators dedicated to your success"
          />
          
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 mt-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="shadow-lg mx-auto rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                </div>
                <h3 className="mb-1 font-bold text-gray-900 text-lg">{member.name}</h3>
                <div className="mb-3 font-medium text-[#06a6ae]">{member.role}</div>
                <p className="mb-3 text-gray-600 text-sm">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, specIndex) => (
                    <span key={specIndex} className="bg-gray-100 px-2 py-1 rounded-full text-gray-700 text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionTitle
            title="Our Journey"
            subtitle="From humble beginnings to becoming Nepal&apos;s trusted educational partner"
          />
          
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="left-1/2 absolute bg-gradient-to-b from-[#06a6ae] to-[#9AD0D3] w-1 h-full -translate-x-1/2 transform"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/80 shadow-lg backdrop-blur-sm p-6 border border-gray-100 rounded-2xl">
                      <div className="mb-2 font-bold text-[#06a6ae] text-2xl">{milestone.year}</div>
                      <h3 className="mb-2 font-bold text-gray-900 text-lg">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="z-10 relative bg-[#06a6ae] shadow-lg border-4 border-white rounded-full w-8 h-8"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
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
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90 text-lg">
              Join thousands of Nepali students who are already achieving their academic goals with Sanchi Gyan.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Button variant="secondary" className="bg-white hover:bg-gray-100 px-8 py-3 text-[#06a6ae] text-lg">
                Explore Courses
              </Button>
              <Button className="bg-transparent hover:bg-white/10 px-8 py-3 border-2 border-white text-white text-lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}