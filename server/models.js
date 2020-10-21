const queries = require('../db/queries');

module.exports = {
  getPromptFromDB: (data) => {
    return queries.getPrompt(data)
  }
}