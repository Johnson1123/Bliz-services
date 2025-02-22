"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdArrowForward } from "react-icons/md";

function Transparent({ url, text }: { url: string; text: string }) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(url);
  };
  return (
    <button
      onClick={() => handleNavigation()}
      className="group px-[16px] py-[8px] bg-transparent text-white border border-white border-solid rounded-full flex gap-2 items-center group hover:bg-pink hover:text-darkblue hover:border-pink transition-all duration-500 h-max
    "
    >
      {text}
      <MdArrowForward
        className="-rotate-45 text-white group-hover:text-darkblue"
        size={20}
      />
    </button>
  );
}

export default Transparent;
