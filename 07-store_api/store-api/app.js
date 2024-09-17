require('dotenv').config();
const express = require('express');
// Connect DB (MongoDB)
const connectedDB = require('./db/connect');
// Routers
const productsRouter = require('./routes/products');
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>');
});

app.use('/api/v1/products', productsRouter);

// Product route

// Not found and Error handler (Middlewares)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // ConnectDB
    await connectedDB(process.env.MONGO_URI);

    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
