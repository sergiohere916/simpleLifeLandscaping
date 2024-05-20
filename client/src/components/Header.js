import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "../css/Header.css"

function Header({showHiddenNav}) {


    return (
    // <div className="header-container">
    //     <div className="logo-container">
    //         Simple Life Landscaping
    //     </div>
    //     <div className="navlink-container">
    //         <NavLink to="/">Home</NavLink>
    //         <NavLink to="about">About</NavLink>
    //         <NavLink to="/services">Services</NavLink>
    //         <NavLink to="projects">Projects</NavLink>
    //         <NavLink to="/contact">Contact</NavLink>
    //     </div>
    // </div>
    <div id="nav2">
            <div className="logo-container2">
                <div id="main-logo">
                    <img src ="https://cdn.discordapp.com/attachments/1181410295135092746/1235025677091344464/IMG_1526.jpg?ex=6633878b&is=6632360b&hm=719940ab95b02fa076c88faa41bce3b1e3b6231ffa9e5572a725d6c341b54221&"alt="simple-life-logo"/>    
                </div>    
                <div id="company-title">Simple Life Landscaping</div>
            </div>
            <div className="navlink-container2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="navlink-container-mobile">
                {/* <NavLink id="mobile-nav" to="contact"> */}
                <div id="mobile-nav" onClick={(e) => {showHiddenNav()}}>
                    <div className="buns"></div>
                    <div className="buns"></div>
                </div>
                {/* </NavLink> */}
            </div>
    </div>
    )
}

export default Header