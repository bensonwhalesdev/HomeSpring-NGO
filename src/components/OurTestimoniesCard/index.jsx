import React from 'react';

const OurTestimoniesCard = ({ image, name, position, testimony }) => {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-green-100 rounded-xl shadow-md p-4 flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{position}</p>
      <p className="text-sm text-gray-700">{testimony}</p>
    </div>
  );
};

export default OurTestimoniesCard;
