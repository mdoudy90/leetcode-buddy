import React from 'react';

const MAX_FREQ = 4.44763960190697;

const RandomPrompt = ({ data }) => {
  return (
    <div className='random-prompt-component'>
      <a target='_blank' href={`https://leetcode.com/problems/${data.question_slug}/`}>
        <h3>{data.question_title}</h3>
      </a>
      <ul>
        <li>
          <h5>Acceptance</h5>
          <h3>{`${((100 * data.total_acs) / data.total_submitted).toFixed(1)}%`}</h3>
        </li>
        <li>
          <h5>Difficulty</h5>
          <h3>{data.difficulty === 1 ? 'Easy' : data.difficulty === 2 ? 'Medium' : 'Hard'}</h3>
        </li>
        <li>
          <h5>Frequency</h5>
          <h3>{`${(100 * data.frequency / MAX_FREQ).toFixed(1)}%`}</h3>
        </li>
      </ul>
    </div>
  );
};

export default RandomPrompt;
