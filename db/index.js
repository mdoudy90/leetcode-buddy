const mongoose = require('mongoose');
const host = process.env.MONGODB_URI || 'mongodb://localhost/leetcodeBuddy';

mongoose.connect(host);

const Schema = mongoose.Schema;

const promptSchema = new Schema({
  question_id: { type: Number},
  question_title: { type: String},
  question_slug: { type: String},
  total_acs: { type: Number},
  total_submitted: { type: Number},
  difficulty: { type: Number},
  paid_only: { type: Boolean},
  frequency: { type: Number},
});

module.exports = {
  Prompt: mongoose.model('Prompt', promptSchema),
};
