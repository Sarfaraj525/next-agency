import React from "react";

const Works = () => {
  const projects = [
    {
      title: "Creative Portfolio",
      image: "https://i.postimg.cc/MGgvYPRb/Sarfaraj-Nawaz-Chowdhury-1.png",
      description: "A modern portfolio showcasing creative projects.",
    },
    {
      title: "E-commerce Platform",
      image: "https://i.postimg.cc/PJjJgCSC/Bookify-1.png",
      description: "A seamless and user-friendly online store.",
    },
    {
      title: "Business Website",
      image: "https://i.postimg.cc/65BTzG7S/Vite-React-1.png",
      description: "Professional and sleek website for a business.",
    },
  ];

  return (
    <section id="works" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Works</h2>
        <p className="text-sm mb-8">Showcasing some of our best projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              style={{
                animation: `fadeIn 1s ease ${index * 0.2}s both`,
              }}
            >
              <div className="w-[400px] h-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2 px-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Keyframes for Animation */}
      <style>
        {`
          @keyframes fadeIn {
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

export default Works;
