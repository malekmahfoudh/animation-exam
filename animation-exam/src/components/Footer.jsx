import React from "react";
import { motion } from "framer-motion";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <motion.footer
      className={style.header}
      initial={{ opacity: 0, translateY: 150 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 2 }}
      >
        Contact
      </motion.h1>
      <section className={style.footerContact}>
        <h3>Mail</h3>
        <h3>Adress</h3>
        <h3>Number</h3>
      </section>
    </motion.footer>
  );
}

export default Footer;
