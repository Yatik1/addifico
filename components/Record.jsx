import React from 'react'
import Wrapper from './ui/Wrapper'

function Record() {
  return (
    <div className='w-full p-4'>
        <Wrapper style={"flex flex-col items-start justify-center px-[10rem] pt-8 pb-[10rem] gap-4"}> 
            <h3 className=' text-[#272D2A] tracking-tight font-medium text-[5rem]'>Track Record</h3>
            <div className="flex w-full h-[90vh] gap-4 items-center justify-center">
                <div className='flex flex-col items-start justify-start gap-3'>
                    <div className='w-[335px] h-[310px] rounded-2xl bg-white'></div>
                    <div className='w-[335px] h-[279px] rounded-2xl bg-[#98D18B]'></div>
                </div>
                <div className='flex flex-col items-start justify-start gap-3 mt-[7rem]'>
                    <div className='w-[335px] h-[350px] rounded-2xl bg-[#252D29]'></div>
                    <div className='w-[335px] h-[279px] rounded-2xl bg-white'></div>
                </div>
                <div className='flex flex-col items-start justify-start gap-3'>
                    <div className='w-[350px] h-[290px] rounded-2xl bg-[#98D18B]'></div>
                    <div className='w-[350px] h-[259px] rounded-2xl bg-[#252D29]'></div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Record

{/* <div className='w-full h-full bg-red-400'></div>
<div className='w-full h-full mt-6 bg-blue-400'></div>
<div className='w-full h-full bg-orange-400'></div> */}