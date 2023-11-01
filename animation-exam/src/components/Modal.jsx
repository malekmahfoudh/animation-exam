import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Modal.module.scss";

function Modal({ toggleModal }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.05 }}
      className={style.modal}
    >
      <div className={style.overlay}>
        <div className={style.modalContent}>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={style.overlayContent}
          >
            <article className={style.overlayImg}></article>
            <h3>haunted house</h3>
            <motion.p
            initial={{ opacity: 0, translateY: 150 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}
            >
              Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit,
              sed do eiusmod tempor incididunt ut
            </motion.p>
            <button>Buy tickets</button>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
