import React from "react";
import "../styles/Header.css";


function Header() {
  return (
    <div className="header">
      <i
        class="fab fa-airbnb header-icon">
      </i>
      <ul className="links" >
        <li>Host a home</li>
        <li>Host an experience</li>
        <li>Sign up</li>
        <li>Log in</li>
      </ul>
    </div>
  )
}

export default Header;