import React from "react";
import "./Contact.css";
import location_icon from "../../assets/location_icon.svg"
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import theme from "../../assets/theme_pattern.svg"
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cfe25b0a-28d3-42b7-a401-6915148e943f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert("form has been submitted succesfully");
        }
      };
  return (
    <div className="contact">
      <div className="contact-title"></div>
      <h1>Get in Touch</h1>
      <img src={theme} alt="" />
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am eager to connect and collaborate on exciting new projects.
            Currently, I am open to communication and actively seeking
            collaboration opportunities. If you are interested in working
            together or if you have a project idea, please reach out to me.
            Additionally, I am in the process of building a development team and
            would love to connect with talented individuals who are passionate
            about creating innovative solutions. Don’t hesitate to contact me if
            you’re interested in joining forces or discussing potential
            collaborations.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
<img src={mail_icon} alt="" /><p>gohanmohapatra@gmail.com</p>
            </div>
            <div className="contact-detail">
   <img src={call_icon} alt="" /><p>+91 7008939577</p>             
            </div>
            <div className="contact-detail">
       <img src={location_icon} alt="" /><p>Cuttack,Odisha</p>         
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Your email" name="email"/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" >
                Enter your Message
            </textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
