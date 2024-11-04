import React from 'react'

function About() {
  return (
    <div className="flex flex-col p-9 mt-[7rem] w-full">
        <div className='flex items-center justify-start ml-[8rem]'>
            <h2 className='text-[#98D18B] text-[6rem] leading-[7rem] font-medium'>Make a <br />Difference</h2>
        </div>

        <hr className="w-[85%] ml-[8rem] mt-[3rem] border-[#4D534E]" />

        <div className='flex gap-8 ml-[8rem]'>
          <div className=' w-[45%] mt-8'>
            <p className='text-[#A6B5A3] text-lg'>Why we exist?</p>
          </div>
          <div className='w-[55%] mt-8 mr-[2rem]'>
                <p className='text-[3em] leading-[4rem] tracking-tighter font-medium text-[#A6B5A3]'>At Addifico Consulting, we use human creativity and the latest technologies to help business leaders, investors, and entrepreneurs enhance their market positioning, discover the next winning trend, and optimize their chances for success.</p>
          </div>
        </div>

    </div>
  )
}

export default About