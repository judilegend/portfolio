/** @format */
"use client";
import "../../style.css";
import { Tittle } from "../Title/Title";
import AboutImage from "./AboutImage";
import SimpleTittle from "../Title/SimpleTittle";
import AboutText from "./AboutText";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo";
import Services from "./Services";
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
      <main className=" ">
        {/* left section */}
        <section className="">
          <AboutText />
          <h3 className="text-3xl text-[#FF62AD] ">What I do?</h3>
          <div className="grid  grid-cols-3 grid-flow-col auto-cols-max items-center  gap-8 max-lg:grid-rows-2 max-sm:gap-x-[200px] ">
            <Services
              name="Web dev"
              icon="/Code.svg"
              desc="About Frontend developpement but I am also a Fullstack Nextjs developper.I have experiences many projects as a freelancing or Project at school"
            />
            <Services
              name="Design UI/UX"
              icon="/Stack Of Paper.svg"
              desc="About Frontend developpement but I am also a Fullstack Nextjs developper.I have experiences many projects as a freelancing or Project at school"
            />
            <Services
              name="Desktop app"
              icon="/Windows 10 Personalization.svg"
              desc="About Frontend developpement but I am also a Fullstack Nextjs developper.I have experiences many projects as a freelancing or Project at school"
              className="max-md:col-span-2"
            />
          </div>
        </section>
        <section className="max-w-[400px] ">
          <img src="/about-image.png" alt="" />
        </section>
      </main>
    </div>
  );
}
