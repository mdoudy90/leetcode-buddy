const models = require('./models');

module.exports = {
  getPrompt: (req, res) => {
    models
      .getPromptFromDB(req.query.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  },
};
