import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

class Socials extends React.Component {

    render() {
        return (
            <div className="Socials">
                <ul className="SocialsList">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/israeltduarte">
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/israeltduarte">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/israeltduarte">
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Socials