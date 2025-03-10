import React from "react";
import IInverted from "../small/Icons/IInvited";
import ServicesContent from "../small/ServicesContent";
import TestimonialContent from "../small/TestimonialContent";

type Props = {
  image: string;
  text: string;
  url?: string;
  title?: string;
  name?: string;
  role?: string;
  rating?: number;
  testimonial?: boolean;
};

const InvertedBorder = ({
  image,
  text,
  url,
  testimonial,
  name,
  rating,
  title,
  role,
}: Props) => {
  return (
    <div
      className={`  ${
        testimonial
          ? "w-full h-[300px] md:h-auto testmonial-box"
          : "aspect-square h-auto"
      }   relative top-0 left-0 overflow-hidden rounded-[20px]`}
    >
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-white">
        {testimonial && (
          <TestimonialContent
            text={text}
            name={name || ""}
            image={image}
            rating={rating || 0}
            role={role || ""}
          />
        )}
        {!testimonial && (
          <ServicesContent
            text={text}
            title={title ? title : ""}
            image={image}
          />
        )}
      </div>

      <div
        className={`absolute top-0 right-0  h-[80px] w-[90px] rounded-bl-[25px] flex justify-end ${
          testimonial ? "bg-gray-200" : "bg-white"
        }`}
      >
        {testimonial ? (
          <div className="h-[70px] w-[70px] rounded-full">
            <img
              src="/image.png"
              alt={name ? name : "Client picture"}
              className="rounded-full h-[100%] w-[100%] object-cover"
            />
          </div>
        ) : (
          <IInverted
            url={url ? url : ""}
            style="text-darkblue -rotate-45 group-hover:text-white"
          />
        )}
      </div>
    </div>
  );
};

export default InvertedBorder;
