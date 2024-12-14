'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Sofa = () => {
  const [showItem, setShowItem] = useState(false);
  const handleOrder = () => {
    setShowItem(showItem === true ? false : true);
  }
  return (
    <div>
     <div className='w-[1476px] h-[799px] sm:mb-5 flex justify-center items-center bg-[#FFF9E5]'>
        <Image src="/Group23a.png" alt="image" width={983} height={799} />
        <div className='w-[331px] h-[205px] text-center space-y-6'>
          <h2 className='w-[149px] h-[36px] text-2xl ml-20'>New Arrivals</h2>
          <h1 className='w-[331px] h-[72px] text-5xl font-bold'>Asgaard sofa</h1>
          <Link href="../singleItem"><button className='w-[255px] h-[64px] text-xl border-black border-2' onClick={handleOrder}>Order Now</button></Link>
        </div>
     </div>

    </div>
  )
}

export default Sofa
