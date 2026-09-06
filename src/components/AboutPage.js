import React from "react";
import iceImage from "../images/headshot1.png";

function AboutPage() {
    return (
        <div className={"about"}>
            <div className="half">
                <h1>About</h1>
                <p className={"intro"}>Look below for a little bit about me. </p>
                <div className={"paragraph"}>
                    <h2>My Experience</h2>
                    <p>I am an undergraduate at the University of Wisconsin - Madison pursuing a bachelor’s degree in
                        Computer Science and Data Science, and a certificate in Business. I am a dedicated student who
                        has been on the Dean’s Honors List for three semesters, and I have worked on classroom projects
                        that covered various core CS topics such as data structures, object oriented programming,
                        machine learning and website scraping. I have also done personal projects with React,
                        JavaScript, Python and HTML, including two internships where I worked on building websites for
                        companies to display their business and attract customers using a professional looking and easy
                        to navigate user interface.</p>
                    <p>At my internship at Williams & Williams Law Offices, I worked on both front and back end
                        development by building and launching the website from scratch using Reach and JavaScript.
                        Additionally, I published the website and managed the Google Profile for the business to attract
                        customers.</p>
                    <p>When I worked at Minnow Designs, I collaborated closely with management on the front end to
                        ensure it was fully customizable and correctly displayed the brand’s image, message, and
                        products to customers. Additionally, I thoroughly communicated with management to facilitate
                        effective and efficient asynchronous work, resulting in a faster launch of the website.</p>
                    <br/>
                    <h2>Why Computer Science?</h2>
                    <p>I chose to study computer and data science because I love seeking out problems and coming up with
                        innovative solutions, which is a skill that computer science requires of its students. Coding is
                        often complicated and frustrating, and bugs are inevitable. This is why having a love of problem
                        solving comes in handy when studying computer science. I do not get discouraged when I face
                        setbacks, but rather look at them as opportunities to challenge myself to find a more creative
                        solution. For example, designing my portfolio website had been an interesting challenge for me
                        since I had never designed a website from scratch before. I had been working on the outline
                        using a graphic design tool, but it wasn’t coming together the way I wanted it too. I took a
                        break only to come back and find that my work hadn't saved. Instead of getting discouraged, I
                        took it as an opportunity to start fresh and ended up being much happier with the new design
                        then I had been with the old one.</p>
                </div>
                <hr/>
                <a href={"mailto:ashley.w8140@gmail.com"}>
                    <button className={"contactMeEmail"} id={"openEmail"}>Email Me</button>
                </a>
            </div>
            <div className="half" style={{
                position: "sticky", top: "30px", paddingTop: "50px",
                display: "flex", justifyContent: "center"}}>
                <img src={iceImage} alt="Headshot"/>
            </div>
        </div>
    );
}

export default AboutPage;