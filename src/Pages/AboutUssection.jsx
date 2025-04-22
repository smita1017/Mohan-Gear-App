import React from "react";
import Rightarrow from "../assets/Rightarrow.png";
import Leftarrow from "../assets/Leftarrow.png";
import profile from "../assets/profile.png";

const AboutUssection = () => {
  return (
    <div className="w-full h-full bg-[#B6C6C8] p-4 flex flex-col justify-center items-center gap-4 mt-10">
      <h1 style={{"fontFamily":"judson"}} className="font-bold md:w-3/4 text-center text-xl md:text-3xl text-[#39615F] mt-10 p-4">
        Get To Know About Our <br /> Clients Voices
      </h1>

      {/* Testimonial Container */}
      <div className="relative w-full md:w-3/4 h-full md:p-4 bg-white rounded-md shadow-lg flex flex-col items-center gap-4 mt-10 md:rounded-lg">

        {/* Profile Image - Top Center */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2  w-30 h-30 rounded-full overflow-hidden">
          <img src={profile} alt="profile pic" className="w-full h-full object-cover" />
        </div>

        {/* Left Arrow - Middle Left */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-[#39615F] p-3 rounded-full">
          <img src={Leftarrow} alt="Leftarrow" className="w-5 h-5 md:w-7 md:h-7 object-contain" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-4 bg-[#39615F] p-3 rounded-full z-10">
  <img src={Rightarrow} alt="Rightarrow" className="w-5 h-5 md:w-7 md:h-7 object-contain" />
</div>

        {/* Testimonial Text */}
        <p className=" text-sm text-center mt-20 w-1/2 md:text-lg">
          "Mukund Trans-gear delivers exceptional gear manufacturing with unmatched precision.
          Their commitment to quality and innovation truly sets them apart."
        </p>
        <h2 className="text-lg font-semibold">Rahul Mehta</h2>
      </div>
    </div>
  );
};

export default AboutUssection;
