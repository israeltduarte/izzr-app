import React from "react";
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

const markdown = raw('../data/about.md');

const About = () => {
    return (
        <section className="About">

            <div className="TextZone">
                <article>
                    <ReactMarkdown
                        children={markdown}
                    />
                </article>
            </div>
            <div className="ShowZone">
                <p>
                    Tap and hold on the message that you want to “like” or react to with an emoji. Choose which reaction emoji you would like to use. Generally, the best emoji for “liking a message is the thumbs up emoji.
                </p>
            </div>


        </section>
    )
}

export default About