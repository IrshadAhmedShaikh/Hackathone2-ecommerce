import React from "react";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";
import { PiFlowerTulip } from "react-icons/pi";




const Hero = () => {
  return (
    <div className="w-full">
      <div>
        <Image src="/Hero Blocks.png" alt="heropic" width={1440} height={704} />
      </div>



      <div className="w-full h-[476px] bg-[#FFFFFF] justify-center">
        <div className="w-[366px] h-[34px] mt-[80px] ml-[529px]">
          <h1 className="text-[#2A254B] font-[Clash] text-[24px] leading-[33.6px]">
            What makes our brand different
          </h1>
        </div>



        {/* boxe1 */}
        <div className="flex justify-center">
        <div className="w-[280px] h-[244px] mt-[50px] p-[48px] gap-5px bg-[#F9F9F9] ">
          <div className="w-[209px] h-[148px] gap-12 ">
            <div className="w-24px h-24px">
              <TbTruckDelivery className="text-xl bg-[#FFFFFF]" />
            </div>
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
              Next day as standard
            </h1>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px] pt-3">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          
        </div>

{/* box2 */}
        <div className="w-[280px] h-[244px] mt-[50px] ml-[20px] p-[48px] gap-10px bg-[#F9F9F9] ">
          <div className="w-[209px] h-[148px] gap-12 ">
            <div className="w-24px h-24px">
              <IoCheckmarkCircleOutline className="text-xl bg-[#FFFFFF]" />
            </div>
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
            Made by true artisans
            </h1>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px] pt-3">
            Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          
        </div>

{/* box3 */}
        <div className="w-[280px] h-[244px] mt-[50px] ml-[20px] p-[48px] gap-10px bg-[#F9F9F9] ">
          <div className="w-[209px] h-[148px] gap-12 ">
            <div className="w-24px h-24px">
              <BsWallet2 className="text-xl bg-[#FFFFFF]" />
            </div>
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
            Unbeatable prices
            </h1>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px] pt-3">
            For our materials and quality you won’t find better prices anywhere
            </p>
          </div>
          
        </div>
{/* box4 */}
        <div className="w-[280px] h-[244px] mt-[50px] ml-[20px] p-[48px] gap-10px bg-[#F9F9F9] ">
          <div className="w-[209px] h-[148px] gap-12 ">
            <div className="w-24px h-24px">
              <PiFlowerTulip className="text-xl bg-[#FFFFFF]" />
            </div>
            <h1 className="font-[clash] text-[20px] text-[#2A254B] leading-[28px] pt-2">
            Recycled packaging
            </h1>
            <p className="font-[satosh] text-[16px] text-[#2A254B] leading-[24px] pt-3">
            We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
          
        </div>
        
        </div>



        
        
        



        
      </div>
    </div>
  );
};

export default Hero;


