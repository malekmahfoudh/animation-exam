import React from "react";
import { useState } from 'react';
import style from "./Nav.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav>
        <button className={style.menuButton} onClick={toggleMenu}></button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href="/">Attractions</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href="/about">Tickets</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href="/contact">Contact</a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    );
  }
  
  export default Nav;
  