import React from "react";
// import "../styles/CTABlock.css";


function CTABlock(props) {
  return(
    <>
      <div className="cta-block check-in-out">
        <div className="check-in">
          <label>
            {props.labelOne}
          </label>
          <input placeholder={props.placeholder} type="text"/>
        </div>
        <div className="check-out">
          <label>
            {props.labelTwo}
          </label>
          <input placeholder={props.placeholder} type="text"/>
        </div>
      </div>
    </>
  );
}

export default CTABlock;