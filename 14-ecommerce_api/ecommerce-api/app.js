const express = require('express');
require('dotenv').config();
// Database
const connectDB = require('./db/connect');

const app = express();

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI);

    app.listen(port, console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
