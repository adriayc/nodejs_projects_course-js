const express = require('express');
require('dotenv').config();
require('express-async-errors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// Database
const connectDB = require('./db/connect');
// Routers
const authRouter = require('./routes/authRoutes');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// Call middleware
app.use(morgan('tiny')); // HTTP request logger
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// Routes
app.get('/', (req, res) => {
  res.send('E-commerce API');
});
app.get('/api/v1', (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
  res.send('E-commerce API with Cookies');
});

app.use('/api/v1/auth', authRouter);

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
