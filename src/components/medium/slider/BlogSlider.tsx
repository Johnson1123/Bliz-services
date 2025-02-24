// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { testimonials } from "@/constant/data";
import Image from "next/image";
import { Comment, UserCircle } from "@/constant/icons";

export default function BlogSlider() {
  return (
    <>
      <Swiper
        speed={1000}
        spaceBetween="10"
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
      >
        {testimonials.map((_, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[350px] top-0 left-0">
                <div className="absolute top-5 left-5 w-[60px] h-[70px] bg-white rounded-[20px]">
                  <p className="w-full py-1 bg-pink text-white z-20 rounded-md text-center">
                    24
                  </p>
                  <p className="text-center py-1">May</p>
                </div>

                {/* main image */}
                <div className="absolute top-0 left-0 w-full h-[270px] overflow-hidden z-10 rounded-[20px]">
                  <Image
                    src={"/image-3.webp"}
                    alt="blog Image"
                    fill
                    objectFit="cover"
                    className="rounded-md hover:scale-125 duration-500"
                  />
                </div>

                {/* overlay box */}
                <div className="absolute right-0 bottom-10 w-[90%] overflow-hidden z-20 bg-gray-200 rounded-[20px] rounded-br-none px-10 px-7">
                  <h3>A day in the life of entrepreneur & ceo</h3>
                  <div className="flex gap-3 ">
                    <div className="flex items-center space-x-3">
                      <UserCircle className="text-blue" />

                      <p className="text-sm font-normal">Admin</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Comment className="text-blue" />
                      <span>{0}</span>
                      <p className="text-sm font-normal">Comments</p>
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
