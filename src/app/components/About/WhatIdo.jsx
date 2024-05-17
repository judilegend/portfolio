import React from "react";
import Services from "./Services";
const WhatIdo = () => {
  return (
    <div className="">
      <h3 className="text-3xl text-[#FF62AD] ">What I do?</h3>
      <div className="grid w-[600px] grid-cols-3 grid-flow-col auto-cols-max items-center justify-between max-sm:grid-rows-2 max-sm:w-full max-sm:gap-x-44 ">
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
    </div>
  );
};

export default WhatIdo;
