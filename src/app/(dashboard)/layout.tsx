import { AuthProvider } from '@/lib/auth-context'
import React from 'react'
import DashboardLayout from './_components/dashboard-layout'

export default function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    </div>
  )
}
