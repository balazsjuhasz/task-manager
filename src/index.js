const express = require('express');

// Connect to DB (run file)
require('./db/mongoose');

// import routes
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// Auto parse incoming json to object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Listen on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const bcrypt = require('bcryptjs');

const myFunction = async () => {
  const password = 'Red12345!';
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('red12345!', hashedPassword);
  console.log(isMatch);
};

myFunction();
