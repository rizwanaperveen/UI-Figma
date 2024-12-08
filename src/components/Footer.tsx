import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-[1440px] h-[550px] ml-60'>
            <div className='w-[1240.01] h-[419px]'>
               <div className='w-[1131px] h-[312px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='w-[285px] h-[72px] my-6 text-[#9F9F9F] mx-8 py-6'>
            <p>400 University Drive Suite 200 Coral</p> 
            <p> Gables,</p>
            <p>FL 33134 USA</p>
        </div>
        <div className='w-[68px] h-[312px] my-6 mx-8 gap-14'>
            <h1 className='text-[#9F9F9F]'>Links</h1>
            <ul>
                <li className='my-6'>Home</li>
                <li className='my-6'>Shop</li>
                <li className='my-6'>Shop</li>
                <li className='my-6'>About</li>
                <li className='my-6'>Conact</li>
            </ul>
        </div>
        <div className='w-[140px] h-[242px] my-6 mx-8'>
            <h1 className='text-[#9F9F9F] my-6'>Help</h1>
            <ul>
                <li className='my-6'>Payment Options</li>
                <li className='my-6'>Returns</li>
                <li className='my-6'>Privacy Policies</li>
            </ul>
        </div>
        <div className='w-[286px] h-[101px] my-6 mx-8'>
            <p className='text-[#9F9F9F]'>NewsLetter</p>
            <br/>
            <div className='flex justify-between underline'>
            <p className='text-[#9F9F9F]'>Enter Your Email Address</p>
            <p>SUBSCRIBE</p>
            </div>
        </div>
        </div>
               <div className='w-[1240.01] h-[59px] mt-10 border-t-2 border-slate-400 flex items-center'>2022 Meubel House. All rights reverved</div>
            </div>
        </div>
    </div>
  )
}

export default Footer

