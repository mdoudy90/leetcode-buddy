const queries = require('../db/queries');

module.exports = {
  getPromptFromDB: (promptID) => {
    return queries.getPrompt(promptID)
  }
}