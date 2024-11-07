"use client"

import { useRef } from 'react'
import Card from './ui/Card'
import {cardData} from "@/data/data"
import { useEffect } from "react";
import gsap from "gsap";

function Services() {

  const cardRef = useRef(null)
  const serviceRef= useRef(null)

  useEffect(() => {
    gsap.to(cardRef.current, {
      duration:5,
      x:"-42.4%",
      delay:2,
    })
  } , [cardRef.current])



  return (
    <div ref={serviceRef} className='pb-[5.5rem] w-full lg:w-fit'>

        <div className="text-[#DCEED8] font-medium text-[5rem] lg:text-[10rem] mt-[4rem] ml-5 lg:mt-[5.6rem] lg:ml-[7rem]">Services</div>

        <div ref={cardRef} className='hidden lg:flex gap-4 items-center ml-[28rem]'>
            {cardData.map((data,index) => (
              <Card 
                key={index}
                logo={data.logo}
                title={data.title}
              />
            ))}
        </div>

        <div className='flex w-full lg:hidden flex-col items-center justify-center gap-4 px-[10px]'>
        {cardData.map((data,index) => (
              <Card 
                key={index}
                logo={data.logo}
                title={data.title}
              />
            ))}
        </div>
    </div>
  )
}

export default Services