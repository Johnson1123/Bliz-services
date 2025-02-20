import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

function IHeader({ Icon, url }: { Icon: IconType; url: string }) {
  return (
    <div className="cursor-pointer h-[20px] w-[20px] rounded-full flex items-center justify-center bg-gray-200">
      <Link href={url}>
        <Icon className="text-pink" size={14} />
      </Link>
    </div>
  );
}

export default IHeader;
