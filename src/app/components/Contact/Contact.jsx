import React from "react";
import SimpleTittle from "../Title/SimpleTittle";
import Formulaire from "./Formulaire";
const Contact = () => {
  return (
    <div className=" flex px-4 items-center  relative p-5">
      <main className="flex flex-row items-center justify-between max- ">
        <section>
          <img src="/Sans titre-2.png" alt="" className="w-[500px]" />
        </section>
        <section>
          <SimpleTittle name="Contact me" />
          <div className="mt-20 px-8 flex gap-5">
            <Formulaire />
            <div className="max-w-[300px]">
              <h1>Let's work together</h1>
              <p>
                You have a innovate project ,or freelnce projet I'm full free
                Please contact me.Just send me a feedback
              </p>
            </div>
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
