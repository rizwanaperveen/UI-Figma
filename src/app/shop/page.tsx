import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div>
        <div className='text center mt-2'>
            <div className='flex justify-center items-center '>
               {/*hero image*/}
                <Image src="/Group78.png" alt="image" width={1440} height={440}/>
            </div>
            <div className='bg-[#FAF4F4] flex justify-center items-center'>
                <Image src="/Group63.png" alt="image" width={1440} height={100} />
            </div>
            <div className='w-[1440px] h-[828px] flex flex-col md:flex-cols2 lg:flex-cols-3 xl:flex-cols-4 flex-wrap'>
                <div className='flex justify-around items-center'>
                <div className='w-[287px] h-[372px]'>
                    <Image src="/Group18.png" alt="image" width={287} height={372} />
                </div>
                <div className='w-[287px] h-[397px]'>
                <Image src="/Group15.png" alt="image" width={287} height={397} />
                </div>
                <div className='w-[287px] h-[397px]'>
                <Image src="/Group16.png" alt="image" width={287} height={372} />
                </div>
                <div className='w-[287px] h-[397px]'>
                <Image src="/Group17.png" alt="image" width={287} height={372} />
                </div>
                </div>
                <div className='flex justify-around items-center'>
                <div className='w-[287px] h-[287px]'>
                <Image src="/Maskgroup(2).png" alt="image" width={287} height={287} />
                <div className='w-[152px] h-[71px]'><p>Grain coffee table</p>
                <p>Rs. 15,000.00</p>
                </div>
                </div>
                <div className='w-[287px] h-[287px]'>
                <Image src="/Maskgroup(3).png" alt="image" width={287} height={287} />
                <div className='w-[152px] h-[71px]'><p>Kent coffee table</p>
                <p>Rs. 225,000.00</p>
                </div>
                </div>
                <div className='w-[287px] h-[287px]'>
                <Image src="/Maskgroup(4).png" alt="image" width={287} height={287} />
                <div className='w-[152px] h-[71px]'><p>Round coffee table</p>
                <p>Rs. 251,000.00</p>
                </div>
                </div>
                <div className='w-[287px] h-[287px]'>
                    <Image src="/Maskgroup(5).png" alt="image" width={287} height={287} />
                    <div className='w-[152px] h-[71px]'><p>Reclaimed teak coffee table</p>
                    <p>Rs. 25,200.00</p>
                    </div>
                </div>
               </div>
            </div>
            <div className='w-[1440px] h-[300px] flex justify-center items-center mt-4 mb-6 mx-36'>
                <Image src="/Group76.png" alt="image" width={1440} height={100} />
            </div>
        </div>
    </div>
  )
}

export default Shop