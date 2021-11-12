import React from "react";
import "./Navbar.css";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">HotAuc</div>
    <div className="navbar__item">Home</div>
    <div className="navbar__item">Login</div>
    <div className="navbar__item">Register</div>
    <div className="navbar__item">Contact Us</div>
  </header>
);

function Navbar1() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Navbar1;
