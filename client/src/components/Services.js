import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import mowerImg from "../images/licensed_mower.jpeg";
import mowerImg from "../images/licensed_mower_processed2.png";
// import shovelImg from "../images/licensed_snowshovel.jpeg";
import shovelImg from "../images/licensed_snowshovel_processed.png";
// import grassImg from "../images/licensed_grass.jpeg";
import grassImg from "../images/licensed_grass_processed.png";
import plantImg from "../images/licensed_plant_processed.jpeg";
import serviceImg1 from "../images/simple_life_06.jpg";
import serviceImg2 from "../images/simple_life_02.jpg";
import serviceImg3 from "../images/simple_life_04.jpg";
import sodding from "../images/licensed_sodding.jpeg";
import leafBlowing from "../images/licensed_leafblowing.jpeg";
import snowShoveling from "../images/licensed_shoveling.jpeg";

import orangeSnowShovel from "../images/orange_snow_shovel-2.png";
import movingMower from "../images/orange_mower2.png";

function Services() {

    const [displayMobileNav, setDisplayMobileNav] = useState(false);
    const [pageBreakStyle, setPageBreakStyle] = useState("servicePageBreak");
    const [pageBreakStyle2, setPageBreakStyle2] = useState("servicePageBreak2");
    const [snowShovel, setSnowShovel] = useState("noSnowShovel")
    const [serviceGif, setServiceGif] = useState("");


    function showHiddenNav() {
        setDisplayMobileNav(!displayMobileNav);
    }

    function addSnow() {
        setPageBreakStyle("servicePageBreakSnow");
        setPageBreakStyle2("servicePageBreakSnow2")
        setSnowShovel("snowShovel");
        // setServiceGif(orangeSnowShovel);
    }

    function runMower() {
        setPageBreakStyle("servicePageBreak");
        setPageBreakStyle2("servicePageBreak2");
        setSnowShovel("littleMower");
        // setServiceGif(movingMower);
    }

    function placeTurf() {
        setPageBreakStyle("servicePageBreak");
        setPageBreakStyle2("servicePageBreak2");
        setSnowShovel("placingTurf")
    }

    function growTree() {
        setPageBreakStyle("servicePageBreak");
        setPageBreakStyle2("servicePageBreak2");
        setSnowShovel("growingTree");
    }

    return <div id="servicesPage">
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
        <div id="service-intro">
            <div id="intro-title">Simple Life Landscaping Services</div>
            <div id="intro-details">In Columbus Ohio and surrounding regions</div>
            <div id="service-images">
                <div className="service-img">
                    <img src={mowerImg} onClick={runMower}/>
                </div>
                <div className="service-img">
                    <img src={shovelImg} onClick={addSnow}/>
                </div>
                <div className="service-img">
                    <img src={grassImg} onClick={placeTurf}/>
                </div>
                <div className="service-img">
                    <img src={plantImg} onClick={growTree}/>
                </div>
            </div>
            
            <div id={pageBreakStyle}>
                <div id="fence-container">
                
                </div>
                <div id="fence-container-rightside">

                </div>
                <div id={snowShovel}>
                    {/* <img src="https://media.istockphoto.com/id/1366423549/vector/illustration-of-garden-lawn-roll-overgrown-lawn-lawn-for-decoration.jpg?s=612x612&w=0&k=20&c=TeyFyV7gM8y1nIuTMgmu4wMcWqc9k1onnq7IsoSTbGs="/> */}
                </div>
            </div>
            <div id={pageBreakStyle2}></div>
            
              {/* <div id="intro-quote">"Trust us with your Landscaping Needs"</div> */}
        </div>
        <div id="services-provided-title"> Trust Us With Your Landscaping Needs</div>
        <div id="services-provided">
            <div id = "service-space-1" className="service1-content">
                <div id="service-space-1-img" className="service1-img">
                    <img src={serviceImg1} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Professional Landscaping:</div>
                    <ul className="service-list">
                        <li>Mulching</li>
                        <li>Landscape Redesign</li>
                        <li>Garden Bed Preparation</li>
                        <li>Demolition/ Restoration</li>
                        <li>Plant Installation</li>
                        <li>Transplants</li>
                    </ul>
                    <p className="service-descriptions">Our professional landscaping services ensure your outdoor spaces remain vibrant and well-maintained. 
                    We offer mulching, landscape redesign, garden bed preparation, and plant installation to enhance your yard’s aesthetics and health.
                     Additionally, our demolition/restoration services help renew your landscape, 
                     while transplants allow for the careful relocation of plants. With our expertise, your landscape will flourish, 
                     providing a beautiful and functional environment.</p>
                    <button>Contact Us</button>
                </div>   
            </div>
            <div id = "service-space-2" className="service1-content">
                <div className="service1-img">
                    <img src={sodding} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Lawncare and Maintenance</div>
                    <ul className="service-list">
                        <li>Weekly Grass Cutting</li>
                        <li>General Maintenance</li>
                        <li>Edging</li>
                        <li>Trimming</li>
                        <li>Seeding</li>
                        <li>Sodding</li>
                    </ul>
                    <p className="service-descriptions">These services keep your lawn and landscape healthy and attractive. We'll do pest management, weed control, fertilization, and debris removal. Edging and trimming create clean lines and reach hard-to-access areas for a polished look. Sodding provides an instant, green lawn by laying down pre-grown grass.</p>
                    <button>Contact Us</button>
                </div>
                
            </div>
            <div id = "service-space-3" className="service1-content">
                <div className="service1-img">
                    <img src={leafBlowing} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Seasonal Services Provided:</div>
                    <ul className="service-list">
                        <li>Fall Cleanup</li>
                    </ul>
                    <p className="service-descriptions">Seasonal landscaping services adapt throughout the year to maintain outdoor spaces. Spring focuses on rejuvenation and growth, summer on regular upkeep and pest control, fall on winter preparation including leaf blowing and cleanup, and winter on protection and maintenance during cold weather. Each season's tasks ensure the landscape remains healthy and attractive year-round.</p>
                    <button>Contact Us</button>
                </div>
                
            </div>
            <div id = "service-space-4" className="service1-content">
                <div id ="service4-img" className="service1-img">
                    <img src={snowShoveling} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Extra Services Provided:</div>
                    <ul className="service-list">
                        <li>Snow removal</li>
                    </ul>
                    <p className="service-descriptions">We provide a multitude of different services throughout the year, and will work with you
                    to establish what may best suit what your vision entails. The overall goal of our extra services remain the same, we aim to have 
                    satisfied clients that can be proud of their, home, bussiness, landscape. For this and more please give us a call.  
                    </p>
                    <button>Contact Us</button>
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
                <NavLink  to="/about"><a>About</a></NavLink>
                <NavLink  to="/services"><a>Services</a></NavLink>
                <NavLink  to="/projects"><a>Projects</a></NavLink>
                <NavLink  to="/contact"><a>Contact</a></NavLink>
            </div>
            <div className="footer-sections">
                <span>testing123@gmail.com</span>
                <span>Phone: 304-494-4471</span>
            </div>
        </div>
    </div>
}

export default Services