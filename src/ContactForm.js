import React from 'react';

function ContactForm() {
    return (
        <section style={{
            padding: '50px 20px',
            backgroundColor: '#f9f9f9',
            textAlign: 'center'
        }}>
            <h2>Send oss en melding</h2>

            <form
                action="https://formsubmit.co/77knudsen@gmail.com"
                method="POST"
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
                    type="email"
                    name="epost"
                    placeholder="E-post"
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

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://24rørbergen.no/takk" />

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
        </section>
    );
}

export default ContactForm;
