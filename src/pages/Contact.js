import React from "react";
import { FormattedMessage } from 'react-intl';
import ContactForm from "../components/ContactForm";
import LocationMap from "../components/LocationMap";
import "../static/css/Contact.css";

const Contact = () => {

    return (
        <section className="ContentZone">
            <div className="TextZone">
                <h2><FormattedMessage id="contact.title" defaultMessage="Contact" /></h2>
                <p><FormattedMessage id="contact.phrase1" defaultMessage="" /></p>
                <ContactForm />
            </div>
            <div className="ShowZone">
                <LocationMap />
            </div>
        </section>
    )
}

export default Contact;