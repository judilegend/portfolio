import React from "react";
import { Button } from "@nextui-org/react";
const HeroText = () => {
  return (
    <div>
      <section className="text-white font-semibold  max-w-[700px] line-clamps-1">
        <h1 className="text-[64px]">Hi</h1>
        <h2 className="text-5xl">
          I’m Judi-Legend a{" "}
          <span className="text-[#5DE4F6]"> Frontend developper </span>
          anxcxd a <span className="text-[#5DE4F6]">Fullstack Nextjs</span>
        </h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus
          exercitationem recusandae accusamus quis quaerat iste nam placeat,
          quasi quo qui ipsam.
        </p>
        <Button className="bg-[#FF62AD] mt-4 w-[200px]">Download CV</Button>
        {/* <Button variant="flat" color="#FF62AD" className="text-white">Download CV</Button> */}
      </section>
    </div>
  );
};

export default HeroText;
