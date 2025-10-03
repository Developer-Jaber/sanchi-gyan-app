"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"

interface ProtectedRouteProps {
  children: ReactNode
  allowedRoles?: string[]
  redirectTo?: string
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles,
  redirectTo = '/unauthorized' 
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/login')
      return
    }

    if (allowedRoles && !allowedRoles.includes(session.user.role)) {
      router.push(redirectTo)
    }
  }, [session, status, allowedRoles, router, redirectTo])

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-900 border-b-2 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    )
  }

  if (!session || (allowedRoles && !allowedRoles.includes(session.user.role))) {
    return null
  }

  return <>{children}</>
}

// Usage:
// <ProtectedRoute allowedRoles={['admin']}>
//   <AdminContent />
// </ProtectedRoute>