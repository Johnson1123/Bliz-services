"use client";
import React from "react";
import Conatainer from "../layout/Conatainer";
import HomeServicesSwiper from "../medium/slider/HomeServicesSlider";
import Image from "next/image";
import book from "../../assets/icons/3d/3dicons-notebook-front-color.png";
import rocket from "../../assets/icons/3d/3dicons-rocket-dynamic-color.png";
import { motion } from "motion/react";
const HomeServices = () => {
  return (
    <section className="h-auto py-24 lg:py-0  md:min-h-[100vh] lg:h-[100vh] flex items-center relative top-0 left-0 bg-gray-100 md:bg-white">
      <Conatainer full={false}>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mt-3">
            <h2 className="py-1 text-black">
              Our Special
              <span className="text-blue border-b-2 border-blue">Services</span>
            </h2>
          </div>
          <div className="w-[100%] flex mt-10 lg:mt-12">
            <HomeServicesSwiper />
          </div>
        </div>
      </Conatainer>
      <div className="hidden md:block absolute left-0 top-[60%] translate-y-[-60%]">
        <Image src={"/services-bg.png"} alt="" height={100} width={100} />
      </div>
      <div className="hidden md:block absolute right-10 top-[20%] translate-y-[-20%] -">
        <Image
          src={book.src}
          alt=""
          height={100}
          width={100}
          className="w-[40px]"
        />
      </div>
      <motion.div
        className={`hidden md:block absolute  top-[20%] translate-y-[-20%]`}
        style={{ left: scrollY }}
      >
        <Image
          src={rocket.src}
          alt=""
          height={100}
          width={100}
          className="w-[40px] rotate-90"
        />
      </motion.div>
    </section>
  );
};

export default HomeServices;
