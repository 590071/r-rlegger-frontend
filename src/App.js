import React, { useState } from 'react';
import './index.css';

function App() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <section className="hero">
                <img src="/logo.png" alt="24rørBergen logo" className="logo"/>
                <h1>Døgnåpen rørlegger</h1>
                <p><h2>Akutt rørleggerhjelp i Bergen</h2></p>
            </section>
            <section className="alarm-banner">
                <button className="alarm-knapp" onClick={handleOpenModal}>
                    🚨 Kontakt oss nå!
                </button>
                <p className="alarm-undertekst">Vi er tilgjengelige hele døgnet – akutt hjelp uten ventetid.</p>

                <div className="ring-info">
                    <p>... eller snakk direkte med rørleggervakt på telefon</p>
                    <p className="telefonnummer">📞 <strong>412 88 716</strong></p>
                    <a href="tel:412 88 716" className="ring-knapp-gronn">📞 Ring rørlegger</a>
                </div>
            </section>

            <div className="container">
                <div className="knappe-container">

                </div>

                <section className="info-seksjon">
                    <h2>Rørproblemer? Vi rykker ut – hele døgnet</h2>
                    <p>Har du fått en lekkasje eller vannskade? Ikke vent! Vi tilbyr rask og pålitelig hjelp fra erfarne
                        rørleggere i Bergen – 24 timer i døgnet.</p>

                    <h2>Nødhjelp ved vannskade</h2>
                    <p>Skader fra vann kan utvikle seg raskt. Vi kommer umiddelbart og hjelper med å stanse lekkasjen og
                        begrense skadeomfanget. Alt fra rørbrudd til tette avløp løses effektivt.</p>

                    <h2>Alltid tilgjengelig</h2>
                    <p>Våre fagfolk står klare til å hjelpe – uansett når på døgnet du trenger oss. Vi tar oppdrag dag,
                        natt, helg og helligdag.</p>

                    <h2>Forebygging og trygghet</h2>
                    <p>Vi gir deg råd for å unngå fremtidige problemer. Forebyggende tiltak kan spare deg for store
                        kostnader – og mye stress.</p>

                    <h2>Kontakt oss – vi er klare!</h2>
                    <p>Trykk på knappen og fyll ut skjemaet – vi tar kontakt så fort som mulig.</p>
                </section>
            </div>

            {/* Sticky ring-knapp */}
            <a href="tel:41288716" className="sticky-ring-knapp">🔊 Ring rørlegger</a>

            {/* Modal-skjema */}
            {showModal && (
                <div className="modal active" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={handleCloseModal}>&times;</span>
                        <h2>Send forespørsel</h2>
                        <form action="https://formsubmit.co/post@fagfolk24service.no" method="POST"
                              encType="multipart/form-data">
                            <input type="text" name="Fornavn" placeholder="Fornavn" required/>
                            <input type="text" name="Etternavn" placeholder="Etternavn" required/>
                            <input type="email" name="Epost" placeholder="Din e-postadresse" required/>
                            <input type="tel" name="Telefonnummer" placeholder="Telefonnummer" required/>
                            <input type="text" name="Adresse" placeholder="Adresse (hvor trenger du hjelp?)" required/>
                            <textarea name="Beskrivelse" rows="5" placeholder="Beskrivelse av problemet"
                                      required></textarea>
                            <input type="file" name="bilde" accept="image/*"/>
                            <button type="submit">Send forespørsel</button>
                        </form>
                    </div>
                </div>
            )}

            <footer>
                &copy; 2025 24rørBergen – Din lokale rørleggerdøgnvakt i Bergen
            </footer>
        </div>
    );
}

export default App;
