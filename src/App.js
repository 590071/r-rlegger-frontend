import React from "react";

function App() {
    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h2>Testskjema</h2>
            <form action="https://formsubmit.co/el/sogjjo" method="POST">
                <input
                    type="text"
                    name="navn"
                    placeholder="Navn"
                    required
                    style={{ display: "block", margin: "10px auto", padding: "10px" }}
                />
                <input
                    type="email"
                    name="epost"
                    placeholder="E-post"
                    required
                    style={{ display: "block", margin: "10px auto", padding: "10px" }}
                />
                <textarea
                    name="melding"
                    placeholder="Melding"
                    required
                    style={{ display: "block", margin: "10px auto", padding: "10px" }}
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default App;
