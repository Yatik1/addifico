import React from 'react'
import RecordCard from './RecordCard'
import Bar from '@/utils/Bar'
import Charts from '@/utils/Charts'
import Bag from '@/utils/Bag'
import Goals from '@/utils/Goals'
import Profile from '@/utils/Profile'
import Star from '@/utils/Star'

function MobileRecordDisplay() {
  return (
    <div className='w-full flex items-center justify-center gap-2 lg:hidden pb-4'>
        <div className='flex flex-col w-1/2 h-fit gap-2'>
        <RecordCard 
                        cardStyle={"w-full h-[250px] flex-col bg-white"}
                        logo={<Bar />}
                        logoColor={'text-[#98D18B]'}
                        title={"10K"}
                        titleColor={"text-[#43544B]"}
                        desc={"Businesses analyzed"}
                        descColor={"text-[#8F9894]"}
                    />
                    <RecordCard 
                        cardStyle={"w-full h-[250px] flex-col bg-[#252D29]"}
                        logo={<Bag />}
                        logoColor={"text-[#2C4135]"}
                        title={"$50M+"}
                        titleColor={"text-[#DCEED8]"}
                        desc={"Raised"}
                        descColor={"text-[#6B766B]"}
                    />
                    <RecordCard 
                        cardStyle={"w-full h-[250px] flex-col bg-[#98D18B]"}
                        logo={<Charts />}
                        logoColor={"text-[#cae8c4]"}
                        title={"100+"}
                        titleColor={"text-[#43544B]"}
                        desc={"Markets studied"}
                        descColor={"text-[#658765]"}
                    />

        </div>
        <div className='flex flex-col w-1/2 h-fit gap-2'>

                    <RecordCard 
                        cardStyle={"w-full h-[250px] flex-col bg-[#98D18B]"}
                        logo={<Profile />}
                        logoColor={"text-[#ACDBA3]"}
                        title={"500+"}
                        titleColor={"text-[#43544B] pt-[2rem]"}
                        desc={"Clients"}
                        descColor={"text-[#658765]"}
                    />
                    <RecordCard 
                        cardStyle={"w-full h-[250px] flex-col  bg-white"}
                        logo={<Goals />}
                        logoColor={"text-[#E7F4E5]"}
                        title={"700+"}
                        titleColor={"text-[#43544B]"}
                        desc={"Completed Projects"}
                        descColor={"text-[#8F9894]"}

                    />

                    <RecordCard 
                        cardStyle={"w-full h-[250px] flex-col bg-[#252D29]"}
                        logo={<Star />}
                        logoColor={"text-[#536F50] w-[5rem] "}
                        title={"4.9"}
                        titleColor={"text-[#98D18B]"}
                        desc={"Average customer rating"}
                        descColor={"text-[#6F7A6F]"}
                    />
        </div>
    </div>
  )
}

export default MobileRecordDisplay