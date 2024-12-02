import React from "react";

const WhyPartnerWithUs = () => {
  const features = [
    {
      title: "Satisfaction Guaranteed",
      description: "Enjoy unlimited revisions until you are completely satisfied.",
      image: "https://i.postimg.cc/PJcPxS4R/depositphotos-11060156.webp",
    },
    {
      title: "Expert Team",
      description: "Work with our expert team for exceptional, client-focused designs.",
      image: "https://i.postimg.cc/j2bS8xxX/msg.png",
    },
    {
      title: "Effortless Requests",
      description:
        "Effortlessly log your design requests onto your personalized board for streamlined progress tracking.",
      image: "https://i.postimg.cc/zGjKKQk6/depositphotos.webp",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Why Partner With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 relative"
              style={{
                animation: `fadeInUp 1s ease ${index * 0.2}s both`,
              }}
            >
              <div className="w-full h-40 bg-gradient-to-r from-blue-400 to-purple-600 rounded-md absolute inset-0 -z-10"></div>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-24 h-24 mx-auto mb-4 transform transition duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind Keyframe Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleUp {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyPartnerWithUs;
