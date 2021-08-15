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

export const backdropVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    filter: "drop-shadow(3px 3px 8px rgba(255, 255, 255, 0))",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    filter: "drop-shadow(3px 3px 8px rgba(255, 255, 255, 1))",
    transition: {
      duration: 2,
      ease: "easeInOut",
      filter: {
        // set transition properties specifically for one property
        delay: 2.5,
        duration: 1,
        ease: "easeIn",
      },
    },
  },
};

export const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
