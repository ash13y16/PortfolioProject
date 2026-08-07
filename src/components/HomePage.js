import React from "react";
import promPhoto from "../images/stockphotoExample.jpeg";

function HomePage () {

    return (
        <div className={"home"}>
            <div className="name">
                <h1>Ashley</h1>
                <h1 className={"indented"}>Williams</h1>
                <p>Portfolio website</p>
            </div>
            <div className="profile-picture">
                <img src={promPhoto} alt="Headshot"/>
            </div>
        </div>

    );
}

export default HomePage;