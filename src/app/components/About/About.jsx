"use client";
import { memo } from "react";
import SimpleTittle from "../Title/SimpleTittle";
import AboutText from "./AboutText";
import WhatIdo from "./WhatIdo";
import AboutBg from "./AboutBG";

const About = memo(() => {
  return (
    <div className="max-xl:h-fit w-full px-8 2xl:px-6">
      <div className="flex justify-center mt-5 2xl:justify-start">
        <SimpleTittle name="About me ?" />
      </div>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <section>
          <div className="flex flex-col gap-2 max-w-[710px]">
            <AboutText />
            <WhatIdo />
          </div>
        </section>
        <section className="lg:row-span-2">
          <AboutBg />
        </section>
      </main>
    </div>
  );
});

About.displayName = "About";

export default About;
