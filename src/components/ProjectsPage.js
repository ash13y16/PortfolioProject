import React from "react";
import stockPhoto from "../images/stockphotoExample.jpeg";
import project1photo from "../images/stockphotoExample.jpeg";
import project2photo from "../images/WilliamsAndWilliams.png";

function ProjectsPage() {
    return (
        <div className={"projects"}>
            <div className={"image-container"} id={"project1"}>
                <img src={project1photo} alt="Project Image"/>
                <div className={"imageText"}>
                    <h1>Portfolio Website</h1>
                    <h2>Timeframe</h2>
                    <p>
                        January 2025 - March 2025
                    </p>
                    <h2>Description</h2>
                    <p>
                        This is my portfolio website! I used HTML, CSS,
                        JavaScript, and React to create an interactive
                        website with a smooth user interface to showcase
                        myself, my projects, and my skills.
                    </p>
                </div>
            </div>

            <div className={"image-container"} id={"project2"}>
                <img src={project2photo} alt="Project Image"/>
                <div className={"imageText"}>
                    <h1>Williams & Williams Website</h1>
                    <h2>Timeframe</h2>
                    <p>January 2025 - Present</p>
                    <h2>Description</h2>
                    <p>
                        This is a description of Project 1, including
                        what it was, it's impact, when I worked on it,
                        and other important details!
                    </p>
                </div>
            </div>

            <div className={"image-container"} id={"project3"}>
                <img src={stockPhoto} alt="Project Image"/>
                <div className={"imageText"}>
                    <h1>Project 1</h1>
                    <p>
                        This is a description of Project 1, including
                        what it was, it's impact, when I worked on it,
                        and other important details!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;