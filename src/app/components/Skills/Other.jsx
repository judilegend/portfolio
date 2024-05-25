import React from "react";

const Other = () => {
  return (
    <div className=" flex flex-row items-center gap-3 max-lg:flex-col max-lg:items-start">
      <h1>Other </h1>
      <div className="flex flex-wrap gap-3">
        <button className="btn_o">Windows 10</button>
        <button className="btn_o">Windows 11</button>
        <button className="btn_o">Debian </button>
        <button className="btn_o">Ubuntu</button>
      </div>
    </div>
  );
};

export default Other;
