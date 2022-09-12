import React from "react";
import emailjs from "@emailjs/browser";

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
        <section className="Content">
            <div className="TextZone">
                <h2>Contact</h2>
                <p>If you want to work together or for any other issues please feel free to get in touch sending me a message!</p>
                <p>I'll be answering as soon as possible!</p>
            </div>
            <div className="ShowZone">
                <div className="ContactForm">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <ul>
                            <li className="HalfLine">
                                <input name="name" type="text" placeholder="name" />
                            </li>
                            <li className="HalfLine">
                                <input name="email" type="email" placeholder="email" />
                            </li>
                            <li className="Line">
                                <input name="subject" type="text" placeholder="subject" />
                            </li>
                            <li className="Line">
                                <textarea name="message" placeholder="message" />
                            </li>
                            <li className="Line Submit">
                                <input type="submit" value="send message" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact