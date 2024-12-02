import React from "react";
import about11 from "../assets/images/about/about11.jpg";
import about5 from "../assets/images/about/about5.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Images Section */}
        <div className="lg:w-1/2 relative mb-10 lg:mb-0 flex justify-center">
          <div className="relative w-3/4">
            <img
              src={about5}
              alt="About us - main"
              className="rounded-lg shadow-2xl"
            />
            <img
              src={about11}
              alt="About us - overlay"
              className="absolute w-1/2 border-8 border-blue-600 rounded-lg shadow-2xl -right-6 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h3 className="text-4xl text-blue-600 font-bold">
            About Us
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
          We’re Here to Drive Your Brand’s Growth.
          </h2>
          <p className="text-gray-600 leading-relaxed">
          We are dedicated to crafting digital solutions that combine stunning design with measurable impact. Our talented team of designers and developers works collaboratively to create innovative products that go beyond expectations.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition duration-200">
            
            <a
                  href="#contact"
                  className=""
                >
                 Get More Info
                </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
