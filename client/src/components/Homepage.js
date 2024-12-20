import React, { useRef, useState } from 'react';
import Header from "./Header"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import homeFrontView from "../images/simple_life_04.jpg"
import heroImage from "../images/simple_life_hero.jpg"
import emailjs from '@emailjs/browser';
import littleMower from "../images/orange_mower2.png";
import homeFrontView2 from "../images/simple_life_08.jpg";

function Homepage() {

    const [homePageSetup, setHomePageSetup] = useState("homePage");
    const [displayMobileNav, setDisplayMobileNav] = useState(false);

    const form = useRef();

    // const [firstName, setFirstName] = useState("John");
    // const [lastName, setLastName] = useState("Doee");
    // const [userEmail, setUserEmail] = useState("JohnDoe@gmail.com");
    // const [userMessage, setUserMessage] = useState("Message")
    const [userInput, setUserInput] = useState({firstName: "", lastName: "", userEmail: "", userMessage: "", buttonValue: "Send", buttonValueId: "" });


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
        setUserInput({firstName: "", lastName: "", userEmail: "", userMessage: "", buttonValue: "Sent", buttonValueId: "button-submitted-style" })

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
            <p>We'll provide quality work to meet your landscaping needs</p>
            <div><b style={{}}>Simple Life</b> is a small business based in Columbus, Ohio. We provide landscaping installation, maintenance, trimming, and snow-removal services for our residential, commercial, retail, and hospitality clients.</div>
            
            
        </div>
        
        <div id="homePage-content">
            <div id="home-content-container1">
                <div id="content1-description">
                    <div id="content1-description1">Supplying all your landscaping needs.</div>
                    <p>Simple life provides services to the greater Ohio region</p>
                    <div id='desc-contact-container'>
                        {/* <div id="content1-desc-contact">Contact Us</div> */}
                        <NavLink id="content1-desc-contact" style={{color: "white", textDecoration: "none"}} to="/contact">Contact Us</NavLink>
                    </div>
                </div>
                <div id="content1-image">
                    <img src = {heroImage} alt="home-frontview"/>
                </div>
            </div>
        </div>

        <div id="homePage-content-2">
            <div id="home-content-container2">
                
                <div id="content2-image">
                    <img src = {homeFrontView2} alt="home-frontview2"/>
                </div>
                <div id="content2-description">
                    <div id="content2-description2">Simple Life Services</div>
                    <p>
                    These services keep your lawn and landscape healthy and attractive.  
                    Edging and trimming create clean lines and reach hard-to-access areas for a polished look. ff
                    Sodding provides an instant, green lawn by laying down pre-grown grass.
                    </p>
                    <div id='desc-contact-container2'>
                        {/* <div id="content2-desc-contact">View Services</div> */}
                        <NavLink id="content2-desc-contact" style={{color: "white", textDecoration: "none"}} to="/services">View Services</NavLink>
                    </div>
                </div>
            </div>
        </div>

        <div id="services-section">
            
            <div id="services-container">
                <div id="services-desc">
                    <span>WE OFFER A VARIETY OF SERVICES </span>
                    <span className='serviceMotto'>We're For a Simple Life</span>
                    <div id="plant-image"></div>
                    {/* <button>VIEW SERVICES</button> */}
                    <NavLink to="/services" id="view-service-button">VIEW SERVICES</NavLink>
                    <div className='littleMower'>
                        <img src={littleMower}/>
                    </div>
                </div>
                <div id="services-desc">
                    <span>LEARN MORE ABOUT US </span>
                    <span className='serviceMotto'>We're For a Simple Life</span>
                    <div id="plant-image"></div>
                    {/* <button>ABOUT US</button> */}
                    <NavLink to="/about" id="view-about-button">ABOUT US</NavLink>
                    <div className='littleMower'>
                        <img src={littleMower}/>
                    </div>
                </div>
            </div>
        </div>
     
        <div id="projects-section">
            <div id="projects-content">
                <span>Visit Our Gallery of Completed Landscapes</span>
                {/* <button>PROJECTS</button> */}
                <NavLink to="/projects" id="projects-content-button">PROJECTS</NavLink>
            </div>
        </div>

        <div id="contact-section">
            <div id="form-section">
                
                <span>Get In Touch</span>
                <form ref={form} onSubmit={(e) => handleSubmit(e)} id="form-container"> 
                    <div className='first-last'>
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder = "John" value={userInput.firstName} required onChange={(e) => {setUserInput({...userInput, firstName: e.target.value, buttonValue: "Send", buttonValueId: ""})}}></input>
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder= "Doe" value={userInput.lastName} required onChange={(e) => {setUserInput({...userInput, lastName: e.target.value, buttonValue: "Send", buttonValueId: ""})}}></input>
                        </div>
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder= "JohnDoe@gmail.com" value={userInput.userEmail} required onChange={(e) => {setUserInput({...userInput, userEmail: e.target.value, buttonValue: "Send", buttonValueId: ""})}}></input>
                    </div>
                    <div className="input-container">
                        <label>Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" value={userInput.userMessage} autoComplete="off" required onChange={(e) => {setUserInput({...userInput, userMessage: e.target.value, buttonValue: "Send", buttonValueId: ""})}}></textarea>
                    </div>
                    <button  id={userInput.buttonValueId} type="submit">{userInput.buttonValue}</button>
                </form>
                
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
    </div>)
    
}

export default Homepage