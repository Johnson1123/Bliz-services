// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { homeServices } from "@/constant/data";
import InvertedBorder from "../InvertedBorder";

export default function HomeServicesSwiper() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      <Swiper
        autoplay={true}
        speed={500}
        modules={[Autoplay]}
        loop={true}
        observer={true}
        observeParents={true}
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
        {open &&
          homeServices.map((item, i) => {
            return (
              <SwiperSlide key={i} className="slides-width">
                <InvertedBorder {...item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
