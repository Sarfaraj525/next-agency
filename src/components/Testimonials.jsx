import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with Masuder and his team was a really good experience. They are very professional and timely. I am more happy to work with them again! TOTALLY RECOMMEND :)",
      author: "Mark Wood",
      position: "Founder of ToDo",
      image: "https://i.postimg.cc/pTpnzX01/robot-with-camera.jpg",
    },
    {
      quote:
        "Working with the Wolf Pixel team has been a blast. Their creativity has honestly taken our platform to new heights. Incredibly professional and so proud to work with, we're over the moon with their results.",
      author: "Steve Smith",
      position: "CEO of Tech Bites",
      image: "https://i.postimg.cc/9XbvrX3j/robot-man-humanoid.webp",
    },
    {
      quote:
        "I've been working with Wolfpixel over the last few months. They have designed our brand logo and also the website. I'm really happy with that , and we can't wait to team up with them again..",
      author: "Paul Styles",
      position: "Co-Founder of Tech Thunder",
      image: "https://i.postimg.cc/bvKqVyy5/toy-robots-ai.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url('https://i.postimg.cc/tCn2PDZp/bg-for.jpg')` }}
    >
      <div className="container mx-auto text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">What Our Clients Say</h2>
        <p className="text-sm mb-6">
          Hear what our valued clients have to say about their experience working with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-3 transition-all duration-500"
              style={{ animation: `slideIn 1s ease ${index * 0.3}s both` }}
            >
              {/* Background Icon */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-500 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="p-8">
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 mx-auto rounded-full border-4 border-gray-300"
                  />
                </div>
                <blockquote className="text-gray-700 italic mb-6">"{testimonial.quote}"</blockquote>
                <h3 className="text-lg font-bold text-gray-800">{testimonial.author}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
