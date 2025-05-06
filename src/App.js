import React from 'react';
import './App.css';

function App() {
    const handleRingKlikk = () => {
        if (window.gtag) {
            window.gtag('event', 'ring_knapp_klikk');
        }
    };

    return (
        <div className="app-wrapper">
            <header className="hero">
                <div className="hero-header">
                    <img src="/logo.png" alt="24rørBergen logo" className="logo"/>


                    <span className="brand-name">24rørBergen</span>
                </div>

                <h1>Døgnåpen rørlegger i Bergen</h1>
                <p>
                    Trenger du <strong>akutt rørleggerhjelp i Bergen</strong>? Vi tilbyr døgnvakt,
                    hjelp med <strong>lekkasje</strong>, <strong>rørbrudd</strong> og installasjon av
                    varmtvannsbereder – raskt og profesjonelt.
                </p>

                <a
                    href="tel:41288716"
                    className="ring-knapp"
                    onClick={handleRingKlikk}
                >
                    📞 Ring oss nå
                </a>
            </header>
            <section className="kontakt">
                <h2>Kontakt oss</h2>
                <form action="https://formsubmit.co/77knudsen@gmail.com" method="POST">
                    <input type="text" name="navn" placeholder="Navn" required/>
                    <input type="email" name="epost" placeholder="E-post" required/>
                    <textarea name="melding" placeholder="Skriv meldingen din her..." rows="5" required></textarea>

                    {/* Skjul Formsubmit-epostbekreftelse og spamfelt */}
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="https://www.24rørbergen.no/takk"/>

                    <button type="submit">Send melding</button>
                </form>
            </section>

            <main>
                <section className="tjenester">
                    <h2>Våre Tjenester</h2>
                    <ul>
                        <li>🔧 24/7 Rørlegger Døgnvakt</li>
                        <li>💦 Reparasjon av lekkasjer</li>
                        <li>🔥 Installasjon av varmtvannsberedere</li>
                        <li>🏠 Hjelp ved akutte problemer</li>
                    </ul>
                </section>
            </main>

            <footer>
                <footer>
                    <p><strong>24rørBergen</strong></p>
                    <p>Telefon: <a href="tel:+4741288716">+47 412 88 716</a></p>
                    <p>E-post: <a href="mailto:karl.horn@gmail.com">karl.horn@gmail.com</a></p>
                    <p>Bergen, Norge</p>
                    <p>© 2025 Rørlegger Bergen – Døgnvakt & Service</p>
                </footer>

            </footer>
        </div>
    );
}

export default App;
