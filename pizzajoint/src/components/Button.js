import React from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "../utils/animationVariants";

export default function Button(props) {
  return (
    <motion.button variants={buttonVariants} whileHover="hover">
      {props.children}
    </motion.button>
  );
}
