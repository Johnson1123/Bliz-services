import { homeAboutParagrahText } from "@/constant/data";
import React from "react";
import AboutParagrahIcon from "../small/AboutParagrahIcon";

export default function AboutParagrah() {
  return (
    <div className="w-full mt-5 py-5 md:py-0">
      <div className="flex gap-3 flex-col w-full md:flex-row md:flex-wrap md:justify-between">
        {homeAboutParagrahText.map((item, i) => {
          return <AboutParagrahIcon text={item} key={i} />;
        })}
      </div>
    </div>
  );
}
