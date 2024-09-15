const express = require('express');
// Routers
const routes = require('./routes/tasks');
// Connect MongoDB
const connectDB = require('./db/connect');
// DotEnv
require('dotenv').config();
// Middlewares
const notFound = require('./middleware/not-found');

const app = express();

// Static (Front-End)
app.use(express.static('./public'));

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/tasks', routes);

// Not found (Route)
app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI);
    // Listen port
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
