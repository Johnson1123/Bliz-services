import React from "react";
import { motion } from "framer-motion";

function HerosectionTopClipy() {
  return (
    <motion.div
      initial={{ top: -500, opacity: 0, left: -500 }}
      whileInView={{ top: -250, left: -250, opacity: 1 }}
      transition={{ delay: 3, duration: 1.2 }}
      className="clipy-top"
    ></motion.div>
  );
}

export default HerosectionTopClipy;
