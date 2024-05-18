import React from "react";
import Services from "./Services";
const WhatIdo = () => {
  return (
    <div className=" ">
      <h3 className="text-3xl text-[#FF62AD] w- ">What I do?</h3>
      <div className="flex justify-between max-md:flex-wrap ">
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
