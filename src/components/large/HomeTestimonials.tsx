import React from "react";
import Conatainer from "../layout/Conatainer";
import Testimonials from "../medium/slider/Testimonials";
import Primary from "../small/Buttons/Primary";
import Secondary from "../small/Buttons/Secondary";

type Props = {};

const HomeTestimonials = (props: Props) => {
  return (
    <Conatainer full={false}>
      <div className="w-full h-auto flex flex-col justify-center items-center bg-white">
        <div className="bg-gray-100 px-5 rounded-full py-2 w-max mx-auto">
          <p className="text-blue">Our Testimonials</p>
        </div>

        <div className="mt-5 w-[80%]">
          <h2 className="py-1 text-center">
            People Talk about{" "}
            <span className="text-pink border-b-2 border-pink">
              Blizz Services
            </span>
          </h2>
        </div>
        <div className="mt-10">
          <Secondary url="/" text="All Testimonials" />
        </div>
        <div className="w-[100%] mt-10">
          <Testimonials />
        </div>
      </div>
    </Conatainer>
  );
};

export default HomeTestimonials;
