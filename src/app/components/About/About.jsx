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
      <main className="flex justify-between items-center max-[778px]:flex-col max-md:flex-col">
        <section className="flex flex-col gap-5">
          <AboutText />
          <h3 className="text-3xl text-[#FF62AD] ">What I do?</h3>
          <div className="flex items-center gap-5  max-lg:flex-wrap max-lg:justify-start max-sm:justify-center">
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
              className="col-span-2"
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
