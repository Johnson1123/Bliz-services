"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { testimonials } from "@/constant/data";
import TestimonialContent from "@/components/small/TestimonialContent";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
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
          2024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {open &&
          testimonials.map((item, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div className="w-full h-[300px] lg:h-auto testmonial-box">
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden  `}
                  >
                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-white rounded-2xl overflow-hidden">
                      <TestimonialContent
                        text={item.text}
                        name={item.name || ""}
                        image={item.image}
                        rounded-2xl
                        overflow-hidden
                        rating={item.rating || 0}
                        role={item.role || ""}
                      />
                    </div>

                    <div
                      className={`absolute top-0 right-0  h-[80px] w-[90px] rounded-bl-[25px] flex justify-end ${"bg-gray-200"}`}
                    >
                      <div className="h-[70px] w-[70px] rounded-full">
                        <img
                          src="/image.png"
                          alt={item.name ? item.name : "Client picture"}
                          className="rounded-full h-[100%] w-[100%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
