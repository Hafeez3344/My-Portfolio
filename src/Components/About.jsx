import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import CountUp from 'react-countup';

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-70 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a Frontend Developer skilled in HTML, CSS, JavaScript,
              React, Tailwind CSS, and Bootstrap, passionate about designing and
              developing user-friendly and responsive web applications.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
                <label htmlFor="htmlandcss" className="w-full md:w-1/4 text-center md:text-left mb-2 md:mb-0">
                  HTML & CSS
                </label>
                <div className="w-full md:w-3/4 bg-gray-800 rounded-full h-3.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-600 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
                <label htmlFor="javascript" className="w-full md:w-1/4 text-center md:text-left mb-2 md:mb-0">
                  JavaScript
                </label>
                <div className="w-full md:w-3/4 bg-gray-800 rounded-full h-3.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-600 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
                <label htmlFor="react" className="w-full md:w-1/4 text-center md:text-left mb-2 md:mb-0">
                  React
                </label>
                <div className="w-full md:w-3/4 bg-gray-800 rounded-full h-3.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-600 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
                <label htmlFor="bootstrap" className="w-full md:w-1/4 text-center md:text-left mb-2 md:mb-0">
                  Bootstrap
                </label>
                <div className="w-full md:w-3/4 bg-gray-800 rounded-full h-3.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-600 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
                <label htmlFor="tailwind" className="w-full md:w-1/4 text-center md:text-left mb-2 md:mb-0">
                  Tailwind
                </label>
                <div className="w-full md:w-3/4 bg-gray-800 rounded-full h-3.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-600 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row justify-between text-center">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <CountUp start={0} end={2} duration={8} />+
                </h3>
                <p>Year Experience</p>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <CountUp start={0} end={10} duration={7} />+
                </h3>
                <p>Project Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <CountUp start={0} end={10} duration={7} />+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
