'use client'
import { useEffect, useState } from 'react'
import heroImg from '../../../public/Hero_online_edu.png'
import { motion } from 'framer-motion'
import Button from '../shared/Button'

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className='relative pt-10 min-h-screen overflow-hidden'>
      {/* Background elements */}
      <div className='top-0 right-0 absolute w-full h-full overflow-hidden'>
        <div className='top-0 right-0 absolute bg-[#9AD0D3] opacity-10 blur-3xl rounded-full w-[500px] h-[500px] -translate-y-1/2 translate-x-1/2 transform'></div>
        <div className='bottom-0 left-0 absolute bg-[#EDBEA4] opacity-10 blur-3xl rounded-full w-[400px] h-[400px] -translate-x-1/3 translate-y-1/3 transform'></div>
      </div>

      <div className='relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12 md:pb-20 max-w-7xl'>
        <div className='flex md:flex-row flex-col items-center'>
          <div className='md:w-1/2 md:text-left text-center'>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='block mb-4 font-medium text-[#06a6ae] text-lg md:text-xl uppercase tracking-widest'
            >
              Premium Education
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='font-bold text-4xl md:text-5xl lg:text-6xl leading-tight'
            >
              Learn Without{' '}
              <span className='relative text-[#fcb894]'>
                Limits
                <svg
                  className='-bottom-2 left-0 absolute w-full'
                  viewBox='0 0 200 10'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M 0 5 Q 50 10 100 5 T 200 5'
                    stroke='#9AD0D3'
                    strokeWidth='3'
                    fill='none'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mt-6 max-w-2xl text-lg md:text-xl'
            >
              Start, switch, or advance your career with thousands of courses
              from Sanchi Gyan - your gateway to knowledge and skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='flex sm:flex-row flex-col justify-center md:justify-start gap-4 mt-8'
            >
              <Button className='px-4 py-3 text-lg'>Explore Courses</Button>
              <Button variant='secondary' className='px-4 py-3 text-lg'>Explore Courses</Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex flex-wrap gap-8 mt-12'
            >
              <div className='text-left'>
                <div className='font-bold text-2xl md:text-3xl'>500+</div>
                <div className='text-[#06a6ae]'>Expert Courses</div>
              </div>
              <div className='text-left'>
                <div className='font-bold text-2xl md:text-3xl'>10K+</div>
                <div className='text-[#06a6ae]'>Happy Students</div>
              </div>
              <div className='text-left'>
                <div className='font-bold text-2xl md:text-3xl'>24/7</div>
                <div className='text-[#06a6ae]'>Support</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className='relative mt-16 md:mt-0 md:w-1/2'
          >
            <div className='relative'>
              <img
                src={heroImg.src}
                alt='Online Learning'
                className='shadow-2xl mx-auto rounded-2xl w-full max-w-lg hover:scale-105 transition-transform duration-700 transform'
              />

              {/* Floating elements */}
              {isMounted && (
                <>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='-top-6 -right-1 absolute bg-[#EDBEA4] shadow-lg px-4 py-2 rounded-lg font-bold text-[#0F172A]'
                  >
                    <div>Excellence</div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='-bottom-6 -left-6 absolute bg-[#9AD0D3] shadow-lg px-4 py-2 rounded-lg font-bold text-[#0F172A]'
                  >
                    <div>Quality</div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
