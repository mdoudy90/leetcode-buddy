import React, { useEffect, useState } from 'react';
import RandomPrompt from './components/RandomPrompt';
import axios from 'axios';

const App = () => {
  const [promptData, setPromptData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(`/prompts?id=${Math.floor(Math.random()*1751)}`)
      .then(({ data }) => {
        setPromptData(data[0]);
      })
      .catch(() => {
        setErrorMessage('Experiencing Technical Difficulties...');
      });
  }, []);

  return (
    <>
      {!!promptData ? <RandomPrompt data={promptData} /> : null}
      {!!errorMessage ? <h5>{errorMessage}</h5> : null}
    </>
  );
};

export default App;
