import Arrow from '@/utils/Arrow'
import Bar from '@/utils/Bar'

const Card = () => {
  return (
    <div className='w-[20rem] h-[20rem] bg-[#34413A] rounded-[30px] flex flex-col items-start justify-between px-6 pb-8'>
        <div className='w-full flex items-start justify-between pt-5'>
            <div className='text-[#98D18B]'>
                <Bar />
            </div>

            <div className='text-[#515c51]'>
                <Arrow />
            </div>

        </div>
        <div className='w-[60%] leading-7'>
            <p className='text-[1.5rem] w-full text-[#818E81]'>Market Trend Analysis</p>
        </div>
    </div>
  )
}

export default Card