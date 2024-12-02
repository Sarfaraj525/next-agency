import React from "react";

const Process = () => {
  const steps = [
    {
      title: "Discover",
      description: "We explore and analyze your needs for a perfect solution.",
      bgImage: "url('https://i.postimg.cc/zv78ss1Z/Discover.png')",
    },
    {
      title: "Design",
      description: "Crafting elegant and functional designs for your project.",
      bgImage: "url('https://i.postimg.cc/8ccbCZH6/design.jpg')",
    },
    {
      title: "Deliver",
      description: "Ensuring timely delivery with impeccable quality.",
      bgImage: "url('https://i.postimg.cc/KjbRqjKv/Deliver.jpg')",
    },
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-cover bg-center shadow-md rounded-lg text-black h-64 md:h-80"
              style={{ backgroundImage: step.bgImage }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-white text-xl">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;