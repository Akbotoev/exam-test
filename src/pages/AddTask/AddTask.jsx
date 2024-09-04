
import { useEffect, useState } from 'react';
import './AddTask.scss';


  const AddTask = () => {
    const [ quote, setQuote] = useState('')

    useEffect(() => {
        fetch('https://api.quotable.io')
        .then((response) => response.json())
        .then((data) =>  setQuote(data.content))
    },[]);

    const fetchNewQuite = () => {
        fetch('https://api.quotable.io')
        .then((response) => response.json())
        .then((data) => setQuote(data.content))
    }
    return(
  <>
  <p>Random Quite</p>
  <h1>{quote}</h1>
  <button onClick={fetchNewQuite}>New quite</button>
  </>
    )
}
export default AddTask;
