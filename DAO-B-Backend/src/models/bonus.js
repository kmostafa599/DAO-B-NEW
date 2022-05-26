const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../config/mongo-file');

const bonusSchema = new mongoose.Schema({
  customerCreatedBonus: String,
  votes: [{
    user: String,
    vote: String,
  }],
  bonusAmount: Number,
  bonus: Number,
  approved: Boolean,

}, {
  timestamps: true,
});

const Bonus = mongoose.model('bonuses', bonusSchema);

module.exports = Bonus;
