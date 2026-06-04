import React from "react";
import project1photo from "../images/stockphotoExample.jpeg";
import project2photo from "../images/WilliamsAndWilliamsProject.png";
import project3video from "../videos/CandleWebsiteVideo.mp4";

function ProjectsPage() {
    return (
        <div>
            <h1 className={"projects"} id={"projects-title"}>Projects</h1>
            <div className={"projects"} id={"hover-instrs"}>
                Hover over an image to see more details.
            </div>

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
                            This is my portfolio website. I used HTML, CSS,
                            JavaScript, and React to create an interactive
                            website with a smooth user interface to showcase
                            myself, my projects, and my skills.
                        </p>
                    </div>
                </div>

                <div className={"image-container"} id={"project2"}>

                    <a href={"https://williamsandwilliamspc.com/"}>
                    <img src={project2photo} alt="Project Image"/>
                    <div className={"imageText"}>
                        <h1>Williams & Williams Website</h1>
                        <h2>Timeframe</h2>
                        <p>May 2025 - August 2025</p>
                        <h2>Description</h2>
                        <p>
                            This is a website that I designed and built
                            using HTML, CSS, JavaScript, and React. It's purpose
                            is to organize information for potential clients of
                            Williams & Williams P.C.
                            Click here to check it out.
                        </p>
                    </div>
                    </a>
                </div>

                <div className={"image-container"} id={"project3"}>
                    <video src={project3video} autoPlay="true" loop="true"/>
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
        </div>
    );
}

export default ProjectsPage;