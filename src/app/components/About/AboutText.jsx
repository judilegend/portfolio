/** @format */
"use client"
import { motion } from "framer-motion";
import Title from "../Title/Title";

export default function AboutText() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title title={"About me"} />
      <div className="mt-6 z-50 ">
        <h3 className=" font-bold ">I LOVE BEING A PYTHON DEVELOPER!</h3>
        <p className=" max-w-[500px] max-md:max-w-[500px] max-[565px]:max-w-[450px] max-[475px]:max-w-[400px] max-[420px]:max-w-[330px] max-[359px]:max-w-[300px] max-lg:max-w-[400px] font-normal text-justify mt-2 ">
          My name is Ando Nirina RANDRIANJAFY, and as a Python developer with a
          focus on back-end development and dataprocessing, i am passionate
          about crafting robust and efficient solutions. With a strong
          foundation in Python programming, i aim to blendcode efficiency with
          innovative problem-solving. My goal is to develop reliable and
          scalable applications that deliver seamless experiences and meet the
          evolving needs of users.
        </p>
      </div>
    </motion.section>
  );
}
