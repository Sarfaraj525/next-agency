import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$499",
      features: [
        "Custom UI/UX Design for a single-page website",
        "Responsive and mobile-friendly design",
        "Clear call to action on a conversion-friendly interface",
        "2 rounds of revisions",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Standard Plan",
      price: "$1799",
      features: [
        "Custom UI/UX Design + WordPress Development for up to 5 pages",
        "Responsive and mobile-friendly design",
        "Clear call to action on a conversion-friendly interface",
        "Unlimited revisions",
        "High-resolution design files",
        "Contact form integration",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Premium Plan",
      price: "$2999",
      features: [
        "Custom UI/UX Design + WordPress Development for a 10-page website",
        "Responsive and mobile-friendly design",
        "Conversion-focused layout and call-to-action placement",
        "Unlimited revisions",
        "Contact form integration",
        "Basic SEO optimization",
      ],
      buttonText: "Get Started",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Affordable Design Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 ${
                plan.popular ? "border-2 border-blue-500 scale-105" : ""
              } flex flex-col justify-between`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-4 bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-4xl font-semibold text-blue-600 my-4">{plan.price}</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition mt-auto">
                {plan.buttonText} <span className="ml-2">➔</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
