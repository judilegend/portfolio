import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <article className="card_project">
      <div className="temporary_text">
        <img src={props.capture} alt="photo" className="rounded-lg" />
      </div>
      <div className="card_content">
        <span className="card_title ">{props.tittle}</span>
        <span className="card_subtitle h-10">{props.sub_title}</span>
        <div className="card_description flex gap-2 flex-wrap items-center h-[100px]">
          <p>{props.descri}</p>
          <span>
            <img src={props.desc} className="w-8 h-8" />
          </span>
          <span>
            <img src={props.desc1} className="w-8 h-8" />
          </span>
          <span>
            <img src={props.desc2} className="w-8 h-8" />
          </span>
          <span>
            <img src={props.desc3} className="w-8 h-8" />
          </span>
          <a href="">
            <img src="/github.svg" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
