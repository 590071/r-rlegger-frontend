import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
    const heroStyle = {
        color: "white",
        backgroundColor: "#007BFF", // bakgrunnsfarge (valgfritt)
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px"
    };


    return (

        <section className="hero">
            <div className="hero-content">
                <h1>Rørlegger Bergen – Døgnvakt 24/7</h1>
                <p>Er du uten vann eller har lekkasje? Vi rykker ut – hele døgnet!</p>
                <a href="tel:41288716" className="cta-btn">📞 Ring oss nå</a>
            </div>
        </section>

    );
}

export default Hero;
