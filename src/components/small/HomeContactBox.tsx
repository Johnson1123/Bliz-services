import React from "react";
import { IconType } from "react-icons";

type Props = {
  text: string;
  title: string;
  Icon: IconType;
};

function HomeContactBox({ text, title, Icon }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="h-[50px] w-[50px] bg-white rounded-md flex justify-center items-center">
        <Icon size={30} className="text-pink" />
      </div>
      <div className="flex flex-col gap-3 w-[80%]">
        <h3 className="text-white">{title}</h3>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
}

export default HomeContactBox;
