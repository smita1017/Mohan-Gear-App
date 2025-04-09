import React from 'react';
import Mailimg from '../assets/mail.png';
import Phoneimg from '../assets/phone.png';
import logo from '../assets/logo.png';
import search from '../assets/search.png';

const Navigation = () => {
  return (
    <>
      {/* Top Bar */}
      <div className='flex items-center justify-center gap-4 bg-[#3A5652] h-12 md:gap-10 md:justify-around lg:gap-20'>
        <div className='flex items-center md:gap-2'>
          <img src={Mailimg} alt="Mailimg" className='h-3 md:h-5' />
          <p className='text-[9px] md:text-sm text-white font-medium'>mtg_gearin@yahoo.co.in</p>
        </div>
        <div className='flex items-center md:gap-2'>
          <img src={Phoneimg} alt="Phoneimg" className='h-3 md:h-5' />
          <p className='text-[9px] md:text-sm font-medium text-white'>08048775290</p>
        </div>
        <button className='bg-[#F9642A] text-white whitespace-nowrap px-1 py-1 text-[9px] md:text-sm rounded font-medium md:ml-6'>
          SEND ENQUIRY
        </button>
      </div>

      {/* Main Navbar */}
      <nav className='px-4 py-2 flex items-center justify-between gap-1 '>
        {/* Logo */}
        <img src={logo} alt="Logo" className='h-16 w-32' />
        {/* Navigation Links */}
        <ul className='flex items-center justify-center text-[9px] gap-1 md:gap-4 text-sm lg:gap-6 lg:text-sm'>
          <li >Home</li>
          <li className='flex items-center justify-center text-[9px] md:text-sm lg:text-sm'> Product
            <select name="products" id="products" className='text-[1px] flex items-center justify-between md:text-sm lg:text-sm'>
            </select>
          </li>
          <li >Company</li>
          <li >Flipbook</li>
        </ul>

        {/* Mobile Icons */}
        <div className='flex items-center justify-center gap-2 lg:hidden'>
          <div className='w-6 bg-[#3A5652] p-1 rounded-2xl'>
            <img src={Phoneimg} alt="Phone" className='h-4' />
          </div>
          <div className='w-6 bg-[#3A5652] p-1 rounded-2xl'>
            <img src={search} alt="Search" className='h-4' />
          </div>
        </div>

        {/* Desktop Search and Contact (visible on large screens) */}
        <div className='hidden lg:flex items-center justify-center gap-2'>
          <div className='bg-[#3A5652] px-3 py-1 rounded text-white text-xs'>
            Contact Us
          </div>
          <div className='bg-[#3A5652] px-2 py-1 flex items-center gap-1 rounded text-white text-xs'>
            <input
              type="text"
              placeholder='Search'
              className='placeholder:text-white bg-transparent border-none outline-none text-xs text-white'
            />
            <img src={search} alt="Search" className='h-4' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
