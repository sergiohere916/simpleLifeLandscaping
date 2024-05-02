import React from "react"
import Header from "./Header"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import homeFrontView from "../images/simple_life_04.jpg"
import heroImage from "../images/simple_life_hero.jpg"


function Homepage() {
    return <div id="homePage">
        {/* <div id="contact-header"></div> */}
        <Header></Header>
        <div id="hero-image">
            Here To Help Create Beautiful Scenery in Ohio
            {/* <img src={homeFrontView}/> */}
        </div>
        <div id="homePage-intro">
            {/* This is simple life we are about helping you */}
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
     
        <div id="footer">

        </div>
    </div>
}

export default Homepage