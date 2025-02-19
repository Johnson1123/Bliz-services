import Image from "next/image";
import React from "react";

type Props = {
  text: string;
  image: string;
  title: string;
};

function ServicesContent({ text, image, title }: Props) {
  return (
    <div className="relative left-0 right-0 w-full h-full rounded-lg">
      <Image src={image} alt="services" fill objectFit="cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-violet-500 to-[darkblue] opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end px-4 pb-10">
        <div className="">
          <h3 className="text-white">{title}</h3>
        </div>
        <div className="mt-2">
          <p className="text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;
