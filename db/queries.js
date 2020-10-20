const { Prompt } = require('./index');

module.exports = {
  getPrompt: (promptID) => {
    return Prompt.find({ question_id: promptID }).exec();
  },
  addPrompts: (data) => {
    Prompt.insertMany(data).catch((err) => {
      console.log('DATA POPULATION ERROR');
    });
  },
};
