import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // Import FontAwesome icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Hafeez Khan</h3>
            <p className="text-gray-400">
              I'm a Frontend Developer skilled in HTML, CSS, JavaScript, React,
              Tailwind CSS, and Bootstrap, with a focus on creating responsive
              web applications.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-r-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg "
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hafeez-Khan. All rights reserved
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/profile.php?id=100011058303743"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/hafeez-ur-rahman-22404520b/"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.linkedin.com/in/hafeez-ur-rahman-22404520b/"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/Hafeez3344"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              Term of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
