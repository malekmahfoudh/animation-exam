import React, { useRef, useState, useEffect } from "react";
import style from "./Main.module.scss";
import {motion} from "framer-motion";

function Main() {
  const [angle, setAngle] = useState(0);
  const containerRef = useRef(null);

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
    <article className={style.main}>
      <section className={style.pumpkinContainer} ref={containerRef}>
        <div className={style.leftEye} style={eyeStyle}>
            <motion.div className={style.pupil} style={eyeStyle}></motion.div>
        </div>
        <div className={style.rightEye} style={eyeStyle}>
            <div className={style.pupil} style={eyeStyle}></div>
        </div>
      </section>
    </article>
  );
}

export default Main;
