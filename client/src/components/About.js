import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import mainImage from "../images/simple_life_04.jpg";


function About() {

    const [displayMobileNav, setDisplayMobileNav] = useState(false);
    
    function showHiddenNav() {
        setDisplayMobileNav(!displayMobileNav);
    }

    return <div id="aboutPage">
        <Header showHiddenNav={showHiddenNav}></Header>
        {displayMobileNav?
        (<div id='hiddenMobileNav'>
            <div className="mobileNavLink-Container">
                <NavLink className="mobileLinks" to="/" onClick={(e) => {setDisplayMobileNav(!displayMobileNav)}}>Home</NavLink>
                <NavLink className="mobileLinks" to="about" onClick={(e) => {setDisplayMobileNav(!displayMobileNav)}}>About</NavLink>
                <NavLink className="mobileLinks" to="/services" onClick={(e) => {setDisplayMobileNav(!displayMobileNav)}}>Services</NavLink>
                <NavLink className="mobileLinks" to="projects" onClick={(e) => {setDisplayMobileNav(!displayMobileNav)}}>Projects</NavLink>
                <NavLink className="mobileLinks" to="/contact" onClick={(e) => {setDisplayMobileNav(!displayMobileNav)}}>Contact</NavLink>
                
            </div>
        </div>):
        (<></>) }
        <div id="aboutPage-Title">
            ABOUT US
        </div>
        <div id="aboutPage-Body">
            <div id="aboutPage-Content1">
                <div id="aboutPage-Img-Container">
                    <img src={mainImage}/>
                </div>
            </div>
            <div id="aboutPage-Content2">
                <div id="about-Work">
                    <div id="aboutWork-Text-1">Our Work</div>
                    <div  id="aboutWork-Text-2"> 
                        We take pride in our work 
                        by completing each project as if it was our own house. With a multinational crew, 
                        we provide unique quality of work since each member brings his own touch 
                        and experience to make your project a reality.
                        </div>
                    
                </div>
                <div id="about-Goal">
                    <div id="aboutPage-Text-1">
                        Let's Make Your Dream A Reality
                    </div>
                    <div id="aboutPage-Text-2">
                        Here at simple life we value you. We value what we can create together and aspire to make your vision a reality. We'll add value to your home and ensure unique and quality work. Entrust us to make your dream come true.
                    </div>
                    <div id="aboutPage-Text-3">
                        Contact us for estimates on the project you'd like to see completed
                    </div>
                    <div id="aboutPage-Text-4">
                        Call Me at 000-000-0000
                    </div>
                    <div id="aboutPage-Text-5">
                        Owen
                    </div>
                </div>
                
            </div>
        </div>
        <div id="footer">
            <div className="footer-sections">
                <a>Instagram</a>
                <a>LinkedIn</a>
                <a>Facebook</a>
            </div>
            <div className="footer-sections">
                <a>About</a>
                <a>Services</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
            <div className="footer-sections">
                <span>testing123@gmail.com</span>
                <span>123-456-7890</span>
            </div>
        </div>
    </div>
}

export default About