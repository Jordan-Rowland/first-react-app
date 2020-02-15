import React from "react";
import "../styles/GalleryContainer.css"
import ExploreCard from "./ExploreCard.jsx";
import FeatureCard from "./FeatureCard.jsx";
import Button from "./Button.jsx";


function GalleryContainer() {
  return(
    <div className="gallery-container">
      <h2>Explore Airbnb</h2>
      <div className="card-container">
        <ExploreCard
          title="Stays"
          img={require("../images/rhema-kallianpur-uocSnWMhnAs-unsplash.jpg")}
        />
        <ExploreCard
          title="Experiences"
          img={require("../images/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg")}
        />
        <ExploreCard
          title="Adventures"
          img={require("../images/toomas-tartes-Yizrl9N_eDA-unsplash.jpg")}
        />
      </div>
      <h2>Airbnb Plus places to stay</h2>
      <p
        className="section-details">
          A selection of places to stay verified for quality and design.
      </p>
      <div className="a-plus">
        <Button text="EXPLORE STAYS" otherClasses="plus-btn" />
      </div>
      <h2>Introducing Airbnb Adventures</h2>
      <p
        className="section-details">
          Multi-day trips led by local experts—activities, meals, and stays included.
      </p>
      <div className="card-container">
      <FeatureCard
          title="MOROCCO"
          img="https://a0.muscache.com/im/pictures/56ba0225-92af-483f-a5c4-6d449d60f09b.jpg?aki_policy=poster"
          description="Atlas Mountains Experience"
          price="From $138/person · 2 days"
        />
        <FeatureCard
          title="NORWAY"
          img="https://a0.muscache.com/im/pictures/64c23cf2-4833-4506-ab06-c943c7489709.jpg?aki_policy=poster"
          description="2 Nights PACKAGE All Inclusive"
          price="From $630/person · 3 days"
        />
        <FeatureCard
          title="MOROCCO"
          img="https://a0.muscache.com/im/pictures/85d29c8e-e0b7-4519-9eb9-d20fbf33fdc7.jpg?aki_policy=poster"
          description="Active Adventure & Stay with Locals"
          price="From $313/person · 4 days"
        />
        <FeatureCard
          title="CROATIA"
          img="https://a0.muscache.com/im/pictures/ad6a1147-639b-4a8c-8736-ecb6f592967f.jpg?aki_policy=poster"
          description="Art & Architecture in Croatia"
          price="From $4,835/person · 10 days"
        />
        <FeatureCard
          title="CANADA"
          img="https://a0.muscache.com/im/pictures/fc73d4f1-4f12-4486-8b5e-32f2a2ef4ffd.jpg?aki_policy=poster"
          description="Sailing the Gulf Islands"
          price="From $972/person · 5 days"
        />
      </div>
    </div>
    );
  }

export default GalleryContainer;