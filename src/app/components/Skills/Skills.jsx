import { Progress } from "@nextui-org/react";
import React from "react";
import SimpleTittle from "../Title/SimpleTittle";
import DevSkill from "./DevSkill";
import DesignSkill from "./DesignSkill";
import ToolSkill from "./ToolSkill";
import Other from "./Other";
const Skills = () => {
  return (
    <div className="h-fit  max-md:mt-10" id="skills">
      <div className="text-center ">
        <SimpleTittle name="Skills" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 max-w-[1100px] max-lg:flex max-lg:flex-col max-xl:px-8 w-full justify-center mt-5 ">
        <div className="row-span-2 ">
          <DevSkill />
        </div>
        <div className="col-span-2 ">
          <DesignSkill />
        </div>
        <div className=" col-span-2 col-start-2 row-start-2">
          <ToolSkill />
        </div>
        <div className="col-span-3  row-start-3">
          <Other />
        </div>
      </div>
    </div>
  );
};

export default Skills;
