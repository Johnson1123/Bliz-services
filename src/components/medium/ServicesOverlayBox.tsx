import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  text: string;
  background: string;
};

const ServicesOverlayBox = ({ text, image, title, background }: Props) => {
  return (
    <div
      className={`col-span-1 row-span-1 shadow-2xl aspect-square ${
        background == "white" ? "bg-white" : "bg-teal-500"
      } rounded-xl p-5 xl:p-7`}
    >
      <div className="">
        <h3
          className={`text-xl font-medium  ${
            background == "white" ? "text-darkblue" : "text-white"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="mt-7">
        <Image src={image} alt={title} width={80} height={80} />
      </div>
      <div
        className={`w-[10%] h-1 mt-7 bg-darkblue ${
          background == "white" ? "bg-teal-500" : "bg-white"
        }`}
      ></div>
      <div className="mt-5">
        <p
          className={`font-medium text-sm xl:pr-10 ${
            background == "white" ? "text-darkblue" : "text-white"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServicesOverlayBox;
