import React, { useEffect, useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import serviceImg1 from "../images/simple_life_06.jpg";
import serviceImg2 from "../images/simple_life_02.jpg";
import serviceImg3 from "../images/simple_life_04.jpg";
import serviceImg4 from "../images/simple_life_03.jpg";
import serviceImg7 from "../images/simple_life_hero.jpg";
import serviceImg8 from "../images/simple_life_hero.jpg";

import project0Image from "../images/simple_life_00.jpg"
import project0_02Image from "../images/simple_life_00_02.JPG"
import project0_03Image from "../images/simple_life_00_03.JPG"
import project0_04Image from "../images/simple_life_00_04.JPG"


import project1Image from "../images/simple_life_01.jpg"
import project2Image from "../images/simple_life_02.jpg"
import project3Image from "../images/simple_life_03.jpg"
import project4Image from "../images/simple_life_04.jpg"
import project5Image from "../images/simple_life_05.jpg"

import project6Image from "../images/simple_life_06.jpg"
import project6_02Image from "../images/simple_life_06_02.jpg"
import project6_03Image from "../images/simple_life_06_03.JPG"


import project7Image from "../images/simple_life_07.jpg"
import project7_02Image from "../images/simple_life_07_02.jpg"
import project7_03Image from "../images/simple_life_07_03.jpg"

import project8Image from "../images/simple_life_08.jpg"
import project8_02Image from "../images/simple_life_08_02.JPG"

import project9Image from "../images/simple_life_09.jpg"

import project12Image from "../images/simple_life_12.jpg"
import project13Image from "../images/simple_life_13.jpg"
import project14Image from "../images/simple_life_14.jpg"
import project15Image from "../images/simple_life_15.jpg"
import project16Image from "../images/simple_life_16.jpg"
import project17Image from "../images/simple_life_17.jpg"
import project18Image from "../images/simple_life_18.jpg"
import project19Image from "../images/simple_life_19.jpg"
import project20Image from "../images/simple_life_20.JPG"
import project21Image from "../images/simple_life_21.JPG"

import project22Image from "../images/simple_life_22.JPG"
import project22_02Image from "../images/simple_life_22_02.JPG"
import project22_03Image from "../images/simple_life_22_03.JPG"


import leftArrow from "../images/left_arrow.png";
import rightArrow from "../images/right_arrow.png";



function Projects() {

   
    useEffect(() => {
      fetch("/images")
      .then(response => response.json())
      .then(data => {
        console.log("grabbing images...")
        // console.log(data);
        setAllProjects([...allProjects, ...data]);
      })
    }, [])


    // console.log("in projects...")
    
    const [displayMobileNav, setDisplayMobileNav] = useState(false);
    const [allProjects, setAllProjects] = useState([ {createdAt: "", name:"", image_url: project21Image}, {createdAt: "", name:"", image_url: project20Image}, {createdAt: "", name:"", image_url: project19Image},
        {createdAt: "", name:"", image_url: project13Image}, {createdAt: "", name:"", image_url: project12Image},
        {createdAt: "", name:"", image_url: project14Image}, {createdAt: "", name:"", image_url: project15Image},
        {createdAt: "", name:"", image_url: project16Image}, {createdAt: "", name:"", image_url: project17Image},
        {createdAt: "", name:"", image_url: project18Image},
        {createdAt: "", name:"", image_url: project0Image}, {createdAt: "", name:"", image_url: project0_02Image},
        {createdAt: "", name:"", image_url: project0_03Image}, {createdAt: "", name:"", image_url: project0_04Image}, {createdAt: "", name:"", image_url: project1Image},
        {createdAt: "", name:"", image_url: project2Image}, {createdAt: "", name:"", image_url: project3Image},
        {createdAt: "", name:"", image_url: project4Image},
        {createdAt: "", name:"", image_url: project6_02Image}, {createdAt: "", name:"", image_url: project6Image},
        {createdAt: "", name:"", image_url: project6_03Image}, {createdAt: "", name:"", image_url: project22Image},
        {createdAt: "", name:"", image_url: project22_02Image}, {createdAt: "", name:"", image_url: project22_03Image},
        {createdAt: "", name:"", image_url: "https://i.kym-cdn.com/entries/icons/facebook/000/045/146/son-goku-thumb-up.jpg"}])
    const [projectIndexes, setProjectIndexes] = useState([0, 1, 2, 3]);
    const [mainImage, setMainImage] = useState([allProjects[0].image_url])
    const [selectorImageHighlight, setSelectorImageHighlight] = useState(false);

    const visibleProjects = [allProjects[projectIndexes[0]], allProjects[projectIndexes[1]], allProjects[projectIndexes[2]], allProjects[projectIndexes[3]]];

    
    const [card3, setCard3] = useState([serviceImg3, serviceImg4]);


    function showHiddenNav() {
        setDisplayMobileNav(!displayMobileNav);
    }

    function handleCardClick() {
        //Swap out pics
        setCard3([card3[1], card3[0]]);

    }
    
    function scrollLeft() {
        if (projectIndexes[0] > (0) ) {
            setProjectIndexes([projectIndexes[0] - 1, projectIndexes[0], projectIndexes[1], projectIndexes[2]])
            // && projectIndexes[3] !== (0)

        // } else if (projectIndexes[0] > (0) && projectIndexes[3] === (0)) {
            

        //     setProjectIndexes([0, 1, 2, 3]);
            
        } else if (projectIndexes[0] === 0) {
            // setProjectIndexes( [(allProjects.length - 1), projectIndexes[0], projectIndexes[1], projectIndexes[2]])
            setProjectIndexes( [(allProjects.length - 1), projectIndexes[0], projectIndexes[1], projectIndexes[2]]);
            
        }
    }

    function scrollRight() {
        if (projectIndexes[3] < (allProjects.length -1) && projectIndexes[0] !== (allProjects.length -1)) {
            setProjectIndexes([projectIndexes[1], projectIndexes[2], projectIndexes[3], projectIndexes[3] + 1])
            
        } else if (projectIndexes[3] < (allProjects.length -1) && projectIndexes[0] === (allProjects.length -1)) {
            //last image is possibly at the start 
            //First image cannot go further than last image, must then be the next image
            //If this is case we can return to default
            setProjectIndexes([0, 1, 2, 3]);
            
        } else if (projectIndexes[3] === (allProjects.length -1)) {
            setProjectIndexes([projectIndexes[1], projectIndexes[2], projectIndexes[3], 0])
            
        }
    }

    function swapMainImage(projectImage) {
        setMainImage(projectImage);
    }

    const displayAllProjects = visibleProjects.map((project) => {
        return (
            <div className="projectCards" onClick={() => {
                swapMainImage(project.image_url);
                
            }} 
            >
                <img src={project.image_url}/>
            </div>
        )
    })

    console.log(projectIndexes)
    return <div id="projectsPage">
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
        <div id="projects-title">Our Projects</div>
        <div id="projectsLine"><div id="projectsLine2"></div></div>
        <div id="projects-container">
            <div id="center-project">
                <img src={mainImage}/>
                {/* <div id="center-image-filter"></div> */}
            </div>
        </div>
        <div id="projects-scroller-container">
            <div id="projects-scroller">
                <div id="projects-scroller-inner">
                    {displayAllProjects}
                    <div id="left-scroller" onClick={scrollLeft}>
                        <img src={leftArrow}/>
                    </div>
                    <div id="right-scroller" onClick={scrollRight}>
                        <img src={rightArrow}/>
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
                <span>Work Tel: 304-494-4471</span>
                <span>Personal Tel: 304-494-4471</span>
            </div>
        </div>
    </div>
}

export default Projects

