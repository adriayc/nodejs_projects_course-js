const express = require('express');
require('dotenv').config();
require('express-async-errors');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// Controllers
const sendEmail = require('./controllers/sendEmail');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">Send Email</a>');
});

app.get('/send', sendEmail);

// Call custom middleware
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
