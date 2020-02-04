import React, { useState } from "react";

function Card(props) {

  const [object, setObject] = useState({
    animal: "cat",
    food: "banana",
    thing: "book"
  });
  const [newAnimal, setNewAnimal] = useState();

  function handleChange(event) {
    setNewAnimal(event.target.value)
  }

  function handleClick() {
    setObject(state => ({...state, animal: newAnimal}))
    setNewAnimal("")
  }

  return (
    <div className="card">
      {/* <div className="card-head">
        <img className="card-img" src={props.src}/>
      </div>
      <div className="card-body">
        {props.textContent}
      </div> */}
      <p>
      {object.animal}
      </p>
      <p>
      {object.food}
      </p>
      <p>
      {object.thing}
      </p>

      <input type="text" value={newAnimal} onChange={handleChange}/>
      <button onClick={handleClick}>Change Animal</button>
    </div>
  )
}

Card.defaultProps = {
  textContent: "Some placeholder text"
}

export default Card;