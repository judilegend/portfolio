import React from "react";
import { Button } from "@nextui-org/react";
const HeroText = () => {
  return (
    <div>
      <section className="text-white font-semibold  max-w-[750px] line-clamps-1">
        <h1 className="text-[64px]">Hi</h1>
        <h2 className="text-5xl">
          I’m Judi-Legend a{" "}
          <span className="text-[#5DE4F6]"> MERN Stack developper </span>
          and a <span className="text-[#5DE4F6]"> UI/UX Designer </span>
        </h2>
        <p className="mt-5">
          I’m Judi-Legend a Frontend developper and a UI/UX Designer
        </p>
        <Button className="bg-[#FF62AD] mt-4 w-[200px]">Download CV</Button>
        {/* <Button variant="flat" color="#FF62AD" className="text-white">Download CV</Button> */}
      </section>
    </div>
  );
};

export default HeroText;
