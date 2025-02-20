import React from "react";
import useTimeout from "../hooks/useTimeout";

const Card = ({ title, image, endTime }) => {
  const timeLeft = useTimeout(endTime);

  return (
    <div className="bg-[#2F264E]  w-[246px] h-[250px] rounded-2xl p-6 text-center w-64 shadow-lg">
      <img src={image} alt={title} className="w-24 mx-auto" />

      <p className="text-white mt-4">{title}</p>

      <div className="bg-[#3AA4FF] text-white rounded-lg py-2 mt-4 text-sm font-semibold hover:bg-blue-600">
        {timeLeft}
      </div>
    </div>
  );
};

export default Card;