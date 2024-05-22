import React from "react";
import Services from "./Services";
const WhatIdo = () => {
  return (
    <div className=" ">
      <h3 className="text-3xl text-[#FF62AD] w- ">What I do?</h3>
      <div className="flex justify-between max-md:flex-wrap  ">
        <Services
          name="Web dev"
          icon="/Code.svg"
          desc="About Web developpment , I'm a MERN stack developer and a fullstack Next.js developer. I've worked on many projects as a freelancer and on school projects."
        />
        <Services
          name="UI/UX Design"
          icon="/Stack Of Paper.svg"
          desc="I’m skilled in UI/UX design and adept with Figma and many other design tools, with a lot of experience in creating designs, showcasing my creativity."
        />
        <Services
          name="Software designer"
          icon="/Windows 10 Personalization.svg"
          desc="As a software designer or requirements engineer, I utilize UML and Merise methodologies for conceptualizing software solutions and defining system requirements"
          className="max-md:col-span-2"
        />
      </div>
    </div>
  );
};

export default WhatIdo;
