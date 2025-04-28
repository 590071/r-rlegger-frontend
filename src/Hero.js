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
        <section style={heroStyle}>
            <h1 style={{fontSize: "60px", marginBottom: "20px"}}>
                Rørlegger Bergen
            </h1>

            <p>Din pålitelige rørlegger – døgnvakt og ekspertise!</p>


        </section>
    );
}

export default Hero;
