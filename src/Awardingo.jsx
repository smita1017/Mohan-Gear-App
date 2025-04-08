import React from 'react'
import Gear_img from './assets/Gear_img.png'
const Awardingo = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col p-2 md:flex-row'>
        <div className='w-full text-justify text-xs md:w-[65%]'>
            <p className='font-inter p-5 text-[16px] text-center'><span className='text-red-400'>Mukund Trans-gear</span> has won the 'Excellence in Indigenization - Make in India' award at the Technology India Awards 2024 in Pune, recognizing our commitment to producing world-class gears in India and supporting the 'Make in India' initiative. We remain dedicated to quality, innovation, and strengthening the Indian manufacturing ecosystem.</p>
            <button></button>
        </div>
        <div className='w-3/4 p-4 flex item-end md:w-[35%]'><img src={Gear_img} alt="" className='w-full h-full ' /></div>
    </div>
  )
}

export default Awardingo