const mongoose = require('mongoose');
const { mongoUrl, mongoUser, mongoPassword } = require('./vars');

mongoose.connect(`mongodb+srv://test:rydvbLyRUYD7creL@cluster0.yn810.mongodb.net/sample_restaurants?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
