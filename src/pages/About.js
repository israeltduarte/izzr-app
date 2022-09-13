import React from 'react';
import AboutCard from '../components/AboutCard';
import SkillsChart from '../components/SkillsChart';

const About = () => {
    return (
        <section className="ContentZone" >
            <div className="TextZone">
                <AboutCard />
            </div>
            <div className="ShowZone">
                <SkillsChart />
            </div>
        </section>
    );
}

export default About;