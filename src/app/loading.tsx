"use client"
import { Loader2 } from "lucide-react";

export default function Loading () {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center space-y-4'>
        <Loader2 className='w-8 h-8 text-primary animate-spin' />
        <p className='text-gray-600 text-sm'>Loading dashboard...</p>
      </div>
    </div>
  )
}
