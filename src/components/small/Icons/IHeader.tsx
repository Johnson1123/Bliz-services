import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

function IHeader({ Icon, url }: { Icon: IconType; url: string }) {
  return (
    <div className="cursor-pointer h-[25px] w-[25px] rounded-full flex items-center justify-center bg-darkBlue border border-white hover:bg-blue hover:border-none transition-all duration-500">
      <Link href={url}>
        <Icon className="text-white" size={14} />
      </Link>
    </div>
  );
}

export default IHeader;
