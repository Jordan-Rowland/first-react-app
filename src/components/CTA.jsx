import React from "react";
import Button from "./Button.jsx";
import CTABlock from "./CTABlock.jsx";
import CTABlock2 from "./CTABlock2.jsx";
import "../styles/CTA.css";


function CTA(props) {
  return(
    <div className="cta-card">
      <h1>Book unique places to stay and things to do.</h1>
      <CTABlock label="WHERE" placeholder="Anywhere" />
      <CTABlock2 labelOne="CHECK-IN" labelTwo="CHECKOUT" placeholder="mm/dd/yyyy" />
      <CTABlock label="GUESTS" placeholder="Guests" />
      <Button text="Search" otherClasses="cta-btn" />
    </div>
  );
}

export default CTA;