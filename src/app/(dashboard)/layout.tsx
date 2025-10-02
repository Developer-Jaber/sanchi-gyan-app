
import React from 'react'
import DashboardLayout from './_components/dashboard-layout'
import AuthSessionProvider from '../providers/session-provider'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AuthSessionProvider>
        <SidebarProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </SidebarProvider>
      </AuthSessionProvider>
    </div>
  )
}
