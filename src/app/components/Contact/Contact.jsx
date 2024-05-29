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
              <h1>Let's work together</h1>
              <p>
                You have a innovate project ,or freelnce projet I'm full free
                Please contact me.Just send me a feedback
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
