const express = require('express');
// Routers
const routes = require('./routes/tasks');
// Connect MongoDB
const connectDB = require('./db/connect');
// DotEnv
require('dotenv').config();

const app = express();

// Static (Front-End)
app.use(express.static('./public'));

// Middleware
app.use(express.json());

// app.get('/api/v1/tasks');            - get all the tasks
// app.post('/api/v1/tasks');           - create a new task
// app.get('/api/v1/tasks/:id');        - get single task
// app.patch('/api/v1/tasks/:id');      - update task
// app.delete('/api/v1/tasks/:id');     - delete task

// Routes
app.use('/api/v1/tasks', routes);

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
