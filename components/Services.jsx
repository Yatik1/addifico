"use client"

import { useRef } from 'react'
import Card from './ui/Card'
import {cardData} from "@/data/data"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomePage from './HomePage';



gsap.registerPlugin(ScrollTrigger);


function Services() {

  const cardRef = useRef(null)
  const serviceRef= useRef(null)

  useEffect(() => {
    gsap.to(cardRef.current, {
      x:"-42%",
      duration:11,
      delay:2,
    })
  } , [cardRef.current])



  return (
    <div ref={serviceRef} className='pb-[5.5rem] w-fit'>

        <div className="text-[#DCEED8] font-medium text-[10rem] mt-[5.6rem] ml-[7rem]">Services</div>

        <div ref={cardRef} className='flex flex-row gap-4 items-center ml-[28rem]'>
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