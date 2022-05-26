require('dotenv').config();

module.exports = {
  mongoUrl: process.env.MONGO_URL,
  port: +process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  imgBucket: 'photos',
  database: 'mydb',
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
};
