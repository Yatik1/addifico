import React from 'react'
import Svg from '../utils/Svg'
import Menu from '@/utils/Menu'
import { Pen } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='mt-5 flex items-center justify-between px-7'>
        
        <div className='flex items-center justify-center w-[7rem] md:w-[8rem] h-[3rem] text-white'>
            <Svg />
        </div>

        <div className='flex items-center justify-center gap-2'>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#41534C] flex items-center justify-center">
                <Menu />
            </div>

            <div className='hidden md:flex w-[10rem] h-12 rounded-full bg-[#98D18B] items-center justify-center gap-4'>
                <p className='text-[#252D29] text-[1.13em] font-medium'>Get in touch</p>
                <div className='w-[0.95rem] h-[0.95rem] bg-[#252D29] rounded-full' />
            </div>

            <div className='flex md:hidden w-10 h-10 p-3 rounded-full bg-[#98D18B] items-center justify-center gap-4'>
                <Pen />
            </div>
        </div>

    </div>
  )
}

export default Navbar

