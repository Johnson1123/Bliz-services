import React from "react";
import { motion } from "framer-motion";

function HerosectionBottomClipy() {
  return (
    <motion.div className="" initial="initial" whileInView="view">
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
              delay: 4,
              duration: 1,
            },
          },
        }}
        className="flex py-2 items-center gap-4 clipy-bottom"
      ></motion.div>
    </motion.div>
  );
}

export default HerosectionBottomClipy;
