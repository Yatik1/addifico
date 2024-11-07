import { ArrowRight } from 'lucide-react';
import Wrapper from './ui/Wrapper'

function SubscribeForm() {
  return (
    <Wrapper style="hidden lg:block bg-[#D5EDD1] w-full h-[17rem]">
        <div className='flex items-center justify-between gap-5 py-[3rem] px-[10rem]'>
            <div className='flex flex-col gap-10 w-1/2'>
                <h3 className='w-[15rem] text-[2.3rem] leading-9 text-[#43544B]'>Don't want to miss anything?</h3>
                <input type='email' className='w-full bg-[#D5EDD1] text-[1.2rem] text-[#9BAF9B] px-2 py-3 outline-0 border-b border-[#9BB09B]' placeholder='Email' required />
            </div>
            <div className='flex flex-col gap-10 w-1/2'>
                <p className='text-[1.2rem] text-[#9BAF9B] text-left leading-7'>Sign up for our newsletter to discover <br/> winning trends before your competition!</p>
                <button className='w-full bg-[#D5EDD1] text-[1.2rem] text-[#9BAF9B] px-2 py-3 outline-0 border-b border-[#9BB09B] mt-[15px] text-left flex items-start justify-between'>
                    Subscribe <span className='text-[#98D18B]'><ArrowRight /></span>
                </button>
            </div>
        </div>
    </Wrapper>
  )
}

export default SubscribeForm