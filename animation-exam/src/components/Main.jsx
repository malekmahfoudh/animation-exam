import React, { useRef, useState, useEffect } from "react";
import style from "./Main.module.scss";

import Header from "./Header";
import Modal from "./Modal";
import Footer from "./Footer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />
      <section className={style.mainPage}>
        <AsideLeft />
        <article className={style.mainPageText}>
          <h4 className={style.spookyText}>
            Step into the heart-pounding world of our haunted house attraction
            at the amusement park, where every creaking floorboard and shadowy
            corridor hides spine-chilling secrets.
          </h4>
          <h4 className={style.spookyText}>
            {" "}
            Prepare for a journey through eerie rooms, encountering restless
            spirits, and facing your deepest fears, as you navigate the chilling
            mysteries that await within the dimly lit, ghostly halls.
          </h4>
          {showModal && <Modal />}
          <button className={style.hauntedButton} onClick={toggleModal}>
            check it out
          </button>
        </article>
        <AsideRight />
      </section>

      <Footer />
    </>
  );
}

export default Main;
