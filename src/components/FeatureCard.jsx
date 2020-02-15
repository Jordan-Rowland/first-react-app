import React from "react";


function FeatureCard(props) {
  return(
    <div className="feature-card">
      <div className="feature-card-img">
        <img src={props.img} alt=""/>
      </div>
      <div className="feature-details">
        <h6>{props.title}</h6>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default FeatureCard;