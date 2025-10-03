import React from 'react'
import DashboardLayout from './_components/dashboard-layout'
import AuthSessionProvider from '../providers/session-provider'
import { SidebarProvider } from '@/components/ui/sidebar'
import { requireAuth } from '@/lib/auth-utils'

export default async function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  // Require authentication for all dashboard routes
  await requireAuth(['admin', 'teacher', 'student'])
  return (
    <div>
      <AuthSessionProvider>
        <SidebarProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </SidebarProvider>
      </AuthSessionProvider>
    </div>
  )
}
