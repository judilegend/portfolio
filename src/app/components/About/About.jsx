/** @format */
"use client";
import "../../style.css";
import { Tittle } from "../Title/Title";
import AboutImage from "./AboutImage";
import SimpleTittle from "../Title/SimpleTittle";
import AboutText from "./AboutText";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
export default function About() {
  return (
    <div className="h-[90vh] w-full" id="about">
      <div className="flex justify-center mt-[100px] 2xl:justify-start ">
        {/* <Tittle /> */}
        <SimpleTittle name="About me ?" />
      </div>
      <main className="flex justify-between items-start h-full">
        <section className="max-w-[600px]">
          <AboutText />
        </section>
        <section className="max-w-[800px]">
          <BentoGridThirdDemo />
        </section>
      </main>
    </div>
  );
}
