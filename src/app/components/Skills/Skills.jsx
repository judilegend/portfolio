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
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="row-span-2">
          <DevSkill />
        </div>
        <div className="col-span-2">
          <DesignSkill />
        </div>
        <div className="col-span-2 col-start-2 row-start-2">
          <ToolSkill />
        </div>
        <div className="col-span-3 row-start-3">
          <DesignSkill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
