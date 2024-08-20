import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import mainImage from "../images/simple_life_04.jpg";

import aboutImage1 from "../images/simple_life_09.jpg";
import aboutImage2 from "../images/simple_life_11.jpg";
import aboutImage3 from "../images/simple_life_06.jpg";
import aboutImage4 from "../images/simple_life_08.jpg";


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
           GET TO KNOW US
        </div>
        <div id="aboutPage-Body">
            <div id="aboutPage-Content1">
                <div id="aboutPage-Img-Container">
                    <img src={aboutImage1}/>
                </div>
                <div id="aboutPage-Img-Container">
                    <img src={aboutImage2}/>
                </div>
                <div id="aboutPage-Img-Container">
                    <img src={aboutImage3}/>
                </div>
            </div>
            <div id="aboutPage-Content2">
                <div id="about-Owen">
                    <span id="about-Owen-Title">Owen LastName</span>
                    <span id="about-Owen-Title-2">Meet Simple Life's Founder</span>
                    <p>
                        Owner and Founder of Simple Life Landscaping. Eager to help the commmunity to meet their
                        landscaping needs, and work with them to develop their idea of a perfect landscape, for their home
                        , business, or otherwise. 
                        Commited to ensuring quality work that will stand out and that others will admire and clients
                        can be proud of.
                    </p>
                </div>
                <div id="about-Work">
                    <div id="aboutWork-Text-1">Why Choose Us</div>
                    <div  id="aboutWork-Text-2"> 
                        We take pride in our work 
                        by completing each project as if it was our own house. With a multinational crew, 
                        we provide unique quality of work since each member brings his own touch 
                        and experience to make your project a reality.
                        </div>
                    
                </div>
                <div id="aboutPageBanner">
                    <button>Send Us An Email</button>
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