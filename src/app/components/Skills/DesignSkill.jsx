import React from "react";

const DesignSkill = () => {
  return (
    <div>
      <div class="container">
        <div class="skill-box">
          <span class="title">Figma </span>

          <div class="skill-bar">
            <span class="skill-per figma">
              <span class="tooltip">80%</span>
            </span>
          </div>
        </div>

        <div class="skill-box">
          <span class="title">Lunacy</span>

          <div class="skill-bar">
            <span class="skill-per lunacy">
              <span class="tooltip">70%</span>
            </span>
          </div>
        </div>

        <div class="skill-box">
          <span class="title">Photoshop</span>

          <div class="skill-bar">
            <span class="skill-per ps">
              <span class="tooltip">65%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSkill;
