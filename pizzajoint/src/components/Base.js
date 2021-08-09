import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import ListItem from "./ListItem";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
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
