import { motion } from "framer-motion";
import React from "react";

export default function ListItem(props) {
  return (
    <motion.li
      // originX = animate relative to the origin position (in this case at coordinate 0)
      whileHover={{ scale: 1.2, color: "mediumseagreen", originX: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.li>
  );
}
