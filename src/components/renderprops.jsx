import React from react;
import Example from "./Example";

function ComponentName() {

  <Example render={
    function(name, age) {
      return(
        <div>
          <h1>{name}</h1>
          <div>{age}</div>
        </div>
      );
    }
  }/>


  // Alternate method
  <Example>
    {(name, age) => {
      return(
        <div>
          <h1>{name}</h1>
          <div>{age}</div>
        </div>
      );
    }
  }</Example>
}

export default ComponentName;


import React from "react"

function Example(props) {
    return (
        <div>
            {props.render("Jim", 33)}
            {
              // Alternate method
            }
            {props.children("Jim", 33)}
        </div>
    )
}

export default Example

