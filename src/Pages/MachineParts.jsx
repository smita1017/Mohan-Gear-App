import React from 'react';
import { useNavigate } from 'react-router-dom';

const MachineParts = ({ img, title, description, Clickname, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-template/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-between w-[250px] p-4 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="mb-3 border border-black/20 rounded-lg shadow p-4">
        <img src={img} alt="Machine part" className="h-32 object-contain" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-center mb-2">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center mb-4">{description}</p>

      {/* Button */}
      <button
        className="px-4 py-2 text-sm bg-[#DE704D] text-white rounded hover:bg-[#de6f4db9]"
        onClick={handleClick}
      >
        {Clickname}
      </button>
    </div>
  );
};

export default MachineParts;
