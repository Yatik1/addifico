
import Wrapper from './ui/Wrapper'
import RecordDisplay from './RecordDisplay'
import MobileRecordDisplay from './ui/MobileRecordDisplay'

function Record() {
  return (
    <div className='w-full lg:p-4'>
        <Wrapper style={"bg-[#DCEED8] flex flex-col items-center lg:items-start justify-center px-2 pt-6 sm:pl-4 lg:px-[10rem] sm:pt-8 lg:pb-[10rem] gap-4"}> 
            <h3 className=' w-full text-[#272D2A] tracking-tight font-medium text-[2.5rem] px-2 lg:text-[5rem]'>Track Record</h3>
            <RecordDisplay />
            <MobileRecordDisplay />
        </Wrapper>
    </div>
  )
}

export default Record
