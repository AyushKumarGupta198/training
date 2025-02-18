import React from 'react';

const Card = ({ joke}) => {
  return (
    <div className="p-6 shadow-lg rounded-xl bg-blue-100 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 relative">
      <p className="text-lg font-semibold text-black-400">{joke}</p>
      <div className="absolute bottom-0 right-0 flex space-x-1">
        <button className="p-1 rounded-full bg-blue-100 hover:bg-gray-200 transition-colors">
          <span className="text-sm">😄</span>
        </button>
        <button className="p-1 rounded-full bg-blue-100 hover:bg-gray-200 transition-colors">
          <span className="text-sm">👎</span>
        </button>
      </div>
    </div>
  );
};

export default Card;