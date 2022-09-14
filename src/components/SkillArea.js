import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const SkillArea = (props) => {

    const [isExpanded, setExpanded] = useState(props.isExpanded || false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const handleClick = () => setExpanded(!isExpanded);

    const area = props.area;
    const length = area.stack.length;
    const percentMultiplier = 100 / length;
    const areaTotalSum = (area.stack.reduce((a, v) => a = a + v.level, 0));
    const areaResult = (Math.ceil((areaTotalSum / length) * percentMultiplier)) + "%";

    return (
        <div>
            <div className="SkillLine" {...getToggleProps({ onClick: handleClick })}>
                <div className="ProgressBar" style={{ width: areaResult }} >
                    <div className="SkillName">
                        {area.name}
                    </div>
                    <div className="SkillPercent">
                        {areaResult}
                    </div>
                </div>
            </div>
            <div {...getCollapseProps()}>
                {
                    area.stack
                        .sort((a, b) => a.level < b.level ? 1 : -1)
                        .map((element) => {
                            let percentElementWidth = element.level * percentMultiplier + "%";
                            return (
                                <div className="SkillLine SubLine content" key={element.id}>
                                    <div className="ProgressBar" style={{ width: percentElementWidth }} >
                                        <div className="SkillPercent">
                                            {percentElementWidth}
                                        </div>
                                        <div className="SkillName">
                                            {element.name}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                }
            </div>
        </div>
    );
}

export default SkillArea;