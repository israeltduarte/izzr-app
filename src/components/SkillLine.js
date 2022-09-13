import React from "react";
import skills from "../data/skills.json";

const SkillLine = (props) => {
    return (
        <div className="SkillLine">
            <div className="ProgressBar" style={{ width: skills[props.name].total }}>
                <div className="SkillName">{ props.name }</div>
            </div>
        </div>
    )
}

export default SkillLine