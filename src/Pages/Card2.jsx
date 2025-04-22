import React from 'react';

const Card2 = ({ image, title, discription}) => {
    return (
      <div className='flex items-center flex-col w-[250px] p-4 border border-black/20 rounded-[10px] shadow-[-10px_0px_8px_rgba(0,0,0,0.5)] '>
  <img src={image} alt="img" className="w-[50px] h-auto mb-4" />
  <h2 style={{"fontFamily":"judson"}} className="text-lg mb-2 text-[#39615F]">{title}</h2>
<p style={{"fontFamily":"inter"}} className='text-xs'>{discription}</p>
      </div>
    );
  };
  
export default Card2;
