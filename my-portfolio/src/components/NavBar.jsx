import React, {useRef, useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css'

const NavigationBar = ({onLinkClick,expRef}) => {
  const [active,setActive] = useState("")
  const handleActive=(section)=>{
   setActive(section)
  }
    return (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a  style={{fontFamily:'RobotoSlab Bold'}} href="/">Home</a></li>
            <li className="nav-item"><a data-value="exp"  style={{fontFamily:'RobotoSlab Bold', color:active=="exp"?'orange':'white'}} 
            onClick={(e) => { 
              e.preventDefault()
              handleActive("exp")
               onLinkClick(expRef)}}
           href="/experience">Experience</a></li>
            <li className="nav-item"><a style={{fontFamily:'RobotoSlab Bold'}} href="/projects">Projects</a></li>
            <li className="nav-item"><a style={{fontFamily:'RobotoSlab Bold'}} href="/contact">Contact</a></li>
          </ul>
        </nav>
      );
};

export default NavigationBar;