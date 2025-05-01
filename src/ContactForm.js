import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        navn: '',
        telefon: '',
        melding: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/kontakt', formData); // <-- Endre hvis du bruker Vercel/Render
            setStatus('✅ Meldingen ble sendt! Vi kontakter deg snart.');
            setFormData({ navn: '', telefon: '', melding: '' });
        } catch (error) {
            setStatus('❌ Noe gikk galt. Prøv igjen senere.');
        }
    };

    return (
        <section style={{
            padding: '50px 20px',
            backgroundColor: '#f9f9f9',
            textAlign: 'center'
        }}>
            <h2>Kontakt oss</h2>

            <form
                onSubmit={handleSubmit}
                style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    padding: '30px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                <input
                    type="text"
                    name="navn"
                    placeholder="Navn"
                    value={formData.navn}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '12px',
                        marginBottom: '15px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />

                <input
                    type="tel"
                    name="telefon"
                    placeholder="Telefonnummer"
                    value={formData.telefon}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '12px',
                        marginBottom: '15px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />

                <textarea
                    name="melding"
                    placeholder="Melding"
                    value={formData.melding}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '12px',
                        marginBottom: '15px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        minHeight: '150px'
                    }}
                ></textarea>

                <button type="submit" style={{
                    padding: '12px 24px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    fontSize: '16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '100%'
                }}>
                    Send melding
                </button>
            </form>

            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>
        </section>
    );
}

export default ContactForm;
