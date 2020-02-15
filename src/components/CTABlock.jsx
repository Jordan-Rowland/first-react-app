import React from "react";
// import "../styles/CTABlock.css";


function CTABlock(props) {
  return(
      <div className="cta-block">
        <label>
          {props.label}
        </label>
        <input placeholder={props.placeholder} type="text"/>
      </div>
  );
}

export default CTABlock;