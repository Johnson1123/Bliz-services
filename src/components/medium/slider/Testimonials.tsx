// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { testimonials } from "@/constant/data";
import InvertedBorder from "../InvertedBorder";

export default function Testimonials() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <InvertedBorder {...item} testimonial={true} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
