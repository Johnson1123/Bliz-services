import Image from "next/image";
import React from "react";

type Props = {};

const HomeAboutImage = (props: Props) => {
  return (
    <div className="w-[100%] h-[160px] overflow-hidden relative left-0 right-0">
      <div className="w-[700px] h-[160px] absolute right-0 top-0">
        <div className="bg-red-500 h-full rounded-full">
          <img
            src={"/graduation.avif"}
            alt="about us image"
            className="h-full w-full object-cover rounded-full"
          />
          .
        </div>
      </div>
      <div className="w-[700px] h-[160px] absolute right-10 top-0 border-4 border-white z-20 rounded-full"></div>
    </div>
  );
};

export default HomeAboutImage;
