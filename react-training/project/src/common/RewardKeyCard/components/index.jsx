import React from "react";
import useTimeout from "../hooks/useTimeout";

const Card = (props) => {
  
  const {title="",image="",endTime="",btntext=""}=props || {}
  const timeLeft = useTimeout(endTime);

  return (
    <div className="bg-[#2F264E]  w-[246px] h-[250px] rounded-2xl p-6 text-center shadow-lg flex-none transition-all duration-300 hover:bg-[#3B2A67] hover:scale-105">
      <img src={image} alt={title} className="w-24 mx-auto h-25 w-25" />

      <p className="text-white whitespace-pre-wrap mt-2">{title}</p>

      <div className="bg-[#3AA4FF] text-white rounded-lg py-2 mt-4 text-sm font-semibold hover:bg-blue-600 ">
        {btntext!==""?btntext:timeLeft}
      </div>
    </div>
  );
};

export default Card;