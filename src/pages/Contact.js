import React from "react";
import ContactCard from "../components/ContactCard";
import LocationMap from "../components/LocationMap";
import "../static/css/Contact.css";

const Contact = () => {
    return (
        <section className="ContentZone">
            <div className="TextZone">
                <ContactCard />
            </div>
            <div className="ShowZone">
                <LocationMap />
            </div>
        </section>
    )
}

export default Contact;