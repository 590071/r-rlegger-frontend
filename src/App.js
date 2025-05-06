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
                © 2025 Rørlegger Bergen – Døgnvakt & Service
            </footer>
        </div>
    );
}

export default App;
