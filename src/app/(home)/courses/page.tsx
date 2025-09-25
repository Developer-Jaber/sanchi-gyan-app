'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  Star,
  Clock,
  Users,
  BookOpen,
  Award,
  Search,
  Filter
} from 'lucide-react'
import { useState } from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import Button from '@/components/shared/Button'

const courses = [
  {
    id: 1,
    title: 'Mathematics for High School',
    description:
      'Master algebra, geometry, calculus, and advanced problem-solving techniques with interactive lessons.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
    instructor: 'Dr. Anil Sharma',
    rating: 4.9,
    students: '5K+',
    duration: '12 weeks',
    level: 'Intermediate',
    category: 'Mathematics',
    price: '₨ 2,499',
    originalPrice: '₨ 3,999',
    isFeatured: true,
    badges: ['Bestseller', 'New']
  },
  {
    id: 2,
    title: 'Science Explorers',
    description:
      'Interactive physics, chemistry, and biology courses with virtual experiments and real-world applications.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
    instructor: 'Prof. Maya Gurung',
    rating: 4.8,
    students: '3K+',
    duration: '10 weeks',
    level: 'Beginner',
    category: 'Science',
    price: '₨ 2,199',
    originalPrice: '₨ 3,499',
    isFeatured: true,
    badges: ['Popular']
  },
  {
    id: 3,
    title: 'English Mastery',
    description:
      'Comprehensive grammar, writing, speaking, and communication skills for academic excellence.',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop',
    instructor: 'Mr. Ramesh Adhikari',
    rating: 4.7,
    students: '4K+',
    duration: '8 weeks',
    level: 'All Levels',
    category: 'Language',
    price: '₨ 1,999',
    originalPrice: '₨ 3,199',
    isFeatured: false,
    badges: ['Trending']
  },
  {
    id: 4,
    title: 'Nepali Literature',
    description:
      'Explore rich Nepali literature, poetry, and cultural context with expert guidance.',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
    instructor: 'Dr. Sunita Karki',
    rating: 4.6,
    students: '2.5K+',
    duration: '6 weeks',
    level: 'Intermediate',
    category: 'Literature',
    price: '₨ 1,799',
    originalPrice: '₨ 2,999',
    isFeatured: true,
    badges: ['Cultural']
  },
  {
    id: 5,
    title: 'Computer Fundamentals',
    description:
      'Learn essential computer skills, programming basics, and digital literacy for modern education.',
    image:
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop',
    instructor: 'Mr. Rajesh Thapa',
    rating: 4.8,
    students: '3.5K+',
    duration: '14 weeks',
    level: 'Beginner',
    category: 'Technology',
    price: '₨ 2,899',
    originalPrice: '₨ 4,499',
    isFeatured: false,
    badges: ['Essential']
  },
  {
    id: 6,
    title: 'Social Studies',
    description:
      'Comprehensive study of history, geography, civics, and Nepali social structure.',
    image:
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=250&fit=crop',
    instructor: 'Prof. Bikram Joshi',
    rating: 4.5,
    students: '2K+',
    duration: '9 weeks',
    level: 'All Levels',
    category: 'Social Science',
    price: '₨ 1,899',
    originalPrice: '₨ 2,999',
    isFeatured: false,
    badges: []
  }
]

const categories = [
  'All',
  'Mathematics',
  'Science',
  'Language',
  'Literature',
  'Technology',
  'Social Science'
]
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export default function Courses () {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All Levels')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = courses.filter(course => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory
    const matchesLevel =
      selectedLevel === 'All Levels' || course.level === selectedLevel
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesLevel && matchesSearch
  })

  return (
    <section className='bg-gradient-to-br from-white via-[#f8fdff] to-[#f0f9ff] py-20'>
      <div className='mx-auto mt-14 px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Enhanced Section Title */}
        <SectionTitle
          title='Popular Courses'
          subtitle='Discover expertly crafted courses designed specifically for Nepali high school students to excel academically.'
        />

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12'
        >
          {/* Search Bar */}
          <div className='relative mx-auto my-10 max-w-2xl'>
            <Search className='top-1/2 left-4 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform' />
            <input
              type='text'
              placeholder='Search courses, instructors, or topics...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='shadow-sm py-4 pr-4 pl-12 border border-gray-200 focus:border-transparent rounded-2xl focus:ring-[#06a6ae] focus:ring-2 w-full transition-all'
            />
          </div>

          {/* Filter Controls */}
          <div className='flex flex-wrap justify-center gap-4'>
            {/* Category Filter */}
            <div className='flex items-center gap-2 bg-white/80 shadow-sm backdrop-blur-lg p-2 border border-gray-100 rounded-xl'>
              <Filter className='w-4 h-4 text-gray-600' />
              <select
                title='Category'
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='bg-transparent border-none focus:ring-0 font-medium text-sm'
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className='flex items-center gap-2 bg-white/80 shadow-sm backdrop-blur-lg p-2 border border-gray-100 rounded-xl'>
              <Award className='w-4 h-4 text-gray-600' />
              <select
                title='Level'
                value={selectedLevel}
                onChange={e => setSelectedLevel(e.target.value)}
                className='bg-transparent border-none focus:ring-0 font-medium text-sm'
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Counter */}
            <div className='flex items-center gap-2 bg-white/80 shadow-sm backdrop-blur-lg px-4 py-2 border border-gray-100 rounded-xl'>
              <span className='font-medium text-gray-700 text-sm'>
                {filteredCourses.length} courses found
              </span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Courses Grid */}
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <Card className='group relative bg-white/90 shadow-lg hover:shadow-2xl backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500'>
                {/* Badges */}
                <div className='top-4 left-4 z-10 absolute flex gap-2'>
                  {course.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className={`px-2 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                        badge === 'Bestseller'
                          ? 'bg-orange-500 text-white'
                          : badge === 'New'
                          ? 'bg-green-500 text-white'
                          : badge === 'Popular'
                          ? 'bg-pink-500 text-white'
                          : badge === 'Trending'
                          ? 'bg-purple-500 text-white'
                          : badge === 'Cultural'
                          ? 'bg-red-500 text-white'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Course Image */}
                <div className='relative overflow-hidden'>
                  <img
                    src={course.image}
                    alt={course.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />

                  {/* Students Count */}
                  <div className='top-4 right-4 absolute flex items-center gap-1 bg-white/90 shadow-lg backdrop-blur-md px-3 py-1 rounded-full font-semibold text-[#06a6ae] text-sm'>
                    <Users className='w-3 h-3' />
                    {course.students}
                  </div>
                </div>

                <CardContent className='p-6'>
                  {/* Category and Level */}
                  <div className='flex justify-between items-center mb-3'>
                    <span className='bg-[#9AD0D3]/20 px-2 py-1 rounded-md font-medium text-[#06a6ae] text-xs'>
                      {course.category}
                    </span>
                    <span className='flex items-center gap-1 text-gray-500 text-xs'>
                      <Clock className='w-3 h-3' />
                      {course.duration}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className='mb-2 font-bold text-gray-900 group-hover:text-[#06a6ae] text-lg line-clamp-2 transition-colors'>
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className='mb-4 text-gray-600 text-sm line-clamp-2'>
                    {course.description}
                  </p>

                  {/* Instructor Info */}
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='flex justify-center items-center bg-gradient-to-r from-[#06a6ae] to-[#9AD0D3] rounded-full w-8 h-8'>
                      <span className='font-bold text-white text-xs'>
                        {course.instructor
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-800 text-sm'>
                        {course.instructor}
                      </p>
                      <p className='text-gray-500 text-xs'>{course.level}</p>
                    </div>
                  </div>

                  {/* Rating and Price */}
                  <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center gap-1'>
                      <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full'>
                        <Star className='fill-current w-3 h-3 text-yellow-500' />
                        <span className='font-bold text-yellow-700 text-sm'>
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <div className='text-right'>
                      <span className='font-bold text-[#06a6ae] text-lg'>
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className='block text-gray-400 text-sm line-through'>
                          {course.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className='flex justify-evenly items-center py-3 rounded-xl w-full font-semibold'>
                    <BookOpen className='mr-2 w-4 h-4' />
                    <p>Enroll Now</p>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='py-12 text-center'
          >
            <div className='flex justify-center items-center bg-gray-100 mx-auto mb-4 rounded-full w-24 h-24'>
              <Search className='w-8 h-8 text-gray-400' />
            </div>
            <h3 className='mb-2 font-semibold text-gray-600 text-xl'>
              No courses found
            </h3>
            <p className='text-gray-500'>
              Try adjusting your filters or search terms
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
