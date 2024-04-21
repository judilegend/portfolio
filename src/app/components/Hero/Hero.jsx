import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import HeroText from "./HeroText";
import Icons from "./ICons";
export default function Hero() {
  return (
    <>
      <main className="px-4 flex justify-between  items-center  h-[90vh]">
        <HeroText />
        <section>
          <div>
            <Image
              height={550}
              width={550}
              alt="Hero image"
              src="/accepted2.png"
            />
          </div>
        </section>
        {/* <img src="/Ellipse5.svg" alt="bg" className="absolute" /> */}
        <div className="absolute left-2">
          <Icons />
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2
            "
            >
              <motion.div
                animated={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
