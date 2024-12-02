import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Wolf Pixel</h3>
            <p className="text-gray-400">
              Elevating brands with unique design and development solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-400 text-sm">
          © 2024 Wolf Pixel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
