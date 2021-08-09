import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        textShadow: "0px 0px 8px white",
        boxShadow: "0px 0px 8px white",
      }}
    >
      {props.children}
    </motion.button>
  );
}
