import React from 'react';
import footerImg from '../assets/footerimg.png';     // small top image
import footerImg2 from '../assets/footerimg2.png';   // big bottom image
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="w-full overflow-hidden text-white mt-3">
      <div
  className="w-full bg-no-repeat bg-cover bg-center py-6 px-4"
  style={{
    backgroundImage: `url(${footerImg})`,
  }}
>
  {/* 👇 Flex Container with Wrap */}
  <div className="relative z-10 flex flex-wrap justify-center md:justify-center md:gap-60 items-center gap-6">
    
    {/* Logo */}
    <div className="flex-shrink-0 ">
      <img 
        src={logo} 
        alt="Logo" 
        className="w-32 sm:w-40 md:w-32 lg:w-52 h-auto object-contain" 
      />
    </div>

    {/* Our Expertise Text */}
    <div className="max-w-xl text-center md:text-center">
      <h1 className="text-xl md:text-4xl mb-2 text-black font-inter">Our Expertise</h1>
      <p className="text-sm md:text-base leading-relaxed text-black font-inter text-justify md:text-left">
        Specializing in precision engineering and gear manufacturing, Mukund Trans-gear delivers world-class
        products while supporting the 'Make in India' initiative. We combine innovation, quality, and
        craftsmanship to meet the diverse needs of industries worldwide.
      </p>
    </div>
  </div>
</div>

    {/* 🔸 Large Bottom Section (75%) with Background + Content */}
<div
  className="relative w-full bg-cover bg-center text-white px-4 py-10 mb-5"
  style={{ backgroundImage: `url(${footerImg2})` }}
>
  {/* Main Flex Container */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6 md:p-10 mt-10 md:mt-0">
    {/* Award Text */}
    <div className="md:w-1/3 text-center md:text-left">
      <p>
        Proud recipient of the 'Excellence in Indigenization - 
        <span className="text-red-400"> Make in India</span>' award at the Technology India Awards 2024.
      </p>
    </div>

    {/* Company Links */}
    <div className="md:w-1/4 text-center md:text-center">
      <p className="text-lg font-semibold mb-2">Company</p>
      <ul className="space-y-1 text-sm">
        <li>Home</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Flip Book</li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="md:w-1/3 text-center md:text-left">
      <p className="text-lg font-semibold mb-1">Mukund Trans-Gears</p>
      <p className="mb-1">V. M. Talwalkar</p>
      <p className="text-sm mb-2">
        F-44, M.I.D.C. Area, Kupwad Block, Kupwad, Sangli, Maharashtra - 416436, India
      </p>
      <div className="text-sm">
        <strong>Contact Number:</strong> +91-9822528401
      </div>
    </div>
  </div>

  {/* Bottom Divider and Copyright */}
  <div className="w-full border-t border-white pt-4 text-center text-sm space-y-2">
    <p>©2025 Copyright. Mukund Trans-Gears</p>
    <p>Developed & Managed By BrightLink Info Technologies Private Limited.</p>
  </div>
</div>

    </div>
  );
};

export default Footer;