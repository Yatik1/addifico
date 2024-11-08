import React from 'react'

function RecordCard({logo,title,desc, cardStyle, titleColor, descColor,logoColor}) {
  return (
    <div className={`rounded-[20px] flex justify-between py-2 px-2 md:px-6 md:pb-4 ${cardStyle}`}>
        <div className='flex items-end justify-start md:justify-end pt-2 pl-[0.85rem] md:pl-0 md:pt-5'>
            <div className={logoColor}>
               {logo}
            </div>
        </div>
        < div className='w-full flex flex-col items-start justify-start md:leading-[3.5rem] pl-3 md:pl-0'>
            <h3 className={`text-[2.5rem] md:text-[4rem] font-medium tracking-tight ${titleColor}`}>{title}</h3>
            <p className={`text-md md:text-lg ${descColor}`}>{desc}</p>
        </div>
    </div>
  )
}

export default RecordCard