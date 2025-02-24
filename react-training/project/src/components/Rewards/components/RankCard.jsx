import React from "react";
import { RankCoin } from "../../../assets/png";

const RankCard = ({ rank, progress, points }) => {
  return (
    <div className="bg-[#0F0F1A] rounded-2xl p-2 w-[400px] h-[330px] top-[488px] left-[202px] text-white shadow-lg">
      
      <div className="flex justify-between text-sm text-gray-300">
        <span>{rank}</span> 
        <select id="ranks" name="ranks">
        <option value="bronze">see all ranks</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
        <option value="platinum">Platinum</option>
        <option value="diamond">Diamond</option>
        </select>
      </div>

      <div className=" flex justify-center items-center my-4 mt-7">
        <img
          src={RankCoin}
          alt="Coin"
          className="w-[150px] h-[150px] top-[488px] left-[202px]"
        />
      </div>

      <div className="flex justify-center gap-20 mb-2 mt-10">
      <div className="flex flex-col text-sm mt-2">
        <span className="text-yellow-400 text-lg font-semibold">🪙{points}</span>
        <span className=" text-gray-400">remaining to rank up</span>
      </div>

      <button className="bg-[#0177DB] text-white w-[141.4px] h-[54px] mt-3 py-2 border border-[#3AA4FF] border-radius-[9px] rounded-lg font-size-[14px] hover:bg-blue-600 hover:scale-102">
        View Chest
      </button>
      </div>
    </div>
  );
};

export default RankCard;