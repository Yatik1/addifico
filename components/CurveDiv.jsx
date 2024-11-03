import React from 'react'

function CurveDiv({style , src}) {
  return (
    <div className={!style && `flex items-center justify-center w-[8rem] h-[5rem] rounded-full bg-[#252D29]`}>
            <img 
              className={` ${style}`}
              src={src}
              
            />
    </div>
  )
}

export default CurveDiv