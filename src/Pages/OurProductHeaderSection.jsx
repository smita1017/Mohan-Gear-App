import React from 'react';
const OurProductHeaderSection = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full bg-white gap-6 mt-2'>
      <div className='flex flex-col items-center justify-center w-full p-4 gap-4'>
        <h1 className='text-[#39615F] text-3xl md:text-4xl font-semibold mb-4'>Our Products</h1>
        <p className='text-center mb-2'>
          <span className='text-[#39615F] text-lg'>Mukund Trans-Gears</span> specializes in manufacturing, exporting, and supplying high-quality industrial equipment, including:
        </p>
        <ul className='list-disc list-inside mb-4 text-left group-[li]:text-sm font-lato'>
          <li><span className='text-lg'>Gears & Drives</span> – Planetary Gearbox, Bevel Planetary Drives, Worm & Helical Gears</li>
          <li><span className='text-lg'>Pulleys & Sprockets</span> – Aluminium Timing Pulleys, Industrial Sprockets</li>
          <li><span className='text-lg'>Motors & Pumps</span> – Track Drive Motor, Charging Pump, Gear Oil Pump</li>
          <li><span className='text-lg'>Specialized Equipment</span> – Track Drives, Winch Drives, Gear Couplings</li>
        </ul>
        <p className='text-justify w-full md:w-[885px] mb-5'>
          With 20+ years of expertise, we ensure precision, durability, and high performance through premium materials and strict quality control. All products are securely packed for safe delivery.
        </p>
      </div>
    </section>
  );
};

export default OurProductHeaderSection;
