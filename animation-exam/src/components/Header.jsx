import React from "react";
import { motion } from "framer-motion";
import style from "./Header.module.scss";
import Nav from "./Nav";

function Header() {
  return (
    <header className={style.header}>
      <section>
        <motion.h1
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 2 }}
        >
          Welcome to Spooky Dookie extravaganza
        </motion.h1>
      </section>
      <Nav />
    </header>
  );
}

export default Header;
