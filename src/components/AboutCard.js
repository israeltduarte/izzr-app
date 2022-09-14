import React from "react";
import about from "../data/pages_content/about_content.json";

const AboutCard = () => {
    return (
        <div>
            <h2>{about.content.title}</h2>
            {
                about.content.paragraphs
                    .sort((a, b) => a.id > b.id ? 1 : -1)
                    .map(element => {
                        return <p key={element.id}>{element.phrase}</p>;
                    })
            }
        </div>
    )
}

export default AboutCard;