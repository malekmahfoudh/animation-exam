import React from "react";
import Attraction from "../components/Attraction";
import Header from "../components/Header";
import style from "./AttractionsPage.module.scss";

function AttractionsPage() {
  return (
    <div>
      <Header />
      <div className={style.attractionsPage}>
        <Attraction />
        <Attraction />
        <Attraction />
        <Attraction />
        <Attraction />
        <Attraction />
      </div>
    </div>
  );
}

export default AttractionsPage;
