/** @format */
import "../../style.css";
import { Tittle } from "../Title/Title";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About() {
  return (
    <div className="h-[90vh] w-full" id="about">
      <div className="flex justify-center mt-[100px] 2xl:justify-start ">
        <Tittle />
      </div>
      <main className="flex ">
        <section>
          <AboutText />
        </section>
        <section>{/* <AboutImage /> */}</section>
      </main>
    </div>
  );
}
