const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    // Error: Deprecated or Is not supported
    // useNewUrlParse: true,
    // useCreateIndex: true,
    // useFindANdModify: false,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
