'use client'

import { useState } from 'react'
import { FaUser, FaLock, FaArrowCircleLeft } from 'react-icons/fa'
import Image from '../../../../public/authumage/registration.png'
import Link from 'next/link'

export default function LoginPage () {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login Data:', form)
    // Handle login logic here (API call etc.)
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
      {/* Main Container */}
      <div className='flex md:flex-row flex-col justify-between items-center bg-white p-8 rounded-2xl w-11/12 md:w-9/12 lg:w-8/12'>
        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-6 w-full md:w-1/2'
        >
          <h2 className='font-bold text-gray-700 text-2xl md:text-left text-center'>
            Welcome Back
          </h2>

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
            className='bg-[#9FD9D8] hover:bg-[#7bb9b8] py-2 rounded-full font-semibold text-white transition'
          >
            Log In
          </button>

          {/* Links */}
          <div className='flex justify-between text-gray-500 text-sm'>
            <Link href='/forgot-password' className='hover:text-[#3835A1]'>
              Forgot Password?
            </Link>
            <Link href='/register' className='hover:text-[#3835A1]'>
              Create Account
            </Link>
          </div>
        </form>

        {/* Right Side Illustration */}
        <div className='hidden md:flex justify-center w-1/2'>
          <img src={Image.src} alt='Login Illustration' className='max-w-sm' />
        </div>
      </div>
    </div>
  )
}
