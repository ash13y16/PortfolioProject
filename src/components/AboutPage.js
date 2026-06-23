import React, {useState} from "react";
import iceImage from "../images/lakePhoto.PNG";
// import * as emailjs from "emailjs-com";

function AboutPage() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //
    //     emailjs
    //         .send(
    //             "service_8z36uzl",  // EmailJS Service ID
    //             "template_z290mkf", // EmailJS Template ID
    //             {
    //                 firstName: formData.firstName,
    //                 lastName: formData.lastName,
    //                 email: formData.email,
    //                 message: formData.message,
    //             }, // Data to send (user input)
    //             "Sm0dT1et-6DkUJi5i"  // EmailJS User ID
    //         )
    //         .then((response) => {
    //             alert("Email sent successfully!");
    //
    //             setFormData({
    //                 firstName: "",
    //                 lastName: "",
    //                 email: "",
    //                 message: "",
    //             });
    //         })
    //         .catch((error) => {
    //             alert("Failed to send email.");
    //         });
    //
    //     clearInputs();
    // };

    const clearInputs = () => {
        document.getElementById('firstVal').value = '';
        document.getElementById('secondVal').value = '';
        document.getElementById('emailVal').value = '';
        document.getElementById('messageVal').value = '';
    }


    return (
        <div className={"about"}>
            <div className="half">
                <h1>About</h1>
                <p className={"intro"}>Look below for a little bit about me. </p>
                <p className={"paragraph"}>I am an undergraduate at the University of Wisconsin - Madison
                    pursuing a bachelor’s degree in Computer Science and Data Science, and a certificate in Business.
                    When I am not on campus, I live in the DC area. I chose to study computer and data science
                    because I am able to challenge myself in a way that I have not found in other areas of study.
                    I love seeking out problems and coming up with innovative solutions, which is a skill that
                    computer science requires of its students. Coding is often complicated and frustrating, and
                    bugs are inevitable. This is why having a love of problem solving comes in handy when studying
                    computer science. I do not get discouraged when I face setbacks, but rather look at them as
                    opportunities to challenge myself to find a more creative solution. For example, designing my
                    portfolio website had been an interesting challenge for me since I had never designed a website
                    from scratch before. I had been working on the outline using a graphic design tool,
                    but it wasn’t coming together the way I wanted it too. I took a break only to come back and
                    find that my work hadn't saved. Instead of getting discouraged, I took it as an opportunity to
                    start fresh and ended up being much happier with the new design then I had been with the old one.

                    <br/>
                    This seems like a good idea, or I could just keep typing
                    until I am finished or can't come up with anything else to
                    type!
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla viverra eros lorem, eget pulvinar erat scelerisque quis.
                    In sodales quis tortor sed elementum. Fusce sollicitudin lacinia velit,
                    at viverra justo. Aliquam tincidunt enim dolor, vel sodales risus placerat sed.
                    Vivamus et tempor sapien, in tincidunt mi. In hac habitasse platea dictumst.
                    Phasellus ultrices nisl id quam euismod, in posuere ante egestas.
                    Donec imperdiet ante non luctus consequat. Phasellus tincidunt pharetra dolor
                    sed pharetra. Etiam rutrum quam malesuada ligula laoreet, et
                    porta felis viverra. Integer id dignissim arcu. Pellentesque quam augue,
                    convallis at bibendum dignissim, congue a mi.
                </p>
                <hr/>
                <a href={"mailto:ashley.w8140@gmail.com"}>
                    <button className={"contactMeEmail"} id={"openEmail"}>Email Me</button>
                </a>
            </div>
            <div className="half" id={"rightHalf"} style={{display: "flex", justifyContent: "flex-end" }}>
                <img src={iceImage} alt = "image"/>
            </div>
        </div>
    );
}

export default AboutPage;