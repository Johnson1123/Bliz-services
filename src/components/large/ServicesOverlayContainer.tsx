import React from "react";
import ServicesOverlayBox from "../medium/ServicesOverlayBox";
import { serviceOverlay } from "@/constant/data";

export default function ServicesOverlayContainer() {
  return (
    <div className="hidden lg:w-[80%] xl:w-[70%]  mx-auto absolute bottom-[-150px] lg:bottom-[-150px] left-[50%] translate-x-[-50%] tran lg:grid grid-cols-2 grid-rows-2 gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-7 lg:grid-cols-4 lg:grid-rows-1 xl:gap-10">
      {serviceOverlay.map((item, i) => {
        return (
          <ServicesOverlayBox
            text={item.text}
            title={item.title}
            background={item.background}
            image={item.image}
            key={i}
          />
        );
      })}
    </div>
  );
}
