import React from "react";
import SimpleTittle from "../Title/SimpleTittle";
import Formulaire from "./Formulaire";
const Contact = () => {
  return (
    <div
      className="h-fit flex px-4 items-center justify-center flex-col 2xl:mt-20 relative p-5"
      id="contact"
    >
      <SimpleTittle name="Contact me" />

      <main className="flex flex-row items-center  max-md:flex-col mx-auto">
        <section>
          <img src="/Sans titre-2.png" alt="" className="w-[500px]" />
        </section>
        <section className="">
          <div className="mt-20 px-8 flex justify-center  gap-20 max-lg:flex-col max-lg:gap-20 ">
            <div className="max-w-[400px]">
              <h1>Open to Opportunities</h1>
              <p>
                I am currently seeking new opportunities as a freelancer or in a
                full-time position (CDI). Additionally, I am actively looking
                for an apprenticeship (alternance) to further develop my skills
                while contributing to impactful projects. Feel free to reach out
                to discuss potential collaborations!
              </p>
            </div>
            <Formulaire />
          </div>
        </section>
      </main>
      <img
        src="/Ellipse5.svg"
        alt="bg"
        className="absolute left-[0px]  max-md:left-[0]  w-full  pt-24 z-[-2222]"
      />
    </div>
  );
};

export default Contact;
