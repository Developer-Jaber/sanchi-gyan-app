import heroImg from "../../../public/hero-imge.png"

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 pt-24 md:pt-64 pb-12 md:pb-20 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 md:text-left text-center">
            <h1 className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-tight">
              Learn Without <span className="text-indigo-600">Limits</span>
            </h1>
            <p className="mt-4 max-w-2xl text-gray-600 text-lg md:text-xl">
              Start, switch, or advance your career with thousands of courses from Sanchi Gyan - your gateway to knowledge and skills.
            </p>
            <div className="flex sm:flex-row flex-col justify-center md:justify-start gap-4 mt-8">
              <button className="bg-indigo-600 hover:bg-indigo-700 shadow-lg px-6 py-3 rounded-lg font-medium text-white transition duration-300">
                Explore Courses
              </button>
              <button className="bg-white hover:bg-gray-100 shadow-sm px-6 py-3 border border-indigo-600 rounded-lg font-medium text-indigo-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <img 
              src={heroImg.src} 
              alt="Online Learning" 
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;