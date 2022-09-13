import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const SkillArea = (props) => {

    const [isExpanded, setExpanded] = useState(false);

    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    const handleClick = () => setExpanded(!isExpanded);

    return (
        <div>
            <div className="SkillLine" {...getToggleProps({ onClick: handleClick })}>
                <div className="ProgressBar" style={{ width: props.area.total }} >
                    <div className="SkillName">
                        {props.area.name}
                    </div>
                </div>
            </div>
            <div {...getCollapseProps()}>
                {
                    props.area.stack.map((element) => {

                        return (
                            <div className="SkillLine SubLine content" key={element.id}>
                                <div className="ProgressBar" style={{ width: element.total }} >
                                    <div className="SkillName">
                                        {element.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SkillArea;