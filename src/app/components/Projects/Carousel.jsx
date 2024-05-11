import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

function CustomPaging() {
  const settings = {
    customPaging: function (i) {
      return (
        <a className="">
          <img src={`/img0${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb ",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-[800px] mx-auto slider-container">
      <Slider {...settings}>
        <div className="">
          <img src={"/img01.png"} />
        </div>
        <div>
          <img src={"/img02.png"} />
        </div>
        <div>
          <img src={"/img03.png"} />
        </div>
        <div>
          <img src={"/img04.png"} />
        </div>
      </Slider>
    </div>
  );
}

export default CustomPaging;
