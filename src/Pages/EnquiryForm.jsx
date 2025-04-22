import React from 'react';

const EnquiryForm = () => {
  return (
    <div className="text-white bg-[#39615F] w-full p-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className='flex items-center gap-5'>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-2 rounded text-black border border-white  placeholder-white"
          />
        </div>
        <div className='flex items-center gap-10'>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 rounded text-black border border-white placeholder-white"
          />
        </div>
        <div className='flex items-center gap-4'>
          <label htmlFor="phone" className="block mb-1">Phone</label>
          <input
            id="phone"
            type="text"
            placeholder="Enter Your Phone Number"
            className="w-full p-2 rounded text-black border border-white  placeholder-white"
          />
        </div>
        <div className='flex items-center gap-4'>
          <label className="block mb-1">Quantity</label>
          <div className="flex gap-10">
            <input  
              type="text"
              placeholder="Estimate Quantity"
              className="w-1/2 p-2 rounded text-black border border-white  placeholder-white"
            />
            <input
              type="text"
              placeholder="Unit (e.g. Pieces)"
              className="w-1/2 p-2 rounded text-black border border-white  placeholder-white"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <label className="block mb-2">Purpose of Requirement</label>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-black border border-white" />
            <span>Reselling</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-black border border-white" />
            <span>End Use</span>
          </label>
        </div>
      </div>

      <div className='flex items-center gap-1 mb-6'>
        <label htmlFor="details" className="block mb-1">Requirement Details</label>
        <textarea
          id="details"
          rows="4"
          placeholder="Describe your requirements here..."
          className="w-full p-2 rounded text-black border border-white placeholder-white"
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <button className="bg-white text-[#39615F] font-semibold px-6 py-2 rounded hover:bg-gray-200">
          SEND ENQUIRY
        </button>
      </div>
    </div>
  );
};

export default EnquiryForm;
