import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import { exitVariants } from "../utils/animationVariants";

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // control transition options; can only use duration with tween type animations
      transition={{ delay: 1 }}
      exit={exitVariants.slide}
    >
      <motion.h2 animate={{ fontSize: 50, color: "mediumseagreen" }}>
        Welcome to Pizza Joint
      </motion.h2>{" "}
      <Link to="/base">
        {/* some props are directly from css; some are framer originals (like scale, x y,) */}
        <Button>Create Your Pizza</Button>
      </Link>
    </motion.div>
  );
};

export default Home;
