import React, { useState, useEffect } from 'react';

const RandomPromptFilter = ({ setFilterData }) => {
  const [difficulties, setDifficulties] = useState({ 1: true, 2: true, 3: true });
  const [acceptanceRate, setAcceptanceRate] = useState(0);
  const [frequency, setFrequency] = useState(0);

  useEffect(() => {
    setFilterData({ difficulties, acceptanceRate, frequency });
  }, [difficulties, acceptanceRate, frequency]);

  return (
    <div className='random-prompt-filter'>
      <div>
        <h4>Difficulty</h4>
        <ul className='difficulty-options'>
          <li
            onClick={() => setDifficulties({ ...difficulties, 1: !difficulties[1] })}
            className={!!difficulties[1] ? 'filter-easy' : 'deselected'}>
            Easy
          </li>
          <li
            onClick={() => setDifficulties({ ...difficulties, 2: !difficulties[2] })}
            className={!!difficulties[2] ? 'filter-medium' : 'deselected'}>
            Medium
          </li>
          <li
            onClick={() => setDifficulties({ ...difficulties, 3: !difficulties[3] })}
            className={!!difficulties[3] ? 'filter-hard' : 'deselected'}>
            Hard
          </li>
        </ul>
      </div>

      <div>
        <h4>Acceptance</h4>
        <ul className='percent-bar'>
          <li onClick={() => setAcceptanceRate(0)} className={acceptanceRate >= 0 ? 'selected' : null}></li>
          <li onClick={() => setAcceptanceRate(20)} className={acceptanceRate >= 20 ? 'selected' : null}></li>
          <li onClick={() => setAcceptanceRate(40)} className={acceptanceRate >= 40 ? 'selected' : null}></li>
          <li onClick={() => setAcceptanceRate(60)} className={acceptanceRate >= 60 ? 'selected' : null}></li>
          <li onClick={() => setAcceptanceRate(80)} className={acceptanceRate >= 80 ? 'selected' : null}></li>
        </ul>
      </div>

      <div>
        <h4>Frequency</h4>
        <ul className='percent-bar'>
          <li onClick={() => setFrequency(0)} className={frequency >= 0 ? 'selected' : null}></li>
          <li onClick={() => setFrequency(20)} className={frequency >= 20 ? 'selected' : null}></li>
          <li onClick={() => setFrequency(40)} className={frequency >= 40 ? 'selected' : null}></li>
          <li onClick={() => setFrequency(60)} className={frequency >= 60 ? 'selected' : null}></li>
          <li onClick={() => setFrequency(80)} className={frequency >= 80 ? 'selected' : null}></li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPromptFilter;
