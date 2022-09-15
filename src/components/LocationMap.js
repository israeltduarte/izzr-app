import React from "react";
import "../static/css/Contact.css";

const LocationMap = () => {
    return (
        <div className="Location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235148.9431658779!2d-47.179291385183134!3d-22.942777934179837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c58a1a83a4cf%3A0xd689d301fcb4d997!2sAv.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%201%20-%20Jardim%20Flamboyant%2C%20Campinas%20-%20SP%2C%2013091-140!5e0!3m2!1sen!2sbr!4v1662869166395!5m2!1sen!2sbr"
                title="current location"
                width="600"
                height="450"
                loading="eager"
            />
        </div>
    )
}

export default LocationMap;