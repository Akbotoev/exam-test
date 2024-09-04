import { useEffect, useState } from 'react';
import './AddTask.scss';

const AddTask = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error: API not found');
            }
            return response.json();
        })
        .then((data) => setQuote(data.content))
        .catch((error) => console.error('Fetch error:', error));
    }, []);

    const fetchNewQuote = () => {
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => setQuote(data.content))
        .catch((error) => console.error('Fetch error:', error));
    }

    return (
        <>
            <p>Random Quote</p>
            <h1>{quote}</h1>
            <button onClick={fetchNewQuote}>New quote</button>
        </>
    );
}

export default AddTask;

