import React, { useRef, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import style from "./Splash.module.scss";
import { motion } from "framer-motion";


function Splash() {
    const [angle, setAngle] = useState(0);
    const containerRef = useRef(null);

    const navigate = useNavigate();

    function mainPageClick() {
      navigate("/main");
    }

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
        <section className={style.splashPage}>
         
          <article className={style.main}>
            <h2 className={style.mainText}>
              Are you brave enough for our <br></br> haunted house?
            </h2>

            <section
              className={style.pumpkinContainer}
              onClick={mainPageClick}
              ref={containerRef}
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

        </section>
  
      </>
    );
  }
  
  export default Splash;
  