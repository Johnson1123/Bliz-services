import Transparent from "@/components/small/Buttons/Transparent";
import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";
import Primary from "@/components/small/Buttons/Primary";

function HerosectionEducation() {
  return (
    <div className="HeroEducation__banner-bg w-full h-full grid md:grid-cols-10 lg:grid-cols-9 items-center">
      {/* tagged */}
      <div className="w-[90%] mx-auto md:w-[100%] md:col-start-2 md:col-end-10   lg:col-start-2 lg:col-end-9  3k:col-start-3">
        <motion.h3
          className="flex items-center gap-4 text-base"
          initial="initial"
          whileInView="view"
        >
          <motion.span
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
          >
            <span className="flex gap-4 items-center">
              <Waving color="#fff" size={25} />

              <span className="text-white text-base md:text-xl lg:text-base">
                CHANGING THE WAY{" "}
              </span>
            </span>
          </motion.span>
        </motion.h3>

        <div className="">
          <motion.h2
            initial="initial"
            whileInView="view"
            className="text-white mt-5 text-[30px] md:text-[60px] lg:text-[80px]"
          >
            <motion.div
              className=""
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
                    duration: 1.5,
                  },
                },
              }}
            >
              <span>Unlock Your </span>
              <span className="text-pink font-bold drop-shadow-lg">
                Future{" "}
              </span>
              <span> Abroad </span>
            </motion.div>
          </motion.h2>
        </div>

        {/* Conatent */}
        <div className="overflow-hidden mt-5">
          <motion.div
            initial="initial"
            whileInView="view"
            className="md:w-[70%]"
          >
            <motion.div
              className=""
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
            >
              <p className="text-white py-1">
                Relocate, study, or work overseas with ease. We simplify your
                journey, ensuring a smooth transition to your dream destination.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Button container  */}
        <motion.div
          className="lg:h-[50px] mt-10 overflow-hidden"
          initial="initial"
          whileInView="view"
        >
          <motion.div
            className="flex gap-4"
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              view: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 2.5,
                  duration: 1,
                },
              },
            }}
          >
            <Primary text="Apply Now" url="/education" />
            <Transparent text="More Details" url="/contact" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HerosectionEducation;
