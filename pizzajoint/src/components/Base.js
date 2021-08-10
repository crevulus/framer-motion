import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import ListItem from "./ListItem";
import { containerVariants } from "../utils/animationVariants.ts";
import { exitVariants } from "../utils/animationVariants";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      // use names from variants object
      initial="hidden"
      animate="visible"
      exit={exitVariants.slide}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <ListItem key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </ListItem>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          // simple method
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          <Link to="/toppings">
            <Button>Next</Button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
