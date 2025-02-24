import React from "react";
import Conatainer from "../layout/Conatainer";
import HomeAboutImage from "../small/HomeAboutImage";
import { homeAboutParagrahText } from "@/constant/data";
import AboutParagrahIcon from "../small/AboutParagrahIcon";
import TransparentBlue from "../small/Buttons/TransparentBlue";

const HomeAbout = () => {
  return (
    <section className=" bg-[url('/image/about-us-bg.jpg')] bg-no-repeat bg-cover bg-center lg:mt-16">
      <Conatainer full={false}>
        <div className="flex flex-col md:grid grid-cols-2 grid-rows-1 gap-4 py-16">
          {/* curve image */}
          <div className="w-full md:col-start-1 md:col-end-2 md:row-span-1">
            <HomeAboutImage />
          </div>

          {/* content container */}
          <div className="mt-10 md:mt-5 px-3 flex flex-col md:col-start-2 md:col-end-3 md:row-span-1">
            <div className="bg-gradient-to-r from-[#fff] to-gray-100 px-7 rounded-full py-2 w-max">
              <p className="text-blue">ABOUT US </p>
            </div>

            <div className="mt-5 w-[90%] md:w-full xl:w-[80%]">
              <h2 className="py-1 ">
                We specialize in seamless{" "}
                <strong className="text-blue border-b-2 border-blue ml-1">
                  International Relocations
                </strong>
              </h2>
            </div>

            <div className="mt-7 xl:w-[90%]">
              <p>
                We make relocating abroad stress-free with expert guidance at
                every step. From visas to settling in, we handle it all
                seamlessly. Start your journey with confidence today!
              </p>
            </div>

            {/* paragrah list */}
            <div className="w-full mt-5 py-5">
              <div className="flex gap-3 flex-col w-full md:flex-row md:flex-wrap md:justify-between">
                {homeAboutParagrahText.map((item, i) => {
                  return <AboutParagrahIcon text={item} key={i} />;
                })}
              </div>
            </div>

            {/**/}

            <div className="bg-white py-1 mt-5 rounded-full md:flex-row w-max lg:px-2 self-start">
              <div className="rounded-xl px-4 py-3 flex">
                <TransparentBlue text="Learn More" url="/" />
              </div>

              {/* Rating */}
              {/* <div className="flex items-center gap-5 px-3">
              <p className="text-2xl font-bold">4.5</p>
              <div className="">
                <p>Review On</p>
                <Rating rating={4} />
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeAbout;
