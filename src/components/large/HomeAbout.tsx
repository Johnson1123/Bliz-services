import React from "react";
import Conatainer from "../layout/Conatainer";
import HomeAboutImage from "../small/HomeAboutImage";
import { homeAboutParagrahText } from "@/constant/data";
import AboutParagrahIcon from "../small/AboutParagrahIcon";
import TransparentPink from "../small/Buttons/TransparentPink";
import Rating from "../small/Rating";

type Props = {};

const HomeAbout = (props: Props) => {
  return (
    <Conatainer full={false}>
      <div className="flex flex-col bg-gray-100 py-5">
        {/* curve image */}
        <div className="">
          <HomeAboutImage />
        </div>

        {/* content container */}
        <div className="mt-5 px-3 flex flex-col items-center">
          <div className="bg-gradient-to-r from-[#fff] to-gray-100 px-7 rounded-full py-2 w-max">
            <p className="text-blue">ABOUT US </p>
          </div>

          <div className="mt-3 w-[90%]">
            <h2 className="py-1 text-center">
              We Help People Accomplish Their
              <span className="text-pink border-b-2 border-pink ml-1">
                Goals
              </span>
            </h2>
          </div>

          <div className="mt-7">
            <p>
              The is a dummy or placeholder text commonly used in graphic
              design, publishing, and web development to fill empty spaces in a
              layout that does not yet have content.
            </p>
          </div>
          {/* paragrah list */}
          <div className="w-full mt-5 py-5">
            <div className="flex gap-3 flex-col w-full">
              {homeAboutParagrahText.map((item, i) => {
                return <AboutParagrahIcon text={item} />;
              })}
            </div>
          </div>

          {/**/}

          <div className="flex flex-col bg-white gap-3 py-3 rounded-[30px] w-full">
            <div className="rounded-xl px-4 py-3 flex">
              <TransparentPink text="Learn More" url="/" />
            </div>
            <div className="flex items-center gap-5 px-3">
              <p className="text-2xl font-bold">4.5</p>
              <div className="">
                <p>Review On</p>
                <Rating rating={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Conatainer>
  );
};

export default HomeAbout;
