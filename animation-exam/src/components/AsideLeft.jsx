import React from "react";
import style from "./Main.module.scss";
import Attraction from "./Attraction";

function AsideLeft() {
  return (
    <aside className={style.asideLeft}>
      <h2>Popular <br></br> attractions</h2>
      <Attraction />
      <Attraction />
      <Attraction />
    </aside>
  );
}

export default AsideLeft;