import React from "react";

const SimpleTittle = (props) => {
  return (
    <div>
      <h2 className="text-8xl max-md:text-6xl">{props.name}</h2>
    </div>
  );
};

export default SimpleTittle;
