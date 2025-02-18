import Image from "next/image";
import React from "react";

type Props = {};

function ServicesContent({}: Props) {
  return (
    <div className="relative w-full h-full">
      <Image src="/image.png" alt="services" fill objectFit="cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl to- from-violet-500 bg-opacity-50"></div>
    </div>
  );
}

export default ServicesContent;
