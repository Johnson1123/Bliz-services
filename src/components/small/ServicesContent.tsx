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
      {/* background image */}
      <Image
        src={image}
        alt="services"
        height={540}
        width={960}
        objectFit="cover"
        className="object-cover h-full w-full"
      />

      {/* overlay color */}

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end px-2  pb-5 ">
        <div className="bg-[#0a193a] bg-opacity-60 px-4 py-2 rounded-2xl">
          <div className="">
            <h3 className="text-white">{title}</h3>
          </div>
          <div className="mt-2">
            <p className="text-white">
              {text.length > 70 ? `${text.slice(0, 70)}` : text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;
