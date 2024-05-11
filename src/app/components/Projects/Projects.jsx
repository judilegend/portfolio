import React from "react";
import "./projet.css";
import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";
import Carousel from "./Carousel"
const Projects = () => {
  return (
    <div>
      {/* <ImageSlider slides={SliderData} /> */}
      <Carousel/>
    </div>
  );
};

export default Projects;
