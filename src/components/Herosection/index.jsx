import React from 'react';
import 'animate.css'

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[600px] pt-18">
      <img className="w-full h-full object-cover" src="/borehole.webp" alt="hero-img"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="absolute top-1/2 left-6 md:left-12 lg:left-20 transform -translate-y-1/2 text-white z-10 w-[90%] md:w-[70%] animate__animated animate__bounceInDown">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">Clean water, <br /> brighter futures
        </h1>
        <p className="mt-3 text-sm md:text-lg lg:text-xl">Our objective is to bring clean and sustainable water to 300 villages by end of 2026
        </p>
      </div>
      
    </div>
  );
};

export default HeroSection;
