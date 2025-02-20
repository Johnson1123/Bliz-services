import SocialLinks from "@/constant/data";
import React from "react";
import IHeader from "../small/Icons/IHeader";
import { SocialPlatform } from "@/constant/icons";

function HeaderSocialMedia() {
  return (
    <div className="hidden justify-center items-center gap-3 xl:flex">
      <div className="bg-gray-200 h-[25px] w-[25px] rounded-full flex justify-center items-center">
        <SocialPlatform size={16} className="text-blue" />
      </div>
      <div className="">
        <p className="font-light text-gray-400 font-optima smallText">
          {"Social Links"}
        </p>
        <div className="flex gap-3 mt-2">
          {SocialLinks.map((item, index) => {
            return <IHeader {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderSocialMedia;
