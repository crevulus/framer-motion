import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { exitVariants } from "../utils/animationVariants";
import {
  childVariants,
  containerVariants,
} from "../utils/animationVariants.ts";

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={exitVariants.slide}
    >
      <h2>Thank you for your order :)</h2>
      {/* no need to list inital and animate because they propagate down to the child */}
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
