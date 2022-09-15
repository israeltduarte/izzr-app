import emailjs from "@emailjs/browser";
import React from "react";
import { FormattedMessage } from 'react-intl';
import "../static/css/Contact.css";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.init(process.env.REACT_APP_USER_ID);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, "#contactForm")
            .then(
                result => console.log(result),
                error => console.log(error.text)
            );
        e.target.reset();
    }

    return (
        <section className="ContentZone">
            <div className="TextZone">
                <h2><FormattedMessage id="contact.title" defaultMessage="Contact" /></h2>
                <p><FormattedMessage id="contact.phrase1" defaultMessage="" /></p>
                <div className="ContactForm">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <ul>
                            <li className="HalfLine">
                                <FormattedMessage id="contact.form.name.placeholder" defaultMessage="message">
                                    {placeholder => <input name="name" type="text" placeholder={placeholder} />}
                                </FormattedMessage>
                            </li>
                            <li className="HalfLine">
                                <FormattedMessage id="contact.form.email.placeholder" defaultMessage="email">
                                    {placeholder => <input name="email" type="email" placeholder={placeholder} />}
                                </FormattedMessage>
                            </li>
                            <li className="Line">
                                <FormattedMessage id="contact.form.subject.placeholder" defaultMessage="subject">
                                    {placeholder => <input name="subject" type="text" placeholder={placeholder} />}
                                </FormattedMessage>
                            </li>
                            <li className="Line">
                                <FormattedMessage id="contact.form.message.placeholder" defaultMessage="message">
                                    {placeholder => <textarea name="message" placeholder={placeholder} />}
                                </FormattedMessage>
                            </li>
                            <li className="Line Submit">
                                <FormattedMessage id="contact.form.submit.value" defaultMessage="send message">
                                    {value => <input name="submit" type="submit" value={value} />}
                                </FormattedMessage>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="ShowZone">
                <div className="Location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235148.9431658779!2d-47.179291385183134!3d-22.942777934179837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c58a1a83a4cf%3A0xd689d301fcb4d997!2sAv.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%201%20-%20Jardim%20Flamboyant%2C%20Campinas%20-%20SP%2C%2013091-140!5e0!3m2!1sen!2sbr!4v1662869166395!5m2!1sen!2sbr"
                        title="current location"
                        width="600"
                        height="450"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact;