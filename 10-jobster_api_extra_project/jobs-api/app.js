const express = require('express');
require('dotenv').config();
require('express-async-errors');
// Extra security packages
const helmet = require('helmet');
const cors = require('cors');
const { xss } = require('express-xss-sanitizer');
const { rateLimit } = require('express-rate-limit');
// Swagger (Docs)
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
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

// Extra security
app.set('trust proxy', 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    // standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    // legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  })
);
// Middlewares
app.use(express.json());
// Extra security
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', (req, res) => {
  res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

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
