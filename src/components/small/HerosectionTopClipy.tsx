import React from "react";
import { motion } from "framer-motion";

function HerosectionTopClipy() {
  return (
    <motion.div className="" initial="initial" whileInView="view">
      <motion.div
        variants={{
          initial: {
            y: "-100%",
            opacity: 0,
          },
          view: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 4,
              duration: 1,
            },
          },
        }}
        className="flex py-2 items-center gap-4 clipy-top"
      ></motion.div>
    </motion.div>
  );
}

export default HerosectionTopClipy;
