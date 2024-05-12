import React from "react";
import SimpleTittle from "../Title/SimpleTittle";
import Formulaire from "./Formulaire";
const Contact = () => {
  return (
    <div className="h-[105vh] flex px-4 items-center">
      <main className="flex items-center justify-center">
        <section>
          <SimpleTittle name="Contact me" />
          <div className="mt-20 px-8">
            <Formulaire />
          </div>
        </section>
        <section>
          <img src="/Sans titre-2.png" alt="" className="w-[500px]" />
        </section>
      </main>
    </div>
  );
};

export default Contact;
