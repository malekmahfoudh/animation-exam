import React, { useRef, useState, useEffect } from "react";
import style from "./Main.module.scss";
import { motion } from "framer-motion";
import Header from "./Header";
import Modal from "./Modal";
import Footer from "./Footer";

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
        <article className={style.asideLeft}>
          <h2>Check out </h2>
        </article>
        {/* <article> FLEX COLUMN */}
        <article className={style.main}>
          {/* <motion.div className={style.bats} ></motion.div> */}
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
        </article>
        <article className={style.asideRight}>
          <h2>More info</h2>
        </article>
      </section>

      <Footer />
    </>
  );
}

export default Main;
