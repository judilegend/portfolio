/** @format */
"use client";
import { motion } from "framer-motion";
import Title from "../Title/Title";

export default function AboutText() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-6 z-50 ">
        <h3 className=" font-bold ">
          My full name is TAHIRIMIHAJA Albertinot Judickael
        </h3>
        <p className="  ">I'm a student at ENI ,L3 GB.I'm cckxnkpass</p>
      </div>
    </motion.section>
  );
}
