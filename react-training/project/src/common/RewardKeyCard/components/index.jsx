import React,{useState} from "react";
import useTimeout from "../hooks/useTimeout";
import { useDispatch,useSelector } from "react-redux";
import { fetchCoinRequest } from "../../../store/coinsSlice";

const Card = (props) => {
  const [showReward, setShowReward] = useState(false);
  const {title="",image="",endTime="",btntext=""}=props || {}
  const timeLeft = useTimeout(endTime);
  const dispatch = useDispatch();
  const {latestReward,loading}=useSelector((state)=>state.coins)

  const handleClaim = async() => {
    if (timeLeft === "Claim Now") {
      await dispatch(fetchCoinRequest());
      setShowReward(true);
      setTimeout(() => {
        setShowReward(false);
      }, 2000);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-[#483C6F] via-[rgba(85,70,134,0.4)] to-[#2F264E]  w-[246px] h-[330px] border border-[#483C6F] rounded-2xl p-2 text-center shadow-lg flex-none transition-all duration-300 hover:bg-[#3B2A67] hover:scale-103">
      <img src={image} alt={title} className="mx-auto h-[180px] w-[180px] top-[-2px]"/>

      <p className="text-[#A2A2A2] whitespace-pre-wrap mt-1 ">{title}</p>

      {showReward && latestReward !== null && !loading&&(
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-17 text-yellow-400 font-bold text-xl transition-all duration-500 opacity-100 animate-fadeUp"
        >
          +{latestReward} 🪙
        </div>
      )}

      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0177DB] text-white w-[200px] h-[54px] border border-[#3AA4FF] border-radius-[9px] rounded-lg py-2 font-size-[14px] font-semibold hover:bg-blue-600 disabled:bg-[#01579B]"
         onClick={handleClaim} disabled={btntext!=="View Chest" && timeLeft!=="Claim Now"}>
        {btntext!==""?btntext:timeLeft}
      </button>
    </div>
  );
};

export default Card;