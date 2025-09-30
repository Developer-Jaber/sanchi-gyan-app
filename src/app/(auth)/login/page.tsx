'use client'

import { useState } from 'react'
import { FaUser, FaLock, FaArrowCircleLeft } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginPage () {
  const [form, setForm] = useState({
    email: '', // Changed from username to email to match backend
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false
      })

      if (result?.error) {
        setError('Invalid credentials')
      } else {
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative flex justify-center items-center bg-white min-h-screen overflow-hidden'>
      {/* Background Shapes */}
      <div className='top-0 left-0 absolute bg-[#F4C7AB] opacity-70 blur-2xl rounded-full w-64 h-64 animate-blob mix-blend-multiply filter'></div>
      <div className='bottom-0 left-0 absolute bg-[#9FD9D8] opacity-70 blur-2xl rounded-full w-64 h-64 animate-blob animation-delay-2000 mix-blend-multiply filter'></div>

      <Link
        className='top-15 left-18 absolute flex justify-between items-center w-32 text-gray-600'
        href='/'
      >
        <FaArrowCircleLeft />
        <span>Back to Home</span>
      </Link>

      <div className='flex md:flex-row flex-col justify-between items-center bg-white p-8 rounded-2xl w-11/12 md:w-9/12 lg:w-8/12'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-6 w-full md:w-1/2'
        >
          <h2 className='font-bold text-gray-700 text-2xl md:text-left text-center'>
            Welcome Back
          </h2>
          {error && (
            <div className='bg-red-100 px-4 py-3 border border-red-400 rounded text-red-700'>
              {error}
            </div>
          )}

          {/* Email */}
          <div className='flex items-center space-x-3 px-4 py-2 border rounded-full'>
            <FaUser className='text-[#9FD9D8]' />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={form.email}
              onChange={handleChange}
              className='focus:outline-none w-full'
              required
            />
          </div>

          {/* Password */}
          <div className='flex items-center space-x-3 px-4 py-2 border rounded-full'>
            <FaLock className='text-[#9FD9D8]' />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={form.password}
              onChange={handleChange}
              className='focus:outline-none w-full'
              required
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='bg-[#9FD9D8] hover:bg-[#7bb9b8] py-2 rounded-full font-semibold text-white transition'
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <div className='flex justify-between text-gray-500 text-sm'>
            <Link href='/forgot-password' className='hover:text-[#3835A1]'>
              Forgot Password?
            </Link>
            <Link href='/register' className='hover:text-[#3835A1]'>
              {loading ? "Creating account..." : "Sign up"}
            </Link>
          </div>
        </form>

        <div className='hidden md:flex justify-center w-1/2'>
          <Image
            src='/authumage/registration.png'
            alt='Login Illustration'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}
