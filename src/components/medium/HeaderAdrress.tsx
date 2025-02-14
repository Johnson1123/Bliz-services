import React from "react";
import { IconType } from "react-icons";

function HeaderAdrress({
  Icon,
  text,
  label,
}: {
  Icon: IconType;
  text: string;
  label: string;
}) {
  return (
    <div
      className={`hidden justify-center items-center gap-3 ${
        label == "Office Address" ? "xl:flex" : "md:flex lg:flex"
      }`}
    >
      <div className="bg-gray-200 h-[30px] w-[30px] rounded-full flex justify-center items-center">
        <Icon size={18} className="text-pink" />
      </div>
      <div className="">
        <p className="font-light text-gray-400">{label}</p>
        <p className="font-semibold text-black mt-1">{text}</p>
      </div>
    </div>
  );
}

export default HeaderAdrress;
