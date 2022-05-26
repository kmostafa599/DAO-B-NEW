const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../config/mongo-file');

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    wallet: [{
      name: String,
      walletNumber: { type: String, default: '0x' },
    }],
    team: String,
    business: String,
    salary: mongoose.Decimal128,
    photoUrl: {
      type: String,
      default: null,
    },
    userBonuses: {
      type: Array,
      default: [],
    },
    notifications: [{
      date: Date,
      details: String,
      bonusAmount: Number,
    }],
    suggestedProposal: [{
      approved: Boolean,
      bonus: Number,
      votes: [{
        proposalId: String,
        userId: String,
        vote: String,
      }],

    }],

  },
  { timestamps: true },
);

const User = mongoose.model('users', userSchema);

module.exports = User;
