const mongoose = require('mongoose');

const connectionURL = process.env.MONGODB_URL;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(connectionURL, connectionOptions);
