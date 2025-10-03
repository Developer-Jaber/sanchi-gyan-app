// app/not-found.tsx
"use client"
import { motion } from "framer-motion"
import { Home, Search, ArrowLeft } from "lucide-react"
import Button from "@/components/shared/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 min-h-screen">
      <div className="w-full max-w-2xl text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="bg-clip-text bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] font-bold text-[150px] text-transparent md:text-[200px] leading-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
            Page Not Found
          </h2>
          <p className="mb-8 text-gray-600 text-lg">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex sm:flex-row flex-col justify-center gap-4"
        >
          <Button onClick={() => router.back()} variant="secondary" className="flex justify-around items-center p-3 px-6 py-3">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Go Back
          </Button>
          
          <Link href="/">
            <Button className="flex justify-around items-center p-3 px-6 py-3 w-full sm:w-auto">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-gray-200 border-t"
        >
          <p className="mb-4 text-gray-500 text-sm">You might want to visit:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/careers" className="text-[#06a6ae] text-sm hover:underline">
              Careers
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/courses" className="text-[#06a6ae] text-sm hover:underline">
              Courses
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/about" className="text-[#06a6ae] text-sm hover:underline">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-[#06a6ae] text-sm hover:underline">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}