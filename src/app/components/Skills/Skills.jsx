import { Progress } from "@nextui-org/react";
import React from "react";
import SimpleTittle from "../Title/SimpleTittle";
import DevSkill from "./DevSkill";
import DesignSkill from "./DesignSkill";
import ToolSkill from "./ToolSkill";

const Skills = () => {
  return (
    <div className="h-screen w-full mx-auto">
      <div className="text-center ">
        <SimpleTittle name="Skills" />
      </div>
      <div className="grid grid-col grid-cols-2 grid-col-flow w-full gap-5 ">
        <DevSkill
          nom_skill="Next js"
          niveau="70%"
          className="row-span-2 col-span-1"
        />
        <DesignSkill className="row-span-1 col-span-1" />
        <ToolSkill className="row-span-1 col-span-1" />
      </div>
    </div>
  );
};

export default Skills;
