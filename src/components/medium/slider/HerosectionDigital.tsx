import Transparent from "@/components/small/Buttons/Transparent";
import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";
import Primary from "@/components/small/Buttons/Primary";

function HerosectionDigital() {
  return (
    <div className="HeroDigital__banner-bg w-full h-full grid md:grid-cols-10 lg:grid-cols-9 items-center">
      <div className="w-[90%] h-max mx-auto md:w-[100%] md:col-start-2 md:col-end-10 lg:col-start-2 lg:col-end-9 3k:col-start-3 bg-[#0a193a] bg-opacity-60 px-4 rounded-2xl gap-10 py-10 flex flex-col">
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
              LEARN DIGITAL SKILL
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
            className="text-white text-[30px] md:text-[60px] lg:text-[80px]"
          >
            <span>Make A </span>
            <span className="text-pink font-bold drop-shadow-lg">
              Different{" "}
            </span>
            <span>through </span>
            <span className="text-pink font-bold drop-shadow-lg">
              Need Skills
            </span>
          </motion.h2>
        </motion.div>

        {/* content */}
        <motion.div
          className=" overflow-hidden"
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
            className=""
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
          className="overflow-hidden"
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
    </div>
  );
}

export default HerosectionDigital;
