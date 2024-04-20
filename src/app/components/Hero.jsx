import Image from "next/image";
import { Button } from "@nextui-org/react";
export default function Hero() {
  return (
    <>
      <main className="px-20 flex justify-between items-center absolute">
        <section className="text-white font-semibold  max-w-[700px] line-clamps">
          <h1 className="text-[64px]">Hi</h1>
          <h2 className="text-4xl">
            I’m Judi-Legend a{" "}
            <span className="text-[#5DE4F6]"> Frontend developper </span>
            anxcxd a <span className="text-[#5DE4F6]">Fullstack Nextjs</span>
          </h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            ducimus quas, maiores possimus accusantium explicabo tempora minima
            officiis exercitationem recusandae accusamus quis quaerat iste nam
            placeat, quasi quo qui ipsam.
          </p>
          <button className="mt-10 bg-[#FF62AD] px-6 py-3 rounded-full text-[#000]">
            Download CVcxxx
          </button>
          {/* <Button variant="flat" color="#FF62AD" className="text-white">Download CV</Button> */}
        </section>
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
