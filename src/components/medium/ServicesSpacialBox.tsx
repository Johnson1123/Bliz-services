import { UpwardArrow } from "@/constant/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  text: string;
  title: string;
  link: string;
};

export default function ServicesSpacialBox({
  image,
  text,
  title,
  link,
}: Props) {
  return (
    <div
      className={`grid-col-1 group rounded-xl relative top-0 left-0 overflow-hidden group] aspect-square`}
    >
      <h2>{title}</h2>
      <p>{text}</p>
      <Image
        src={image}
        alt="background Image"
        fill
        objectFit="cover"
        className="absolute left-0 top-0"
      />
      <div className="absolute z-30 top-0 right-0 h-[50px] w-[50px] bg-white group-hover:bg-darkblue rounded-full flex justify-center items-center transition-all duration-[.5s]">
        <span>
          <Link href={link}>
            <UpwardArrow
              size={30}
              className="-rotate-45 group-hover:text-white transition-all duration-[.5s]"
            />
          </Link>
        </span>
      </div>
      <div className="absolute top-0 w-full h-full left-0 right-0 bg-gradient-to-t from-[#0000FF] to-gray-5000 bg-opacity-35 z-10 hidden group-hover:block transition-all duration-[.5s]"></div>
    </div>
  );
}
