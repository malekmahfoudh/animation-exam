import React from "react";
import {motion} from "framer-motion";
import style from "./Footer.module.scss";

function Footer() { 
    return (
        <footer className={style.header}>
            <motion.h1
                initial={{opacity: 0, scale: 1}}
                animate={{opacity: 1, scale: 1.2}}
                transition={{duration: 2}}
            >
                Contact
            </motion.h1>
            <section className={style.footerContact}>
                <h3>Mail</h3>
                <h3>Adress</h3>
                <h3>Number</h3>
            </section>
        </footer>
    )
    
}

export default Footer;