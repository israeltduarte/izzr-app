import React from "react";
import { FormattedMessage } from 'react-intl';
import ContactForm from "./ContactForm";

const ContactCard = () => {
    return (
        <div>
            <h2><FormattedMessage id="content.pages.contact.title" /></h2>
            <p><FormattedMessage id="content.pages.contact.phrase.01" /></p>
            <ContactForm />
        </div>
    )
}

export default ContactCard;