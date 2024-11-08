import React from 'react'
import Wrapper from './Wrapper'
import { ArrowRight, ArrowUp } from 'lucide-react'
import Socials from '../Socials'
import { socialsData } from '@/data/data'


function Footer() {
  return (
    <div className='flex flex-col p-4 gap-4'>
 
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
      {socialsData.map((social,index) => (
              <div className='relative flex items-center justify-center'>
                <Socials 
                  key={index}
                  icon={social.icon}
                  link={social.link}
                  social={social.social}
                />
              </div>
            ))}

      </div>

      <div className='relative w-full h-[8rem] md:h-[13rem] flex items-center justify-center'>
        <Wrapper style="h-full opacity-15 bg-black" />
      
      <div className='absolute w-full h-[10rem] flex items-center justify-center'>
        <Wrapper style="w-full h-full flex md:flex-col items-center justify-center md:p-[4rem] gap-4">
          <div className='w-full hidden md:flex items-start justify-between text-[1.1rem] text-[#A3B3A1] font-light'>
              <h3>Serivces / Resources / About / Get in touch</h3>
              <h3>Twitter / Instagram / Facebook</h3>
          </div>
          <hr className='hidden md:block w-full border-[#2F3431]'/>
          <div className='w-full flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between text-[1.1rem] text-[#A3B3A1] font-light gap-3'>
              <h3 className='text-[1rem] md:text-lg'>Design and Developed by Me</h3>
              <hr className='md:hidden w-1/2 border-[#2F3431]'/>
              <h3 className='flex items-center justify-center gap-2 md:gap-4 text-[1rem] md:text-lg'>@2023 All Rights reserved <ArrowUp /></h3>
          </div>
        </Wrapper>
      </div>
    </div>

    </div>
  )
}

export default Footer
