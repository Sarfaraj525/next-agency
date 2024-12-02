import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Let’s Take Your Brand to the Next Level
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          We will respond to you within 24 hours. Feel free to reach out!
        </p>
        <form className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="First name + Surname"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">
              Email *
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="+1 111 222 333"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Inquiry Source */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">
              How did you hear about us?
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            >
              <option value="" disabled selected>
                Choose any one
              </option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Referral</option>
              <option>Other</option>
            </select>
          </div>

          {/* Budget */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">
              Project Budget
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            >
              <option value="" disabled selected>
                Select your range
              </option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000 - $10,000</option>
              <option>Above $10,000</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700">
              About Project *
            </label>
            <textarea
              placeholder="Briefly describe your project or requirements."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition h-32"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="text-center text-gray-600 mt-6">
          <p>
            For inquiries:{" "}
            <a
              href="mailto:wolfpixel125@gmail.com"
              className="text-blue-600 underline"
            >
              sarfarajeee525@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes buttonPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactUs;
