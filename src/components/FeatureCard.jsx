import React from "react";
import "../styles/FeatureCard.css"


function FeatureCard(props) {
  return(
    <div className="feature-card">
      <div className={`feature-card-img ${props.otherClasses}`}>
        <img src={props.img} alt=""/>
      </div>
      <div className="feature-details">
        <h6>{props.title}</h6>
        <p>{props.description}</p>
        { props.otherClasses === "places"
        ?
        <p><strong>{props.price}</strong> / night</p>
        :
        <p>{props.price}</p>
        }
      </div>
    </div>
  );
}

export default FeatureCard;
