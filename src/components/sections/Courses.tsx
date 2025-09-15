
const Courses = () => {
  const courses = [
    {
      title: 'Web Development',
      description:
        'Master HTML, CSS, JavaScript, React, Node.js and more to build modern web applications.',
      image: '/web-dev.jpg',
      duration: '12 weeks',
      level: 'Beginner to Advanced'
    },
    {
      title: 'Data Science',
      description:
        'Learn Python, statistics, machine learning, and data visualization to become a data scientist.',
      image: '/data-science.jpg',
      duration: '16 weeks',
      level: 'Intermediate'
    },
    {
      title: 'UI/UX Design',
      description:
        'Create beautiful and user-friendly interfaces with modern design principles and tools.',
      image: '/ui-ux.jpg',
      duration: '10 weeks',
      level: 'Beginner'
    },
    {
      title: 'Digital Marketing',
      description:
        'Learn SEO, social media marketing, email campaigns, and analytics to boost business growth.',
      image: '/digital-marketing.jpg',
      duration: '8 weeks',
      level: 'Beginner'
    }
  ]

  return (
    <section className='bg-gray-50 py-12 md:py-20'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='text-center'>
          <h2 className='font-bold text-gray-900 text-3xl md:text-4xl'>
            Popular Courses
          </h2>
          <p className='mx-auto mt-4 max-w-3xl text-gray-600 text-lg'>
            Explore our most popular courses and start your learning journey
            today.
          </p>
        </div>

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12'>
          {courses.map((course, index) => (
            <div
              key={index}
              className='bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300'
            >
              <div className='flex justify-center items-center bg-indigo-100 h-48'>
                <span className='font-medium text-indigo-500'>
                  {course.title}
                </span>
              </div>
              <div className='p-6'>
                <h3 className='mb-2 font-semibold text-gray-900 text-xl'>
                  {course.title}
                </h3>
                <p className='mb-4 text-gray-600'>{course.description}</p>
                <div className='flex justify-between text-gray-500 text-sm'>
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <button className='bg-indigo-600 hover:bg-indigo-700 mt-4 px-4 py-2 rounded w-full font-medium text-white transition duration-300'>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <button className='bg-white hover:bg-gray-100 shadow-sm px-8 py-3 border border-indigo-600 rounded-lg font-medium text-indigo-600 transition duration-300'>
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses
