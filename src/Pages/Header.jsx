import React from 'react'
import coverimg from '../assets/coverimg.png'
import mechanics from '../assets/mechanics.png'

const Header = () => {
  return (
    <>
   <div className="px-5 flex object-cover bg-cover]" style={{ backgroundImage: `url(${coverimg})`}}>
    <div className="flex items-start justify-center flex-col h-full gap-2.5 p-4 lg:gap-6 lg:w-3/4">
    <h1 style={{fontFamily:'"judson", serif'}} className='text-xl lg:text-5xl md:'>Powering Industries with Precision & Performance
    </h1>
    <p className='font-judson text-sm p-2 lg:text-[1.2rem]' style={{fontFamily:'"inter", serif'}}>Delevering high performance,durable, and custom gear solution to drive your industry's sucesses.</p>
    <button className='px-5 py-1 ml-2 bg-[#39615F] rounded text-sm text-white'>Contact Us</button>
    </div>
    <div className="lg:w-1/4 bg-cover bg-center min-h-[200px]" style={{backgroundImage: `url(${mechanics})`}}></div>
    </div>
    </>
  )
}

export default Header