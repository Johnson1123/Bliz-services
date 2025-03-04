import { Check } from "@/constant/icons";
import React from "react";

type Props = {
  text: string;
};

export default function AboutParagrahIcon({ text }: Props) {
  return (
    <div className="flex gap-3 lg:gap-0 items-center lg:w-[48%]">
      <Check size={20} className="text-blue" />
      <p className="font-semibold text-sm text-black">{text}</p>
    </div>
  );
}
