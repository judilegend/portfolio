import { Progress } from "@nextui-org/react";
import React from "react";

const Skills = () => {
  return (
    <div className="h-screen">
      Skills
      <Progress aria-label="Loading..." value={60} className="max-w-md" />
    </div>
  );
};

export default Skills;
