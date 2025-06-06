"use client"; // top to the file
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import HeroText from "./HeroText";
import Icons from "./ICons";
export default function Hero() {
  return (
    <>
      <main
        id="hero"
        className="px-8 flex relative z-20 justify-between w-full max-md:px-20 max-md:flex-col max-md:gap-10 max-sm:gap-20 max-sm:px-10 items-center h-[95vh] max-md:h-fit"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF62AD] opacity-10 rounded-full blur-[120px]" /> */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5DE4F6] opacity-10 rounded-full blur-[120px]" />
        </div>
        <section>
          <HeroText />
        </section>
        <section className="card  bg-[#0E0D0D] h-fit w-[300px] flex items-center justify-center">
          <div className="">
            <Image
              alt="Hero image"
              src="/accepted1.png"
              width={300} // Largeur de l'image
              height={300} // Hauteur de l'image
              layout="intrinsic" // Ajustement des dimensions
              priority // Charge cette image en priorité pour de meilleures performances
            />
          </div>
        </section>
        {/* <img
          src="/Ellipse5.svg"
          alt="bg"
          className="absolute left-[-300px] max-md:left-[0] w-full z-[-2222]"
        /> */}
        {/* <div className="absolute left-[50%] ">
          <button class="button">
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="26px"
            >
              <path
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div> */}
        <div className="absolute xs:bottom-10 left-0 bottom-0 w-full flex justify-center items-center max-md:hidden">
          <a href="#about">
            <div className="scrolldown">
              <div className="chevrons">
                <div className="chevrondown"></div>
                <div className="chevrondown"></div>
              </div>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
