import React from "react";
import Conatainer from "../layout/Conatainer";
import RatingWithBtn from "../medium/RatingWithBtn";
import AboutParagrah from "../medium/AboutParagrah";

export default function ServicesAbout() {
  return (
    <section className="h-max py-20 min-h-[450px] md:h-max flex items-center lg:mt-[200px]">
      <Conatainer full={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:gap-10 align-center md:items-center">
          <div className="col-span-1 row-span-1 md:order-last ">
            <div className="bg-gradient-to-r from-gray-200 to-[#fff] px-7 rounded-full py-2 w-max">
              <p className="text-blue text-sm">ABOUT US </p>
            </div>

            <div className="mt-5 w-full">
              <h2 className="py-1 leading-10 text-left">
                We Help{" "}
                <strong className="text-blue border-b-2 border-blue ml-1">
                  cooperate leaders{" "}
                </strong>
                to build thier Success
              </h2>
            </div>

            {/* Review count */}
            <RatingWithBtn />
          </div>

          <div className="col-span-1 row-span-1 md:w-full">
            <div className="mt-7 md:mt-0 xl:w-[90%]">
              <p className="text-base font-medium text-gray-700">
                We make relocating abroad stress-free with expert guidance at
                every step. From visas to settling in, we handle it all
                seamlessly. Start your journey with confidence today!
              </p>
            </div>

            {/* paragrah list */}
            <AboutParagrah />

            {/**/}
          </div>
        </div>
      </Conatainer>
    </section>
  );
}
