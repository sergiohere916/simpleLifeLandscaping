import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "../css/Header.css"
import simpleLifeLogo from "../images/sl_Logo.png";

function Header({showHiddenNav}) {


    return (
    <div id="nav2">
            <div className="logo-container">
                <div id="main-logo">
                    <img src ={simpleLifeLogo} alt="simple-life-logo"/>    
                </div>    
                <div id="company-title">Simple Life Landscaping</div>
            </div>
            <div className="navlink-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="navlink-container-mobile">
            
                <div id="mobile-nav" onClick={(e) => {showHiddenNav()}}>
                    <div className="buns"></div>
                    <div className="buns"></div>
                </div>
                
            </div>
    </div>
    )
}

export default Header