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
                    <p>📞 <a href="tel:92696285" style={{ color: '#007BFF' }}>92696285</a></p>
                    <p>📧 <a href="mailto:Karl.horn@gmail.com" style={{ color: '#007BFF' }}>Karl.horn@gmail.com</a></p>
                </div>
            </section>
        </Fade>
    );
}

export default Contact;
