import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import data from "../data/information.json";

const Socials = () => {
    return (
        <div className="Socials">
            <ul className="SocialsList">
                <li>
                    <a target="_blank" rel="noopener noreferrer"
                        title={data.information.instagram.title}
                        href={data.information.instagram.url}
                    ><AiFillInstagram /></a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer"
                        title={data.information.linkedin.title}
                        href={data.information.linkedin.url}
                    ><AiFillLinkedin /></a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer"
                        title={data.information.github.title}
                        href={data.information.github.url}
                    ><AiFillGithub /></a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;