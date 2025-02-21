"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdArrowForward } from "react-icons/md";

function Secondary({ url, text }: { url: string; text: string }) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(url);
  };
  return (
    <button
      onClick={() => handleNavigation()}
      className="px-[16px] py-[8px] bg-pink text-darkblue border border-pink border-solid rounded-full flex gap-2 items-center group hover:bg-transparent hover:text-white hover:border-white transition-all duration-500 h-max
    "
    >
      {text}
      <MdArrowForward className="-rotate-45" size={20} />
    </button>
  );
}

export default Secondary;
