import React from "react";
import { motion, useCycle } from "framer-motion";
import { loaderVariants } from "../utils/animationVariants";
import Button from "./Button";

const Loader = () => {
  const [currentAnimation, cycleCurrentAnimation] = useCycle(
    "animationOne",
    "animationTwo"
  );

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={currentAnimation}
      />
      <Button onClick={() => cycleCurrentAnimation()}>
        Switch Current Animation
      </Button>
    </>
  );
};

export default Loader;
