// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { homeServices } from "@/constant/data";
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
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
        }}
      >
        {homeServices.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <CasesBox />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
