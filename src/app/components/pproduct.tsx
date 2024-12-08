import React from 'react'
import Image from 'next/image'

const Pproduct = () => {
  return (
    <div className='w-full h-[478px] mt-2 flex justify-center items-center gap-[16px] p-5 bg-[#FFFFFF]'>
        {/* left div */}
        <div className='w-[630px] h-[460px] bg-[#2A254B] '>
            
            <div className='w-[495px] h-[99px] mt-[64px] ml-[64px] flex flex-col justify-start items-start'>
                <h1 className='text-[32px] font-[Clash] text-[#FFFFFF] leading-[39.36px]'>It started with a small idea</h1>
                <p className='text-[18px] font-[santoshi] text-[#FFFFFF] leading-[24.3px]'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>


               
            </div>
            <div className='w-[106px] h-[24px] mt-[220px] ml-[64px] flex flex-col justify-start items-start'>
           <Image
           src='/Button Medium.png'
           alt='btn'
           width={170}
           height={56}/>
           </div>






        </div>
        {/* right div */}
        <div className=''>
            <Image
            src='/Image Block.png'
            alt='pic2'
            width={630}
            height={478}/>
        </div>
    </div>
  )
}

export default Pproduct