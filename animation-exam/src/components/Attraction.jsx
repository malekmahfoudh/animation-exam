import React from "react";
import { motion } from "framer-motion";
import style from "./Attraction.module.scss";

function Attraction() {
  return (
    <motion.div
      className={style.attraction}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className={style.title}>Attraction</h2>
      <img className={style.attraction__image}></img>
      <p className={style.description}>try this attraction</p>
      <p className={style.price}>sek/person</p>
      <button className={style.button}>tickets</button>
    </motion.div>
  );
}

export default Attraction;
