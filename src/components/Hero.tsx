import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
    <div className='bg-[#FBEBB5] h-screen sm:w-full md:w-full w-[1440px] flex justify-around items-center flex-col md:flex-row'>
        {/*left*/}
        <div className='flex flex-col justify-center items-center text-6xl'>
        <h1 className='text-6xl font-bold text-black w-[440px] h-[192px] ml-72'>Rocket single seater</h1>
        <h2 className='text-2xl text-black underline w-[121px] h-[49px] '>Shop Now</h2>
</div>
{/*right*/}
<div className='sm:w-[520px] md:w-[600px] sm:mb-40 md:mb-4 ml-0'>
    <Image src="/sofa1.png" alt="image" width={500} height={500} />
</div>
    </div>
    </>
  )
}

export default Hero