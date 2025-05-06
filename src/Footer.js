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
        </footer>
    );
}

export default Footer;
