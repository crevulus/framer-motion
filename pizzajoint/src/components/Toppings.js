import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ListItem from "./ListItem";
import { containerVariants } from "../utils/animationVariants.ts";
import { exitVariants } from "../utils/animationVariants";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={exitVariants.slide}
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <ListItem key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </ListItem>
          );
        })}
      </ul>

      <Link to="/order">
        <Button>Order</Button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
