import Secondary from "@/components/small/Buttons/Secondary";
import Transparent from "@/components/small/Buttons/Transparent";
import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";
import HerosectionTopClipy from "@/components/small/HerosectionTopClipy";
import HerosectionBottomClipy from "@/components/small/HerosectionBottomClipy";

function HerosectionEmployment() {
  return (
    <div className="w-full lg:w-[80%] mx-auto h-full bg-transparent px-[5%] lg:px-[1%] flex flex-col justify-center">
      <HerosectionBottomClipy />
      <HerosectionTopClipy />

      <div className="w-[100%] lg:w-[70%]">
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
            className="flex py-2 items-center gap-4"
          >
            <span>
              <Waving color="#fff" size={25} />
            </span>
            <span className="text-white">Work Overseas</span>
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
            className="text-white mt-5 xxlarge-title lg:mt-5"
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
            <Secondary text="Apply Now" url="/employment" />
            <Transparent text="Get In touch" url="/contact" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HerosectionEmployment;
