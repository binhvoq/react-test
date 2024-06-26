import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://myhelloworldapi1.azurewebsites.net/HelloWorld')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{message}</h1>
            </header>
        </div>
    );
}

export default App;
