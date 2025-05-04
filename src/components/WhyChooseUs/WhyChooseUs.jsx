import React from 'react';

const WhyChooseUs = () => {
    const points = [
        "Professional & Experienced Team",
        "Tailored Event Planning",
        "Reliable Vendor Network",
        "Customer-Centric Approach",
      ];
    
      return (
        <section className="bg-white py-12 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold">{point}</h3>
                <p className="text-gray-600 mt-2">
                  We provide exceptional service to make your events truly memorable.
                </p>
              </li>
            ))}
          </ul>
        </section>
      );
};

export default WhyChooseUs;