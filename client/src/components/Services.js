import React from "react";
import Header from "./Header";
import mowerImg from "../images/licensed_mower.jpeg";
import shovelImg from "../images/licensed_snowshovel.jpeg";
import grassImg from "../images/licensed_grass.jpeg";
import plantImg from "../images/licensed_plant.jpeg";
import serviceImg1 from "../images/simple_life_06.jpg";
import serviceImg2 from "../images/simple_life_02.jpg";
import serviceImg3 from "../images/simple_life_04.jpg";

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
            <div id="intro-quote">"We provide our clients with quality work taking each project into careful consideration producing a unique style that will bring out the best of the particular landscape"</div> 
        </div>
        <div id="services-provided">
            <div id="service1-content">
                <div id="service1-img">
                    <img src={serviceImg1} alt="service1img"/>
                </div>
                <div id="service1">
                    <div id="services-title">Professional Services Provided:</div>
                    <ul id="service-list">
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
            <div id="service1-content">
                <div id="service1-img">
                    <img src={serviceImg2} alt="service1img"/>
                </div>
                <div id="service1">
                    <div id="services-title">Professional Services Provided:</div>
                    <ul id="service-list">
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
            <div id="service1-content">
                <div id="service1-img">
                    <img src={serviceImg3} alt="service1img"/>
                </div>
                <div id="service1">
                    <div id="services-title">Professional Services Provided:</div>
                    <ul id="service-list">
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
    </div>
}

export default Services