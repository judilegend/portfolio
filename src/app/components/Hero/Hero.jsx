"use client"; // top to the file
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import HeroText from "./HeroText";
import Icons from "./ICons";
export default function Hero() {
  return (
    <>
      <main className="px-4 flex relative justify-between  items-center  h-[90vh]">
        <HeroText />
        <section>
          <div>
            <Image
              height={400}
              width={400}
              alt="Hero image"
              src="/accepted1.png"
            />
          </div>
        </section>
        {/* <img src="/Ellipse5.svg" alt="bg" className="absolute" /> */}

        <div className="absolute xs:bottom-10 left-0 bottom-5 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-pink-500 flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
