import React from 'react';

const RandomPrompt = ({ data }) => {
  return (
    <div className='random-prompt-component'>
      <a href={`https://leetcode.com/problems/${data.question_slug}/`}>
        <h3>{data.question_title}</h3>
      </a>
      <ul>
        <li>
          <h5>Acceptance</h5>
          <h5>{`${((100 * data.total_acs) / data.total_submitted).toFixed(1)}%`}</h5>
        </li>
        <li>
          <h5>Difficulty</h5>
          <h5>{data.difficulty === 1 ? 'Easy' : data.difficulty === 2 ? 'Medium' : 'Hard'}</h5>
        </li>
        <li>
          <h5>Frequency</h5>
          <h5>{data.frequency}</h5>
        </li>
      </ul>
    </div>
  );
};

export default RandomPrompt;
