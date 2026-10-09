import React from 'react'

   
const Card = ({ name, image, buttonText }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          {name}
        </h2>

        <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;


