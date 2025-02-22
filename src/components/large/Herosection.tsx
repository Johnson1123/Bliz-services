import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HerosectionEducation from "../medium/slider/HerosectionEducation";
import HerosectionEmployment from "../medium/slider/HerosectionEmployment";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

function Herosection() {
  return (
    <section className="h-[calc(100vh-170px)] lg:h-[calc(100vh-150px)]  max-h-[500px] lg:max-h-[600px] w-[100vw]">
      <div className="w-full h-full lg:mx-auto bg-white">
        <div className="grid grid-rows-10 grid-cols-1 lg:grid-cols-10 h-full">
          <div className="bg-blue-500 Herosection__banner-bg row-span-9 col-span-1 lg:col-span-9 self-center lg:row-span-10 rounded-br-[50px] relative top-0 right-0">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              modules={[Autoplay]}
              loop={true}
              speed={3000}
              className="h-full w-full"
            >
              {/* Herosection slider  */}

              <SwiperSlide>
                <HerosectionEducation />
              </SwiperSlide>
              <SwiperSlide className="">
                <HerosectionEmployment />
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
          <div className="lg:col-span-1 row-span-1 col-span-10 lg:row-span-10 lg:flex justify-center bg-white">
            <Image
              src="/Bliz_Outline.png"
              height={55}
              width={60}
              alt="Blis Services"
              className="-rotate-270"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
