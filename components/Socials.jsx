
import Link from 'next/link'
import React from 'react'

function Socials({social,link,icon}) {
  return (
    <>
        <div className='w-[23rem] md:w-[21rem] h-[15rem] rounded-[2rem] bg-black opacity-15'></div>


        <div className='absolute flex items-center justify-center gap-4'>
          <Link 
            href={link}
            target='_blank'
            className='w-[21rem] h-[15rem] rounded-[2rem] flex flex-col justify-between p-3 md:p-5'
        >
            <div className='w-[3.5rem] h-[3.5rem] flex items-start rounded-full bg-[#252D29] justify-start p-[0.8rem] text-[#A3B3A1]'>
                  {icon}
            </div>
            < div className='flex items-start justify-start'>
                  <h3 className={`text-[2.5rem] font-medium tracking-tight text-[#AEC3B0]`}>{social}</h3>
            </div>
          </Link>

        </div>
    </>
  )
}

export default Socials