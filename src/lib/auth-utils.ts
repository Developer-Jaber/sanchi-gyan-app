import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import { redirect } from "next/navigation"

export async function requireAuth(allowedRoles?: string[]) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    redirect('/unauthorized')
  }

  return session
}

// Usage example:
// const session = await requireAuth(['admin', 'teacher'])