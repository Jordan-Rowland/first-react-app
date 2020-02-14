import React from "react";
import Button from "./Button.jsx";


function CTA() {



  return(
    <div className="cta-card">
      <h1>Book unique places to stay and things to do.</h1>
      <div className="cta-block">
      <label>
      WHERE
      </label>
      <input placeholder="Anywhere" type="text"/>
      </div>
      <div className="cta-block check-in-out">
        <div className="check-in">
          <label>
            CHECK-IN
          </label>
          <input placeholder="mm/dd/yyyy" type="text"/>
        </div>
        <div className="check-out">
          <label>
            CHECKOUT
          </label>
          <input placeholder="mm/dd/yyyy" type="text"/>
        </div>
      </div>
      <div className="cta-block">
      <label>
      GUESTS
      </label>
      <input placeholder="Guests" type="text"/>
      </div>
      <Button text="Search" otherClasses="cta-btn" />
    </div>
  );
}

export default CTA;