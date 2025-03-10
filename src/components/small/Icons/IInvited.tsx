import React from "react";
import Link from "next/link";
import { UpwardArrow } from "@/constant/icons";

function IInverted({ style, url }: { style: string; url: string }) {
  return (
    <div className="cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center bg-pink hover:bg-darkblue transition-all duration-500 group">
      <Link href={url}>
        <UpwardArrow className={`${style}`} size={25} />
      </Link>
    </div>
  );
}

export default IInverted;
