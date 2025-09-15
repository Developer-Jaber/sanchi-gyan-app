
const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Developer",
      content: "Sanchi Gyan transformed my career. The web development course gave me the skills I needed to land my dream job at a tech startup.",
      avatar: "/avatar1.jpg"
    },
    {
      name: "Priya Patel",
      role: "Data Analyst",
      content: "The data science course is incredibly comprehensive. The instructors are knowledgeable and the projects are relevant to real-world problems.",
      avatar: "/avatar2.jpg"
    },
    {
      name: "Amit Kumar",
      role: "UX Designer",
      content: "I've tried several online learning platforms, but Sanchi Gyan stands out with its high-quality content and supportive community.",
      avatar: "/avatar3.jpg"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="font-bold text-gray-900 text-3xl md:text-4xl">What Our Students Say</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600 text-lg">
            Hear from our students who have transformed their careers through our courses.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 shadow-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex justify-center items-center bg-indigo-100 mr-4 rounded-full w-12 h-12">
                  <span className="font-medium text-indigo-600">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;