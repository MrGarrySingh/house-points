"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./HousePoints.module.css";

type HousePointsState = {
  Gryffindor: number;
  Slytherin: number;
  Ravenclaw: number;
  Hufflepuff: number;
};

const MAX_POINTS = 1000;

const HousePoints = () => {
  const initialPoints: HousePointsState = {
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
  };

  const [points, setPoints] = useState<HousePointsState>(initialPoints);

  const handlePointsChange = (
    house: keyof HousePointsState,
    amount: number
  ) => {
    setPoints((prevPoints) => {
      const newPoints = Math.max(0, prevPoints[house] + amount); // Ensure no negative points
      return { ...prevPoints, [house]: newPoints };
    });
  };

  // Function to get the logo based on the house name
  const getHouseLogo = (house: keyof HousePointsState) => {
    return `/assets/${house.toLowerCase()}.png`;
  };

  return (
    <div className={styles.mainContainer}>
      {Object.keys(points).map((house) => (
        <div key={house} className={styles.houseContainer}>
          {/* House Logo */}
          <img
            src={getHouseLogo(house as keyof HousePointsState)}
            alt={`${house} logo`}
            className={styles.houseLogo}
          />

          {/* Current Points */}
          <div className={styles.points}>
            {points[house as keyof HousePointsState]} points
          </div>

          {/* Progress Bar */}
          <div className={styles.progressBarContainer}>
            <motion.div
              className={`${styles.progressBar} ${
                styles[house as keyof HousePointsState]
              }`}
              initial={{ width: 0 }}
              animate={{
                width: `${
                  (points[house as keyof HousePointsState] / MAX_POINTS) * 100
                }%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Buttons */}
          <div className={styles.buttonsContainer}>
            <motion.button
              className={styles.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePointsChange(house as keyof HousePointsState, -10)
              }
            >
              -10
            </motion.button>
            <motion.button
              className={styles.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePointsChange(house as keyof HousePointsState, -5)
              }
            >
              -5
            </motion.button>
            <motion.button
              className={styles.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePointsChange(house as keyof HousePointsState, 5)
              }
            >
              +5
            </motion.button>
            <motion.button
              className={styles.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePointsChange(house as keyof HousePointsState, 10)
              }
            >
              +10
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HousePoints;
