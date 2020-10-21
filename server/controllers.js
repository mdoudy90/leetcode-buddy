const models = require('./models');

module.exports = {
  getPrompt: (req, res) => {
    const headerData = {
      difficulties: req.get('difficulties'),
      acceptanceRate: req.get('acceptanceRate'),
      frequency: req.get('frequency'),
    };
    models
      .getPromptFromDB(headerData)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  },
};
