import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


// import aboutImage1 from "../images/simple_life_09.jpg";
import aboutImage1 from "../images/simple_life_06.jpg";
import aboutImage2 from "../images/simple_life_21_02.JPG";
import aboutImage3 from "../images/simple_life_11.jpg";


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
                <div id="aboutPage-top-row">
                    <div id="about-Owen">
                        <span id="about-Owen-Title">Meet Owen Linnell</span>
                        <span id="about-Owen-Title-2"> Passionate Owner and Operator of Simple Life Landscaping.</span>
                        <p>
                        2024 graduate of Pickerington North, Owen launched Simple Life Landscaping in April of 2024, driven by a deep enthusiasm for
                        landscaping. His mission is to deliver high-quality landscaping solutions that rival, if not surpass, those of larger companies,
                        all while offering more personalized service at better prices. 

                        “I thrive on building personal connections with my clients. Landscaping allows me to combine my artistic vision with practical solutions,
                        ensuring each project reflects the client's dream while providing exceptional service. Unlike big companies that may treat you as just
                        another job, I'm here to create a meaningful relationship and bring your vision to life with care and dedication.”
                        </p>
                    </div>
                    <div id="about-Work">
                        <div id="aboutWork-Text-1">Why Choose Us</div>
                        <div  id="aboutWork-Text-2"> 
                        At Simple Life Landscaping, we offer more than just landscaping services; we provide a personal touch that big companies
                        often miss. Founded by Pickerington North 2024 graduate Owen Linnell, our business is dedicated to delivering top-notch 
                        quality and exceptional service at competitive prices. Simple life's  passion for landscaping and commitment to building 
                        personal connections ensure that each project reflects your unique vision. Unlike larger firms, we take pride in treating
                        every client as an individual, making your satisfaction our top priority. Choose Simple Life Landscaping for a truly 
                        personalized experience and a landscape that truly feels like home.
                        </div>
                        
                    </div>
                </div>
                <div id="aboutPageBanner">
                    {/* <button>Send Us An Email</button> */}
                    <NavLink to="/contact" id="aboutPage-banner-button">Send Us An Email</NavLink>
                </div>
                <div id="about-Goal">
                    <div id="aboutPage-Text-1">
                        Let's Make Your Dream A Reality
                    </div>
                    <div id="aboutPage-Text-2">
                        Here at simple life we value you. We value what we can create together and aspire to make your vision a reality.
                         We'll add value to your home and business and ensure unique and quality work. Entrust us to make your dream come true.
                    </div>
                    <div id="aboutPage-Text-3">
                        Contact us for estimates on the project you'd like to see completed
                    </div>
                    <div id="aboutPage-Text-4">
                        Give us a call at 304-494-4471
                    </div>
                    <div id="aboutPage-Text-5">
                        Owen Linnell
                    </div>
                </div>
                
            </div>
        </div>
        <div id="footer">
            <div className="footer-sections">
                <span>Simple Life Landscaping</span>
                <span>Providing services in the greater Ohio region</span>
            </div>
            <div className="footer-sections">
                <NavLink  to="/about"><a>About</a></NavLink>
                <NavLink  to="/services"><a>Services</a></NavLink>
                <NavLink  to="/projects"><a>Projects</a></NavLink>
                <NavLink  to="/contact"><a>Contact</a></NavLink>
            </div>
            <div className="footer-sections">
                <span>simplelifelandscaping116@gmail.com</span>
                <span>Work Tel: 740-830-4471</span>
                <span>Personal Tel: 304-494-4471</span>
            </div>
        </div>
    </div>
}

export default About