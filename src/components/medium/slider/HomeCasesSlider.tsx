// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { homeCases } from "@/constant/data";
import CasesBox from "../CasesBox";

export default function HomeCasesSlider() {
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      <Swiper
        autoplay={true}
        speed={500}
        modules={[Autoplay]}
        loop={true}
        breakpoints={{
          400: {
            slidesPerView: "auto",
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {homeCases.map((item, i) => {
          return (
            <SwiperSlide key={i} className="slides-width">
              <CasesBox {...item} key={i} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
