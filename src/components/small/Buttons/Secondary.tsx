"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdArrowForward } from "react-icons/md";

function Secondary({
  url,
  text,
  icon,
}: {
  url: string;
  text: string;
  icon?: boolean;
}) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(url);
  };
  return (
    <button
      onClick={() => handleNavigation()}
      className="px-[16px] py-[8px] bg-blue text-white border border-blue border-solid rounded-full flex gap-2 items-center group hover:bg-blue hover:text-white hover:border-blue transition-all duration-500 h-max
    "
    >
      {text}
      {icon && (
        <MdArrowForward
          className="-rotate-45 group-hover:text-white"
          size={20}
        />
      )}
    </button>
  );
}

export default Secondary;
