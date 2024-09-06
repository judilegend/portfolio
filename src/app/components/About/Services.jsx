import React from "react";

const Service = (props) => {
  return (
    <div className=" max-w-[200px] w-full max-md:max-w-[300px] hover:scale-120 hover:duration-75 cursor-pointer ">
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
