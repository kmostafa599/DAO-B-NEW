const httpStatus = require('http-status');
const APIError = require('../utils/api-error');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let error = err;
  if (!(err instanceof APIError)) {
    error = new APIError({ message: err.message, status: httpStatus.INTERNAL_SERVER_ERROR });
  }
  res.status(error.status).send(error);
};

module.exports = { errorHandler };
