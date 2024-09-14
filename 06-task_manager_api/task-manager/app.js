const express = require('express');
// Routers
const routes = require('./routes/tasks');
// Connect MongoDB
const connectDB = require('./db/connect');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

// app.get('/api/v1/tasks');            - get all the tasks
// app.post('/api/v1/tasks');           - create a new task
// app.get('/api/v1/tasks/:id');        - get single task
// app.patch('/api/v1/tasks/:id');      - update task
// app.delete('/api/v1/tasks/:id');     - delete task

app.use('/api/v1/tasks', routes);

const port = 3000;

const start = async () => {
  try {
    // Connect DB
    await connectDB();
    // Listen port
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
