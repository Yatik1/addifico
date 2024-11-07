import Bar from '@/utils/Bar'
import Charts from '@/utils/Charts'
import RecordCard from './ui/RecordCard'
import Bag from '@/utils/Bag'
import Goals from '@/utils/Goals'
import Profile from '@/utils/Profile'
import Star from '@/utils/Star'

function RecordDisplay() {
  return (
    <div className="hidden lg:flex w-full h-[90vh] gap-4 items-center justify-center">
                <div className='flex flex-col items-start justify-start gap-3'>
                    <RecordCard 
                        cardStyle={"w-[335px] h-[310px] flex-col bg-white"}
                        logo={<Bar />}
                        logoColor={'text-[#98D18B]'}
                        title={"10K"}
                        titleColor={"text-[#43544B]"}
                        desc={"Businesses analyzed"}
                        descColor={"text-[#8F9894]"}
                    />

                    <RecordCard 
                        cardStyle={"w-[335px] h-[279px] flex-col bg-[#98D18B]"}
                        logo={<Charts />}
                        logoColor={"text-[#cae8c4]"}
                        title={"100+"}
                        titleColor={"text-[#43544B]"}
                        desc={"Markets studied"}
                        descColor={"text-[#658765]"}
                    />
                </div>
                <div className='flex flex-col items-start justify-start gap-3 mt-[7rem]'>
                    <RecordCard 
                        cardStyle={"w-[335px] h-[350px] flex-col bg-[#252D29]"}
                        logo={<Bag />}
                        logoColor={"text-[#2C4135]"}
                        title={"$50M+"}
                        titleColor={"text-[#DCEED8]"}
                        desc={"Raised"}
                        descColor={"text-[#6B766B]"}
                    />

                    <RecordCard 
                        cardStyle={"w-[335px] h-[279px] flex-col  bg-white"}
                        logo={<Goals />}
                        logoColor={"text-[#E7F4E5]"}
                        title={"700+"}
                        titleColor={"text-[#43544B]"}
                        desc={"Completed Projects"}
                        descColor={"text-[#8F9894]"}

                    />
                    
                </div>
                <div className='flex flex-col items-start justify-start gap-3'>
                    <RecordCard 
                        cardStyle={"w-[350px] h-[290px] flex-col-reverse bg-[#98D18B]"}
                        logo={<Profile />}
                        logoColor={"text-[#ACDBA3]"}
                        title={"500+"}
                        titleColor={"text-[#43544B] pt-[2rem]"}
                        desc={"Clients"}
                        descColor={"text-[#658765]"}
                    />

                    <RecordCard 
                        cardStyle={"w-[350px] h-[259px] flex-col bg-[#252D29]"}
                        logo={<Star />}
                        logoColor={"text-[#536F50] w-[6rem]"}
                        title={"4.9"}
                        titleColor={"text-[#98D18B]"}
                        desc={"Average customer rating"}
                        descColor={"text-[#6F7A6F]"}
                    />
                </div>
            </div>
  )
}

export default RecordDisplay