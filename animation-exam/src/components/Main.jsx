import React, { useRef, useState, useEffect } from "react";
import style from "./Main.module.scss";
import { motion } from "framer-motion";
import Header from "./Header";
import Modal from "./Modal";
import Footer from "./Footer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";

function Main() {
  const [angle, setAngle] = useState(0);
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;
        const radians = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const degrees = (radians * 180) / Math.PI;
        setAngle(degrees);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const eyeStyle = {
    transform: `rotate(${angle}deg)`,
  };

  return (
    <>
      <Header />
      <section className={style.mainPage}>
        <AsideLeft />
        {/* <article> FLEX COLUMN */}
        {/* <article className={style.main}>
        
          <h2 className={style.mainText}>
            Are you brave enough for our <br></br> haunted house?
          </h2>
          {showModal && <Modal />}
          <section
            className={style.pumpkinContainer}
            ref={containerRef}
            onClick={toggleModal}
          >
            <div className={style.leftEye} style={eyeStyle}>
              <motion.div className={style.pupil} style={eyeStyle}></motion.div>
            </div>
            <div className={style.rightEye} style={eyeStyle}>
              <div className={style.pupil} style={eyeStyle}></div>
            </div>
          </section>
          <p className="clickMeText">Click me if you dare you</p>
        </article> */}

        <article className={style.mainPageText}>
          <h4 className={style.spookyText}>
          Step into the heart-pounding world of our haunted house attraction at the amusement park, where every creaking floorboard and shadowy corridor hides spine-chilling secrets. Prepare for a journey through eerie rooms, encountering restless spirits, and facing your deepest fears, as you navigate the chilling mysteries that await within the dimly lit, ghostly halls.
          </h4>
          {showModal && <Modal />}
            <button className={style.hauntedButton} onClick={toggleModal}>check it out</button>
        </article>
        <AsideRight />
      </section>

      <Footer />
    </>
  );
}

export default Main;
