import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Contact() {
    return (
        <Fade direction="up" triggerOnce>
            <section id="contact" style={{
                backgroundColor: '#f2f2f2',
                textAlign: 'center',
                padding: '60px 20px'
            }}>
                <h2>Kontakt oss</h2>
                <div style={{ fontSize: '20px', lineHeight: '2' }}>
                    <p>📞 <a href="tel:12345678" style={{ color: '#007BFF' }}>123 45 678</a></p>
                    <p>📧 <a href="mailto:post@rorleggerfirma.no" style={{ color: '#007BFF' }}>post@rorleggerfirma.no</a></p>
                    <p>📍 Rørveien 12, 1234 Vannstad</p>
                </div>
            </section>
        </Fade>
    );
}

export default Contact;
