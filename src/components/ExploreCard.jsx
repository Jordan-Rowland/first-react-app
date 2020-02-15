import React from "react";
import "../styles/ExploreCard.css";


function ExploreCard(props) {
  return(
    <div className="explore-card">
      <img src={props.img} alt="explore card"/>
      <span className="explore-card-title">{props.title}</span>
    </div>
  );
}

export default ExploreCard;