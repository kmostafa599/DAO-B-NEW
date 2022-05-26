const httpStatus = require('http-status');
const fs = require('fs');
const path = require('path');
const { userService } = require('../services/user');

const register = async (req, res) => {
  const newUser = await userService.register(req.body);
  res.status(httpStatus.OK).json(newUser);
};

const login = async (req, res) => {
  const token = await userService.login(req.body);
  res.status(httpStatus.OK).json(token);
};

const getAll = async (req, res) => {
  const users = await userService.getAll();
  res.status(httpStatus.OK).json(users);
};

const get = async (req, res) => {
  const { id } = req.params;
  const user = await userService.get(id);
  res.status(httpStatus.OK).json(user);
};

const update = async (req, res) => {
  const { id } = req.params;
  const user = await userService.update(id, req.body);
  res.status(httpStatus.OK).json(user);
};

const addWallet = async (req, res) => {
  const { id } = req.params;
  const user = await userService.addWallet(id, req.body);
  res.status(httpStatus.OK).json(user);
};

const uploadPicture = async (req, res) => {
  const { id } = req.params;
  const imageData = {
    name: req.body.name,
    desc: req.body.description,
    image: {
      data: fs.readFileSync(path.join(`uploads/${req.file.filename}`)),
      contentType: 'image/png',
    },
  };

  const fileInfos = await userService.uploadPicture(id, imageData);

  res.status(201).json(fileInfos);
};

const getImageUrl = async (req, res) => {
  const { id } = req.params;
  const imageUrl = await userService.getImageUrl(id);
  res.status(httpStatus.OK).json({ imageURL: imageUrl });
};

const addNotification = async (req, res) => {
  const { id } = req.params;
  const user = await userService.addNotification(id, req.body);
  res.status(httpStatus.OK).json(user);
};

const addVoteSuggestedBonus = async (req, res) => {
  const vote = await userService.addVoteSuggestedBonus(req.params.id, req.body);
  res.status(200).json(vote);
};

const createSuggestedBonus = async (req, res) => {
  const vote = await userService.createSuggestedProposal(req.params.id, req.body);
  res.status(200).json(vote);
};

module.exports = {
  register,
  login,
  get,
  getAll,
  update,
  addWallet,
  uploadPicture,
  getImageUrl,
  addNotification,
  addVoteSuggestedBonus,
  createSuggestedBonus,
};
