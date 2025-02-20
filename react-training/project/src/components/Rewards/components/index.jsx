import React from 'react'
import { rewardbanner } from '../../../assets/png';
import { rewardKeyData } from '../constant/rewardkeyData';
import { rewardCalenderData } from '../constant/rewardCalenderData';
import Card from '../../../common/RewardKeyCard/components';

function Rewards() {
  return (
    <div className='bg-gray-700 w-full h-full'>
        <div className=" px-13 py-3 border border-black">
        <img className="h-60 w-full" src={rewardbanner}/>  
        </div>
        <div className='w-screen px-10 h-70 border border-black'>
            <div className='w-screen h-5 border border-black'>
                <h3 className='text-white '>Your Current Rank</h3>
            </div>
            <div className='w-screen h-65 px-3 border border-black flex align-center '>
                <div className='w-100 h-60 border border-black'></div>
                <div className='w-250 h-60 border border-black'></div>
            </div>

        </div>
        <div className='w-screen h-70 px-10 border border-black'>
            <div className='w-screen h-5 px-10 border-black'>
                <h3 className='text-white'>Rewards Keys</h3>
            </div>
            <div className='w-screen h-65 px-10 border border-black flex align-center gap-5'>
            {rewardKeyData.map((item) => (
            <Card key={item.id} title={item.title} image={item.img} endTime={item.endDate} />
            ))}
            </div>
        </div>
        <div className='w-screen h-70 px-10 border border-black'>
        <div className='w-screen h-5 px-10 border border-black'>
            <h3 className='text-white'>Rewards Calender</h3>
        </div>
           <div className='w-screen h-65 px-10 border border-black flex align-center gap-5'>
            {rewardCalenderData.map((item) => (
              <Card key={item.id} title={item.title} image={item.img} endTime={item.endDate} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Rewards;