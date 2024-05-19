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
            TAHIRIMIHAJA Albertinot Judickael ,
          </span>
        </h3>
        <p className="text-lg ">
          a 3th-year Software Engineering student at ENI. I’m passionate about
          design and frontend development, especially working with JavaScript. I
          enjoy tackling challenges. While I’m deeply into frontend right now, I
          also work hard on backend development. I’m always pushing myself to
          get better at both.
        </p>
      </div>
    </motion.section>
  );
}
