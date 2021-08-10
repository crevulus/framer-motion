import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ListItem from "./ListItem";
import { containerVariants } from "../utils/animationVariants.ts";

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
    <div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
    </div>
  );
};

export default Toppings;
