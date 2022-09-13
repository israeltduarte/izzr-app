import React from "react";
import about from "../data/about.json";

const AboutCard = () => {
    return (
        <div>
            <h2>About</h2>
            <p>{about.about.description}</p>
            <p>{about.about.historic}</p>
            <p>{about.about.hobbies}</p>
        </div>
    )
}

export default AboutCard;