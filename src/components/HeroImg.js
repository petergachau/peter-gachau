import "./HeroImgStyles.css";
import IntoImg from '../assets/intro-bg.jpg'
import React from "react";
import Typical from 'react-typical'
import {HashLink as Link} from 'react-router-hash-link'

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="into-ima"
      src={IntoImg} alt='hero'/>
    </div>
    <div className="content">
      <p>Hi am Peter</p>
      <h1>
      {''}
<Typical
loop={Infinity}
steps={[
    '{Fullstack Dev}',
    2000,
    '{Mern Stack}',
    2000,
    '{react-Native }',
    2000,
    '{DataScientist}',
    2000,
]}
/>

      </h1>
      <div className="button">
        <Link to="#project" className="btn">Projects</Link>
        <Link to="#contact" className="btn-light">Contact</Link>
      </div>
    </div>
  </div>;
};

export default HeroImg;
