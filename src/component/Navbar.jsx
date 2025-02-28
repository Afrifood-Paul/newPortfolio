import React from "react";
import logo from "../assets/Pics.jpg"

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="user">
            <img src={logo} alt="logo" />
          <h3>Adebayo Paul</h3>
          <p>A Frontend Developer</p>
        </div>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#portfolio">portfolio</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
