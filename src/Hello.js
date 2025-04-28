import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hello() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/hello')
            .then((res) => setMessage(res.data))
            .catch(() => setMessage("Kunne ikke hente melding"));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Hello;
