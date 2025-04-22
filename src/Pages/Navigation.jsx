import React from 'react';
import Mailimg from '../assets/mail.png';
import Phoneimg from '../assets/phone.png';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import Logo_New from '../assets/Logo_New.png';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      {/* Top Bar */}
      <div className='flex items-center justify-center gap-2 bg-[#3A5652] h-12 md:gap-10 md:justify-around lg:gap-20'>
        <div className='flex items-center gap-0.5 md:gap-2'>
          <img src={Mailimg} alt="Mailimg" className='h-3 md:h-5' />
          <p className=' text-[11px] md:text-sm text-white font-medium
'>mtg_gearin@yahoo.co.in</p>
        </div>
        <div className='flex items-center gap-0.5 md:gap-2'>
          <img src={Phoneimg} alt="Phoneimg" className='h-3 md:h-5' />
          <p className='text-[11px] md:text-sm font-medium text-white'>08048775290</p>
        </div>
        <button className='bg-[#F9642A] text-white whitespace-nowrap px-1 py-1 text-[9px] md:text-sm rounded font-medium md:ml-6'>
          SEND ENQUIRY
        </button>
      </div>

      {/* Main Navbar */}
      <nav className='flex items-center justify-center md:justify-between md:px-10 md:py-0 py-3 gap-2.5'>
        {/* Logo */}
      <div className='w-15 md:w-30'><img src={Logo_New} alt="Logo" className='h-full w-full md:bg-cover' /></div>
        {/* Navigation Links */}
        <ul style={{fontFamily:'"inter", serif'}} className='flex items-center justify-center text-xs gap-1 md:gap-4 md:text-lg'>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        {/* 'flex items-center justify-center text-[9px] md:text-lg' */}
{/* <select name="products" id="products" className='text-[1px] flex items-center justify-between md:text-lg'>
</select> */}
            <Link to="/company">Company</Link>
            <Link to="/contact">Contact</Link>
            </ul>

        {/* Mobile Icons */}
        <div className='flex items-center justify-center gap-0.5 lg:hidden'>
          <div className='w-5 bg-[#3A5652] p-1 rounded-2xl'>
            <img src={Phoneimg} alt="Phone" className='h-4' />
          </div>
          <div className='w-5 bg-[#3A5652] p-1 rounded-2xl'>
            <img src={search} alt="Search" className='h-4' />
          </div>
        </div>

        {/* Desktop Search and Contact (visible on large screens) */}
        <div className=' hidden lg:flex items-center justify-center gap-2'>
          <div style={{fontFamily:'"inter", serif'}} className='bg-[#3A5652] px-12 py-1.5 rounded text-white text-sm '>
          Contact Us
          </div>
          <div className='bg-[#3A5652] px-12 py-1 flex items-center gap-5 rounded text-white text-xs'>
            <input
              type="text"
              placeholder='Search'
              style={{fontFamily:'"inter", serif'}}
              className='placeholder:text-white placeholder:text-sm bg-transparent border-none outline-none text-xs text-white'
            />
            <img src={search} alt="Search" className='h-full' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
