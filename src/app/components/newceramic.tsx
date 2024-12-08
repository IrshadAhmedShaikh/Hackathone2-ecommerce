import React from "react";
import Image from "next/image";

const Newceramic = () => {
  return (
    <div className="w-full h-[634px] bg-[#FFFFFF] ">
      <div className="w-full flex justify-center items-center gap-[24px] ml-[40px]">
        <Image src="/Product Card (1).png" alt="pic" width={305} height={462} />

        <Image src="/Product Card.png" alt="pic" width={305} height={462} />

        <Image src="/Product.png" alt="pic" width={305} height={462} />

        <Image src="/light.png" alt="pic" width={305} height={375} />
      </div>

     <div className="w-full h-[56px] flex justify-center items-center font-[satoshi] ">
        <button className="font-[santoshi] text-[16px] text-[#2A254B] mt-20 bg-[#F9F9F9] p-5">View collection</button>
     </div>
     
    </div>
  );
};

export default Newceramic;
