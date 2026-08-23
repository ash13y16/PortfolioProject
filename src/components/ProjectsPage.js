import React from "react";
import project1photo from "../images/MinnowDesigns.png"
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
                    <img src={project1photo} alt="Project 1"/>
                    <div className={"imageText"}>
                        <h1>Minnow Designs</h1>
                        <h2>Timeframe</h2>
                        <p>
                            June 2026 - August 2026
                        </p>
                        <h2>Description</h2>
                        <p>
                            I built Minnow Design's website using Shopify.
                            I also managed product inventory and online display to
                            ensure the website was easy to navigate and matched the company's branding.
                        </p>
                    </div>
                </div>

                <div className={"image-container"}>

                    <a href={"https://williamsandwilliamspc.com/"}>
                    <img src={project2photo} alt="Project 2"/>
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