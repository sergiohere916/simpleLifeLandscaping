import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import mowerImg from "../images/licensed_mower.jpeg";
import shovelImg from "../images/licensed_snowshovel.jpeg";
import grassImg from "../images/licensed_grass.jpeg";
import plantImg from "../images/licensed_plant.jpeg";
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
                <div id={snowShovel}>
                    {/* <img src="https://media.istockphoto.com/id/1366423549/vector/illustration-of-garden-lawn-roll-overgrown-lawn-lawn-for-decoration.jpg?s=612x612&w=0&k=20&c=TeyFyV7gM8y1nIuTMgmu4wMcWqc9k1onnq7IsoSTbGs="/> */}
                </div>
            </div>
            <div id={pageBreakStyle2}></div>
            
            {/* <div id="servicePageBreak2"></div> */}
            
            {/* <div id="intro-title">Simple Life Landscaping Services</div> */}
            {/* <div id="intro-details">In Columbus Ohio and surrounding regions</div> */}
            {/* <div id="main-service-img">
                <img src={plantImg} />
            </div> */}
            {/* <div id="intro-quote">"We provide our clients with quality work taking each project into careful consideration producing a unique style that will bring out the best of the particular landscape"</div>
              */}
              <div id="intro-quote">"Trust us with your Landscaping Needs"</div>
        </div>
        <div id="services-provided">
            <div className="service1-content">
                <div className="service1-img">
                    <img src={serviceImg1} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Landscape Redesign:</div>
                    <ul className="service-list">
                        <li>Lawn Mowing</li>
                        <li>Edging</li>
                        <li>Trimming</li>
                        <li>Mulching</li>
                        <li>Landscape re-design</li>
                        <li>Plant Installation</li>
                        <li>Transplants</li>
                        <li>Snow removal</li>
                        <li>Leaf blwoing</li>
                        <li>Seeding</li>
                        <li>Sodding</li>
                    </ul>
                    <button>Contact Us</button>
                </div>   
            </div>
            <div className="service1-content">
                <div className="service1-img">
                    <img src={sodding} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Lawncare and Maintenance</div>
                    <ul className="service-list">
                        <li>Weekly grass cutting</li>
                        <li>Trimming</li>
                        <li>Mulching</li>
                        <li>Landscape re-design</li>
                        <li>Plant Installation</li>
                        <li>Transplants</li>
                        <li>Snow removal</li>
                        <li>Leaf blwoing</li>
                        <li>Seeding</li>
                        <li>Sodding</li>
                    </ul>
                    <button>Contact Us</button>
                </div>
                
            </div>
            <div className="service1-content">
                <div className="service1-img">
                    <img src={leafBlowing} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Professional Services Provided:</div>
                    <ul className="service-list">
                        <li>Lawn Mowing</li>
                        <li>Edging</li>
                        <li>Trimming</li>
                        <li>Mulching</li>
                        <li>Landscape re-design</li>
                        <li>Plant Installation</li>
                        <li>Transplants</li>
                        <li>Snow removal</li>
                        <li>Leaf blwoing</li>
                        <li>Seeding</li>
                        <li>Sodding</li>
                    </ul>
                    <button>Contact Us</button>
                </div>
                
            </div>
            <div className="service1-content">
                <div className="service1-img">
                    <img src={snowShoveling} alt="service1img"/>
                </div>
                <div className="service1">
                    <div className="services-title">Professional Services Provided:</div>
                    <ul className="service-list">
                        <li>Lawn Mowing</li>
                        <li>Edging</li>
                        <li>Trimming</li>
                        <li>Mulching</li>
                        <li>Landscape re-design</li>
                        <li>Plant Installation</li>
                        <li>Transplants</li>
                        <li>Snow removal</li>
                        <li>Leaf blwoing</li>
                        <li>Seeding</li>
                        <li>Sodding</li>
                    </ul>
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

export default Services