import React from 'react'
import CurveDiv from './ui/CurveDiv'

function Hero() {
  return (
    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center leading-[3rem] lg:leading-[6.5rem] font-medium">
        <div className="flex justify-center items-center gap-6 lg:-ml-[7rem]">
          <h3 className="text-[#DCEED8] text-[3rem] lg:text-[6rem]"> Market Insights</h3>
          <CurveDiv src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f5c2e6bc77c145a44f4842_Star.svg"/>
        </div>

        <div className="flex items-center justify-center gap-6 lg:ml-[20rem]">
          <CurveDiv style="hidden lg:block w-[12rem] object-cover rounded-full" src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5c38109cfeef5f12e09ae_Image.jpg" />
          <h3 className="text-[#DCEED8] w-full text-[3rem] lg:text-[6rem]"> that <span className="text-[#98D18B]">Makes a</span></h3>
        </div>

        <div className="flex items-center justify-center lg:-ml-[10rem]">
          <h3 className="text-[#98D18B] text-[3rem] lg:text-[6rem]">Difference</h3>
        </div>
    </div>
  )
}

export default Hero