import React from 'react';
import { FormattedMessage } from 'react-intl';
import skills from "../data/skills.json";
import "../static/css/Skills.css";
import SkillArea from './SkillArea';

const SkillsChart = () => {

    const back = <FormattedMessage id="content.pages.about.skills.back" />;
    const front = <FormattedMessage id="content.pages.about.skills.front" />;
    const tools = <FormattedMessage id="content.pages.about.skills.tools" />;

    return (
        <div className="SkillsChart">
            <SkillArea area={skills.back} name={back} isExpanded={true} />
            <SkillArea area={skills.front} name={front} />
            <SkillArea area={skills.tools} name={tools} />
        </div>
    )
}

export default SkillsChart;

