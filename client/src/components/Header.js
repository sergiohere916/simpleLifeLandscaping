import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "../css/Header.css"

function Header() {
    return <div className="header-container">
        <div className="logo-container">
            Simple Life Landscaping
        </div>
        <div className="navlink-container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </div>
}

export default Header