import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
    const heroStyle = {
        backgroundImage: "linear-gradient(rgba(0,123,255,0.6), rgba(0,123,255,0.6)), url('/bilde.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#007BFF",
        backgroundAttachment: "fixed",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",

    };

    return (
        <section style={heroStyle}>
            <h1>Rørleggerfirma Karl & Co</h1>
            <p>Din pålitelige rørlegger – døgnvakt og ekspertise!</p>


        </section>
    );
}

export default Hero;
