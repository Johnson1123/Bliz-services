import Secondary from "@/components/small/Buttons/Secondary";
import Transparent from "@/components/small/Buttons/Transparent";
import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";
import HerosectionTopClipy from "@/components/small/HerosectionTopClipy";

function HerosectionEmployment() {
  return (
    <div className="w-full lg:w-[80%] mx-auto h-full bg-transparent px-[5%] lg:px-[1%] flex flex-col justify-center">
      {/* <HerosectionBottomClipy /> */}
      <HerosectionTopClipy />

      {/* tagged */}
      <div className="h-[50px] overflow-hidden">
        <motion.h2
          initial={{ marginTop: 50, opacity: 0 }}
          whileInView={{ marginTop: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex py-2 items-center gap-4"
        >
          <span>
            <Waving color="#fff" size={25} />
          </span>
          <span className="text-white">Work Overseas</span>
        </motion.h2>
      </div>

      <div className="h-[180px] overflow-hidden">
        <motion.h2
          initial={{ marginTop: 180, opacity: 0 }}
          whileInView={{ marginTop: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-white mt-5 xxlarge-title"
        >
          <span>Make A </span>
          <span className="text-pink font-bold drop-shadow-lg">Different </span>
          <span>through </span>
          <span className="text-pink font-bold drop-shadow-lg">Leadership</span>
        </motion.h2>
      </div>

      {/* content */}
      <div className=" lg:h-[100px] xl:h-[120px] overflow-hidden mt-2 lg:mt-5">
        <motion.div
          initial={{ marginTop: 120, opacity: 0 }}
          whileInView={{ marginTop: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
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
      </div>

      {/* button container */}
      <div className="lg:h-[50px] mt-10 overflow-hidden">
        <motion.div
          initial={{ marginTop: 50, opacity: 0 }}
          whileInView={{ marginTop: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex gap-4 mt-10"
        >
          <Secondary text="Apply Now" url="/employment" />
          <Transparent text="Get In touch" url="/contact" />
        </motion.div>
      </div>
    </div>
  );
}

export default HerosectionEmployment;
