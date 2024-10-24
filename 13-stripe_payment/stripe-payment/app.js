const express = require('express');
require('dotenv').config();
require('express-async-errors');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// Controllers
const stripeController = require('./controllers/stripeController');

const app = express();

// Call middleware
app.use(express.json());
app.use(express.static('./public'));

// Call routers
app.post('/stripe', stripeController);

// Call custom middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
