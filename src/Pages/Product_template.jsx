import React from 'react';
import { useParams } from 'react-router-dom';
import { productImages } from './Product_inner_data';
import { productDetails_right } from './Product_details_right';
import shareimg from '../assets/shareimg.png';
import phone from '../assets/phone.png';
import inuariry from '../assets/mail.png';
import { extraDetails } from '../Pages/specification';
import EnquiryForm from './EnquiryForm';
import MachineParts from '../Pages/MachineParts';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';

const Product_template = () => {
  const { id } = useParams();
  const product = productImages.find((item) => item.id === parseInt(id));
  const details = productDetails_right[id] || [];
  const sections = extraDetails[parseInt(id)];

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className='flex flex-col items-center gap-6 p-6 justify-center'>
      <div className='w-full'>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
          <h1 className="text-3xl text-center font-judson mb-4 w-full" style={{fontFamily:"judson"}}>
            {product.title}
          </h1>
          <img src={shareimg} alt="share icon" className='w-6 h-6' />
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center h-full gap-6'>
          {/* Left Side - Images */}
          <div className="p-4 w-full lg:w-1/2 shadow h-auto">
            {!product.images ? (
              <p className="text-center text-gray-500">No images found for this product.</p>
            ) : (
              <div className="flex flex-col items-center gap-10 justify-center">
                <img
                  src={product.images[0]}
                  alt={`${product.title} - Main`}
                  className="w-3/4 h-auto rounded shadow"
                />
                <div className="flex flex-wrap justify-center gap-4">
                  {product.images.slice(1, 4).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${product.title} - ${index + 2}`}
                      className="w-24 h-auto rounded shadow"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Details */}
          <div className='w-full lg:w-1/2 p-4 space-y-6'>

            {/* Top Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="text-[#39615F] px-4 py-2 rounded shadow  border border-color[39615F] hover:bg-[#39615F] hover:text-white border-[#39615F]">Enter Quantity</button>
              <button className="text-[#39615F] px-4 py-2 rounded shadow border border-color[39615F] hover:bg-[#39615F] hover:text-white border-[#39615F]">Measurement Units</button>
              <button className="text-[#39615F] px-4 py-2 rounded shadow border border-color[39615F] hover:bg-[#39615F] hover:text-white border-[#39615F]">Get Best Price</button>
            </div>

            {/* Product Detail Entries */}
            <div className="space-y-2 text-white">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="p-3 text-black rounded flex sm:flex-row items-start gap-2 sm:gap-6"
                >
                  <span className="w-full sm:w-1/2 font-semibold truncate">{item.label}</span>
                  <span className="w-full sm:w-1/2">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="flex items-center gap-2 text-[#39615F] px-4 py-2 rounded shadow hover:bg-[#39615F] hover:text-white border border-[#39615F]">
                <img src={phone} alt="Call" className="w-5 h-5 bg-[#39615F]" />
                Request To Call
              </button>
              <button className="flex items-center gap-2 text-[#39615F] px-4 py-2 rounded shadow hover:bg-[#39615F] hover:text-white border border-[#39615F]">
                <img src={inuariry} alt="Enquiry" className="w-5 h-5 bg-[#39615F]" />
                Send Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Product Sections */}
        {sections && (
          <div className="mt-8 space-y-6 text-black pl-2 sm:pl-5">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold text-[#39615F] mb-2">{section.title}</h2>
                {section.type === 'text' && <p className='w-full sm:w-3/4 text-justify'>{section.content}</p>}
                {section.type === 'list' && (
                  <ul className="list-disc list-inside space-y-1">
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <p className='text-center mt-10 px-4'>To inquire about your selected product(s), simply tick the checkbox and click the <span className='text-[#39615F]'>"Send Inquiry"</span> button below.</p>
      <div className='w-full flex items-center justify-center mt-4'><button className='rounded px-4 py-2 bg-[#39615F] text-white'>ENQUIRE NOW</button></div>
      <EnquiryForm/>
      <div className='flex items-center justify-center w-full mt-4'><h1 className='text-3xl' style={{fontFamily:"jordon"}}>Explore More Products</h1></div>
      <div>
      <div className="flex flex-wrap justify-center gap-7 ">
      <MachineParts
        id={5}
      img={img5}
      title="Bevel Planetary Drives"
      description="High-torque drives with advanced design."
      Clickname="View More"
     />
     
      <MachineParts
        id={6}
      img={img6}
      title="Charging Pump"
      description="Sturdy and efficient pumps for various industrial uses."
      Clickname="View More"
     />
      <MachineParts
        id={7}
      img={img7}
      title="Helical Gears"
      description="High-speed gears with excellent load capacity."
      Clickname="View More"
     />
      
      <MachineParts
        id={8}
      img={img8}
      title="Aluminium Timing Pulleys"
      description="Lightweight, durable pulleys for smooth motion control."
      Clickname="View More"
     />
   </div>
      </div>
    </div>
  );
};

export default Product_template;
