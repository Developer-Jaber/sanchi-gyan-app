import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

export default function HomeLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
