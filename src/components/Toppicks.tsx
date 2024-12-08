import React from 'react';
import Image from 'next/image';

const Toppicks = () => {
  return (
    <>
    <div className='w-[1440px] h-[874px] text-center mt-12 ml-60'>
        
        <div className='w-[311px] h-[54px] text-4xl text-bold flex justify-center items-start text-center sm:flex-col md:flex-cols-2 lg:flex-row ml-96'>
            <h1>Top Picks For You</h1></div>
            <div className='w-[773px] h-6 text-sm text-[#9f9f9f] flex justify-center items-start mt-2 ml-52'>
                <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
           <div className='w-[1440px] h-[777px]'>
            <div className='flex justify-around items-center sm:flex-col md:flex-cols-2 lg:flex-row mt-20 mb-20'>
                <div className='w-[287px] h-[372px]'>
                    <Image src="/Group18.png" alt="image" width={280} height={372} />
                </div>
                <div>
                <Image src="/Group15.png" alt="image" width={280} height={372} />
                </div>
                <div>
                <Image src="/Group16.png" alt="image" width={280} height={372} />
                </div>
                <div>
                <Image src="/Group17.png" alt="image" width={280} height={372} />
                </div>
            </div>
            <div className='w-[115px] h-[49px] text-center ml-[600px] mt-20'>View More</div>
           </div>

        </div>


    
    </>
  )
}

export default Toppicks