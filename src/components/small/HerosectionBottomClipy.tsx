import React from "react";
import { motion } from "framer-motion";

function HerosectionBottomClipy() {
  return (
    <motion.div
      initial={{ bottom: -500, opacity: 0, right: -500 }}
      whileInView={{ bottom: -250, left: -250, opacity: 1 }}
      transition={{ delay: 3, duration: 1.2 }}
      className="clipy-bottom"
    ></motion.div>
  );
}

export default HerosectionBottomClipy;
