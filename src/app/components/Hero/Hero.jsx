import Image from "next/image";
import { Button } from "@nextui-org/react";
import HeroText from "./HeroText"
export default function Hero() {
  return (
    <>
      <main className="px-20 flex justify-between  items-center relative h-[70vh]">
        <HeroText />
        <section>
          <div>
            <Image
              height={650}
              width={650}
              alt="Hero image"
              src="/accepted.png"
            />
          </div>
        </section>
        <img src="/Ellipse5.svg" alt="bg" className="absolute" />
        <div className="absolute left-7 flex flex-col gap-5">
          <span>
            <a href="#">
              {" "}
              <Image src={"/linkedin.svg"} width={40} height={40} />
            </a>
          </span>{" "}
          <span>
            <a href="#">
              {" "}
              <Image src={"/facebook.svg"} width={40} height={40} />
            </a>
          </span>
          <span>
            <a href="#">
              {" "}
              <Image src={"/github.svg"} width={40} height={40} />
            </a>
          </span>
        </div>
      </main>
    </>
  );
}
