import React from "react";

const SimpleTittle = (props) => {
  return (
    <div>
      {/* <h2 className="text-8xl max-md:text-6xl max-sm:text-5xl bg-white  font-bold text-black mix-blend-screen px-10 py-5 "></h2> */}
      <span class="text-[#5DE4F6] mx-1 font-extrabold text-6xl max-md:text-6xl max-sm:text-5xl relative inline-block stroke-current">
        {props.name}
        <svg
          class="absolute -bottom-0.5 w-full max-h-1.5"
          viewBox="0 0 55 5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
            stroke-width="2"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default SimpleTittle;
