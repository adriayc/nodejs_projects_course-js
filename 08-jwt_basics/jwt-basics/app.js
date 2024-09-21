const express = require('express');
require('dotenv').config();
require('express-async-errors');
// Routes
const mainRouter = require('./routes/main');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, () =>
      console.log(`Sever is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
