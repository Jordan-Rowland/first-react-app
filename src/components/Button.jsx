import React from "react";


function Button(props) {
  return(
    <div className={`btn ${props.otherClasses}`}>
      {props.text}
    </div>
  );
}

export default Button;