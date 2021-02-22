const express = require('express');

// Connect to DB (run file)
require('./db/mongoose');

const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

// Auto parse incoming json to object
app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => res.send(user))
    .catch((e) => res.status(400).send(e));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
