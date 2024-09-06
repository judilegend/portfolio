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
      <div className="mt-6 z-50 max-w-[650px]">
        <h3 className="font-bold text-2xl max-sm:text-xl flex flex-wrap items-center gap-2">
          <span>My full name is</span>
          <span>TAHIRIMIHAJA</span>
          <span className="relative">
            <span className="absolute mx-auto py-1 inline-flex w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text box-content font-extrabold text-transparent text-center select-none">
              Albertinot
            </span>
            <span className="relative top-0 w-fit h-auto py-1 justify-center inline-flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto">
              Albertinot
            </span>
          </span>
          <span>Judickael</span>
        </h3>
        <p className="text-lg ">
          <span className="text-[#5DE4F6]">
            A 3th-year Software Engineering student at ENI.
          </span>
          I’m passionate about design and frontend development, especially
          working with JavaScript. I enjoy tackling challenges. While I’m deeply
          into frontend right now, I also work hard on backend development. I’m
          always pushing myself to get better at both.
        </p>
      </div>
    </motion.section>
  );
}
