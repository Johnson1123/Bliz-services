import { Check } from "@/constant/icons";
import React from "react";

type Props = {
  text: string;
};

export default function AboutParagrahIcon({ text }: Props) {
  return (
    <div className="flex gap-3 items-center lg:w-[40%]">
      <Check size={20} className="text-pink" />
      <p className="">{text}</p>
    </div>
  );
}
