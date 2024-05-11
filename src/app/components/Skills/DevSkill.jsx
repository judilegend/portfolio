import React from "react";
import "./Skill.css";
const AllSkill = () => {
  return (
    <div>
      <div className="container">
        <div class="skill-box">
          <span class="title">Next js</span>

          <div class="skill-bar">
            <span class="skill-per nextjs">
              <span class="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div class="skill-box">
          <span class="title">React</span>

          <div class="skill-bar">
            <span class="skill-per react">
              <span class="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div class="skill-box">
          <span class="title">Node js/Express js</span>

          <div class="skill-bar">
            <span class="skill-per nodejs">
              <span class="tooltip">65%</span>
            </span>
          </div>
        </div>
        <div class="skill-box">
          <span class="title">Mongo db / Mysql /PostgreSql</span>

          <div class="skill-bar">
            <span class="skill-per bd">
              <span class="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div class="skill-box">
          <span class="title">Html / Css</span>

          <div class="skill-bar">
            <span class="skill-per html">
              <span class="tooltip">75%</span>
            </span>
          </div>
        </div>
        <div class="skill-box">
          <span class="title">Tailwind css</span>

          <div class="skill-bar">
            <span class="skill-per html">
              <span class="tooltip">75%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSkill;
