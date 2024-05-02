import React from "react";
import Header from "./Header"

function Services() {
    return <div>
        <Header></Header>
        <div id="service-intro">
            <div id="intro-title">Simple Life Landscaping Services</div>
            <div id="intro-details">Professional Services for you</div> 
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