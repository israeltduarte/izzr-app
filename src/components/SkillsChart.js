import React from 'react';
import skills from "../data/skills.json";
import SkillArea from './SkillArea';
import "../static/css/Skills.css"

const SkillsChart = () => {
    return (
        <div className="SkillsChart">
            <SkillArea area={skills.back} isExpanded={true} />
            <SkillArea area={skills.front} />
            <SkillArea area={skills.other_tools} />
        </div>
    )
}

export default SkillsChart;

