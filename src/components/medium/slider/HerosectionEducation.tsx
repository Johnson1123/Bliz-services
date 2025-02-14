import Secondary from "@/components/small/Buttons/Secondary";
import Transparent from "@/components/small/Buttons/Transparent";
import { Waving } from "@/constant/icons";
import React from "react";

function HerosectionEducation() {
  return (
    <div className="w-full lg:w-[80%] mx-auto h-full bg-transparent px-[5%] lg:px-[1%]  flex flex-col justify-center z-20">
      <h2 className="flex py-2 items-center gap-4">
        <span>
          <Waving color="#fff" size={25} />
        </span>
        <span className="text-white">Study Overseas</span>
      </h2>

      <h2 className="text-white mt-5 xxlarge-title">
        <span>Make A </span>
        <span className="text-pink font-bold drop-shadow-lg">Different </span>
        <span> through </span>
        <span className="text-pink font-bold drop-shadow-lg">education </span>
      </h2>

      <div className="mt-5 md:w-[70%]">
        <p className="text-white py-1">Do you desire to study Overseas?</p>
        <p className="text-white py-1">
          Do you want to gain admission to reputable educational institution
          Overseas?
        </p>
        <p className="text-white py-1">
          Do you understand the application process?
        </p>
      </div>

      <div className="flex gap-4 mt-10 ">
        <Secondary text="Apply Now" url="/education" />
        <Transparent text="Get In touch" url="/contact" />
      </div>
    </div>
  );
}

export default HerosectionEducation;
