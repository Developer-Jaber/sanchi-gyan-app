'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

import { Star } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'
import Button from '../shared/Button'
import Image from 'next/image'
import Link from 'next/link'

const courses = [
  {
    title: 'Mathematics for High School',
    description:
      'Master algebra, geometry, and advanced problem-solving techniques.',
    image: 'https://i.ibb.co/XfLHMKg7/math.jpg',
    instructor: 'Dr. Anil Sharma',
    rating: 4.9,
    students: '5K+'
  },
  {
    title: 'Science Explorers',
    description:
      'Interactive physics, chemistry, and biology with experiments.',
    image: 'https://i.ibb.co/TDcJzyY1/science.jpg',
    instructor: 'Prof. Maya Gurung',
    rating: 4.8,
    students: '3K+'
  },
  {
    title: 'English Mastery',
    description: 'Improve your grammar, writing, and communication skills.',
    image: 'https://i.ibb.co/ZzXY1SZp/english.jpg',
    instructor: 'Mr. Ramesh Adhikari',
    rating: 4.7,
    students: '4K+'
  }
]

export default function Courses () {
  return (
    <section className='bg-gradient-to-b from-white via-[#fdfdfd] to-[#fafafa] py-20'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/*Section title */}
        <SectionTitle
          title='Popular Courses'
          subtitle='Discover top courses designed for high school students in Nepal to learn, grow, and succeed.'
        ></SectionTitle>

        {/* Courses Grid */}
        <div className='gap-8 grid grid-cols-1 md:grid-cols-3 mt-16'>
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className='group shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500'>
                <div className='relative'>
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={200}
                    width={400}
                    className='w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='top-4 right-4 absolute bg-white/90 shadow-md backdrop-blur-md px-3 py-1 rounded-full font-semibold text-[var(--secondary)] text-sm'>
                    {course.students} Students
                  </div>
                </div>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-gray-900 group-hover:text-[#EDBEA4] text-xl transition-colors'>
                    {course.title}
                  </h3>
                  <p className='mt-2 text-gray-600 text-md'>
                    {course.description}
                  </p>

                  {/* Instructor + Rating */}
                  <div className='flex justify-between items-center mt-4'>
                    <span className='font-bold text-gray-700 text-sm'>
                      {course.instructor}
                    </span>
                    <div className='flex items-center gap-1 text-yellow-500'>
                      <Star size={16} fill='currentColor' />
                      <span className='text-sm'>{course.rating}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className='mt-5 py-2 w-full text-lg'>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <Link href='/courses'>
          <Button
          variant='secondary'
          className='flex justify-center mx-auto mt-10 p-3 text-lg'
        >
          Explore Courses
        </Button>
        </Link>
      </div>
    </section>
  )
}
