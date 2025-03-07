"use client";
import React from "react";
import Transparent from "../small/Buttons/Transparent";
import { motion } from "framer-motion";
import Primary from "../small/Buttons/Primary";

export default function ServiceSwiper() {
  return (
    <section className="h-[100vh]  md:h-[60vh] lg:h-[100vh]  service__slider-bg servicesContainer">
      <div className="h-full w-full grid grid-cols-10">
        <div className="content col-start-2 col-end-10 md:col-start-3 md:col-end-8 h-full">
          <div className="w-full mx-auto h-full bg-transparent flex flex-col justify-center">
            <div className="w-[100%] lg:w-[70%] xl:[60%]">
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
                  <div className="text-black bg-pink px-7 rounded-full py-2">
                    <p className="text-base font-medium">Changing The Way</p>
                  </div>
                </motion.h3>
              </motion.div>

              {/* title container */}
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
                  Market Research
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
                  <p className="text-white font-medium text-base">
                    The primary goal of business consulting is to help
                    organizations improve their performance, solve specific
                    problems, and achieve their.
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
                  <Transparent text="Get In touch" url="/contact" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
