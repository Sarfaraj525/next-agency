import React from "react";

const Services = () => {
  const services = [
    {
      name: "Web Design",
      description: "We provide tailored solutions to help your brand shine.",
      bgImage: "url('https://i.postimg.cc/YCnBfNtR/Web-design.png')",
      animation: "animate-slideInLeft",
    },
    {
      name: "Branding",
      description: "Crafting exceptional brand identities for your success.",
      bgImage: "url('https://i.postimg.cc/LsdD9kwy/brand.png')",
      animation: "animate-slideInUp",
    },
    {
      name: "Digital Marketing",
      description: "Driving your business forward with innovative strategies.",
      bgImage: "url('https://i.postimg.cc/SKq91gwp/Digital-Marketing.png')",
      animation: "animate-slideInRight",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://i.postimg.cc/9FWRGQNb/black-white-grey-background.jpg')",
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">What We Offer!</h2>
        <p className="text-sm mb-6 text-black">
          We specialize in crafting exceptional solutions across a range of
          services, including UI/UX Design, <br /> Web Design, Mobile App
          Development, Branding, SaaS Platform Solutions, and Dashboard Design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 bg-cover bg-center shadow-md rounded-lg flex flex-col justify-start ${service.animation}`}
              style={{
                backgroundImage: service.bgImage,
                height: "300px",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
              {/* <p className="text-xl">{service.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
