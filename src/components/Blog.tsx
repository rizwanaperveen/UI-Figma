import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div>
        <div className='w-[1440px] h-[944px]'>
           <div className='w-[479px] h-[91px] ml-96 text-center mb-16'>
           <h1 className='w-[174px] h-[54px] text-4xl text-bold text-center ml-96'>Our Blogs</h1>
           <p className='w-[479px] h-[24px] text-center ml-60'>Find a bright ideal to suit your taste with our great selection</p>
            </div> 
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[1240px] h-[555px] ml-72'>
                <div className='w-[393px] h-[555]'>
                    <Image src="/Group50.png" alt="image" width={393} height={555} />
                </div>
                <div className='w-[393px] h-[555]'>
                <Image src="/Group49.png" alt="image" width={393} height={555} />
                </div>
                <div className='w-[393px] h-[555]'>
                <Image src="/Group48.png" alt="image" width={393} height={555} />
                </div>
            </div>
            <div className='w-[126px] h-[49px] text-center ml-96'>
                View All Post
            </div>
        </div>
    </div>
  )
}

export default Blog