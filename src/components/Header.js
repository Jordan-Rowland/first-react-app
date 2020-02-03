import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <ul className="links" >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header;