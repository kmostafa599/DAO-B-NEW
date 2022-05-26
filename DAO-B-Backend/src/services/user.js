const httpStatus = require('http-status');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const APIError = require('../utils/api-error');
const { jwtSecret } = require('../config/vars');
const Image = require('../models/image');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const registerSchema = Joi.object({
  fullName: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  wallet: Joi.object(),
  team: Joi.string().required(),
  business: Joi.string().required(),
  salary: Joi.number().required(),
  photoUrl: Joi.string(),
  userBonuses: Joi.array(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const walletSchema = Joi.object({
  name: Joi.string().required(),
  walletNumber: Joi.string().required(),
});

const notificationSchema = Joi.object({
  date: Joi.date().required(),
  details: Joi.string().required(),
  bonusAmount: Joi.number().required(),

});

const generateToken = (user) => {
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret);
  return token;
};

const mapUser = (user) => {
  const newUser = user;
  delete newUser.password;
  return newUser;
};

const register = async (user) => {
  const { error, value } = registerSchema.validate(user);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  value.password = hashPassword(value.password);
  const newUser = new User(value);
  await newUser.save();
  return newUser;
};

const login = async (userCredentials) => {
  const { error, value } = loginSchema.validate(userCredentials);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const existingUser = await User.findOne({ email: value.email });
  if (!existingUser) throw new APIError('No user is matching this email', httpStatus.NOT_FOUND);
  const loginResult = await bcrypt.compare(value.password, existingUser.password);
  if (!loginResult) throw new APIError('Wrong credentials', httpStatus.UNAUTHORIZED);

  const authToken = generateToken(existingUser);

  return { token: authToken, user: mapUser(existingUser) };
};

const get = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new APIError('No User found', httpStatus.NOT_FOUND);
  return user;
};

const getAll = async () => {
  const users = await User.find();
  return users;
};

const update = async (id, payload) => {
  const { error, value } = registerSchema.validate(payload);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  await get(id);
  value.password = hashPassword(value.password);
  const updateCode = await User.updateOne({ _id: id }, { ...value });
  if (!updateCode.ok) throw new APIError('Not Found', httpStatus.NOT_FOUND);
  const updatedValue = await User.findById(id);
  return updatedValue;
};

const addWallet = async (id, wallet) => {
  const { error } = walletSchema.validate(wallet);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const user = await get(id);
  user.wallet.push(wallet);
  await user.save();
  return user;
};

const getImageUrl = async (imageId) => {
  const myImage = await Image.findById(imageId);
  const dataURL = `data:${myImage.image.contentType};base64,${myImage.image.data.toString('base64')}`;
  return dataURL;
};

const uploadPicture = async (id, imageData) => {
  const myImage = new Image(imageData);
  await myImage.save();
  const user = await User.findById(id);
  user.photoUrl = await getImageUrl(myImage.id);
  await user.save();
  return myImage;
};

const addNotification = async (id, notification) => {
  const { error } = notificationSchema.validate(notification);
  if (error) throw new APIError({ message: error.message, status: httpStatus.BAD_REQUEST });
  const user = await User.findById(id);
  if (!user) throw new APIError({ message: 'User not found', status: httpStatus.NOT_FOUND });
  user.notifications.push(notification);
  await user.save();
  return user;
};

const createSuggestedProposal = async (userId, { bonus }) => {
  const user = await User.findById(userId);
  user.suggestedProposal = { approved: false, bonus, votes: [] };
  await user.save();
  return user;
};

const addVoteSuggestedBonus = async (id, { vote }) => {
  const user = await User.findById(id);
  user.suggestedProposal.votes.push({ userId: id, vote });
  await user.save();
  return user;
};

module.exports.userService = {
  register,
  login,
  get,
  getAll,
  update,
  addWallet,
  uploadPicture,
  getImageUrl,
  addNotification,
  createSuggestedProposal,
  addVoteSuggestedBonus,
};
