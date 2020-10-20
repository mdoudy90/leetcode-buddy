const queries = require('../queries');
const data = require('../../data/leetcodeAlgoData');

const populateData = async () => {
  const filteredData = await data.map((prompt) => {
    return {
      question_id: prompt.stat.question_id,
      question_title: prompt.stat.question__title,
      question_slug: prompt.stat.question__title_slug,
      total_acs: prompt.stat.total_acs,
      total_submitted: prompt.stat.total_submitted,
      difficulty: prompt.difficulty.level,
      paid_only: prompt.paid_only,
      frequency: prompt.frequency,
    };
  });
  queries.addPrompts(filteredData)
};

populateData();