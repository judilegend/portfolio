import React from "react";

const Service = (props) => {
  return (
    <div className=" max-w-[180px] w-full max-md:max-w-[220px]">
      <div className="flex items-center gap-1">
        <img src={props.icon} alt="" /> <span>{props.name}</span>{" "}
      </div>
      <div className="max-w-full">
        <p className="text-xs font-semibold">{props.desc}</p>
      </div>
    </div>
  );
};

export default Service;
