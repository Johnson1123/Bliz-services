import Transparent from "@/components/small/Buttons/Transparent";
import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";
import HerosectionTopClipy from "@/components/small/HerosectionTopClipy";
import HerosectionBottomClipy from "@/components/small/HerosectionBottomClipy";
import Primary from "@/components/small/Buttons/Primary";

function HerosectionEmployment() {
  return (
    <div className="HeroWork__banner-bg w-full h-full grid md:grid-cols-10 lg:grid-cols-9 items-center relative left-0 right-0 z-40 overflow-hidden">
      <HerosectionTopClipy />
      <div className="w-[90%] mx-auto md:w-[100%] md:col-start-2 md:col-end-10 lg:col-start-2 lg:col-end-9 3k:col-start-3">
        {/* tagged */}
        <motion.div
          className="overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.h3
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                },
              },
            }}
            className="flex py-2 items-center gap-4 text-base"
          >
            <span>
              <Waving color="#fff" size={25} />
            </span>
            <span className="text-white text-base md:text-xl lg:text-base">
              WORK ABROAD
            </span>
          </motion.h3>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.h2
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1,
                },
              },
            }}
            className="text-white mt-5 text-[30px] md:text-[60px] lg:text-[80px]"
          >
            <span>Make A </span>
            <span className="text-pink font-bold drop-shadow-lg">
              Different{" "}
            </span>
            <span>through </span>
            <span className="text-pink font-bold drop-shadow-lg">
              Leadership
            </span>
          </motion.h2>
        </motion.div>

        {/* content */}
        <motion.div
          className=" overflow-hidden mt-2 lg:mt-5"
          initial="initial"
          whileInView="view"
        >
          <motion.div
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.5,
                  duration: 1,
                },
              },
            }}
            className="mt-5"
          >
            <p className="text-white py-1">Do you desire to work Overseas?</p>
            <p className="text-white py-1">
              Do you want to relocate to Overseas?
            </p>
            <p className="text-white py-1">
              Do you understand the application process?
            </p>
          </motion.div>
        </motion.div>

        {/* button container */}
        <motion.div
          className="mt-10 overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.div
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 2,
                  duration: 1,
                },
              },
            }}
            className="flex gap-4"
          >
            <Primary text="Apply Now" url="/employment" />
            <Transparent text="More Details" url="/contact" />
          </motion.div>
        </motion.div>
      </div>
      <HerosectionBottomClipy />
    </div>
  );
}

export default HerosectionEmployment;
