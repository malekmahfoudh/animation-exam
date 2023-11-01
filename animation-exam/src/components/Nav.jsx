import React from "react";
import style from "./Nav.module.scss";
import { motion } from "framer-motion";

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
    onClick: () => {
      const scrollOptions = {
        top: document.body.scrollHeight,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    },
  },
];

function Nav() {
  return (
    <nav>
      <motion.ul className={style.list}>
        {items.map((item, i) => (
          <motion.li
            key={item.id}
            className={style.listItem}
            initial={{
              opacity: 0,
              translateX: i % 1 === 0 ? -500 : 500,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: i * 0.6 }}
          >
            {item.link ? (
              <a href={item.link}>{item.name}</a>
            ) : (
              <a onClick={item.onClick}>{item.name}</a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default Nav;
