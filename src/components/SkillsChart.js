import React from 'react';
import skills from "../data/skills.json";
import "../static/css/Skills.css";
import SkillArea from './SkillArea';

const SkillsChart = () => {
    return (
        <div className="SkillsChart">
            <SkillArea area={skills.back} name="about.skills.back" isExpanded={true} />
            <SkillArea area={skills.front} name="about.skills.front" />
            <SkillArea area={skills.other_tools} name="about.skills.tools" />
        </div>
    )
}

export default SkillsChart;

