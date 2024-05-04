import React from "react";
import Header from "./Header";
import mowerImg from "../images/licensed_mower.jpeg";
import shovelImg from "../images/licensed_snowshovel.jpeg";
import grassImg from "../images/licensed_grass.jpeg";
import plantImg from "../images/licensed_plant.jpeg";

function Services() {
    return <div id="servicesPage">
        <Header></Header>
        <div id="service-intro">
            <div id="service-images">
                <div className="service-img">
                    <img src={mowerImg}/>
                </div>
                <div className="service-img">
                    <img src={shovelImg}/>
                </div>
                <div className="service-img">
                    <img src={grassImg}/>
                </div>
                <div className="service-img">
                    <img src={plantImg}/>
                </div>
            </div>
            <div id="intro-title">Simple Life Landscaping Services</div>
            <div id="intro-details">Professional Services for you in Columbus Ohio region</div>
            {/* <div id="main-service-img">
                <img src={plantImg} />
            </div> */}
            <div style={{marginTop: "2%"}}>"We provide our clientel with "</div> 
        </div>
        <div id="services-provided">
            <div id="service1">
                <div id="services-title">Professional Services Provided:</div>
                <ul id="service-list">
                    <li>Lawn Mowing</li>
                    <li>Edging</li>
                    <li>Trimming</li>
                    <li>Mulching</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Services