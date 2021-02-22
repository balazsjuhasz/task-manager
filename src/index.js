const express = require('express');

// Connect to DB (run file)
require('./db/mongoose');

const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

// Auto parse incoming json to object
app.use(express.json());

// Handle users
app.post('/users', (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((e) => res.status(400).send(e));
});

// Handle Tasks
app.post('/tasks', (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => res.status(201).send(task))
    .catch((e) => res.status(400).send(e));
});

// Listen on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
