import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

function IHeader({ Icon, url }: { Icon: IconType; url: string }) {
  return (
    <div className="bg-gray-200 h-[20px] w-[20px] rounded-full flex justify-center items-center">
      <Icon size={14} className="text-pink" />
    </div>
  );
}

export default IHeader;
