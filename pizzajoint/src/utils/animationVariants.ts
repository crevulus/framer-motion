// Replicatable method
export const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.5,
    }, // higher mass moves slower; higher damping means more viscosity (stops quicker); when: beforeChildren = complete above animations before any children animations occur
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    staggerChildren: 0.5, // this didn't work.
  },
};

export const buttonVariants = {
  hover: {
    // scale: [1.2, 1, 1.2, 1, 1.2, 1, 1.2], // array values are keyframes
    scale: 1.1,
    textShadow: "0px 0px 8px white",
    boxShadow: "0px 0px 8px white",
    transition: {
      duration: 0.6,
      yoyo: Infinity,
    },
  },
};

export const exitVariants = {
  slide: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
