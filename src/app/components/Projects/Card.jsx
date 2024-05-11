import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <article class="card_project">
      <div class="temporary_text">Place image here</div>
      <div class="card_content">
        <span class="card_title">This is a Title</span>
        <span class="card_subtitle">
          Thsi is a subtitle of this page. Let us see how it looks on the Web.
        </span>
        <p class="card_description">
          Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
          dolor tempora aperiam itaque possimus at, cupiditate earum, quae
          repudiandae aspernatur? Labore minus soluta consequatur placeat.
        </p>
      </div>
    </article>
  );
};

export default Card;
