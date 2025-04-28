import React from 'react';
import { Link } from 'react-scroll';
import './StickyPhoneButton.css';

function StickyPhoneButton() {
    return (
        <>
            <a href="tel:92696285" className="sticky-call-button">
                📞 Ring nå
            </a>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
                <div className="sticky-contact-button">
                    ✉️ Kontakt oss
                </div>
            </Link>
        </>
    );
}

export default StickyPhoneButton;
