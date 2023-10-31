import React from "react";
import { motion } from "framer-motion";
import style from "./Header.module.scss";

import { useNavigate } from "react-router-dom";

function SplashHeader() {


  return (
    <header className={style.splashHeader}>

        <section>
          <motion.h1
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 2 }}
          >
            Welcome to Spooky Dookie extravaganza
          </motion.h1>
        </section>

    </header>
  );
}

export default SplashHeader;
