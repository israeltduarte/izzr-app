import React from "react";
import { FormattedMessage } from 'react-intl';

const AboutCard = () => {
    return (
        <div>
            <h2><FormattedMessage id="content.pages.about.title" /></h2>
            <p><FormattedMessage id="content.pages.about.phrase.01" /></p>
            <p><FormattedMessage id="content.pages.about.phrase.02" /></p>
            <p><FormattedMessage id="content.pages.about.phrase.03" /></p>
        </div>
    )
}

export default AboutCard;