import React from "react";
import { FaUsers, FaCalendarCheck, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-gray-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700 opacity-50 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-700 opacity-40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-pink-700 opacity-45 rounded-full blur-[180px]"></div>
      </div>
      <div className="relative z-10 backdrop-blur-sm bg-white/70 px-4 py-16 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">About EventSphere</h1>
            <p className="text-lg text-gray-600">
              Simplifying event management for everyone — from local meetups to large conferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{
              icon: <FaUsers />,
              title: "Community Focused",
              desc: "Empowering organizers to build impactful events with ease."
            }, {
              icon: <FaCalendarCheck />,
              title: "Effortless Scheduling",
              desc: "Create and manage events in minutes, with real-time updates."
            }, {
              icon: <FaRocket />,
              title: "Powered by Innovation",
              desc: "Modern tools for a smooth experience across the board."
            }].map((card, index) => (
              <div key={index} className="card bg-white/70 text-gray-800 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="card-body items-center text-center">
                  <div className="text-3xl text-primary mb-2">{card.icon}</div>
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To connect people through meaningful experiences. We make event planning intuitive and accessible for everyone.
            </p>

            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Interactive dashboards</li>
              <li>One-click registration</li>
              <li>Real-time updates</li>
              <li>Custom branding</li>
              <li>Secure authentication</li>
            </ul>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Ready to launch your next event?
            </h3>
            <button className="btn btn-primary hover:scale-105 transition-transform">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
