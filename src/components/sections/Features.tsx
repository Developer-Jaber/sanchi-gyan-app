"use client"
import { motion } from "framer-motion"

const Features = () => {
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry experts with years of real-world experience in their fields.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 
            0v-2c0-.656-.126-1.283-.356-1.857M7 
            20H2v-2a3 3 0 015.356-1.857M7 
            20v-2c0-.656.126-1.283.356-1.857m0 
            0a5.002 5.002 0 019.288 0M15 
            7a3 3 0 11-6 0 3 3 0 016 
            0zm6 3a2 2 0 11-4 0 2 2 0 
            014 0zM7 10a2 2 0 11-4 0 2 
            2 0 014 0z"
          />
        </svg>
      ),
      color: "#9AD0D3",
    },
    {
      title: "Interactive Learning",
      description:
        "Engage with immersive content, quizzes, and projects designed to make learning unforgettable.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 
            3v1m6.364 1.636l-.707.707M21 
            12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 
            9.9a5 5 0 117.072 0l-.548.547A3.374 
            3.374 0 0014 18.469V19a2 2 0 
            11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "#EDBEA4",
    },
    {
      title: "Lifetime Access",
      description:
        "Enjoy lifetime access to all your course materials, updates, and resources.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 7a2 2 0 012 2m4 
            0a6 6 0 01-7.743 5.743L11 
            17H9v2H7v2H4a1 1 0 
            01-1-1v-2.586a1 1 0 
            01.293-.707l5.964-5.964A6 6 0 
            1121 9z"
          />
        </svg>
      ),
      color: "#EDBEA4",
    },
  ]


  return (
     <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="top-0 left-1/2 absolute bg-[#9AD0D3] opacity-10 blur-[100px] rounded-full w-[600px] h-[600px] -translate-x-1/2"></div>
      <div className="right-1/3 bottom-0 absolute bg-[#EDBEA4] opacity-10 blur-[120px] rounded-full w-[500px] h-[500px]"></div>

      <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="bg-clip-text bg-gradient-to-r from-[#06a6ae] to-[#fcb894] font-bold text-transparent text-4xl md:text-5xl">
            Why Choose Sanchi Gyan?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-700 text-lg">
            We redefine learning with expert mentorship, interactive methods, and
            unlimited access—crafted to empower your journey.
          </p>
        </motion.div>

        <div className="gap-10 grid grid-cols-1 md:grid-cols-3 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center bg-white/80 shadow-xl hover:shadow-2xl backdrop-blur-lg p-8 border border-gray-100 rounded-2xl text-center transition-all duration-500"
            >
              {/* Icon container with brand-colored background */}
              <div
                className={`flex justify-center items-center shadow-md mb-6 rounded-2xl w-20 h-20 bg-[${feature.color}]`}
                // style={{ backgroundColor: feature.color }}
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              <h3 className="mb-3 font-semibold text-gray-900 text-2xl">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;