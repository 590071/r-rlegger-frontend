import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Services() {
    const tjenester = [
        '🔧 24/7 Rørlegger Døgnvakt',
        '🚰 Reparasjon av lekkasjer',
        '🔥 Installasjon av varmepumper',
        '🛁 Oppussing av bad',
        '🏗️ Rørlegging for nybygg'
    ];

    return (
        <Fade direction="up" triggerOnce>
            <section style={{ textAlign: 'center' }}>
                <h2>Våre Tjenester</h2>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    fontSize: '20px',
                    lineHeight: '2'
                }}>
                    {tjenester.map((tjeneste, index) => (
                        <li key={index}>
                            {tjeneste}
                        </li>
                    ))}
                </ul>
            </section>
        </Fade>
    );
}

export default Services;
