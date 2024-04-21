import Image from "next/image";
import React from "react";

const ICons = () => {
  return (
    <div className=" flex flex-col items-center gap-5">
      <span>
        <a href="#">
          {" "}
          <Image src={"/linkedin.svg"} width={30} height={30} />
        </a>
      </span>{" "}
      <span>
        <a href="#">
          {" "}
          <Image src={"/facebook.svg"} width={30} height={30} />
        </a>
      </span>
      <span>
        <a href="#">
          {" "}
          <Image src={"/github.svg"} width={40} height={40} />
        </a>
      </span>
    </div>
  );
};

export default ICons;
