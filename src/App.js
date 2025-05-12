import React, { useState } from 'react';
import './index.css';

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showServices, setShowServices] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleOpenAbout = () => setShowAbout(true);
    const handleCloseAbout = () => setShowAbout(false);

    const handleOpenServices = () => setShowServices(true);
    const handleCloseServices = () => setShowServices(false);

    return (
        <div>
            <section className="hero">
                <header className="top-meny">
                    <div className="logo-container">
                        <img src="/logo.png" alt="Logo" className="logo" />
                        <span className="brand-tekst">24rørBergen</span>
                    </div>

                    <input type="checkbox" id="meny-toggle" />
                    <label htmlFor="meny-toggle" className="meny-ikon">☰</label>

                    <nav className="meny-innhold">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleOpenAbout(); }}>Om oss</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleOpenServices(); }}>Tjenester</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleOpenModal(); }}>Kontakt</a>
                    </nav>
                </header>

                <h2>Akutt rørleggerhjelp i Bergen</h2>
            </section>

            <div className="container">
                <div className="knappe-container">
                    <button className="kontakt-knapp" onClick={handleOpenModal}>Kontakt oss nå</button>
                    <p>Eller ring rørlegger direkte.</p>
                    <button className="ring-knapp" onClick={() => window.location.href = 'tel:41288716'}>
                        Ring rørlegger
                    </button>
                    <p>Vi er tilgjengelig hele døgnet.</p>
                </div>

                <section className="info-seksjon">
                    <h2>Rørproblemer? Vi rykker ut – hele døgnet</h2>
                    <p>
                        Har du fått en lekkasje eller vannskade? Ikke vent! Vi tilbyr rask og
                        pålitelig hjelp fra erfarne rørleggere i Bergen – 24 timer i døgnet.
                    </p>

                    <h2>Nødhjelp ved vannskade</h2>
                    <p>
                        Skader fra vann kan utvikle seg raskt. Vi kommer umiddelbart og hjelper med å stanse lekkasjen og begrense skadeomfanget. Alt fra rørbrudd til tette avløp løses effektivt.
                    </p>

                    <h2>Alltid tilgjengelig</h2>
                    <p>
                        Våre fagfolk står klare til å hjelpe – uansett når på døgnet du trenger oss. Vi tar oppdrag dag, natt, helg og helligdag.
                    </p>

                    <h2>Forebygging og trygghet</h2>
                    <p>
                        Vi gir deg råd for å unngå fremtidige problemer. Forebyggende tiltak kan spare deg for store kostnader – og mye stress.
                    </p>

                    <h2>Kontakt oss – vi er klare!</h2>
                    <p>
                        Trykk på knappen og fyll ut skjemaet – vi tar kontakt så fort som mulig.
                    </p>
                </section>
            </div>

            {showModal && (
                <div className="modal active" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={handleCloseModal}>×</span>
                        <h2>Send forespørsel</h2>
                        <form
                            action="https://formsubmit.co/post@fagfolk24service.no"
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <input type="text" name="Fornavn" placeholder="Fornavn" required />
                            <input type="text" name="Etternavn" placeholder="Etternavn" required />
                            <input type="email" name="Epost" placeholder="Din e-postadresse" required />
                            <input type="tel" name="Telefonnummer" placeholder="Telefonnummer" required />
                            <input type="text" name="Adresse" placeholder="Adresse (hvor trenger du hjelp?)" required />
                            <textarea name="Beskrivelse" rows="5" placeholder="Beskrivelse av problemet" required></textarea>
                            <input type="file" name="bilde" accept="image/*" />
                            <button type="submit">Send forespørsel</button>
                        </form>
                    </div>
                </div>
            )}

            <footer>
                &copy; 2025 24rørBergen – Din lokale rørleggerdøgnvakt i Bergen<br />
                Tlf: <a href="tel:41288716">412 88 716</a> | E-post: <a href="mailto:post@fagfolk24service.no">post@fagfolk24service.no</a>
            </footer>
        </div>
    );
}

export default App;
