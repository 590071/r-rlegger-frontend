import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <a href="#top" className="logo-link">
                <img src="/logo.png" alt="K.H. Rørlegger logo" className="logo-image" />
                <span className="logo-text">K.H. Rørlegger</span>
            </a>
        </header>
    );
}

export default Header;
