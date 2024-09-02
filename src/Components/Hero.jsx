import React from "react";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt="Hero Portrait"
        className="mx-auto w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl mt-8 font-bold">
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Hafeez Ur Rahman
        </span>
        , Frontend Developer
      </h1>
      <p className="mt-[22px] sm:mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications
      </p>
      <div className="mt-9 space-x-4">
        <a href="#contact">
          <button className="bg-gradient-to-r from-green-500 to-blue-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact With Me
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1Ri_acKEu92aucRPTl5Er3XAv9_Vud5Rk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
