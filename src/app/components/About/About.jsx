/** @format */
"use client";
import "../../style.css";
import { Tittle } from "../Title/Title";
import AboutImage from "./AboutImage";
import SimpleTittle from "../Title/SimpleTittle";
import AboutText from "./AboutText";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
import WhatIdo from "./WhatIdo";
import Download from "./Download";
import AboutBg from "./AboutBG";

export default function About() {
  return (
    <div
      className="h-[100vh] max-lg:h-fit w-full px-10 max-md:px-8 "
      id="about"
    >
      <div className="flex justify-center mt-[100px] 2xl:justify-start ">
        {/* <Tittle /> */}
        <SimpleTittle name="About me ?" />
      </div>
      <main className="grid gris-cols-2 grid-rows-2 items-center">
        <section className="col-span-1">
          <AboutText />
        </section>
        <section className="col-start-1 row-start-2">
          <WhatIdo />
        </section>
        <section className="row-span-2 col-start-2 row-start-1 ">
          <AboutBg />
        </section>
      </main>
    </div>
  );
}
