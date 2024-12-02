import React from "react";

const Banner = () => {
  return (
    <section
      id="banner"
      className="h-screen relative flex items-center justify-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: "url('https://i.postimg.cc/QM5x22yV/smooth-lines.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold mb-4 animate-fade-in tracking-wide">
          Your Vision, Our Creation
        </h1>
        <p className="text-xl mb-8 animate-slide-up">
          Crafting exceptional digital experiences for your brand.
        </p>
        <button className="px-8 py-4 bg-blue-600 font-bold rounded-full shadow-xl hover:bg-blue-700 transition duration-300">
          <a href="#about" className="text-white">
            Get Started
          </a>
        </button>
      </div>

      {/* Background Animation */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 opacity-50 mix-blend-multiply animate-pulse"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Banner;
