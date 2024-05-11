import React from "react";
import "./projet.css";
// import { SliderData } from "./SliderData";
// import ImageSlider from "./ImageSlider";
// import Carousel from "./Carousel";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      {/* <ImageSlider slides={SliderData} />
      <Carousel /> */}
      <div className="grid grid-cols-3 gap-10 justify-center items-center">
        <Card />
        <Card />

        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
