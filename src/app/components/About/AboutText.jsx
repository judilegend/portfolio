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
      <div className="mt-6 z-50 max-w-[600px]">
        <h3 className=" font-bold text-2xl max-sm:text-xl ">
          My full name is{" "}
          <span className="text-[#5DE4F6]">
            TAHIRIMIHAJA Albertinot Judickael
          </span>
        </h3>
        <p className="text-lg ">
          I'm a student at ENI ,L3 GB.I'm My name is Aina Nirina, I am currently
          a 5th year student at ENI, in the software engineering sector. I'm
          having basics in backend. Want to know more about me? I invite you to
        </p>
      </div>
    </motion.section>
  );
}
