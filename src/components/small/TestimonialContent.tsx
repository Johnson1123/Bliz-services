import React from "react";
import { Quote } from "@/constant/icons";
import Rating from "./Rating";

type Props = {
  text: string;
  role: string;
  image: string;
  rating: number;
  name: string;
};

function TestimonialContent({ text, role, name, rating }: Props) {
  return (
    <div className="h-full w-full py-2 3k:py-7 px-3 flex flex-col gap-5">
      <Quote size={45} className="text-pink h-[30px]" />

      <div className="3k:mt-1 flex-1 flex flex-col justify-around">
        <div className="">
          <h3 className="text-lg font-semibold truncate text-black">{name}</h3>
          <p className="text-sm text-black">{role}</p>
        </div>

        <div className="mt-5 3k:mt-10">
          <p className="pr-3 leading-[24px] text-black">{text}</p>
        </div>
        <div className="mt-5 3k:mt-10">
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialContent;
