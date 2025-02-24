// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { testimonials } from "@/constant/data";
import InvertedBorder from "../InvertedBorder";

export default function Testimonials() {
  return (
    <>
      <Swiper
        speed={1000}
        modules={[Autoplay]}
        autoplay={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="w-full"
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
