import Secondary from "@/components/small/Buttons/Secondary";
import Transparent from "@/components/small/Buttons/Transparent";
import { Waving } from "@/constant/icons";
import React from "react";
import { motion } from "framer-motion";

function HerosectionEducation() {
  return (
    <div className="w-full lg:w-[80%] mx-auto h-full bg-transparent px-[5%] lg:px-[1%]  flex flex-col justify-center z-20">
      {/* tagged */}
      <div className="h-[50px] overflow-hidden">
        <motion.h2
          className="flex items-center gap-4"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "max-content", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span>
            <Waving color="#fff" size={25} />
          </span>
          <motion.span className="text-white">Study Overseas</motion.span>
        </motion.h2>
      </div>

      <div className="">
        <motion.h2
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "max-content", opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white mt-5 xxlarge-title"
        >
          <span>Make A </span>
          <span className="text-pink font-bold drop-shadow-lg">Different </span>
          <span> through </span>
          <span className="text-pink font-bold drop-shadow-lg">education </span>
        </motion.h2>
      </div>

      {/* Conatent */}
      <div className="overflow-hidden mt-5">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "max-content", opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className=" md:w-[70%]"
        >
          <p className="text-white py-1">Do you desire to study Overseas?</p>
          <p className="text-white py-1">
            Do you want to gain admission to reputable educational institution
            Overseas?
          </p>
          <p className="text-white py-1">
            Do you understand the application process?
          </p>
        </motion.div>
      </div>

      {/* Button container  */}
      <div className="lg:h-[50px] mt-10 overflow-hidden">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "auto", opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex gap-4  "
        >
          <Secondary text="Apply Now" url="/education" />
          <Transparent text="Get In touch" url="/contact" />
        </motion.div>
      </div>
    </div>
  );
}

export default HerosectionEducation;
