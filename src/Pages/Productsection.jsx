import React from 'react'
import projectsectionimg from '../assets/Productsectionimg.png'
const Productsection = () => {
  return (
    <div className='flex items-center justify-end w-full h-70 bg-no-repeat bg-cover bg-center md:p-20 ' style={{
        backgroundImage: `url(${projectsectionimg})`,
    }}>
        <div className='w-[420px] flex flex-col justify-center gap-4 px-1 py-5 mr-10  font-Inknut Antiqua'>
        <h1 className='text-3xl font-bold text-red-400 text-center'>Why Mukund Trans-gear? </h1>
        <p className='font-Kdam Thmor Pro text-lg
'>Precision-engineered gears
        with <span className='text-red-400 text-lg'>20+years</span> of expertise, strict quality control, and superior durability.</p>
    </div>
    </div>
  )
}

export default Productsection