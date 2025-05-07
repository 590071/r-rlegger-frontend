import React, { useState } from 'react';
import './App.css';

function App() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm(!showForm);

    return (
        <div className="app">
            <header className="header">
                <img src="/logo.png" alt="24rørBergen logo" className="logo" />
                <h1 className="brand">24rørBergen</h1>
            </header>

            <section className="hero">
                <h2>Rørleggervakt i Bergen</h2>
                <p className="subtext">Døgnvakt – ingen ventetid</p>
                <div className="cta-buttons">
                    <button onClick={toggleForm} className="red-button">
                        🔧 Rørleggervakt nå – KLIKK HER
                    </button>
                    <a href="tel:41288716" className="green-button">
                        📞 Ring rørlegger nå
                    </a>
                </div>
            </section>

            {showForm && (
                <section className="form-section">
                    <h3>Kontakt oss</h3>
                    <form action="https://formsubmit.co/post@fagfolk24service.no" method="POST" encType="multipart/form-data">
                        <input type="text" name="Fornavn" placeholder="Fornavn" required />
                        <input type="text" name="Etternavn" placeholder="Etternavn" required />
                        <input type="email" name="E-post" placeholder="Din e-postadresse" required />
                        <input type="tel" name="Telefonnummer" placeholder="Telefonnummer" required />
                        <input type="text" name="Adresse" placeholder="Adresse (hvor trenger du hjelp?)" required />
                        <textarea name="Beskrivelse" placeholder="Beskriv problemet eller nødsituasjonen her..." required />
                        <input type="file" name="Bilde (valgfritt)" />
                        <button type="submit">Send forespørsel</button>
                    </form>
                </section>
            )}

            <section className="info">
                <h2>Vannskade? Vi er klare til å hjelpe deg</h2>
                <p>
                    Når rør sprekker eller vann strømmer ukontrollert, er det viktig å handle raskt. 24rørBergen tilbyr akutt
                    rørleggervakt og rask respons i hele Bergen.
                </p>

                <h3>Akutt hjelp – 24/7</h3>
                <p>
                    Vi rykker ut hele døgnet og sørger for effektiv reparasjon av lekkasjer og skader på rør. Våre rørleggere er
                    klare når du trenger det mest.
                </p>

                <h3>Trygghet og fagkunnskap</h3>
                <p>
                    Med lang erfaring og god lokal kunnskap gir vi deg trygg hjelp med små og store utfordringer. Forebygging,
                    reparasjon og rådgivning – vi er her for deg.
                </p>
            </section>

            <footer className="footer">
                <p>© 2025 24rørBergen – Rørleggervakt i Bergen | post@fagfolk24service.no</p>
            </footer>

            <a href="tel:41288716" className="sticky-call-button">
                📞 Ring rørlegger nå
            </a>
        </div>
    );
}

export default App;
