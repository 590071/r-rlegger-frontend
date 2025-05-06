import React from 'react';

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#007BFF',
            color: 'white',
            textAlign: 'center',
            padding: '15px 0',
            fontSize: '14px',
            marginTop: '30px'
        }}>
            <p>© {new Date().getFullYear()} K.H Rørlegger. Alle rettigheter reservert.</p>
            <p><strong>24rørBergen</strong></p>
            <p>Telefon: <a href="tel:+4741288716">+47 412 88 716</a></p>
            <p>E-post: <a href="mailto:post@24rørbergen.no">post@24rørbergen.no</a></p>
            <p>Bergen, Norge</p>
            <p>© 2025 Rørlegger Bergen – Døgnvakt & Service</p>
        </footer>
    );
}

export default Footer;
