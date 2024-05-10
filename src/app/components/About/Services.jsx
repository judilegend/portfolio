import React from "react";

const Service = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <img src={props.icon} alt="" /> <span>{props.name}</span>{" "}
      </div>
      <div className="max-w-[180px]">
        <p className="text-xs font-semibold">{props.desc}</p>
      </div>
    </div>
  );
};

export default Service;
