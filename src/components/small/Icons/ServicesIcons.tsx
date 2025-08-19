import React from "react";
import { IconType } from "react-icons";

function ServicesIcons({ Icon }: { Icon: IconType }) {
  return (
    <div className="bg-transparent flex justify-center items-center  group">
      <Icon size={40} className="text-darkblue" />
    </div>
  );
}

export default ServicesIcons;
