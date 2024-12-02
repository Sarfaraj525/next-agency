import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes your web design service different from others?",
      answer: "We prioritize custom designs tailored to your brand identity while ensuring a seamless user experience and responsiveness across all devices.",
    },
    {
      question: "How do you guarantee the quality of your work?",
      answer: "We follow a rigorous quality assurance process, including design reviews, user feedback, and multiple testing phases before delivery.",
    },
    {
      question: "How do you handle communication and project updates?",
      answer: "We ensure regular updates through weekly meetings and provide access to a dedicated project dashboard for real-time tracking.",
    },
    {
      question: "What is the typical timeline for a web design project?",
      answer: "Depending on complexity, most projects are completed within 4-6 weeks, including revisions and final testing.",
    },
    {
      question: "Can you update or redesign an existing Product/Website?",
      answer: "Absolutely! We specialize in modernizing outdated designs or optimizing existing websites to meet current standards.",
    },
    {
      question: "How do you ensure my website looks great on mobile devices?",
      answer: "Our designs are mobile-first, ensuring responsiveness and optimal performance across all screen sizes using advanced tools and testing frameworks.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5 transition-all duration-300 hover:scale-105"
              style={{
                animation: `slideBounce 0.8s ease ${index * 0.1}s both`,
              }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes slideBounce {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default FAQ;
