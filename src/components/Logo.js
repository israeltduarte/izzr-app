import React from "react";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="Logo">
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.36 86">
                    <g id="C2" data-name="C2">
                        <g id="izzr_template" data-name="izzr template">
                            <polygon className="cls-1" points="19.48 0.5 19.48 17.06 60.18 17.06 12.85 44.9 12.85 25.19 0.5 25.19 0.5 66.78 21.94 54.21 85.32 17.06 85.32 0.5 19.48 0.5" />
                            <path className="cls-1" d="M85.32,85.5V69.87H44.06L91.85,41V66.78h12.22A71.47,71.47,0,0,1,105,52.92,65.66,65.66,0,0,1,115.5,26.59a12.88,12.88,0,0,0-7.19,1c-4.86,2.14-7.41,6.65-8.23,8.25l.22-15.61L19.48,69.87V85.5Z" />
                            <circle className="cls-1" cx="6.61" cy="13.08" r="5.5" />
                        </g>
                    </g>
                </svg>
            </Link>
            <span>Israel Duarte</span>
            <span>Web Development</span>
        </div>
    )
}

export default Logo;