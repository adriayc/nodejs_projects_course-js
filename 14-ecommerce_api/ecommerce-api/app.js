const express = require('express');
require('dotenv').config();
require('express-async-errors');
// Database
const connectDB = require('./db/connect');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// Call middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('E-commerce API');
});

// Call custom middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
