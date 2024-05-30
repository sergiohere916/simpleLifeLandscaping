import React, { useRef, useState } from 'react';
import Header from "./Header"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import homeFrontView from "../images/simple_life_04.jpg"
import heroImage from "../images/simple_life_hero.jpg"
import emailjs from '@emailjs/browser';
import littleMower from "../images/orange_mower2.png";

function Homepage() {

    const [homePageSetup, setHomePageSetup] = useState("homePage");
    const [displayMobileNav, setDisplayMobileNav] = useState(false);

    const form = useRef();

    const sendEmail = () => {
    
        emailjs
          .sendForm('service_hwv5dtc', 'template_vrb8i3r', form.current, {
            publicKey: 'AjBG6cgx8EMDYspUg',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    function handleSubmit(e) {
        e.preventDefault()
        sendEmail()
    }

    function showHiddenNav() {
        setDisplayMobileNav(!displayMobileNav);
    }

    return (
    <div id="homePage">
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
        
        <div id="hero-image">
            <span>Here To Help Create Beautiful Scenery in Ohio</span>
        </div>
        
        <div id="homePage-intro">
            <div><b style={{fontStyle: "italic"}}>Simple Life</b> is a small business based in Columbus, Ohio. We provide landscaping installation, maintenance, trimming, and snow-removal services for our residential, commercial, retail, and hospitality clients.</div>
            <p>We provide quality work to help with your landscaping needs</p>
            
        </div>
        
        <div id="homePage-content">
            <div id="home-content-container1">
                <div id="content1-description">
                    <div id="content1-description1">Landscape redesign, installations, and mainenance</div>
                    <p>Simple life provides services to the greater Ohio region</p>
                    <div id="content1-desc-contact">Contact Us</div>
                </div>
                <div id="content1-image">
                    <img src = {heroImage} alt="home-frontview"/>
                </div>
            </div>
        </div>

        {/* <div id="reason-content">
            <div className="custom-curve-1">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
    
            <div className="reason-descs">
                <h3>Why Choose Us</h3>
                <span>We take pride in our meticulous attention to detail. Every plant, stone, and feature is carefully selected and placed to create a cohesive and stunning outdoor environment that you'll love coming home to. Your satisfaction is our top priority. We strive to exceed your expectations at every step of the process, from our initial consultation to the final walkthrough. Your happiness with the end result is what drives us.</span>
            </div>
            <div className="reason-descs">
                <h3>What We Provide</h3>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </div>
            <div className="custom-curve-2">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div> */}

        <div id="services-section">
            
            <div id="services-container">
                {/* <div id="services-image">

                </div> */}
                <div id="services-desc">
                    <span>WE OFFER A VARIETY OF SERVICES </span>
                    <span className='serviceMotto'>For a Simple Life</span>
                    <div id="plant-image"></div>
                    <button>SERVICES</button>
                    <div className='littleMower'>
                        <img src={littleMower}/>
                    </div>
                </div>
                <div id="services-desc">
                    <span>WE OFFER A VARIETY OF SERVICES </span>
                    <span className='serviceMotto'>For a Simple Life</span>
                    <div id="plant-image"></div>
                    <button>SERVICES</button>
                    <div className='littleMower'>
                        <img src={littleMower}/>
                    </div>
                </div>
            </div>
        </div>
     
        <div id="projects-section">
            <div id="projects-content">
                <span>Visit Our Gallery of Completed Landscapes</span>
                <button>PROJECTS</button>
            </div>
        </div>

        <div id="contact-section">
            <div id="form-section">
                <span>Get In Touch</span>
                <form ref={form} onSubmit={(e) => handleSubmit(e)} id="form-container"> 
                    <div className='first-last'>
                        
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="John" required></input>
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Doe" required></input>
                        </div>
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="JohnDoe@gmail.com" required></input>
                    </div>
                    <div className="input-container">
                        <label>Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" autoComplete="off" required></textarea>
                    </div>
                    
                    <button type="submit">send</button>
                </form>
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
    </div>)
    
}

export default Homepage