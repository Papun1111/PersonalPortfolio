import React from 'react'
import "./Hero.css"
import myface from "../../assets/myface.png"
const Hero = () => {
  return (
    <div className='hero'>
      <img src={myface} alt="" className='profile-logo' />
      <h1><span>I'm Papun Mohapatra,</span> Full Stack Web Developer based in India</h1>
      <p>i'm currently pursuing B-tech in Computer Science and Engineering At Institute of Technical Education and Research </p>
      <div className='hero-action'>
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume"> My Resume</div>
      </div>
    </div>
  )
}

export default Hero
