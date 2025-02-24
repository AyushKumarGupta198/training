import React,{useCallback,useMemo}from 'react'
import { rewardbanner } from '../../../assets/png';
import { chestkeyData } from '../constant/chestkeyData';
import { rewardKeyData } from '../constant/rewardkeyData';
import { rewardCalenderData } from '../constant/rewardCalenderData';
import Card from '../../../common/RewardKeyCard/components';
import RankCard from './RankCard';
import Popup from '../../../common/popups/components';
import usePopup from '../../../common/popups/hooks/usePopup';
import { popupData } from '../constant/popupData';

function Rewards() {
    const { isOpen, popupTitle, popupContent, openPopup, togglePopup, closePopup } = usePopup();
    const scroll = useCallback((id,direction) => {
        const container = document.getElementById(id);
        const scrollAmount = direction === "left" ? -300 : 300;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      },[]);

      const chestKeyCards = useMemo(() => {
        return chestkeyData.map((item) => (
          <Card key={item.id} title={item.title} image={item.img} btntext={item.btntext} />
        ));
      }, []);
    
      const rewardKeyCards = useMemo(() => {
        return rewardKeyData.map((item) => (
          <Card key={item.id} title={item.title} image={item.img} endTime={item.endDate} />
        ));
      }, []);
    
      const rewardCalenderCards = useMemo(() => {
        return rewardCalenderData.map((item) => (
          <Card key={item.id} title={item.title} image={item.img} endTime={item.endDate} />
        ));
      }, []);
  return (
    <div className='bg-gray-900 w-full h-full overflow-hidden no-scrollbar mt-12'>
        <div className=" ml-10 px-3 py-3 ">
        <img className="h-[298px] w-full" src={rewardbanner}/>  
        </div>
        <div className='w-full pl-10 h-90'>
            <div className='w-full h-5 pl-3 mb-1 flex flex-row'>
                <div className='text-white w-50' >Your Current Rank</div>
                <div className='text-white w-90 pl-55 cursor-pointer' onClick={() => openPopup(popupData.chestKeys.title, popupData.chestKeys.content)}>Chest Keys &#x24D8;</div>
                <div className='pl-210 space-x-4'>
                  <button onClick={() => scroll("chestKey","left")} className=" text-white text-lg ">&larr;</button>
                  <button onClick={() => scroll("chestKey","right")} className=" text-white text-lg z-10">&rarr;</button>
                </div>
            </div>
            <div className='w-full h-90 px-3 flex flex-row '>
                <div className='w-100 h-65'><RankCard rank="unranked" points="10000"/></div>
                <div id='chestKey' className='h-90 ml-5 flex flex-row overflow-x-auto no-scrollbar space-x-4'>
                {chestKeyCards}  
                </div>
            </div>

        </div>
        <div className='w-full h-90 pl-10 pt-2'>
            <div className='w-full h-5 pl-10 mb-1  flex flex-row'>
                <div className='text-white cursor-pointer' onClick={() => openPopup(popupData.rewardKeys.title, popupData.rewardKeys.content)}>Rewards Keys &#x24D8;</div>
                <div className='pl-315 space-x-4'>
                   <button onClick={() => scroll("rewardKey","left")} className=" text-white text-lg ">&larr;</button>
                   <button onClick={() => scroll("rewardKey","right")} className=" text-white text-lg ">&rarr;</button>
                </div>
            </div>
            <div id="rewardKey"className='h-90 ml-10 flex flex-row overflow-x-auto no-scrollbar space-x-4'>
            {rewardKeyCards}
            </div>
        </div>
        <div className=' w-full h-90 ml-10 pt-5'>
        <div className='w-full h-5 pl-10 mb-1 flex flex-row'>
            <div className='text-white cursor-pointer' onClick={() => openPopup(popupData.rewardCalendar.title, popupData.rewardCalendar.content)}>Rewards Calender &#x24D8;</div>
            <div className='pl-310 space-x-4'>
            <button onClick={() => scroll("rewardCalender","left")} className=" text-white text-lg ">&larr;</button>
            <button onClick={() => scroll("rewardCalender","right")} className=" text-white text-lg z-10">&rarr;</button>
            </div>
        </div>
           <div id="rewardCalender" className=' h-90 ml-10 flex flex-row overflow-x-auto no-scrollbar space-x-4 '>
            {rewardCalenderCards}
            </div>
        </div>
        <Popup isOpen={isOpen} closePopup={closePopup} title={popupTitle}>
                <p>{popupContent}</p>
        </Popup>
    </div>
  )
}

export default Rewards;