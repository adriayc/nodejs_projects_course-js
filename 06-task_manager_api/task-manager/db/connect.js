const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://{{DB_USER}}:{{DB_PASSWORD}}@taskmanagercluster.c64pr.mongodb.net/{{DB_NAME}}?retryWrites=true&w=majority&appName=TaskManagerCluster';

mongoose
  .connect(connectionString, {
    // useNewUrlParser: true, // Error: deprecated
    // useCreateIndex: true, // Error: is not supported
    // useFindAndModify: false, // Error: is not supported
    // useUnifiedTopology: true, // Error: deprecated
  })
  .then(() => console.log('Connected to the DB...'))
  .catch((err) => console.log(err));
