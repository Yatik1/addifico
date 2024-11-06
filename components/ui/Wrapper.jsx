import React from 'react'

function Wrapper({children,style}) {
  return (
    <div className={`w-full rounded-[2rem] bg-[#DCEED8] ${style}`}>
        {children}
    </div>
  )
}

export default Wrapper