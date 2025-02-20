import Image from "next/image";
import React from "react";

function FAQOvalayImage() {
  return (
    <div className="w-full relative h-[350px] md:h-[450px] my-5">
      <div className="w-[80%] h-full relative">
        <Image
          src={"/image-2.webp"}
          alt="Image label"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-[50%] h-[200px] border-[10px] absolute top-[50%] right-0 translate-y-[-50%] rounded-xl">
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
