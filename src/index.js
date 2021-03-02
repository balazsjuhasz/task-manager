const express = require('express');

// Connect to DB (run file)
require('./db/mongoose');

// import routes
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down. Check back soon!');
// });

// Auto parse incoming json to object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Listen on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('603bf5ac24145439a52726b8');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);
  // const user = await User.findById('603bf4f383bc3b37f2af31fa');
  // await user.populate('tasks').execPopulate();
  // console.log(user.tasks);
};

main();
