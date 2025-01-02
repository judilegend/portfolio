import React from "react";
import "./projet.css";
import Card from "./Card";
import SimpleTittle from "../Title/SimpleTittle";

const Projects = () => {
  return (
    <div className="mt-[55px] w-full flex flex-col items-center gap-10">
      <div className="flex justify-start 2xl:justify-start">
        <SimpleTittle name="My Projects" />
      </div>
      <div className="grid grid-cols-3 gap-10 justify-center items-center max-[849px]:grid-cols-1 max-xl:grid-cols-2">
        <Card
          capture="/assets/salama.png"
          tittle="Salama Alert"
          sub_title="Mobile & Web Alert Management System"
          descri="A comprehensive alert management system built with React Native and Spring Boot"
          desc3="/spring.jpg"
          desc="/typescript.png"
          desc2="/react-native.jpg"
          desc1="/css.svg"
          git="https://github.com/judilegend/salama-alert"
        />
        <Card
          capture="/assets/african.png"
          tittle="African Bowling"
          sub_title="Interactive Bowling Game Management System"
          descri="A bowling game platform managing strikes, spares, and pin tracking with real-time scoring"
          desc3="/express.svg"
          desc="/typescript.png"
          desc2="/tailwind.svg"
          desc1="/react.svg"
          git="https://github.com/judilegend/african-bowling"
        />
        <Card
          capture="/assets/agilitime.png"
          tittle="AgiliTime"
          sub_title="Advanced Project Management Platform"
          descri="PWA implementing Agile methodologies, Eisenhower Matrix, and Pomodoro technique for efficient project management"
          desc3="/next.svg"
          desc="/typescript.png"
          desc2="/socket.png"
          desc1="/pwa.jpg"
          git="https://github.com/judilegend/agilitime"
        />
        <Card
          capture="/assets/groudent.png"
          tittle="Groudent"
          sub_title="Professional Dental Management Platform"
          descri="Freelance project developed with NuxtJS and Express, following Agile methodologies"
          desc3="/express.svg"
          desc="/nuxt.jpg"
          desc2="/tailwind.svg"
          desc1="/typescript.png"
          git="https://github.com/judilegend/groudent"
        />
        <Card
          capture="/assets/foodapp.png"
          tittle="Food-app"
          sub_title="Modern Food Delivery Application"
          descri="MERN stack application for seamless food ordering experience"
          desc3="/express.svg"
          desc="/css.svg"
          desc2="/js.svg"
          desc1="/react.svg"
          git="https://github.com/judilegend/Food-app.git"
        />
        <Card
          capture="/assets/gcoms.png"
          tittle="Gcoms"
          sub_title="Interactive Commentary Platform"
          descri="MERN stack application focused on user interaction and commentary management"
          desc3="/express.svg"
          desc="/css.svg"
          desc2="/js.svg"
          desc1="/react.svg"
          git="https://github.com/judilegend/Gcoms.git"
        />
      </div>
    </div>
  );
};

export default Projects;
