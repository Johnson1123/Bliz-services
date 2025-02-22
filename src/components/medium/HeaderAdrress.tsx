import React from "react";
import { IconType } from "react-icons";

function HeaderAdrress({ text, label }: { text: string; label: string }) {
  return (
    <div className={`justify-center items-center flex gap-2`}>
      <div className="">
        <p className="font-light text-gray-400 font-optima smallText">
          {label}
        </p>
        <p className="font-semibold text-gray-600 font-optima smallText mt-2">
          {text}
        </p>
      </div>
    </div>
  );
}

export default HeaderAdrress;
