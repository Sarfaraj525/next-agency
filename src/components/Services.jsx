import React from "react";

const Services = () => {
  const services = [
    {
      name: "Web Design",
      description: "We provide tailored solutions to help your brand shine.",
      bgImage: "url('https://i.postimg.cc/YCnBfNtR/Web-design.png')",
    },
    {
      name: "Branding",
      description: "Crafting exceptional brand identities for your success.",
      bgImage: "url('https://i.postimg.cc/LsdD9kwy/brand.png')",
    },
    {
      name: "Digital Marketing",
      description: "Driving your business forward with innovative strategies.",
      bgImage: "url('https://i.postimg.cc/SKq91gwp/Digital-Marketing.png')",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">What We Offer!</h2>
        <p className="text-sm mb-8">
          We specialize in crafting exceptional solutions across a range of
          services, including UI/UX Design, <br /> Web Design, Mobile App
          Development, Branding, SaaS Platform Solutions, and Dashboard Design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-cover bg-center shadow-md rounded-lg text-white flex flex-col justify-start"
              style={{
                backgroundImage: service.bgImage,
                height: "300px",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
              {/* <p className="text-white text-xl">{service.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
