/** @format */

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About() {
  return (
    <div
      className="h-screen max-w-full overflow-hidden   flex items-center justify-center"
      id="about"
    >
      <section className=" flex flex-col gap-20">
        <div className="w-[2000px]  justify-around  ">
          <AboutImage />
          <AboutText />
        </div>
      </section>
    </div>
  );
}
