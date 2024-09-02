import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
     <nav className="bg-black text-white px-8 md:px-16 lg:px-24 relative">
  <div className="container py-5 flex items-center">
    {/* Name on the left */}
    <div className="text-2xl font-bold flex-1 md:flex-none">
      Hafeez Khan
    </div>

    {/* Centered navigation links */}
    <div className="hidden md:flex flex-1 justify-center space-x-7 ml-56">
      <a href="#home" className="hover:text-gray-400">Home</a>
      <a href="#about" className="hover:text-gray-400">About Me</a>
      <a href="#service" className="hover:text-gray-400">Services</a>
      <a href="#project" className="hover:text-gray-400">Projects</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </div>

    {/* Connect Me button on the right */}
    <div className="hidden md:flex flex-1 justify-end">
      <a href="https://wa.me/+923009328856" target="_blank" rel="noopener noreferrer">
        <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>
      </a>
    </div>

    {/* Mobile menu button */}
    <button
      className="md:hidden text-2xl focus:outline-none"
      onClick={toggleMobileMenu}
    >
      {isMobileMenuOpen ? <CloseIcon className="text-gray-200" /> : <MenuIcon className="text-gray-200" />}
    </button>
  </div>
</nav>


      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 inset-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden transition-transform duration-300 ease-in-out bg-black text-white w-64 p-5 shadow-md`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button onClick={toggleMobileMenu} className="text-gray-200 text-3xl focus:outline-none">
            <CloseIcon />
          </button>
        </div>

        <ul className="space-y-4">
          <li>
            <a href="#home" className="block py-2 hover:text-gray-400" onClick={toggleMobileMenu}>Home</a>
          </li>
          <li>
            <a href="#about" className="block py-2 hover:text-gray-400" onClick={toggleMobileMenu}>About Me</a>
          </li>
          <li>
            <a href="#service" className="block py-2 hover:text-gray-400" onClick={toggleMobileMenu}>Services</a>
          </li>
          <li>
            <a href="#project" className="block py-2 hover:text-gray-400" onClick={toggleMobileMenu}>Projects</a>
          </li>
          <li>
            <a href="#contact" className="block py-2 hover:text-gray-400" onClick={toggleMobileMenu}>Contact</a>
          </li>
        </ul>

        <div className="mt-10">
          <a href="https://wa.me/+923009328856" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full w-full">
              Connect Me
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
