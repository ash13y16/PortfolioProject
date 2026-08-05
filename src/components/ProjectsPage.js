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
                <div className={"image-container"}>
                    <img src={project2photo} alt="Project Image"/>
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

                <div className={"image-container"}>

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

                <div className={"image-container"}>
                    <video src={project3video} autoPlay="true" loop="true"/>
                    <div className={"imageText"}>
                        <h1>Ash & Flame</h1>
                        <h2>Timeframe</h2>
                        <p>August 2025</p>
                        <h2>Description</h2>
                        <p>
                            This is a website that I designed and built
                            using HTML, CSS, JavaScript, and React. It displays a fictional small business that sells different
                            varieties of candles. It is not launched, but the full display is
                            available in this video.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;