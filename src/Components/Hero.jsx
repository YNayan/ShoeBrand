import React from "react";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <main className={`${styles.hero} ${styles.container}`}>
      <div className={styles["hero-content"]}>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className={styles["hero-btn"]}>
          <button>Shop Now</button>
          <button className={styles['secondary-btn']}>Category</button>
        </div>
        <div className={styles.shopping}>
          <p>Also Available on</p>
          <div className={styles["brand-icons"]}>
            <img src="./amazon.png" alt="amazon logo" />
            <img src="./flipkart.png" alt="flipkart logo" />
          </div>
        </div>
      </div>
      <div className={styles["hero-image"]}>
        <img src="./hero-image.png" alt="hero image" />
      </div>
    </main>
  );
};

export default Hero;
