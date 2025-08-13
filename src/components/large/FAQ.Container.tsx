"use client";
import React, { useState } from "react";
import FAQAccordium from "../medium/FAQ.Accordium";

interface Items {
  title: string;
  content: string;
}

const FAQContainer = ({
  data,
  className,
}: {
  data: Items[];
  className: string;
}) => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div
      className={`w-full flex-col gap-5 overflow-hidden mt-5 lg:mt-10 ${className}`}
    >
      {data.map((item, index) => (
        <FAQAccordium
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          index={index}
          onClick={async () => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default FAQContainer;
