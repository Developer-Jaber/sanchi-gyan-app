"use client"
import { motion } from "framer-motion"
import { ShieldX, Home } from "lucide-react"
import Button from "@/components/shared/Button"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function UnauthorizedPage() {
  const { data: session } = useSession()

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="bg-red-100 p-6 rounded-full">
            <ShieldX className="w-20 h-20 text-red-600" />
          </div>
        </motion.div>

        <h1 className="mb-4 font-bold text-gray-900 text-4xl">
          Access Denied
        </h1>
        
        <p className="mb-2 text-gray-600 text-lg">
          You don&apos;t have permission to access this page.
        </p>

        {session && (
          <div className="bg-yellow-50 mb-6 p-4 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              You&apos;re logged in as: <strong>{session.user.email}</strong>
              <br />
              Role: <strong className="uppercase">{session.user.role}</strong>
            </p>
          </div>
        )}

        <div className="flex sm:flex-row flex-col justify-center gap-3">
          <Link href="/">
            <Button className="flex justify-around items-center p-3 w-full sm:w-auto">
              <Home className="mr-2 w-4 h-4" />
              Go to Homepage
            </Button>
          </Link>

          {session ? (
            <Button
              variant="secondary"
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="p-3 w-full sm:w-auto"
            >
              Sign Out
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="secondary" className="p-2 w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        <div className="mt-8 text-gray-500 text-sm">
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </motion.div>
    </div>
  )
}