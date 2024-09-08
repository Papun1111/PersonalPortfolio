import React from "react";
import "./About.css";
import myface from "../../assets/myface.png"
const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>About Me</h1>
        <img src="../../src/assets/theme_pattern.svg" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            className="profile-img"
            src={myface}
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Papun, a passionate engineering student at ITER with a
              keen interest in full-stack development. My expertise lies in the
              MERN stack, where I enjoy creating dynamic and innovative web
              applications. I thrive on solving complex problems and am excited
              to contribute to impactful tech solutions.
            </p>
            <p>
              I have a deep passion for basketball. Whether I'm hitting the
              court for a game or watching the latest match, the sport fuels my
              enthusiasm for teamwork and strategy. It’s not just a hobby but a
              source of inspiration and discipline that complements my
              professional and personal growth.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB,Node,ExpressJs</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
<h1>2+</h1>
<p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
<h1>10+</h1>
<p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
<h1>20+</h1>
<p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
