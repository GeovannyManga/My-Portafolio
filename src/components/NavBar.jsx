import {  } from "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import lo from "../assets/loguito.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [backgroundColor, setBackgroundColor] = useState('#101728');
  const [textBtn, setTextBtn] = useState("Noche");
  const [textColor, setTextColor] = useState("white");

  const handleClick = () => {
    const newBackgroundColor = backgroundColor === '#101728' ? 'white' : '#101728';
    const newTextColor = newBackgroundColor === '#101728' ? 'white' : '#101728';
    document.documentElement.style.setProperty('--background-color', newBackgroundColor);
    document.documentElement.style.setProperty('--text-color', newTextColor);
    setBackgroundColor(newBackgroundColor);
    setTextColor(newTextColor);
    setTextBtn(textBtn === "Noche" ? "Día" : "Noche");
  };

  return (
    <div className="div-nav">
      <div className="div-navbar">
        <Link to={"/home"} className="div-logo">
          <img className="logo" src={lo} alt="Logo" />
          <span className="titulo-logo">Full Stack <br></br>Developer</span>
        </Link>
        <div className="navbar">
          <ul className="ul">
            <div className={`switch-button ${textBtn === "Noche" ? "moon-icon" : "sun-icon"}`} onClick={handleClick}>
              <FontAwesomeIcon icon={textBtn === "Noche" ? faSun : faMoon} />
            </div>
            <Link className="li" to={"/about"}>About</Link>
            <Link className="li" to={"/work"}>Work</Link>
            <Link to={"/Skills"} className="li">Skills</Link>
            <Link to={"/education"} className="li">Education</Link>
            <Link to={"/contact"} className="li">Contact me</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
