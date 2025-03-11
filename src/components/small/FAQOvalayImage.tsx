import Image from "next/image";
import React from "react";
function FAQOvalayImage() {
  return (
    <div className=" w-full relative h-[350px] md:h-[450px] lg:h-full my-5 lg:my-0">
      <div className="w-[90%] md:w-[90%] lg:h-full relative left-0 right-0">
        <Image
          src="/new/benefit-handshake.jpg"
          alt="Image label"
          height={540}
          width={960}
          className="object-cover h-full rounded-md"
          loading="lazy"
        />
      </div>
      <div className="w-[50%] lg:w-[40%] h-[200px] border-[10px] absolute top-[70%] right-0 lg:right-0 translate-y-[-70%] rounded-xl">
        <Image
          src="/new/happy-teaam.jpg"
          alt="Image label"
          height={215}
          width={383}
          objectFit="cover"
          className=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default FAQOvalayImage;
