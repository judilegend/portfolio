/** @format */
"use client";
import "../../style.css";
import { Tittle } from "../Title/Title";
import AboutImage from "./AboutImage";
import SimpleTittle from "../Title/SimpleTittle";
import AboutText from "./AboutText";
import WhatIdo from "./WhatIdo";
import Download from "./Download";
import AboutBg from "./AboutBG";

export default function About() {
  return (
    <div className="max-xl:h-fit w-full px-8 2xl:px-6">
      <div className="flex justify-center mt-[20px] 2xl:justify-start ">
        {/* <Tittle /> */}
        <SimpleTittle name="About me ?" />
      </div>
      <main className="grid gris-cols-2 grid-flow-row items-center  max-lg:flex max-lg:flex-col max-lg:gap-8">
        <section className="col-span-1  ">
          <div className="flex flex-col gap-2 max-w-[610px]">
            <AboutText />
            <WhatIdo />
          </div>
        </section>
        {/* <section className="col-start-1 row-start-2">
        </section> */}
        <section className="row-span-2 col-start-2 row-start-1 ">
          <AboutBg />
        </section>
      </main>
    </div>
  );
}
