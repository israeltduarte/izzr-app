import React from "react";
import { FormattedMessage } from 'react-intl';

const AboutCard = () => {
    return (
        <div>
            <h2><FormattedMessage id="about.title" defaultMessage="About" /></h2>
            <p><FormattedMessage id="about.phrase1" defaultMessage="" /></p>
            <p><FormattedMessage id="about.phrase2" defaultMessage="" /></p>
            <p><FormattedMessage id="about.phrase3" defaultMessage="" /></p>
        </div>
    )
}

export default AboutCard;