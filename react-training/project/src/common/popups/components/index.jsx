import React from "react";

const Popup = ({ isOpen, closePopup, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0  bg-opacity-40 backdrop-blur-md flex justify-center items-center z-50"
        onClick={closePopup} 
    >
        <div 
            className="bg-[#2F264E] text-white p-4 rounded-lg shadow-lg w-[300px] h-[300px] relative animate-fade-in border border-gray-700"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className="absolute top-2 right-3 text-gray-300 hover:text-gray-500 text-lg"
                onClick={closePopup}
            >
                ✖
            </button>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div className="text-sm text-gray-300">{children}</div>
        </div>
    </div>
);
};

export default Popup;