const express = require('express');

// Connect to DB (run file)
require('./db/mongoose');

// import routes
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// Auto parse incoming json to object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Listen on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
