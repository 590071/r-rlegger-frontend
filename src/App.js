import React, { useState } from 'react';
import './App.css';

function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="app-wrapper">
            <header className="hero">
                <img src="/logo.png" alt="24rørBergen logo" className="hero-logo" />
                <h1>Rørleggervakt Bergen</h1>
                <p className="subheading">Døgnvakt – ingen ventetid</p>
            </header>

            <section className="cta-outside">
                <button onClick={() => setShowModal(true)} className="btn-akutt">
                    🚨 Rørleggervakt nå – KLIKK HER
                </button>
                <a href="tel:41288716" className="btn-ring">📞 Ring rørlegger nå</a>
            </section>

            <main className="info-sections">
                <section>
                    <h2>Akutt hjelp ved vannskade</h2>
                    <p>
                        Vi er tilgjengelig 24/7 og klar til å hjelpe med lekkasjer, vannskader og rørproblemer – uten ventetid. Trygt, raskt og pålitelig.
                    </p>
                </section>
            </main>

            <footer>
                <p>© 2025 24rørBergen – Rørleggervakt & Service</p>
                <p>
                    E-post: <a href="mailto:post@fagfolk24service.no">post@fagfolk24service.no</a> – Tlf: <a href="tel:41288716">412 88 716</a>
                </p>
            </footer>

            {showModal && (
                <div className="modal-backdrop" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Kontakt rørleggervakten</h2>
                        <form
                            action="https://formsubmit.co/post@fagfolk24service.no"
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <input type="text" name="Fornavn" placeholder="Fornavn" required />
                            <input type="text" name="Etternavn" placeholder="Etternavn" required />
                            <input type="email" name="E-post" placeholder="Din e-postadresse" required />
                            <input type="tel" name="Telefonnummer" placeholder="Telefonnummer" required />
                            <input type="text" name="Adresse" placeholder="Adresse (hvor trenger du hjelp?)" required />
                            <textarea name="Beskrivelse" placeholder="Beskriv problemet eller nødsituasjonen her..." required></textarea>
                            <label style={{ marginBottom: "8px" }}>
                                Last opp bilde (valgfritt):
                                <input type="file" name="Vedlegg" />
                            </label>

                            <input type="hidden" name="_cc" value="karl.horn@gmail.com" />
                            <input type="hidden" name="_next" value="https://www.24rørbergen.no/takk" />
                            <input type="hidden" name="_captcha" value="false" />

                            <button type="submit" className="btn-ring">Send forespørsel</button>
                            <button type="button" onClick={() => setShowModal(false)} className="lukk-knapp">Lukk</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
