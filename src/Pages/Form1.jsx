import React from "react";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import add_marker from "../assets/add_marker.png";

const Form1 = () => {
  return (
    <div className="w-full bg-[#B6C6C8] p-15 flex flex-col sm:flex-row items-stretch justify-center font-judson">
      {/* LEFT SIDE: Contact Info */}
      <div className="flex items-center flex-col justify-center gap-2 bg-[#39615F] text-white p-7 sm:w-1/2 w-full rounded-md">
        <div className="flex items-center flex-col gap-4">
          <h1 className="font-bold text-2xl">Find Us & Get in Touch</h1>
          <h4 className="text-md">Mukund Trans-Gears</h4>
          </div>
          <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-start gap-3">
            <img src={add_marker} alt="address" className="w-5 h-5 mt-1" />
            <div className="text-sm flex flex-col gap-1">
              <p>V. M. Talwalkar</p>
              <p>
                F-44, M.I.D.C. Area, Kupwad Block, Kupwad, Sangli,
                Maharashtra - 416436, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={phone} alt="phone" className="w-5 h-5" />
            <p>+91-9822528401</p>
          </div>

          <div className="flex items-center gap-3">
            <img src={mail} alt="mail" className="w-5 h-5" />
            <p>mtg_gearin@yahoo.co.in</p>
        </div>
      </div>
          </div>

      {/* RIGHT SIDE: Contact Form */}
      <div className="bg-white text-[#39615F] p-7 sm:w-1/2 w-full rounded-md">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h1 className="text-2xl font-bold text-center">
            We’re Excited to Hear from You
          </h1>
          <h4 className="text-sm text-center">
            Send us an email with your request, and we’ll get back to you
            within one business day!
          </h4>
        </div>

        <form className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="p-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md border border-gray-300"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="p-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                placeholder="Your country"
                className="p-2 rounded-md border border-gray-300"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="product">Product</label>
              <input
                id="product"
                type="text"
                placeholder="Product of interest"
                className="p-2 rounded-md border border-gray-300"
              />
            </div>
          {/* Message Field */}
          <div className="flex flex-col w-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message..."
              className="p-2 rounded-md border border-gray-300"
            />
          </div>  
          </div>

         
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="w-1/4 mt-4 bg-[#39615F] text-white py-2 px-2 rounded-md hover:bg-[#2e4e4c]"
          >
            Submit
          </button>
        </div>

        </form>
      </div>
    </div>
  );
};

export default Form1;
