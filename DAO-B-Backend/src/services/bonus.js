const httpStatus = require('http-status');
const Joi = require('joi');
const Bonus = require('../models/bonus');
const Vote = require('../models/bonus');
const User = require('../models/user');
const APIError = require('../utils/api-error');

const voteCreation = Joi.object({
  customerCreatedBonus: Joi.string().required(),
  bonusAmount: Joi.number().required(),
  bonus: Joi.number().required(),
});

const create = async (payload) => {
  const { error } = voteCreation.validate(payload);
  if (error) throw new APIError('Wrong payload', httpStatus.BAD_REQUEST);
  const bonus = new Vote({
    customerCreatedBonus: payload.customerCreatedBonus,
    votes: [],
    bonusAmount: payload.bonusAmount,
    bonus: payload.bonus,
    approved: false,
  });
  await bonus.save();
  const user = await User.findById(payload.customerCreatedBonus);
  user.userBonuses.push(bonus);
  await user.save();
  return bonus;
};

const approveBonus = async (bonusId) => {
  const bonus = await Bonus.findById(bonusId); //find by id 
  if (!bonus) throw new APIError({ message: 'Bonus not found', status: httpStatus.NOT_FOUND });
  bonus.approved = true; // set to true
  await bonus.save();
  return bonus;
};

const getAll = async () => {
  const bonuses = await Bonus.find({
    sort: {
      createdAt: -1, // Sort by Date Added DESC
    },
  });
  return bonuses;
};

const get = async (id) => {
  const vote = await Bonus.findById(id);
  if (!vote) throw new APIError('Not found', httpStatus.NOT_FOUND);
  return vote;
};

const addVote = async ({ voteId, voterId, voteValue }) => {
  const user = await User.findById(voterId);
  if (!user) throw new APIError('User not found', httpStatus.NOT_FOUND);
  const bonus = await Bonus.findById(voteId);
  if (!bonus) throw new APIError('Bonus not found', httpStatus.NOT_FOUND);
  // eslint-disable-next-line no-underscore-dangle
  const vote = bonus.votes.find((e) => e._id === voterId);
  if (vote) throw new APIError('User already voted', httpStatus.CONFLICT);
  bonus.votes.push({ user: voterId, vote: voteValue });
  bonus.save();
  return bonus;
};

module.exports.bonusService = {
  create, getAll, get, addVote, approveBonus,
};
