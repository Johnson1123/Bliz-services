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

function TestimonialContent({ text, role, image, name, rating }: Props) {
  return (
    <div className="h-full w-full bg-white py-2 px-3">
      <div className="">
        <Quote size={45} className="text-pink" />

        <div className="mt-3">
          <div className="">
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="pr-3">{text}</p>
        </div>
      </div>
      <div className="">
        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default TestimonialContent;
