import React from "react";
import IInverted from "../small/Icons/IInvited";
import Image from "next/image";
import ServicesContent from "../small/ServicesContent";
import TestimonialContent from "../small/TestimonialContent";
import { title } from "process";

type Props = {
  image: string;
  text: string;
  href?: string;
  title?: string;
  name?: string;
  role?: string;
  rating?: number;
  testimonial?: boolean;
};

const InvertedBorder = ({
  image,
  text,
  href,
  testimonial,
  name,
  rating,
  title,
  role,
}: Props) => {
  return (
    <div className="bg-gray-200 my-2">
      <div className="w-full h-[300px] overflow-hidden relative top-0 left-0 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-red-400">
          {false ? (
            <TestimonialContent
              text={text}
              name={name || ""}
              image={image}
              rating={rating || 0}
              role={role || ""}
            />
          ) : (
            <ServicesContent />
          )}
        </div>
        <div
          className={`absolute top-0 right-0  h-[100px] w-[100px] rounded-bl-[25px] flex justify-end ${
            testimonial ? "bg-gray-200" : "bg-white"
          }`}
        >
          {testimonial ? (
            <div className="h-[60px] w-[60px] rounded-full">
              <img
                src="/image.png"
                alt={name ? name : "Client picture"}
                className="rounded-full h-[100%] w-[100%] object-cover"
              />
            </div>
          ) : (
            <IInverted url={""} style="text-black -rotate-45" />
          )}
        </div>
        <div
          className={`absolute w-[20px] h-[40px] top-[100px] right-0 bg-transparent rounded-tr-[25px] *:z-10 ${
            testimonial
              ? "shadow-[1px_-20px_0_#e5e7eb]"
              : "shadow-[1px_-20px_0_#fff]"
          }`}
        ></div>
        <div
          className={`absolute w-[20px] h-[80px] top-0 right-[100px] bg-transparent rounded-tr-[25px] z-10 ${
            testimonial
              ? "shadow-[1px_-20px_0_#e5e7eb]"
              : "shadow-[1px_-20px_0_#fff]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default InvertedBorder;
