import React from "react";
import style from "./Nav.module.scss";
import { motion, AnimatePresence, spring } from "framer-motion";


const items = [
  {
    id: 1,
    name: "Attractions",
    link: "/attractions",
  },
  {
    id: 2,
    name: "Tickets",
    link: "/tickets",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

function Nav() {

  return (
    <nav>
      <AnimatePresence>
        
          <motion.ul
            className={style.list}
          >
            {items.map((item, i) => (
                <motion.li
                key={item.id}
                className={style.listItem}
                initial={{ 
                    opacity: 0, 
                    translateX: i % 1 === 0 ? -500: 500,
                    
                 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: .6, delay: i * 0.6}}
              >
                <a href={item.link}>{item.name}</a>
              </motion.li>
            ))}
 
          </motion.ul>
        
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
