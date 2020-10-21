import React, { useEffect, useState } from 'react';
import RandomPrompt from './components/RandomPrompt';
import RandomPromptFilter from './components/RandomPromptFilter';
import axios from 'axios';

const App = () => {
  const [promptData, setPromptData] = useState(null);
  const [filterData, setFilterData] = useState({
    difficulties: { 1: true, 2: true, 3: true },
    acceptanceRate: 0,
    frequency: 0,
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const getPrompt = () => {
    axios
      .get(`/prompts?id=${Math.floor(Math.random() * 1751)}`, {
        headers: {
          difficulties: Object.keys(filterData.difficulties)
            .filter((x) => filterData.difficulties[x]),
          acceptanceRate: filterData.acceptanceRate,
          frequency: filterData.frequency,
        },
      })
      .then(({ data }) => {
        setPromptData(data[0]);
      })
      .catch(() => {
        setErrorMessage('Experiencing Technical Difficulties...');
      });
  };

  useEffect(() => {
    getPrompt();
  }, []);

  return (
    <>
      {!!promptData ? <RandomPrompt data={promptData} /> : null}
      {!!errorMessage ? <h5>{errorMessage}</h5> : null}
      <RandomPromptFilter setFilterData={setFilterData} />
      <div onClick={getPrompt} className='pick-random-button'>
        <h4>Pick Random</h4>
      </div>
    </>
  );
};

export default App;
