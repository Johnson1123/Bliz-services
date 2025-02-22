"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdArrowForward } from "react-icons/md";

function Primary({ url, text }: { url: string; text: string }) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(url);
  };
  return (
    <button
      onClick={() => handleNavigation()}
      className="px-[16px] py-[8px] bg-transparent border border-white border-solid rounded-full flex gap-2 items-center group hover:bg-white hover:text-darkblue transition-all duration-500 h-max group
    "
    >
      {text}
      <MdArrowForward className="-rotate-45 text-white" size={20} />
    </button>
  );
}

export default Primary;
