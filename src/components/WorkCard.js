import "./WorkCardStyles.css";
import pro1 from '../assets/project1.png'
import pro2 from '../assets/peter.png'
import pro3 from '../assets/project4.png'
import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return <div className="project-cards">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      <div className="project-card">
        <img src={pro1}alt="img"></img>
        <h6 className="project-title">eccomerce</h6>
        <div className="pro-details">
          <p>Full stack ecommerce </p>
          <div>....</div>
          <div className="pro-btns">
            <NavLink to='https://001-resort.netlify.app/' className='btns'>View</NavLink>
            <NavLink to='https://github.com/petergachau/React-beach-resort' className='btns'>Source</NavLink>
 
          </div>
          
        </div>
      </div>
      <div className="project-card">
        <img src={pro2}alt="img"></img>
        <h6 className="project-title">job site</h6>
        <div className="pro-details">
          <p>full stack job search site</p>
          <div>....</div>
          <div className="pro-btns">
          <NavLink to='https://www.jobify.live/landing' className='btns'>View</NavLink>
            <NavLink to='https://github.com/john-smilga/mern-course-jobify' className='btns'>Source</NavLink>
 
          </div>
          
        </div>
      </div>
      <div className="project-card">
        <img src={pro3}alt="img"></img>
        <h6 className="project-title">hotel site</h6>
        <div className="pro-details">
          <p>hotel rooms sites </p>
          <div>....</div>
          <div className="pro-btns">
            <NavLink to='https://movii-base.netlify.app' className='btns'>View</NavLink>
            <NavLink to='https://github.com/petergachau/Stripe-menus' className='btns'>Source</NavLink>
 
          </div>
          
        </div>
      </div>
      
    </div>

  </div>;
};

export default WorkCard;
