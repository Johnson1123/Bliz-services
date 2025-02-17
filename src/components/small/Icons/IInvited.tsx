import React from "react";
import Link from "next/link";
import { UpwardArrow } from "@/constant/icons";

function IInverted({ style, url }: { style: string; url: string }) {
  return (
    <div className="cursor-pointer h-[30px] w-[30px] rounded-full flex items-center justify-center bg-gray-200 hover:bg-blue transition-all duration-500 group:">
      <Link href={url}>
        <UpwardArrow className={`${style}`} />
      </Link>
    </div>
  );
}

export default IInverted;
