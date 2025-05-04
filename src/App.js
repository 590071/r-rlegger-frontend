import React from "react";

function App() {
    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h1>Velkommen til Rørlegger Bergen</h1>
            <a
                href="tel:12345678"
                style={{
                    display: "inline-block",
                    padding: "15px 30px",
                    backgroundColor: "#007bff",
                    color: "white",
                    fontSize: "18px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    marginTop: "20px",
                }}
            >
                📞 Ring oss nå
            </a>
        </div>
    );
}

export default App;
