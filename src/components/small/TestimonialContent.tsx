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
    <div className="h-full w-full bg-white py-2 px-3">
      <div className="">
        <Quote size={45} className="text-pink" />

        <div className="mt-7">
          <div className="">
            <h3 className="text-lg font-semibold truncate">{name}</h3>
            <p>{role}</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="pr-3 leading-[24px]">{text}</p>
        </div>
      </div>
      <div className="mt-5">
        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default TestimonialContent;
