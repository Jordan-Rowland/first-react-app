import React from "react";
import "../styles/Hero.css";
import CTA from "./CTA.jsx";



function Hero() {

  return(
    <>
    <div className="hero-img">
    </div>
      <CTA />
    <div className="tagline">
      <p>Over 300 unique places</p>
      <p>to stay in Oregon</p>
    </div>
    </>
  );
}

export default Hero;