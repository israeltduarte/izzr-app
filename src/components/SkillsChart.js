import React from 'react';
import skills from "../data/skills.json";
import SkillArea from './SkillArea';

const SkillsChart = () => {
    return (
        <div className="SkillsChart">
            <SkillArea area={skills.back} />
            <SkillArea area={skills.front} />
            <SkillArea area={skills.other_tools} />
        </div>
    )
}

export default SkillsChart;

