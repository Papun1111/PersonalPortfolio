import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Papun</h2>
      <ul className="nav-menu">
        <Link to="/" style={{textDecoration:"none"}}><li>Home</li></Link>
        <Link to="/about"style={{textDecoration:"none"}} ><li>About Me</li></Link>
        <Link to="/service "style={{textDecoration:"none"}}><li>Services</li></Link>
        <Link to="/porfolio "style={{textDecoration:"none"}}><li>Portfolio</li></Link>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
