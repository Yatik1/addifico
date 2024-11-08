import React from 'react'

function ResourceCard({src,category,date,title,tag}) {
  return (
    <div className='w-[20rem] lg:w-[22rem] flex flex-col gap-3'>
        <img 
            className='rounded-[1rem] h-[13rem] object-cover flex items-center justify-center aspect-video'
            src={src}
        />
        <div className='flex items-center justify-between text-sm text-gray-400 font-extralight'>
            <p>{category}</p>
            <p>{date}</p>
        </div>
        <h3 className='text-[1.6rem] leading-[2.1rem] text-[#43544B]'>{title}</h3>
        <div className="flex items-center justify-center bg-[#F2F6F3] text-[#77847D] text-[0.8rem] py-2 px-4 rounded-full w-fit">{tag}</div>
    </div>
  )
}

export default ResourceCard