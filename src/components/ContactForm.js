import emailjs from "@emailjs/browser";
import React from "react";
import { FormattedMessage } from 'react-intl';
import "../static/css/SideBar.css";

const ContactForm = () => {
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
    )
}

export default ContactForm;