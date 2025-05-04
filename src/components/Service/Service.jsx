import React from 'react';
const services = [
    { title: "Wedding Planning", icon: "💍" },
    { title: "Corporate Events", icon: "🏢" },
    { title: "Birthday Parties", icon: "🎉" },
    { title: "Concert Management", icon: "🎤" },
  ];

const Service = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>
      );
};

export default Service;