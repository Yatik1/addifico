import React from 'react'
import Wrapper from './Wrapper'
import { ArrowRight } from 'lucide-react'

function MobileForm() {
  return (
    <Wrapper style="bg-[#D5EDD1] flex lg:hidden flex-col items-center justify-center gap-5 p-4">
        <div className='h-[10rem] w-full flex flex-col items-start justify-start gap-2 px-3 py-4'>
            <h3 className='text-[2.5rem] font-medium leading-10 text-[#43544B]'>Don't want to miss anything?</h3>
            <p className='text-[1.2rem] text-[#9BAF9B] text-left leading-5'>Sign up for our newsletter to discover winning trends before your competition!</p>
        </div>
        <div className='h-[10rem] w-full flex flex-col items-center justify-center gap-3 px-4'>
            <input type='email' className='w-full bg-[#D5EDD1] text-[1.2rem] text-[#9BAF9B] px-2 py-3 outline-0 border-b border-[#9BB09B]' placeholder='Email' required />
            <button className='w-full bg-[#D5EDD1] text-[1.2rem] text-[#9BAF9B] px-2 py-3 outline-0 border-b border-[#9BB09B] mt-[15px] text-left flex items-start justify-between'>
                    Subscribe <span className='text-[#98D18B]'><ArrowRight /></span>
            </button>
        </div>
    </Wrapper>
  )
}

export default MobileForm