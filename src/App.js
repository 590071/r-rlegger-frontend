import React from 'react';
import Hero from './Hero';
import Hello from './Hello';
import Services from "./Services";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import StickyPhoneButton from "./StickyPhoneButton";
import Header from "./Header";

function App() {
    return (
        <div className="App">
            <Header /> {/* 👈 NY */}
            <Hero />
            <Services />
            <ContactForm /> {/* Her legger vi skjemaet */}
            <Contact />
            <Footer /> {/* 👈 Footer helt nederst */}
            <StickyPhoneButton /> {/* Sticky knapp legges helt nederst */}
        </div>
    );
}

export default App;
