import React, { useState } from "react";
import Header from "./Header";

import serviceImg1 from "../images/simple_life_06.jpg";
import serviceImg2 from "../images/simple_life_02.jpg";
import serviceImg3 from "../images/simple_life_04.jpg";
import serviceImg4 from "../images/simple_life_03.jpg";
import serviceImg7 from "../images/simple_life_hero.jpg";
import serviceImg8 from "../images/simple_life_hero.jpg";





function Projects() {


    const [allProjects, setAllProjects] = useState([serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg7])
    const [projectIndexes, setProjectIndexes] = useState([0, 4]);

    const visibleProjects = allProjects.slice(projectIndexes[0], projectIndexes[1]);


    const [card3, setCard3] = useState([serviceImg3, serviceImg4]);

    function handleCardClick() {
        //Swap out pics
        setCard3([card3[1], card3[0]]);

    }
    
    function scrollLeft() {
        
    }

    function scrollRight() {
        if (projectIndexes[1] < allProjects.length) {
            setProjectIndexes([projectIndexes[0] + 1, projectIndexes[1] + 1])
        } else if (projectIndexes[1] === allProjects.length) {
            setProjectIndexes([projectIndexes[0] + 1, 0])
        }
    }

    const displayAllProjects = visibleProjects.map((project) => {
        return (
            <div className="projectCards">
                <img src={project}/>
            </div>
        )
    })


    return <div id="projectsPage">
        <Header></Header>
        <div id="projects-title">Our Projects</div>
        <div id="projects-container">
            <div id="center-project">
                <img src={serviceImg1}/>
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