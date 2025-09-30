
import React from 'react'
import DashboardLayout from './_components/dashboard-layout'
import AuthSessionProvider from '../providers/session-provider'

export default function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AuthSessionProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthSessionProvider>
    </div>
  )
}
