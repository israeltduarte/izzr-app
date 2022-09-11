import React from "react";

const Contact = () => {
    return (
        <section className="Content">
            <div className="TextZone">
                <h2>Contact</h2>
                <p>If you want to work together or for any other issues please feel free to get in touch sending me a message!</p>
                <p>I'll be answering as soon as possible!</p>
            </div>
            <div className="ShowZone">
                <div className="ContactForm">
                    <form>
                        <ul>
                            <li className="HalfLine First">
                                <input type="text" placeholder="name" />
                            </li>
                            <li className="HalfLine">
                                <input type="email" placeholder="email" />
                            </li>
                            <li className="Line">
                                <input type="text" placeholder="subject" />
                            </li>
                            <li className="Line">
                                <textarea placeholder="message" />
                            </li>
                            <li className="Line Submit">
                                <input type="submit" value="send message"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact