const express = require('express');
require('dotenv').config();
require('express-async-errors');
const path = require('path');
// Extra security packages
const helmet = require('helmet');
const { xss } = require('express-xss-sanitizer');
// Connect DB
const connectDB = require('./db/connect');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticateUser = require('./middleware/authentication');
// Routes
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

const app = express();

// Middlewares
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());
// Extra security
app.use(helmet());
app.use(xss());

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

// Serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// Others middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
