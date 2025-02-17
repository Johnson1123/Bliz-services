import React from "react";
import IInverted from "../small/Icons/IInvited";
import Image from "next/image";

type Props = {
  Image?: any;
  text?: string;
  href?: string;
};

const InvertedBorder = ({ text, href }: Props) => {
  return (
    <div className="py-3">
      <div className="w-[300px] h-[250px] overflow-hidden relative top-0 left-0  rounded-lg">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-red-400">
          <Image src="/image.png" alt="" fill objectFit="cover" />
        </div>
        <div className="absolute top-0 right-0 bg-white h-[80px] w-[90px] rounded-bl-[25px] flex justify-end">
          <IInverted url={""} style="text-black -rotate-45" />
        </div>
        <div className="absolute w-[20px] h-[40px] top-[80px] right-0 bg-transparent rounded-tr-[25px] z-10 shadow-[1px_-20px_0_#fff]"></div>
        <div className="absolute w-[20px] h-[80px] top-0 right-[90px] bg-transparent rounded-tr-[25px] z-10 shadow-[0px_-20px_0_#fff]"></div>
      </div>
    </div>
  );
};

export default InvertedBorder;
