import React, { useState } from 'react';
import about from "../data/about.json";
import useCollapse from 'react-collapsed';
import SkillLine from '../components/SkillLine';

const About = (props) => {

    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    const handleClick = () => {
        setExpanded(!isExpanded);
    }

    return (
        <section className="Content">
            <div className="TextZone">
                <h2>About</h2>
                <p>{about.about.description}</p>
                <p>{about.about.historic}</p>
                <p>{about.about.hobbies}</p>
            </div>
            <div className="ShowZone">
                <div className="SkillsChart">
                    <SkillLine name="back-end"/>
                    <SkillLine name="front-end"/>
                    
                    <div className="SkillLine collapsible">
                        <div className="ProgressBar header" {...getToggleProps({onClick: handleClick})}>
                            {isExpanded ? 'Collapse' : 'Expand'}
                        </div>
                        <div {...getCollapseProps()}>
                            <div className="content">
                                Now you can see the hidden content. <br /><br />
                                Click again to hide...
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About