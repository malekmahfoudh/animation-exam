import React from "react";
import style from "./TicketsPage.module.scss";
import Tickets from "../components/Tickets";
import Footer from "../components/Footer";

function TicketsPage () {
    return (
        <div className={style.ticketsPage}>
            <h1>Tickets</h1>
            <section className={style.tickets}>
                <Tickets />
                <Tickets />
                <Tickets />
            </section>
            <Footer />
        </div>
    )
}

export default TicketsPage;