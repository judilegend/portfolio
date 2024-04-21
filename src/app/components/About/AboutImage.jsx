/** @format */
"use client"
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[350px] max-lg:w-[300px] "
    >
      <img src="/about-image.png" />
    </motion.section>
  );
}
