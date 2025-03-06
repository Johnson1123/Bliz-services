import Image from "next/image";
import React from "react";
import mainImg from "../../assets/images/image-2.webp";
import overLayImg from "../../assets/images/image-3.webp";
function FAQOvalayImage() {
  return (
    <div className=" w-full relative h-[350px] md:h-[450px] lg:h-full my-5 lg:my-0">
      <div className="w-[90%] md:w-[90%] lg:h-full relative">
        <Image
          src={mainImg}
          alt="Image label"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-[50%] lg:w-[40%] h-[200px] border-[10px] absolute top-[70%] right-0 lg:right-0 translate-y-[-70%] rounded-xl">
        <Image
          src={overLayImg}
          alt="Image label"
          fill
          objectFit="cover"
          className=""
        />
      </div>
    </div>
  );
}

export default FAQOvalayImage;
