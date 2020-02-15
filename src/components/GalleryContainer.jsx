import React from "react";
import "../styles/GalleryContainer.css"
import ExploreCard from "./ExploreCard.jsx";
import FeatureCard from "./FeatureCard.jsx";
import Button from "./Button.jsx";
import { explores, features, places } from "../places";


function GalleryContainer() {
  return(
    <div className="gallery-container">
      <h2>Explore Airbnb</h2>
      <div className="card-container">
        {explores.map(explore => (
          <ExploreCard
            title={explore.title}
            img={explore.img}
          />
        ))}
      </div>
      <h2>Airbnb Plus places to stay</h2>
      <p
        className="section-details">
          A selection of places to stay verified for quality and design.
      </p>
      <div className="a-plus">
        <Button text="EXPLORE STAYS" otherClasses="plus-btn" icon />
      </div>
      <h2>Introducing Airbnb Adventures</h2>
      <p
        className="section-details">
          Multi-day trips led by local experts—activities, meals, and stays included.
      </p>
      <div className="card-container">
        {features.map(feature => (
          <FeatureCard
            title={feature.title}
            img={feature.img}
            description={feature.description}
            price={feature.price}
          />
        ))}
      </div>
      <h2>Places to stay around the world</h2>
      <div className="card-container places-container">
        {places.slice(0, 4).map(place => (
          <FeatureCard
            title={place.title}
            img={place.img}
            description={place.description}
            price={place.price}
            otherClasses="places"
          />
        ))}
      </div>
      <div className="card-container places-container">
        {places.slice(4).map(place => (
          <FeatureCard
            title={place.title}
            img={place.img}
            description={place.description}
            price={place.price}
            otherClasses="places"
          />
        ))}
      </div>
    </div>
    );
  }

export default GalleryContainer;