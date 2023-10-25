import React from "react";
import styles from "./ritualSubjects.module.scss";
import Image from "next/image";
import mainPEntagramImg from "../../../public/assets/IMG/main-pentagram.png";
import bafometHeadImg from "../../../public/assets/IMG/bafomet-head.png";
import pentacleImg from "../../../public/assets/IMG/pentacle.png";
import candle from "../../../public/assets/IMG/candle.png";
import candleFire from "../../../public/assets/IMG/candle-fire.gif";
import rightPentacle from "../../../public/assets/IMG/right-pentacle.png";
import bafometStamp from "../../../public/assets/IMG/Bafomet-stamp.png";

const RitualSubjects = () => {
  return (
    <div className="ritual-subjects">
      <div
        className={`${styles["ritual-subjects__div"]} ${styles["main-pentagram"]}`}
      >
        <Image
          className={styles["main-pentagram__img"]}
          src={mainPEntagramImg}
          alt="main-pentagram"
        />
      </div>
      <div
        className={`${styles["ritual-subjects__div"]} styles["bafomet-head"]`}
      >
        <Image
          className={styles["bafomet-head__img"]}
          src={bafometHeadImg}
          alt="bafomet-head"
        />
      </div>
      <div
        className={`${styles["ritual-subjects__div"]} ${styles["pentacle"]}`}
      >
        <Image
          className={styles.pentacle__img}
          src={pentacleImg}
          alt="pentacle"
        />
        <div id={styles["candle-1"]} className={styles.candle}>
          <Image className={styles["candle-img"]} src={candle} alt="candle" />
          <Image
            id={styles["fire-1"]}
            className={styles["candle-fire"]}
            src={candleFire}
            alt="candle-fire"
          />
        </div>
      </div>
      <div
        className={`${styles["ritual-subjects__div"]} ${styles["right-pentacle"]}`}
      >
        <Image
          className={styles["right-pentacle__img"]}
          src={rightPentacle}
          alt="pentacle"
        />
        <div id={styles["candle-2"]} className={styles.candle}>
          <Image className={styles["candle-img"]} src={candle} alt="candle" />
          <Image
            id={styles["fire-2"]}
            className={styles["candle-fire"]}
            src={candleFire}
            alt="candle-fire"
          />
        </div>
      </div>
      <div
        className={`${styles["ritual-subjects__div"]} ${styles["bafomet-stamp"]}`}
      >
        <Image
          className={styles["bafomet-stamp__img"]}
          src={bafometStamp}
          alt="bafomet-stamp"
        />
        <div id={styles["candle-3"]} className={styles.candle}>
          <Image className={styles["candle-img"]} src={candle} alt="candle" />
          <Image
            id={styles["fire-3"]}
            className={styles["candle-fire"]}
            src={candleFire}
            alt="candle-fire"
          />
        </div>
      </div>
    </div>
  );
};

export default RitualSubjects;
