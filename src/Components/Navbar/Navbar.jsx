import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Papun</h2>
      <ul className="nav-menu">
        <Link to="/" style={{textDecoration:"none",color:"white"}}><li>Home</li></Link>
        <Link to="/about"style={{textDecoration:"none",color:"white"}} ><li>About Me</li></Link>
        <Link to="/service "style={{textDecoration:"none",color:"white"}}><li>Services</li></Link>
        <Link to="/portfolio "style={{textDecoration:"none",color:"white"}}><li>Portfolio</li></Link>
        <Link to="/contact" style={{textDecoration:"none",color:"white"}}><li>Contact</li></Link>
      </ul>
      <a target="_blank" style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/papunm/"><div className="nav-connect">Connect With Me</div></a>
    </div>
  );
};

export default Navbar;
