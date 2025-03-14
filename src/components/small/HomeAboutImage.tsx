import Image from "next/image";
import React from "react";

const HomeAboutImage = () => {
  return (
    <div className="hidden md:block w-full md:col-start-1 md:col-end-2 md:row-span-1">
      <div className=" w-[100%] h-[200px] md:h-full 3k:h-[450px] overflow-hidden relative left-0 right-0">
        <div className="w-[700px] xl:w-[1200px] 3k:w-[1500px] h-[200px] 3k:h-[450px] md:h-[100%] absolute right-0 top-0">
          <div className="h-full rounded-full">
            <Image
              src={"/new/playful-image.jpg"}
              height={4000}
              width={3800}
              alt="about us image"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="w-[700px] xl:w-[1200px] 3k:w-[1500px] h-[200px] 3k:h-[450px] md:h-[100%] absolute right-10 top-0 border-4 border-white z-20 rounded-full"></div>
      </div>
    </div>
  );
};

export default HomeAboutImage;
