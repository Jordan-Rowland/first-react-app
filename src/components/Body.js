import React, { useState } from "react";

function Body(props) {

  const [count, setCount] = useState(0);
  const [header, setHeader] = useState(props.header);

  function increment() {
    setCount(state => state + 1)
  }

  return (
    <div className="main">
      <header>{header}</header>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Body;