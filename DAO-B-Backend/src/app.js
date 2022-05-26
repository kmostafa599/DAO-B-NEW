const express = require('express');
require('express-async-errors');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { port } = require('./config/vars');
const { errorHandler } = require('./middlewares/error');
const router = require('./routes');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api/v1', router);

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`App listening on port ${port}`);
});
