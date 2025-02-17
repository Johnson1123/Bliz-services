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
    <div className={`justify-center items-center gap-3 flex gap-2`}>
      <div className="bg-gray-200 h-[25px] w-[25px] rounded-full flex justify-center items-center">
        <Icon size={16} className="text-pink" />
      </div>
      <div className="">
        <p className="font-light text-gray-400 font-optima smallText">
          {label}
        </p>
        <p className="font-medium text-black mt-1 font-optima">{text}</p>
      </div>
    </div>
  );
}

export default HeaderAdrress;
