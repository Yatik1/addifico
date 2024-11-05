
import Card from './ui/Card'
import {cardData} from "@/data/data"

function Services() {
  return (
    <div className='pb-[5.5rem] w-fit'>
        <div className="text-[#DCEED8] font-medium text-[10rem] mt-[5.6rem] ml-[7rem]">Services</div>

        <div className='flex flex-row gap-4 items-center ml-[28rem]'>
            {cardData.map((data) => (
              <Card 
                logo={data.logo}
                title={data.title}
              />
            ))}
        </div>
    </div>
  )
}

export default Services