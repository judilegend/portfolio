import React from "react";
import "./projet.css";
// import { SliderData } from "./SliderData";
// import ImageSlider from "./ImageSlider";
// import Carousel from "./Carousel";
import Card from "./Card";
import SimpleTittle from "../Title/SimpleTittle";

const Projects = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center gap-10  ">
      {/* <ImageSlider slides={SliderData} />
      <Carousel /> */}
      <div className="flex justify-start 2xl:justify-start ">
        {/* <Tittle /> */}
        <SimpleTittle name="My last Project" />
      </div>
      <div className="grid grid-cols-3 gap-10 justify-center items-center">
        <Card
          capture="/assets/ihm.png"
          tittle="Edt-app"
          sub_title="This project is a projet at school ,this is a gestion de sheldure a the ENI "
          descri="This is made by NextJs for the frontEnd an NodeJS the backend"
          desc3="/express.svg"
          desc="/tailwind.svg"
          desc2="/ts.svg"
          desc1="/next.svg"
        />
        <Card
          capture="/assets/foodapp.png"
          tittle="Food-app"
          sub_title="This project is a about a food application "
          descri="This is a MERN app ,made by React and Express Js"
          desc3="/express.svg"
          desc="/css.svg"
          desc2="/js.svg"
          desc1="/react.svg"
        />
        <Card
          capture="/assets/gcoms.png"
          tittle="Gcoms"
          sub_title="This project is a about a Commentary and interaction "
          descri="This is a MERN app ,made by React and Express Js"
          desc3="/express.svg"
          desc="/css.svg"
          desc2="/js.svg"
          desc1="/react.svg"
        />

        <Card
          capture="/assets/ando.png"
          tittle="Portfolio"
          sub_title="This project is a about a food application "
          descri="This is a MERN app ,made by React and Express Js"
          desc3="/ts.svg"
          desc="/tailwind.svg"
          desc2="/js.svg"
          desc1="/react.svg"
        />
      </div>
    </div>
  );
};

export default Projects;
