import { React, useState } from "react";
import Hamburger from "../Media/icon-hamburger.svg";
import Close from "../Media/icon-close.svg";
import "../Styles/Nav.css";

function NavBar() {
  const [IsActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive((value) => !value);
  return (
    <>
      <nav className="nav-main">
        <a href="https://www.w3schools.com/" className="nav-brand">
          JC
        </a>

        <ul className="nav-expanded">
          <li className="nav-link">Home</li>

          <li className="nav-link">About</li>

          <li className="nav-link">Contact</li>
        </ul>

        <button className="burger-menu" onClick={toggleActive}>
          <img
            src={IsActive ? Close : Hamburger}
            alt="Click here to open the navigation"
          />
        </button>
      </nav>

      <div
        className={
          IsActive
            ? "nav-menu-container-expanded"
            : "nav-menu-container-collapsed"
        }
      >
        <ul className="nav-menu">
          <li className="nav-link">Home</li>

          <li className="nav-link">About</li>

          <li className="nav-link">Contact</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
