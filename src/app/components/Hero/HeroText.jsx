import React from "react";
import TypeIt from "typeit-react";
import { Typewriter } from "react-simple-typewriter";

import { Button } from "@nextui-org/react";
const HeroText = () => {
  return (
    <div>
      <section className="text-white font-semibold  max-w-[750px] max-sm:px-8 max-[1282px]:max-w-[600px] max-md:max-w-[700px]  line-clamps-1">
        <h1 className="text-[64px] max-md:text-[58px] ">
          Hi{" "}
          <span className="inline-block">
            <img src="/icons8-agitant-la-main-emoji-48.png" alt="" />
          </span>
        </h1>
        <h2 className="text-5xl max-lg:text-4xl  h-[80px]">
          I’m Judi-Legend a{" "}
          <span className="text-[#5DE4F6]">
            {" "}
            {/* MERN Stack developper */}
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "MERN Stack developper",
                // "Inspire Creativity , Passionate about Frontend!",

                "UI/UX Designer",
                "JavaScript Devotee",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
          {/* and a <span className="text-[#5DE4F6]">  </span> */}
        </h2>
        <p className="mt-5 max-lg:max-w-[400px] ">
          I'm passionate about JavaScript and deeply enthusiastic about{" "}
          technology. I'm hardworking and determined{" "}
        </p>
        <Button className="bg-[#FF62AD] mt-4 w-[200px]">Hiring me?</Button>
        {/* <Button variant="flat" color="#FF62AD" className="text-white">Download CV</Button> */}
      </section>
    </div>
  );
};

export default HeroText;
