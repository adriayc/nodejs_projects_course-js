const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    // useNewUrlParser: true, // Error: deprecated
    // useCreateIndex: true, // Error: is not supported
    // useFindAndModify: false, // Error: is not supported
    // useUnifiedTopology: true, // Error: deprecated
  });
};

module.exports = connectDB;
