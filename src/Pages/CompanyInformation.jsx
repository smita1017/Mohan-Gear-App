import React from 'react'
import Infrastructureimg from '../assets/Infrastructure.png'
import Networkimg from '../assets/Network.png'
import people from '../assets/people.png'
import backgroundimg3 from '../assets/backgroundimg3.png'
const CompanyInformation = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-2'>
        <div className=' w-full md:w-[80%] flex flex-col items-center justify-center gap-4 md:px-10 p-2 mb-8'>
            <h1 className='font-judson text-2xl md:text-4xl'>The Company</h1>
            <p className='text-sm text-justify md:text-lg font-judson '>Established in 1987, Mukund Trans-Gears is a leading manufacturer, exporter, and supplier of a wide range of industrial equipment. Under the leadership of CEO Mr. <span className='text-[#39615F] font-bold'>Vinayak Mukund Talwalkar</span>, who brings over 23 years of experience in gearbox manufacturing, the company has achieved significant growth and recognition. Located in Sangli, Maharashtra, India, Mukund Trans-Gears is committed to delivering high-quality products and services to its clients.</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-4'>
            <div className='w-18 md:w-20 flex flex-col items-center justify-center gap-2 md:gap-5'>
                <img src={Infrastructureimg} alt="infrastructure" className='h-full w-full' />
                <p>Infrastructure</p>
            </div>
            <div className='w-full md:w-[80%] flex flex-col item-center md:items-start justify-center gap-4 px-3 md:px-10'>
                <p className='font-inter'>Our robust infrastructure is proficiently managed by our dedicated staff. The manufacturing unit spans 2,000 sq. feet and is equipped with advanced machinery, including:</p>
                <ul className='list-disc flex flex-col items-start justify-start gap-2'>
                    <li>Gear Shaping Machine - HMT​</li>
                    <li>Gear Shaping Machine - Sykes</li>
                    <li>Gear Hobbing Machine - LMW​</li>
                    <li>Lathe - Shimoga</li>
                </ul>
                <div className='font-inter text-center mt-8'>Our efficient team of service engineers oversees daily operations and quality assurance. With a manufacturing capacity of 15,000 gears per month, we utilize advanced testing facilities like gear testing equipment and micrometers to ensure product quality at every production stage. Our R&D facilities enable continuous improvements in product design and development.</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='flex flex-col items-center justify-center gap-1'>
                <img src={Networkimg} alt="alternativeimg" className='h-18' />
                <p>Network</p>
                </div>
<p className='w-3/4 mt-5 mb-7'>Mukund Trans-Gears boasts a vast network spanning Indian markets and international territories. We maintain strong connections with clients and dealers, ensuring smooth business transactions worldwide. Beyond serving the Indian market, we export our products to countries such as Austria.</p>
            </div>

            <div className='flex flex-col gap-4 w-3/4'>
            <div className=' flex flex-col items-center justify-center gap-1'>
                <img src={people} alt="" className='w-18' />
                <p>Clientele</p>
                </div>
                <p className='mt-2 w-full text-center'>Our reputation as a trusted firm is reflected in our extensive and loyal clientele, including esteemed organizations such as:</p>
                <div style={{backgroundImage: `url(${backgroundimg3})`}} className='bg-cover bg-bottom mt-2 ml-1.5'>
                    <ul className='list-disc flex flex-col items-start justify-start gap-2'>
                        <li>Fie Group, Ichalkaranji​</li>
                        <li>Transmatix, Satara​</li>
                        <li>Excellent Engg. Ind. Pvt. Ltd., Sangli​</li>
                        <li>Gear-Tech Engineers, Sangli</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
  )
}

export default CompanyInformation