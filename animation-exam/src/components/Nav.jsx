import React from "react";
import { useState } from "react";
import style from "./Nav.module.scss";
import { motion, AnimatePresence, spring } from "framer-motion";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav>
      <button className={style.menuButton} onClick={toggleMenu}></button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className={style.list}

          >
            <motion.li 
                className={style.listItem}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}>
                <a href="/attractions">Attractions</a>
            </motion.li>
            <motion.li 
                className={style.listItem}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}>
              <a href="/tickets">Tickets</a>
            </motion.li>
            <motion.li
                className={style.listItem} 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}>
              <a href="/contact">Contact</a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
