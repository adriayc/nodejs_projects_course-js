const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://{{DB_USER}}:{{DB_PASSWORD}}@taskmanagercluster.c64pr.mongodb.net/{{DB_NAME}}?retryWrites=true&w=majority&appName=TaskManagerCluster';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    // useNewUrlParser: true, // Error: deprecated
    // useCreateIndex: true, // Error: is not supported
    // useFindAndModify: false, // Error: is not supported
    // useUnifiedTopology: true, // Error: deprecated
  });
};

module.exports = connectDB;
