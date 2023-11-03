import React from "react";
import style from "./Main.module.scss";
import Tickets from "./Tickets";

function AsideRight() {
  return (
    <aside className={style.asideRight}>
      <h2>Deals</h2>
      <Tickets />
      <Tickets />
    </aside>
  );
}

export default AsideRight;
