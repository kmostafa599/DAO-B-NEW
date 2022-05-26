const { bonusService } = require('../services/bonus');

const create = async (req, res) => {
  const bonus = await bonusService.create(req.body);
  res.status(200).json(bonus);
};
const getAll = async (req, res) => {
  const bonuses = await bonusService.getAll();
  res.status(200).json(bonuses);
};
const get = async (req, res) => {
  const bonus = await bonusService.get(req.params.id);
  res.status(200).json(bonus);
};

const addVote = async (req, res) => {
  const vote = await bonusService.addVote(req.body);
  res.status(200).json(vote);
};

const approveBonus = async (req, res) => {
  const bonus = await bonusService.approveBonus(req.params.id);
  res.status(200).json(bonus);
};

module.exports = {
  create, getAll, get, addVote, approveBonus,
};
