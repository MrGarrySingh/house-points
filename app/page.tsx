"use client";

import { motion } from "framer-motion";
import HousePoints from "./components/HousePoints";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.background}>
      <h1 className={styles.heading}>House Points</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HousePoints />
      </motion.div>
    </main>
  );
}
