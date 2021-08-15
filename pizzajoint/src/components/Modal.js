import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { backdropVariants, modalVariants } from "../utils/animationVariants";
import Button from "./Button";

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          {/* no need to define animate and initial because of propagation from parent div */}
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
