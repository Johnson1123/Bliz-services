import React from "react";
import { IconType } from "react-icons";

function ContactInfoIcon({ Icon }: { Icon: IconType }) {
  return (
    <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-darkblue hover:bg-pink group">
      <Icon size={18} className="text-white group-hover:text-darkblue" />
    </div>
  );
}

export default ContactInfoIcon;
