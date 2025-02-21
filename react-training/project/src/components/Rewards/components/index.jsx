import React,{useCallback,useMemo}from 'react'
import { rewardbanner } from '../../../assets/png';
import { chestkeyData } from '../constant/chestkeyData';
import { rewardKeyData } from '../constant/rewardkeyData';
import { rewardCalenderData } from '../constant/rewardCalenderData';
import Card from '../../../common/RewardKeyCard/components';
import RankCard from './RankCard';

function Rewards() {
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
    <div className='bg-gray-800 w-full h-full overflow-hidden no-scrollbar mt-15'>
        <div className=" ml-10 px-3 py-3 ">
        <img className="h-60 w-full" src={rewardbanner}/>  
        </div>
        <div className='w-full pl-10 h-70'>
            <div className='w-full h-5 ml-3 mb-1 flex flex-row'>
                <span className='text-white '>Your Current Rank</span>
                <span className='text-white ml-64'>Chest Keys</span>
                <div className='ml-235 space-x-4'>
                  <button onClick={() => scroll("chestKey","left")} className=" text-white text-lg ">&larr;</button>
                  <button onClick={() => scroll("chestKey","right")} className=" text-white text-lg z-10">&rarr;</button>
                </div>
            </div>
            <div className='w-full h-65 px-3 flex flex-row '>
                <div className='w-100 h-65'><RankCard rank="unranked" points="10000"/></div>
                <div id='chestKey' className='h-65 ml-5 flex flex-row overflow-x-auto no-scrollbar space-x-4'>
                {chestKeyCards}  
                </div>
            </div>

        </div>
        <div className='w-full h-70 pl-10'>
            <div className='w-full h-5 pl-10 mb-1  flex flex-row'>
                <h3 className='text-white'>Rewards Keys</h3>
                <div className='ml-319 space-x-4'>
                   <button onClick={() => scroll("rewardKey","left")} className=" text-white text-lg ">&larr;</button>
                   <button onClick={() => scroll("rewardKey","right")} className=" text-white text-lg ">&rarr;</button>
                </div>
            </div>
            <div id="rewardKey"className='h-65 pl-10 flex flex-row overflow-x-auto no-scrollbar space-x-4'>
            {rewardKeyCards}
            </div>
        </div>
        <div className=' w-full h-70 ml-10'>
        <div className='w-full h-5 pl-10 mb-1 flex flex-row'>
            <h3 className='text-white'>Rewards Calender</h3>
            <div className='ml-310 space-x-4'>
            <button onClick={() => scroll("rewardCalender","left")} className=" text-white text-lg ">&larr;</button>
            <button onClick={() => scroll("rewardCalender","right")} className=" text-white text-lg z-10">&rarr;</button>
            </div>
        </div>
           <div id="rewardCalender" className=' h-65 pl-10 flex flex-row overflow-x-auto no-scrollbar space-x-4 '>
            {rewardCalenderCards}
            </div>
        </div>
    </div>
  )
}

export default Rewards;