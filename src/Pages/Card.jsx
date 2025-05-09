import React from 'react';

const Card = ({ image, title, description1, description2, description3 }) => {
    return (
      <div className=' flex items-center flex-col justify-center gap-1 md:w-[250px] md:p-4 border border-black/20 rounded shadow '>
  <img src={image} alt="img" className="w-[50px] h-auto mb-4" />
  <h2 style={{"fontFamily":"judson"}} className="text-lg mb-2 text-[#39615F]">{title}</h2>
        <p style={{"fontFamily":"inter"}} className='text-xs'>{description1}</p>
        <p style={{"fontFamily":"inter"}} className='text-xs'>{description2}</p>
        <p style={{"fontFamily":"inter"}} className='text-[#39615F] text-sm
            '>{description3}</p>
      </div>
    );
  };
  
export default Card;
