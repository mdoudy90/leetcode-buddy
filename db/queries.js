const { Prompt } = require('./index');

module.exports = {
  getPrompt: ({ difficulties, acceptanceRate, frequency }) => {
    const MAX_FREQ = 4.44763960190697;

    return Prompt.count({
      difficulty: { $in: [...difficulties.split(',')] },
      frequency: { $gte: (frequency * MAX_FREQ) / 100 },
      acceptanceRate: { $gte: acceptanceRate / 100 },
    })
      .exec()
      .then((count) => {
        let random = Math.floor(Math.random() * count);

        return Prompt.find({
          // question_id: promptID,
          difficulty: { $in: [...difficulties.split(',')] },
          frequency: { $gte: (frequency * MAX_FREQ) / 100 },
          acceptanceRate: { $gte: acceptanceRate / 100 },
        })
          .skip(random)
          .exec();
      });
  },
  addPrompts: (data) => {
    Prompt.insertMany(data).catch((err) => {
      console.log('DATA POPULATION ERROR');
    });
  },
};
