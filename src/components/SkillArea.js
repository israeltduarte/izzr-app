import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const SkillArea = (props) => {

    const [isExpanded, setExpanded] = useState(props.isExpanded);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const handleClick = () => setExpanded(!isExpanded);
    const area = props.area;
    const areaResult = ((area.stack.reduce((a, v) => a = a + v.level, 0) / area.stack.length) * 20) + "%";

    return (
        <div>
            <div className="SkillLine" {...getToggleProps({ onClick: handleClick })}>
                <div className="ProgressBar" style={{ width: areaResult }} >
                    <div className="SkillName">
                        {area.name}
                    </div>
                </div>
            </div>
            <div {...getCollapseProps()}>
                {
                    area.stack.map((element) => {
                        return (
                            <div className="SkillLine SubLine content" key={element.id}>
                                <div className="ProgressBar" style={{ width: (element.level * 20) + "%" }} >
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