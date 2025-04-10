import React from 'react'
import gif1 from '../assets/gif1.png'
import gif2 from '../assets/gif2.png'   
import gif3 from '../assets/gif3.png'
import gif4 from '../assets/gif4.png'
import gif5 from '../assets/gif5.png'    
const Company_profile = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center md:flex mt-2'>
        <h1 className='text-2xl mb-10'>Company Profile</h1>
        <div className='bg-[#39615F] md:flex items-center justify-center gap-4 md:p-12 mb-8 rounded-xl text-white'>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <img src={gif1} alt="" className='h-12' />
                <h1>Name of CEO</h1>
                <p>Mr. Vinayak Mukund Talwalkar</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <img src={gif2} alt="" className='h-12' />
                <h1>Year of Establishment</h1>
                <p>1987</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <img src={gif3} alt="" className='h-12' />
                <h1>Nature of Business</h1>
                <p>Manufacturer, Exporter & Supplier</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <img src={gif4} alt="" className='h-12'  />
                <h1>Number of Employees</h1>
                <p>10 to 12</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <img src={gif5} alt="" className='h-12' />
                <h1>Market Covered</h1>
                <p>Australia</p>
            </div>  
        </div>
    </div>
  )
}

export default Company_profile