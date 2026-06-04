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
                <p className={"paragraph"}>I am a student at University of Wisconsin - Madison
                    and I am studying computer science and data science, with a certificate in business.
                    I am from Maryland,
                    This website is mostly a
                    demonstration of some of my current skills, but I will be adding
                    to it throughout my journey at college! The issue with my
                    page right now is I need a bigger about section, so I am
                    considering putting some lorem ipsum.
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
                <h2>Contact Me</h2>
                <div className="half">
                    <label>First Name</label>
                    <input name="firstName" id={"firstVal"} className={"nameInput"} placeholder={"First Name"}/>
                </div>
                <div className="half">
                    <label>Last Name</label>
                    <input name={"lastName"} id={"secondVal"} className={"nameInput"} placeholder={"Last Name"}/>
                </div>

                <label>Email</label>
                <input name="email" id={"emailVal"} placeholder={"email@example.com"}/>

                <label>Message</label>
                <textarea name="message" id={"messageVal"} className="message" placeholder={"Write your message here!"}/>

                {/*<button className={"contactMeEmail"} onClick={sendEmail}>Send</button>*/}
                <center>
                    <div>
                        <hr className={"half"} style={{marginLeft: "10px"}}/>
                        <p id={"half"}>or</p>
                        <hr className={"half"} style={{marginRight: "10px"}}/>
                    </div>
                </center>
                <a href={"mailto:ashley.w8140@gmail.com"}>
                    <button className={"contactMeEmail"} id={"openEmail"}>Open Email</button>
                </a>
            </div>
            <div className="half" id={"rightHalf"} style={{display: "flex", justifyContent: "flex-end" }}>
                <img src={iceImage} alt = "image"/>
            </div>
        </div>
    );
}

export default AboutPage;