import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <div>
        <div className='h-[672px] w-[1440px] sm:w-full md:w-full bg-[#FAF4F4] flex justify-around items-center flex-col md:flex-row'>
              <div className='w-[605px] h-[562px]'><Image src="/Group9.png" alt="image" width={500} height={500} /></div>
              <div className='w-[605px] h-[562px]'><Image src="/Group8.png" alt="image" width={500} height={500} /></div>
    
    
            </div>
    </div>
  )
}

export default Content