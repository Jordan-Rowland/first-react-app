import React from "react";


function GalleryContainer() {



  return(
    <div className="gallery-container">
      <h2>Explore Airbnb</h2>
      <div className="explore-card-container">
        <div className="explore-card">
          <img src={require("../rhema-kallianpur-uocSnWMhnAs-unsplash.jpg")} />
          <span className="explore-card-title">Stays</span>
        </div>
        <div className="explore-card">
          <img src={require("../valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg")} />
          <span className="explore-card-title">Experiences</span>
        </div>
        <div className="explore-card">
          <img src={require("../toomas-tartes-Yizrl9N_eDA-unsplash.jpg")} />
          <span className="explore-card-title">Adventures</span>
        </div>
      </div>
      <h2>Airbnb Plus places to stay</h2>
      <p>A selection of places to stay verified for quality and design.</p>
      <div className="a-plus"></div>
    </div>
  );
}

export default GalleryContainer;