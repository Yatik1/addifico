import React from 'react'
import CurveDiv from './ui/CurveDiv'

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center leading-[6.5rem] font-medium">
        <div className="flex justify-center items-center gap-6 -ml-[7rem]">
          <h3 className="text-[#DCEED8] text-[6rem]"> Market Insights</h3>
          <CurveDiv src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f5c2e6bc77c145a44f4842_Star.svg"/>
        </div>

        <div className="flex items-center justify-center gap-6 ml-[20rem]">
          <CurveDiv style="w-[12rem] object-cover rounded-full" src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5c38109cfeef5f12e09ae_Image.jpg" />
          <h3 className="text-[#DCEED8] text-[6rem]"> that <span className="text-[#98D18B]">Makes a</span></h3>
        </div>

        <div className="flex items-center justify-center -ml-[10rem]">
          <h3 className="text-[#98D18B] text-[6rem]">Difference</h3>
        </div>
    </div>
  )
}

export default HeroSection