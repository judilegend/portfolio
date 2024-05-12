import React from "react";
import "./projet.css";
// import { SliderData } from "./SliderData";
// import ImageSlider from "./ImageSlider";
// import Carousel from "./Carousel";
import Card from "./Card";
import SimpleTittle from "../Title/SimpleTittle";

const Projects = () => {
  return (
    <div className="h-screen  w-full flex flex-col items-center gap-10  ">
      {/* <ImageSlider slides={SliderData} />
      <Carousel /> */}
      <div className="flex justify-start 2xl:justify-start ">
        {/* <Tittle /> */}
        <SimpleTittle name="My last Project" />
      </div>
      <div className="grid grid-cols-3 gap-10 justify-center items-center">
        <Card capture="/assets/foodapp.png" />
        <Card capture="/assets/gcoms.png" />

        <Card capture="/assets/foodapp1.png" />
        <Card capture="/assets/foodapp.png" />
      </div>
    </div>
  );
};

export default Projects;
