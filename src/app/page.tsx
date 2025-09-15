import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Courses from '@/components/sections/Courses'
import Features from '@/components/sections/Features'
import Hero from '@/components/sections/Hero'
import Testimonials from '@/components/sections/Testimonials'

export default function Home () {
  return (
    <div className='font-sans'>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
