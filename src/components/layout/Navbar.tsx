'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLink = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
  return (
    <nav className='z-50 fixed bg-white shadow-lg w-full'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex flex-shrink-0 items-center'>
              <span className='font-bold text-indigo-600 text-2xl'>
                Sanchi Gyan
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLink.map(link => {
              return (
                <Link
                  href={link.href}
                  className='px-3 py-2 rounded-md font-medium text-gray-700 hover:text-indigo-600 text-sm'
                >
                  {link.name}
                </Link>
              )
            })}

            <div className='flex space-x-4'>
              <Link href='/login' className='bg-white hover:bg-gray-100 px-4 py-2 border border-indigo-600 rounded-md font-medium text-indigo-600 text-sm'>
                Login
              </Link>
              <Link href='/register' className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium text-white text-sm'>
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              title='Toggle Menu'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex justify-center items-center p-2 rounded-md focus:outline-none text-gray-700 hover:text-indigo-600'
            >
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 bg-white shadow-lg px-2 sm:px-3 pt-2 pb-3'>
            {navLink.map(link => {
              return (
                <Link
                  href={link.href}
                  className='block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-indigo-600 text-base'
                >
                  {link.name}
                </Link>
              )
            })}
            <div className='pt-4 pb-3 border-gray-200 border-t'>
              <button className='bg-white hover:bg-gray-100 mb-2 px-4 py-2 border border-indigo-600 rounded-md w-full font-medium text-indigo-600 text-sm'>
                Login
              </button>
              <button className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md w-full font-medium text-white text-sm'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
