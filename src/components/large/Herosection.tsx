import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HerosectionEducation from "../medium/slider/HerosectionEducation";
import HerosectionEmployment from "../medium/slider/HerosectionEmployment";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

function Herosection() {
  return (
    <section className="h-[calc(100vh-170px)] lg:h-[calc(100vh-150px)]  max-h-[500px] lg:max-h-[600px] w-[100vw]">
      <div className="w-full h-full lg:mx-auto">
        <div className="grid grid-rows-10 grid-cols-1 lg:grid-cols-10 h-full">
          <div className="Herosection__banner-bg row-span-9 col-span-1 lg:col-span-9 lg:row-span-10 rounded-br-[3rem]">
            {/* Herosection slider  */}

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              loop={true}
              className="h-full w-full px-5 bg-blue-500"
            >
              <SwiperSlide>
                <HerosectionEducation />
              </SwiperSlide>
              <SwiperSlide>
                <HerosectionEmployment />
              </SwiperSlide>
              <div className="swiper-pagination "></div>
            </Swiper>
          </div>

          <div className="col-span-1 row-span-1 lg:row-span-10 flex items-end justify-center">
            <p className="text-black text-[30px] lg:text-[80px] font-bold text-center font-EduAUVI lg:rotate-180 lg:[writing-mode:vertical-rl] ">
              Bliz Service
            </p>

            {/* <div className="relative top-0 left-100px w-[500px] h-[500px] rounded-full">
              <div className="Herosection__radial-gradient-bg w-[300px] h-[300px] rounded-full absolute top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-30"></div>
              <div className="Herosection__radial-gradient-bg-lg w-[350px] h-[350px] rounded-full absolute  z-20 top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
              <div className="Herosection__radial-gradient-bg-xl w-[500px] h-[500px] rounded-full absolute z-10 top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
