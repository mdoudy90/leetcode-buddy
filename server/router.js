const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/prompts', controllers.getPrompt);

module.exports = router;