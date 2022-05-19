import "./FooterStyles.css";
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa'
import React from "react";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome  style={{color:'wheat', margin:'1rem'}}/>
          <span> Nairobi,Kenya</span>
          <div className="phone">
          <FaPhone style={{color:'wheat', margin:'1rem'}}/>
           <span>0757 198 515</span>
          </div>
          <div className="email">
          <FaMailBulk style={{color:'wheat', margin:'1rem'}}/>
           <span>petergachau57@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="right">
        <h4>developed by peter with reactjs</h4>
        <p> 
          copyright&copy;{new Date().getFullYear()}
          <span>WebDev</span> all rights reserved
        </p>
        
        <div className="social-icons"> 
        < a href="https://web.facebook.com/arsene.diop"><FaFacebook size={20} style={{color:'wheat', margin:'1rem'}}/></a>
        < a href="https://twitter.com/ridge_techs"><FaTwitter size={20} style={{color:'wheat', margin:'1rem'}}/></a>
        < a href="https://www.linkedin.com/in/peter-gachau-686a61224/"><FaLinkedin size={20} style={{color:'wheat', margin:'1rem'}}/></a>
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
