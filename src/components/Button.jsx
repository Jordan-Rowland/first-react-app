import React from "react";
import "../styles/Button.css";


function Button(props) {
  return(
    <div className={`btn ${props.otherClasses}`}>
      {props.text} { props.icon && <i class="fas fa-angle-right"></i>}
    </div>
  );
}

export default Button;