import React from "react";

const ToolSkill = () => {
  return (
    <div>
      <div class="container">
        <div class="skill-box">
          <span class="title">Vs code</span>

          <div class="skill-bar">
            <span class="skill-per html">
              <span class="tooltip">75%</span>
            </span>
          </div>
        </div>

        <div class="skill-box">
          <span class="title">Windows 10 /11</span>

          <div class="skill-bar">
            <span class="skill-per win">
              <span class="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div class="skill-box">
          <span class="title">Debian 11.6.0</span>

          <div class="skill-bar">
            <span class="skill-per linux">
              <span class="tooltip">65%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolSkill;
