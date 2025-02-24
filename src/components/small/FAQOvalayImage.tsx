import Image from "next/image";
import React from "react";

function FAQOvalayImage() {
  return (
    <div className="w-full relative h-[350px] md:h-[450px] lg:h-full my-5 lg:my-0">
      <div className="w-[80%] md:w-[80%] lg:h-full relative">
        <Image
          src={"/image-2.webp"}
          alt="Image label"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-[50%] lg:w-[40%] h-[200px] border-[10px] absolute top-[50%] right-0 lg:right-10 translate-y-[-50%] rounded-xl bg-red-700">
        <Image
          src={"/image-3.webp"}
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
