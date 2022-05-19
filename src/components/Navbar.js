import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
// import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
const [show, setShow]=useState(false);

const menuIcon= ()=>{
  setShow(!show)
}

  return (
    <div className='header'>
      <Link className='L' to="#"><h3>peter</h3></Link>
    
     <ul className={show ? "nav-menuIcon active" :"nav-menu"}>
       <li>
         <Link className='L' to="#">Home</Link>
         </li>
         <li><Link className='L' to="#about">About</Link></li>
         
         <li><Link className='L' to="#project">Projects</Link></li>
         <li>
         
         <Link className='L' to="#contact">Contact</Link>
       </li>
     </ul>
     <div className='side-menu' onClick={menuIcon}>
       {show ? (<FaTimes  size={20} style={{color:'white '}}/>):
       <FaBars size={20} style={{color:'white '}}/>}
       
       
     </div>
    </div>
  )
}

export default Navbar