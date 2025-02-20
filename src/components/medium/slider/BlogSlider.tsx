// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode } from "swiper/modules";
import { testimonials } from "@/constant/data";
import Image from "next/image";
import { Comment, UserCircle } from "@/constant/icons";

export default function BlogSlider() {
  return (
    <>
      <Swiper
        freeMode={true}
        speed={1000}
        spaceBetween="10"
        slidesPerView={"auto"}
        modules={[FreeMode, Autoplay]}
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
              <div className="mt-5">
                <div className="relative h-auto w-full">
                  <div className="absolute top-5 left-5 w-[60px] h-[70px] bg-white rounded-md">
                    <p className="w-full py-1 bg-pink text-white z-20 rounded-md text-center">
                      24
                    </p>
                    <p className="text-center py-1">May</p>
                  </div>
                  <div className="relative w-full h-[270px] overflow-hidden -z-10">
                    <Image
                      src={"/image-3.webp"}
                      alt="blog Image"
                      fill
                      objectFit="cover"
                      className="rounded-md hover:scale-125 duration-500"
                    />
                  </div>
                  <div className="absolute min-h-[120px] w-[85%] bg-gray-200 bottom-[50px] rounded-lg rounded-br-none right-0 px-5 py-3">
                    <p>Attract and retail quality high paying customer</p>
                    <div className=" flex gap-5 mt-5">
                      <p className="flex gap-2 items-center">
                        <UserCircle className="text-pink" />
                        Admin
                      </p>
                      <p className="flex gap-2 items-center">
                        <Comment className="text-pink" />
                        Comments
                      </p>
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
