import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <main>
                <section className="hero">
                    <div className="hero-top">
                        <div className="logo-container">
                            <img src="/logo.png" alt="24rørBergen logo" className="hero-logo"/>
                            <span className="brand-name">24rørBergen</span>
                        </div>
                    </div>

                    <div className="hero-content">
                        <h1>Døgnåpen rørlegger i Bergen</h1>
                        <p className="slogan">Rask hjelp ved lekkasjer – hele døgnet</p>
                        <a href="tel:41288716" className="ring-knapp">📞 Ring oss nå</a>
                    </div>
                </section>

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
