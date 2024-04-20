import Image from "next/image";
import { Button } from "@nextui-org/react";
import HeroText from "./HeroText"
export default function Hero() {
  return (
    <>
      <main className="px-20 flex justify-between  items-center relative h-[70vh]">
        <HeroText/>
        <section>
          <div>
            <Image
              height={600}
              width={600}
              alt="Hero image"
              src="/accepted.png"
            />
          </div>
        </section>
        <img src="/Ellipse5.svg" alt="bg" className="absolute" />
      </main>
    </>
  );
}
