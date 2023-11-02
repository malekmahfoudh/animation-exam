import React from "react";
import {motion} from "framer-motion";
import style from "./Tickets.module.scss";

function Tickets() {
    return (
        <motion.div
        className={style.tickets}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        >
        <h2 className={style.title}>Tickets</h2>
        <p className={style.description}>day pass</p>
        <p className={style.price}>sek/person</p>
        <button className={style.ticketButton}>Add</button>

        </motion.div>
    );
    }

    export default Tickets;