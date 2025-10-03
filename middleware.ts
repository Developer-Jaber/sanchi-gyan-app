import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    // Define role-based route access
    const routePermissions: Record<string, string[]> = {
      '/admin': ['admin'],
      '/teacher': ['teacher', 'admin'],
      '/student': ['student', 'admin'],
    }

    // Check if the route requires specific roles
    for (const [route, allowedRoles] of Object.entries(routePermissions)) {
      if (path.startsWith(route)) {
        if (!token?.role || !allowedRoles.includes(token.role as string)) {
          return NextResponse.redirect(new URL('/unauthorized', req.url))
        }
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    '/admin/:path*',
    '/teacher/:path*',
    '/student/:path*',
    '/careers/:path*/apply',
  ]
}