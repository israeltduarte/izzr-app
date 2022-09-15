import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import data from "../data/information.json";

const Socials = () => {
    return (
        <div className="Socials">
            <ul className="SocialsList">
                <li>
                    <a target="_blank" rel="noopener noreferrer" href={data.information.instagram}>
                        <AiFillInstagram />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href={data.information.github}>
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href={data.information.linkedin}>
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;