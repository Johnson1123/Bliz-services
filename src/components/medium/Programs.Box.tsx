import Image from "next/image";
import React from "react";

function ProgramsBox({
  image,
  title,
  text,
}: {
  image: any;
  title: string;
  text: string;
}) {
  return (
    <div className="flex justify-between items-center bg-[#F7F9FF] px-4 py-2 3k:py-3 rounded-lg">
      <div className="h-[50px] w-[50px] bg-[#F7F9FF] rounded-md flex justify-center items-center">
        <Image src={image} alt="Icon" height={100} width={100} />
      </div>
      <div className="flex flex-col gap-3 w-[80%]">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
}

export default ProgramsBox;
