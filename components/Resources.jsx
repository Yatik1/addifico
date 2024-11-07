import React from 'react'
import Wrapper from './ui/Wrapper'
import ResourceCard from './ui/ResourceCard'
import { resourcesData } from '@/data/data'
import SubscribeForm from './SubscribeForm'
import MobileForm from './ui/MobileForm'



function Resources() {
  return (
    <div className='p-4'>
        <Wrapper style="h-full bg-[#FFFFFF] px-2 lg:px-4 pb-4">
            <div className="w-full h-full flex flex-col py-[3rem] px-5 lg:py-[4rem] lg:px-[9rem] gap-4 lg:gap-0">
                <h2 className='text-[#43544B] font-[4.5em] text-[2rem] lg:text-[5rem]'>Our latest resources</h2>
                <div className='flex flex-col items-center justify-center lg:flex-row gap-6'>
                    {resourcesData.map((resource,index) => (
                        <ResourceCard 
                            key={index}
                            src={resource.src}
                            category={resource.category}
                            date={resource.date}
                            title={resource.title}
                            tag={resource.tag}
                        />
                    ))}
                </div>
            </div>
            <SubscribeForm />
            <MobileForm />
        </Wrapper>
    </div>
  )
}

export default Resources

