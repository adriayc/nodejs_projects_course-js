const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    // Error: Deprecated or Is not supported
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
