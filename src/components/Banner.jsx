import React from "react";

const Banner = () => {
  return (
    <section
      id="banner"
      className="h-screen bg-gradient-to-r from-blue-600 to-purple-500 flex flex-col justify-center items-center text-white text-center"
    >
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">Your Vision, Our Creation</h1>
      <p className="text-lg mb-8 animate-slide-up">Crafting exceptional digital experiences for your brand.</p>
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
};

export default Banner;
