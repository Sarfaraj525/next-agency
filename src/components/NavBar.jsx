import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-gray-700 text-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          NEXT-AGENCY
        </h1>

        {/* Hamburger Icon (Visible only for Small Devices) */}
        <div
          className="lg:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <span
              className={`block h-1 w-6 bg-white transform transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white transform transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>

        {/* Navigation Menu (Large Device) */}
        <ul
          className={`lg:flex lg:flex-row lg:space-x-8 lg:h-auto lg:bg-transparent lg:static ${
            isOpen ? "absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-lg font-medium transform translate-x-0 transition-transform duration-300" : "hidden"
          }`}
        >
          <li className="hover:text-blue-500">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#process" onClick={() => setIsOpen(false)}>
              Process
            </a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#works" onClick={() => setIsOpen(false)}>
              Works
            </a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#testimonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
