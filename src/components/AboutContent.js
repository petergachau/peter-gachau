import "./AboutContentStyles.css";
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.webp'
import React from "react";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h4>About me</h4>
     <img src="https://res.cloudinary.com/pitz/image/upload/v1650702556/wtj6kxladuwvth7i7urb.jpg" className="img" alt="peter" />
     <div className="name">peter gachau</div>
     <p> Im a mern  stack web devoloper .<br>
     </br> i create web apps using  Reactjs Nodejs  and css</p> 
     < a href='PETERGACHAU CV.pdf' download='PETERGACHAU CV.pdf' > 
     <button className='btn'>Get  Resume</button></a>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={react1} className='image' alt=''/>
        </div>
        <div className="img-stack bottom">
          <img src={react2} className='image' alt=''/>
        </div>
      </div>
    </div>
  </div>;
};

export default AboutContent;
