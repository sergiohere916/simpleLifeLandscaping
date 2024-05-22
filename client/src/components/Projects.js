import React, { useState } from "react";
import Header from "./Header";

import serviceImg1 from "../images/simple_life_06.jpg";
import serviceImg2 from "../images/simple_life_02.jpg";
import serviceImg3 from "../images/simple_life_04.jpg";
import serviceImg4 from "../images/simple_life_03.jpg";
import serviceImg7 from "../images/simple_life_hero.jpg";
import serviceImg8 from "../images/simple_life_hero.jpg";

import project0Image from "../images/simple_life_hero.jpg"
import project1Image from "../images/simple_life_01.jpg"
import project2Image from "../images/simple_life_02.jpg"
import project3Image from "../images/simple_life_03.jpg"
import project4Image from "../images/simple_life_04.jpg"
import project5Image from "../images/simple_life_05.jpg"
import project6Image from "../images/simple_life_06.jpg"



function Projects() {


    const [allProjects, setAllProjects] = useState([project0Image, project1Image, project2Image, project3Image, project4Image, project5Image, project6Image, "https://i.kym-cdn.com/entries/icons/facebook/000/045/146/son-goku-thumb-up.jpg"])
    const [projectIndexes, setProjectIndexes] = useState([0, 1, 2, 3]);
    const [mainImage, setMainImage] = useState([allProjects[0]])
    const [selectorImageHighlight, setSelectorImageHighlight] = useState(false);

    const visibleProjects = [allProjects[projectIndexes[0]], allProjects[projectIndexes[1]], allProjects[projectIndexes[2]], allProjects[projectIndexes[3]]];


    const [card3, setCard3] = useState([serviceImg3, serviceImg4]);

    function handleCardClick() {
        //Swap out pics
        setCard3([card3[1], card3[0]]);

    }
    
    function scrollLeft() {
        if (projectIndexes[0] > (0) && projectIndexes[3] !== (0)) {
            setProjectIndexes([projectIndexes[0] - 1, projectIndexes[0], projectIndexes[1], projectIndexes[2]])
            
        } else if (projectIndexes[0] > (0) && projectIndexes[3] === (0)) {
            setProjectIndexes([0, 1, 2, 3]);
            
        } else if (projectIndexes[0] === 0) {
            setProjectIndexes( [5, projectIndexes[0], projectIndexes[1], projectIndexes[2]])
            
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
                swapMainImage(project);
                
            }} 
            >
                <img src={project}/>
            </div>
        )
    })

    console.log(projectIndexes)
    return <div id="projectsPage">
        <Header></Header>
        <div id="projects-title">Our Projects</div>
        <div id="projectsLine"><div id="projectsLine2"></div></div>
        <div id="projects-container">
            <div id="center-project">
                <img src={mainImage}/>
                <div id="center-image-filter"></div>
            </div>
        </div>
        <div id="projects-scroller-container">
            <div id="projects-scroller">
                <div id="projects-scroller-inner">
                    {displayAllProjects}
                    <div id="left-scroller" onClick={scrollLeft}></div>
                    <div id="right-scroller" onClick={scrollRight}></div>
                </div>
            </div>
        </div>
    </div>
}

export default Projects

//v1 insert after projects-title div
        // <div id="projects-container">
        //     <div className="project-cards">
        //         <img src={serviceImg1}/>
        //     </div>
        //     <div className="project-cards">
        //         <img src={serviceImg2}/>
        //     </div>
        //     <div className="double-project-cards" onClick={handleCardClick}>
        //         <img src={card3[0]}/>
        //         <div id="card-selector">
        //             <div className="selector-dot-1"></div>
        //             <div className="selector-dot-2"></div>
        //         </div>
        //     </div>
        //     <div className="project-cards">
        //         <img src={serviceImg7}/>
        //     </div>
        // </div>