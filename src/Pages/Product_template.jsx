import React from 'react';
import { useParams } from 'react-router-dom';
import { productImages } from './Product_inner_data';
import { productDetails_right } from './Product_details_right';
import shareimg from '../assets/shareimg.png';
import phone from '../assets/phone.png';
import inuariry from '../assets/mail.png';

const Product_template = () => {
  const { id } = useParams();
  const product = productImages.find((item) => item.id === parseInt(id));
  const details = productDetails_right[id] || [];

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className='flex items-center gap-6 p-6'>
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <h1 className="text-3xl text-center font-judson mb-4 w-full">
            {product.title}
          </h1>
          <img src={shareimg} alt="share icon" />
        </div>

        <div className='flex items-center justify-center h-full'>
          {/* Left Side - Images */}
          <div className="p-4 w-1/2">
            {!product.images ? (
              <p className="text-center text-gray-500">No images found for this product.</p>
            ) : (
              <div className="flex flex-col items-center gap-4 justify-center">
                <img
                  src={product.images[0]}
                  alt={`${product.title} - Main`}
                  className="w-3/4 h-auto rounded shadow"
                />
                <div className="flex justify-center gap-4">
                  {product.images.slice(1, 4).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${product.title} - ${index + 2}`}
                      className="w-full h-auto rounded shadow"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Details */}
          <div className='w-1/2 p-4 space-y-6'>

            {/* Top Buttons */}
            <div className="flex flex-wrap justify-center gap-8">
              <button className="text-[#39615F] px-4 py-2 rounded shadow hover:bg-[#39615F] hover:text-white border-[#39615F]">Enter Quantity</button>
              <button className="text-[#39615F] px-4 py-2 rounded shadow hover:bg-[#39615F] hover:text-white border-[#39615F]">Measurement Units</button>
              <button className="text-[#39615F] px-4 py-2 rounded shadow hover:bg-[#39615F] hover:text-white border-[#39615F]">Get Best Price</button>
            </div>

            {/* Product Detail Entries */}
            <div className="space-y-2 text-white">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="p-3 text-black rounded flex items-start gap-6"
                >
                  <span className="w-1/2 font-semibold truncate">{item.label}</span>
                  <span className="w-1/2">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-center gap-6 pt-4">
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
      </div>
    </div>
  );
};

export default Product_template;
