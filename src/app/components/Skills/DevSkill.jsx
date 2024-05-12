import React from "react";
import "./Skill.css";
const AllSkill = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl">Web developpement</h1>

        <div className=" flex flex-wrap gap-2 mt-2">
          <button className="btn"> Next js</button>
          <button className="btn">React</button>
          <button className="btn">Node js</button>
          <button className="btn">Typescript</button>
          <button className="btn">Framer motion</button>
          <button className="btn">Html/css</button>
          <button className="btn">TailwindCss</button>
        </div>
      </div>
      <div>
        <h1 className="text-xl ">Programming Language</h1>

        <div className=" flex flex-wrap gap-2 mt-2">
          <button className="btn"> Javascript</button>
          <button className="btn">Java</button>
          <button className="btn">C language</button>
          <button className="btn">Python</button>
        </div>
      </div>
    </div>
  );
};

export default AllSkill;
