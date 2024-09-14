// Connect MongoDB
require('./db/connect');
const express = require('express');
// Routers
const routes = require('./routes/tasks');

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

app.listen(port, console.log(`Server is listening on port ${port}...`));
