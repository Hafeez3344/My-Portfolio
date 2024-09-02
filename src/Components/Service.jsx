import React from "react";

const services = [
  {
    id: 1,
    title: "Website Design",
    description:
      "Crafting visually stunning and intuitive interfaces that captivate users and enhance their experience across all devices.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Building responsive and dynamic client-side applications using the latest technologies to deliver seamless user interactions",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Developing robust server-side logic and databases to support seamless integration and functionality for web applications.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description:
      "Combining both frontend and backend development skills to deliver comprehensive and fully integrated web solutions.",
  },
  {
    id: 5,
    title: "Frontend Optimization",
    description:
      "Enhancing website performance and responsiveness through optimized code, efficient loading times, and superior user experience strategies.",
  },
  {
    id: 6,
    title: "Landing Page",
    description:
      "Designing high-conversion landing pages that effectively communicate brand messages and drive user actions.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-400 text-2xl font-bold text-white rounded-full">
                {service.id}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300 text-center">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
