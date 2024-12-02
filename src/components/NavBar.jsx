import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-700 text-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Next-Agency</h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#process" className="hover:text-blue-500">Process</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#works" className="hover:text-blue-500">Works</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
