const express = require('express');
require('dotenv').config();
require('express-async-errors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
// Security packages
const cors = require('cors');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const { xss } = require('express-xss-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');
// DB
const connectDB = require('./db/connect');
// Routes
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// Call middlewares (Security)
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 60,
  })
);
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cors());
// Call middlewares
app.use(express.json()); // Parsing incoming requests with JSON payload (POST, PUT, or PATCH requests)
app.use(cookieParser(process.env.JWT_SECRET));
app.use(morgan('tiny'));
app.use(express.static('./public'));

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

// Call custom middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URL);
    // Listen port
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
