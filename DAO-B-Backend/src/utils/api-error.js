const httpStatus = require('http-status');

class APIError extends Error {
  constructor({ message, status = httpStatus.INTERNAL_SERVER_ERROR }) {
    super(message);
    this.status = status;
    this.additionnalInfo = message;
  }
}

module.exports = APIError;
