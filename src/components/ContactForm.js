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
                        <FormattedMessage id="content.pages.contact.form.name.placeholder">
                            {placeholder => <input name="name" type="text" placeholder={placeholder} />}
                        </FormattedMessage>
                    </li>
                    <li className="HalfLine">
                        <FormattedMessage id="content.pages.contact.form.email.placeholder">
                            {placeholder => <input name="email" type="email" placeholder={placeholder} />}
                        </FormattedMessage>
                    </li>
                    <li className="Line">
                        <FormattedMessage id="content.pages.contact.form.subject.placeholder">
                            {placeholder => <input name="subject" type="text" placeholder={placeholder} />}
                        </FormattedMessage>
                    </li>
                    <li className="Line">
                        <FormattedMessage id="content.pages.contact.form.message.placeholder">
                            {placeholder => <textarea name="message" placeholder={placeholder} />}
                        </FormattedMessage>
                    </li>
                    <li className="Line Submit">
                        <FormattedMessage id="content.pages.contact.form.submit.value">
                            {value => <input name="submit" type="submit" value={value} />}
                        </FormattedMessage>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ContactForm;