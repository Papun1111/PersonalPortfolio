import React from "react";
import "./Footer.css";
import usericon from "../../assets/user_icon.svg"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2 className="logo">Papun</h2>
          <p>
            I'm Papun, a web developer from India with two years of experience
            in MERN stack and Data Structures & Algorithms (DSA). I am
            passionate about basketball and enjoy listening to Arctic Monkeys.
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={usericon} alt="" />
                <input type="email" placeholder=" enter your email"/>
            <a href="https://www.linkedin.com/in/papunm/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Papun1111"><i class="fa fa-github" aria-hidden="true"></i></a>
            </div>
            <div className="footer-subscribe">Subscribe</div>

        </div>
      </div>
      <hr />
      <div className="footer-buttom">
      <p className="footer-bottom-left">&copy; 2024 Papun Mohapatra. All rights reserved.</p>
<div className="footer-bottom-right">
    <p>Term of Services</p>
    <p>Privacy Policy</p>
    <p>Connect With Me</p>
</div>
      </div>
    </div>
  );
};

export default Footer;
