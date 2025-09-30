'use client'

import { useState } from 'react'
import { FaUser, FaEnvelope, FaLock, FaArrowCircleLeft } from 'react-icons/fa'
import authImage from '../../../../public/authumage/registration.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function SignupPage () {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('') // Clear error on input change
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name: form.username,
          email: form.email,
          password: form.password
        })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'An error occurred.')
      } else {
        alert('Signup successful! Please log in.')
        router.push('/')
      }
    } catch (error) {
      setError("An error occured. Please try again.")
    }finally {
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

      {/* Main container */}
      <div className='flex md:flex-row flex-col justify-between items-center bg-white p-8 rounded-2xl w-11/12 md:w-9/12 lg:w-8/12'>
        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-6 w-full md:w-1/2'
        >
          <h2 className='font-bold text-gray-700 text-2xl md:text-left text-center'>
            Create an Account
          </h2>
          {error && (
            <div className="bg-red-100 px-4 py-3 border border-red-400 rounded text-red-700">
              {error}
            </div>
          )}

          {/* Username */}
          <div className='flex items-center space-x-3 px-4 py-2 border rounded-full'>
            <FaUser className='text-[#9FD9D8]' />
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={form.username}
              onChange={handleChange}
              className='focus:outline-none w-full'
              required
            />
          </div>

          {/* Email */}
          <div className='flex items-center space-x-3 px-4 py-2 border rounded-full'>
            <FaEnvelope className='text-[#9FD9D8]' />
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

          {/* Submit */}
          <button
            type='submit'
            disabled={loading}
            className='bg-[#9FD9D8] hover:bg-[#7bb9b8] py-2 rounded-full font-semibold text-white transition'
          >
           {loading ? "Creating account..." : "Sign up"}
          </button>

          <p className='text-gray-500 text-sm text-center'>
            Already have an account?{' '}
            <Link href='/login' className='font-semibold text-[#3835A1]'>
              Log in
            </Link>
          </p>
        </form>

        {/* Right Side Illustration */}
        <div className='hidden md:flex justify-center w-1/2'>
          <Image
            src={authImage}
            alt='Education Illustration'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}
